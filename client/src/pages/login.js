import React, { useState, useEffect, useContext } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { Link } from 'react-router-dom';
import { ConfigContext } from '../App';

const Login = ({ signupCallback }) => {
  useEffect(() => {
    //console.log(`SignMeUp:useEffect called`);
  });

  const [username, setusername] = useState();
  // const [emailValid, setEmailValid] = useState(false);
  const [sendProcessing, setSendProcessing] = useState(false);

  const context = useContext(ConfigContext);

  // function validateEmail(email) {
  //   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }

  const notify = () => {
    toast.info(`You will be notified of upcoming events ${username}`);
  };

  function sendusernameToBackend() {
    setSendProcessing(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        setSendProcessing(false);
        setusername('');
        resolve();
      }, 1000);
    }).then(() => {
      notify();
      signupCallback(username);
      setusername('');
    });
  }

  const buttonText = sendProcessing ? 'processing...' : 'Get Updates';

  //console.log("src/LogMeIn called");

  if (context.loggedInUserusername) {
    return (
      <div className='container'>
        <div className='content'>
          <span>Logged in User username: {context.loggedInUserusername}</span>
          &nbsp;&nbsp;
          <a href='/logout'>Logout</a>
        </div>
      </div>
    );
  }

  return context.showSignMeUp === false ? null : (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600 }}>
        <Image
          src='https://live.staticflickr.com/65535/49986191503_43be3abc1e.jpg'
          size='large'
          centered
        />
        <Header as='h2' textAlign='center'>
          Login for Forking Delicious Recipes
        </Header>
        <Segment stacked style={{ background: '#726f79' }}>
          <Form action='/register' method='POST' size='large'>
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
                // setPassword(e.target.value);
              }}
              //   value={password}
              type='password'
              name='password'
              placeholder='Password'
              autoComplete='off'
            />

            <Button
              style={{ background: '#7d7d74', color: '#f6f7f5' }}
              value='submit'
              fluid
              size='large'
            >
              Log Me In
            </Button>
          </Form>

          <Message size='small'>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
export default Login;
