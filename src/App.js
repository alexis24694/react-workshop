import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import UserCreate from './components/User/UserCreate';
import UserUpdate from './components/User/UserUpdate';
import List from './components/userlist/List';
import Catalogo from './components/catalogo/Catalogo';
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
            <Route path="/catalogo">
              <Catalogo />
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
