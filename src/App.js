import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Login from './components/Login';
import Signup from './components/Signup'


import './App.css';
import '../node_modules/bulma/css/bulma.min.css';


function App() {
  return (
    <div className="app">
      <header className="py-5">
        <h1 className="title is-2 has-text-white">Water My Plants 🌱</h1>
      </header>
      <div className="container mt-6">
        <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/settings" component={Settings} />
        </Router>
      </div>
    </div>
  );
}

export default App;