import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/"><img class="mb-4" src="https://baufest.com/templates/yootheme/cache/Logo-Baufest-blanco-8a9bc5a5.png" alt=""/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <Link to="/user" >
            <li className="nav-link">Usuarios</li>
          </Link>            
          <Link to="/search" >
            <li className="nav-link">Búsqueda</li>
          </Link>            
        </ul>
      </div>
    </nav>
  );
}

export default Nav;