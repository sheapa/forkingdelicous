// import React, { useState, useEffect, useContext } from 'react';
// import { Button, Form, Grid, Image, Header, Segment } from 'semantic-ui-react';
// import { toast } from 'react-toastify';
// // import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './index.css';
// // import { Link } from 'react-router-dom';
// import { ConfigContext } from '../App';

// const Register = ({ signupCallback }) => {
//   useEffect(() => {
//     //console.log(`SignMeUp:useEffect called`);
//   });

//   const [username, setusername] = useState();
//   // const [emailValid, setEmailValid] = useState(false);
//   const [sendProcessing, setSendProcessing] = useState(false);

//   const context = useContext(ConfigContext);

//   // function validateEmail(email) {
//   //   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   //   return re.test(email);
//   // }

//   const notify = () => {
//     toast.info(`You will be notified of upcoming events ${username}`);
//   };

//   // function sendusernameToBackend() {
//   //   setSendProcessing(true);
//   //   new Promise(function (resolve) {
//   //     setTimeout(function () {
//   //       setSendProcessing(false);
//   //       setusername('');
//   //       resolve();
//   //     }, 1000);
//   //   }).then(() => {
//   //     notify();
//   //     signupCallback(username);
//   //     setusername('');
//   //   });
//   // }

//   // const buttonText = sendProcessing ? 'processing...' : 'Get Updates';

//   //console.log("src/SignMeUp called");

//   if (context.loggedInUserusername) {
//     return (
//       <div className='container'>
//         <div className='content'>
//           <span>Logged in User username: {context.loggedInUserusername}</span>
//           &nbsp;&nbsp;
//           <a href='/logout'>Logout</a>
//         </div>
//       </div>
//     );
//   }

//   return context.showSignMeUp === false ? null : (
//     <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//       <Grid.Column style={{ maxWidth: 600 }}>
//         <Image
//           src='https://live.staticflickr.com/65535/49986191503_43be3abc1e.jpg'
//           size='large'
//         />
//         <Header as='h2' textAlign='center'>
//           Sign Up for Forking Delicious Recipes
//         </Header>
//         <Segment>
//           <Form action='/register' method='POST' size='large'>
//             <Form.Input
//               fluid
//               icon='user'
//               iconPosition='left'
//               placeholder='username'
//               name='username'
//               onChange={(e) => {
//                 setusername(e.target.value);
//               }}
//               value={username}
//               autoComplete='off'
//             />
//             <Form.Input
//               fluid
//               icon='lock'
//               iconPosition='left'
//               onChange={(e) => {
//                 console.log('space for password');
//                 // setPassword(e.target.value);
//               }}
//               //   value={password}
//               type='password'
//               name='password'
//               placeholder='Password'
//               autoComplete='off'
//             />
//             <Button color='#726F79' value='submit' fluid size='large'>
//               Sign Me Up
//             </Button>
//           </Form>
//         </Segment>
//       </Grid.Column>
//     </Grid>
//   );
// };
// export default Register;
