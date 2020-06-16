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

// const pageToShow = (pageName) => {
  //   if (pageName === "Landing") return <Landing />;
  // if (pageName === 'Register') return <Register />;
  // if (pageName === 'Login') return <Login />;
  //   if (pageName === "User") return <User />;
// };

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
        {/* code below may need to be directed to RecipeInfo component??? */}
        <Route exact path='/recipeDisplay/:recipeId' component={RecipeDisplay} /> 
        <Route exact path='/recipeCreate' component={RecipeCreate} />
        <Route exact path='/user' component={User} />
        <Route exact path='/credits' component={Credits} />
      </ConfigContext.Provider>
    </Router>
  );
};

export default App;
