// import React, {useState, useEffect} from "react";
import React from "react";
import FormBasic from "../components/FormBasic/FormBasic";
import SearchApp from '../components/Search/algoliaSearch';
import { Header } from "semantic-ui-react";
import "./index.css";


function Landing() {
  return (
    <Header>
      <FormBasic />
      Search bar
      <SearchApp />
    </Header>
  )

}

export default Landing;