import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import '../node_modules/bulma/css/bulma.min.css';

function App() {
  return (
    <div className="app">
      <header className="py-5">
        <h1 className="title is-2 has-text-white">Water My Plants 🌱</h1>
      </header>
      <div className="container mt-6">
        {/* Signup */}
        {/* Login */}
        {/* Dashboard */}

        <Router>
          {/* Private Route */}
        </Router>
      </div>
    </div>
  );
}

export default App;