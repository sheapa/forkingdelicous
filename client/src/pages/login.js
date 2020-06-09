import React, { useState } from "react";
import { Button, Form, Grid, Header, Message, Segment, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import NavigationBar from '../components/Nav/index'
const Login = () => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");


return (

    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          <NavigationBar/>
          Login
        </Header>
        <Segment inverted>
          <Form  action="/api/login" method="POST" size="large">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="username"
              name="username"
              onChange={e => {
                setusername(e.target.value);
              }}
              value={username}
              type="text"
              className="form-control"
              autoComplete="off"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              onChange={e => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                autoComplete="off"
            />

            <Button inverted color='violet' value="submit" fluid size="large">
              Login
            </Button>
          </Form>
        </Segment>
        <Message>
          Not registered yet?
          <Link to={"/register"}>
          <div className="links">Sign Up Now</div>
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
  };

  export default Login 
