import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
  } from 'semantic-ui-react';
import './index.css';

const Register = () => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
  
  
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
            <Form action='/api/create' method='POST' size='large'>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='username'
                name='username'
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                value={username}
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
              Already have an account?  <Link to={"/login"}>Login</Link>
            </Message>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  };
export default Register;
