import React from 'react';
import './App.css';
import Nav from './components/Nav/nav';
import User from './components/User/user';
import List from './components/List/list';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />    
        <Switch>
            <Route path="/user" exact component={User} />
            <Route path="/search" component={List} />
          </Switch>          
      </div>
    </Router>
  );
}

export default App;
