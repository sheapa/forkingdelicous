/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';
import User from './pages/user';
import Credits from './pages/credits';
import RecipeCreate from './pages/recipeCreate';
import RecipeDisplay from './pages/recipeDisplay';

// // Check for token
// if (localStorage.jwtToken) {
//   setAuthToken(localStorage.jwtToken);
//   const decoded = jwt_decode(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(decoded));
//   // check for expired token
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     store.dispatch(clearCurrentProfile());
//     window.location.href = "/login";
//   }
// }

export const ConfigContext = React.createContext();

const configValue = {
  isLoggedIn: false,
};

const App = ({ userInfo }) => {
  configValue.loggedInUserusername = userInfo ? userInfo.username : '';
  return (
    <Router>
      <ConfigContext.Provider value={configValue}>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/recipeDisplay' component={RecipeDisplay} />
        <Route exact path='/recipeCreate' component={RecipeCreate} />
        <Route exact path='/user' component={User} />
        <Route exact path='/credits' component={Credits} />
      </ConfigContext.Provider>
    </Router>
  );
};

export default App;
