import React from "react";
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

export default Landing;