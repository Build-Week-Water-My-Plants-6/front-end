import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from "./components/Login"


import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Login from './components/Login';


import './App.css';
import '../node_modules/bulma/css/bulma.min.css';


function App() {
  return (
    <div className="app">
      <header className="py-5">
        <h1 className="title is-2 has-text-white">Water My Plants 🌱</h1>
      </header>
      <div className="container mt-6">

        {/* Login Component needs form state management */}
        {/* Signup */}
        {/* Settings page (Users can update their phone number & password) */}

        <Router>
        <Route exact path="/Login" component={Login}/>
          {/* I'll setup our routes here after we get closer to finishing our components */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/login" component={Login} />
        </Router>
      </div>
    </div>
  );
}

export default App;