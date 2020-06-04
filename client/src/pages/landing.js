// import React, {useState, useEffect} from "react";
import React from "react";
<<<<<<< HEAD
import FormBasic from "../components/FormBaisc/FormBasic";
import SearchApp from '../components/Search/algoliaSearch';
import {Header} from "semantic-ui-react";
import "./index.css";


function Landing (){
  return(
    <Header> 
    <FormBasic/>
      Seach bar
    <SearchApp />
    </Header> 
  )

  }
=======
import { Link } from "react-router-dom";
// import Axios from "axios";
// import { Form, Input, Button, Segment, Grid ,Header} from "semantic-ui-react";
// import "./index.css";


const Landing =  () => {
  return (
  <div>
  <h1>This is Landing</h1>
  {/* <h2>User: {user}</h2> */}
  <Link to={"/login"}>
  <div className="links">Log In</div>
  </Link>
  </div>
  );
};
>>>>>>> e9b8c244bcd20ef69fdb6b31fd22d093f8688e65

export default Landing;