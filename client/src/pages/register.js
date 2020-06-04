// import React, { useState, useEffect, useContext } from 'react';
// import { Button, Form, Grid, Header, Message, Segment, } from 'semantic-ui-react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link } from "react-router-dom";
// import { ConfigContext } from "./App";

// const SignMeUp = ({ signupCallback }) => {
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

//   function sendusernameToBackend() {
//     setSendProcessing(true);
//     new Promise(function(resolve) {
//       setTimeout(function() {
//         setSendProcessing(false);
//         setusername("");
//         resolve();
//       }, 1000);
//     }).then(() => {
//       notify();
//       signupCallback(username);
//       setusername("");
//     });
//   }

//   const buttonText = sendProcessing ? "processing..." : "Get Updates";

//   //console.log("src/SignMeUp called");

//   if (context.loggedInUserusername) {
//     return (
//       <div className="container">
//         <div className="content">
//           <span>Logged in User username: {context.loggedInUserusername}</span>&nbsp;&nbsp;
//           <a href='/logout' >Logout</a>
//         </div>
//       </div>
//     );
//   }



// return context.showSignMeUp === false ? null : (
//     <Grid centered columns={2}>
//     <Grid.Column>
//       <Header as="h2" textAlign="center">
//         register
//       </Header>
//       <Segment>
//         <Form  action="/register" method="POST" size="large">
//           <Form.Input
//             fluid
//             icon="user"
//             iconPosition="left"
//             placeholder="username"
//             name="username"
//             onChange={e => {
//               setusername(e.target.value);
//             }}
//             value={username}
//             type="text"
//             className="form-control"
//             autoComplete="off"
//           />
//           <Form.Input
//             fluid
//             icon="lock"
//             iconPosition="left"
//             onChange={e => {
//                 setPassword(e.target.value);
//               }}
//               value={password}
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="form-control"
//               autoComplete="off"
//           />

//           <Button color="blue" value="submit" fluid size="large">
//             Login
//           </Button>
//         </Form>
//       </Segment>
//       <Message>
//         Not registered yet?
//         <Link to={"/register"}>
//         <div className="links">Sign Up Now</div>
//         </Link>
//       </Message>
//     </Grid.Column>
//   </Grid>
//   );
// };
// export default Register;