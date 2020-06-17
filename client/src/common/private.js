import React, {useContext } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { authContext } from "../App";

const PrivateRoute = ({ component: Component, ...rest }) => {
   const auth = useContext(authContext)
  return (
    <Route
    {...rest}
    render={props =>
        auth === "authorized" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
  )
};


export default PrivateRoute;
