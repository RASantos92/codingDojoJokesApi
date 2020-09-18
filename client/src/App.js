import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Router} from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <div className="d-flex justify-content-between col-4 mx-auto">
        <Link to="/new" className="btn btn-info btn-outline-dark">Add pet</Link>
        <Link to="/" className="btn btn-info btn-outline-dark">Home</Link>
      </div>
      <Router>
        <Main path="/" />
        <New path="/new" />
        <Show path="/pet/:id"/> 
        <Edit path="/edit/:id"/> 
      </Router>
      
    </div>
  );
}

export default App;
