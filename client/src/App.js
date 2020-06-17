/* eslint-disable react/prefer-stateless-function */
import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './common/private'
// import jwt_decode from 'jwt-decode';

// Pages 
import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';
import User from './pages/user';
import Credits from './pages/credits';
import RecipeCreate from './pages/recipeCreate';
import RecipeDisplay from './pages/recipeDisplay';
import NotFound from './pages/NotFound';


export const authContext = React.createContext();


const App = () => {
  const [auth, setAuth] = useState("unauthorized");
   // Check for token
      if (auth !== "authorized" && localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        setAuth("authorized");
        // const decoded = jwt_decode(localStorage.jwtToken);
        // store.dispatch(setCurrentUser(decoded));
        // check for expired token
        // const currentTime = Date.now() / 1000;
        // if (decoded.exp < currentTime) {
          // store.dispatch(logoutUser());
          // store.dispatch(clearCurrentProfile());
          // }
        }else {
          // window.location.href = "/";
      };
   return (
    <Router>
      <authContext.Provider value={auth}>
        <Route exact path='/' component={Landing} />
        <Route exact path='/credits' component={Credits} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/not-found' component={NotFound} />
        <Route exact path='/login' render={(props)=>(
          <Login {...props} setAuth={setAuth} /> 
          )}/>
        {/* code below may need to be directed to RecipeInfo component??? */}
        <PrivateRoute exact path='/recipeDisplay/:recipeId' component={RecipeDisplay} /> 
        <PrivateRoute exact path='/landing' component={Landing} />
        <PrivateRoute exact path='/recipeDisplay/' component={RecipeDisplay} /> 
        <PrivateRoute exact path='/recipeCreate' component={RecipeCreate} />
        <PrivateRoute exact path='/user' component={User} />
      </authContext.Provider>
    </Router>
  );
};

export default App;
