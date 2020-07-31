import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import User from './components/user/User';
import List from './components/list/List';
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
