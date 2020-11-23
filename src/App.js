import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { logout } from './api/logout';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Settings from './components/Settings';

import './App.css';
import '../node_modules/bulma/css/bulma.min.css';

function App() {
  let isLoggedIn = localStorage.getItem('token') ? true : false;

  return (
    <div className="app">
      <header className="py-5">
          <h1 className="title is-2 has-text-white">Water My Plants 🌱</h1>
      </header>
      <div className="container mt-6">
        <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/settings" component={Settings} />
        </Router>
        {isLoggedIn &&
            <div className="has-text-centered has-text-white mt-5">
              <button className="button" onClick={() => logout()}>Logout</button>
            </div>
        }
      </div>
    </div>
  );
}

export default App;