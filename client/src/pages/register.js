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
    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
  
  
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
            <Form action='/api/register' method='POST' size='large'>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='create a user name.'
                name='userName'
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
                value={userName}
                autoComplete='off'
              />
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
                  setPassword(e.target.value);
                }}
                  value={password}
                type='password'
                name='password'
                placeholder='password'
                autoComplete='off'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
                  value={password2}
                type='password'
                name='password2'
                placeholder='verify password'
                autoComplete='off'
              />
  
              <Button color='#36393e' value='submit' fluid size='large'>
                sign me up!
              </Button>
            </Form>
  
            <Message>
              already have an account?  <Link to={"/login"}>login</Link>
            </Message>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  };
export default Register;
