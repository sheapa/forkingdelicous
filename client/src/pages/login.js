import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';
import axios from "axios";
import './index.css';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }
    // this.props.loginUser(user);
    axios
    .post("/api/login", userData)
    .then((res) => {
      // Save to local storage
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      props.setAuth("authorized");
      props.history.push("/landing");
      // Decode token to get user data
      // const decoded = jwt_decode(token);
      // dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      console.log(err)
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // })
    );
  }


  return  (

    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600 }}>
        <Image
          src='https://live.staticflickr.com/65535/49986191503_43be3abc1e.jpg'
          size='large'
        />
        <Header as='h2' textAlign='center'>
          Login for Forking Delicious Recipes
        </Header>
        <Segment stacked>
          <Form onSubmit={onSubmit.bind(this)} size='large'>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='your email'
              name='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              autoComplete='off'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              onChange={(e) => {
                console.log('space for password');
                setPassword(e.target.value);
              }}
                value={password}
              type='password'
              name='password'
              placeholder='Password'
              autoComplete='off'
            />
            <Button color='#36393e' value='submit' fluid size='large'>
              Log Me In
            </Button>
          </Form>

          <Message>
            New to us?  <Link to={"/register"}>Sign Up</Link>
          </Message>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
export default Login;