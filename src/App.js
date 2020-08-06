import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import UserCreate from './components/user/UserCreate';
import UserUpdate from './components/user/UserUpdate';
import List from './components/list/List';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route path="/search">
              <List />
            </Route>
            <Route path="/user-create" match >
                <UserCreate />
              </Route>
            <Route path="/user-update/:id" match >
              <UserUpdate />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
