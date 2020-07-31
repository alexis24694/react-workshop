import React, { useState } from 'react';
import ListGrid from './ListGrid';
import './List.css';

import { searchUsers, deleteUser } from '../../services/UserService';

function List() {
    const [users, setUsers] = useState([]);
    const [text, setText] = useState("");

    const onChangeCriteria = (e) => {
      setText(e.target.value);
    }

    const handleSearch = (event) => {
      event.preventDefault();
      doSearchUsers();
    }

    const doSearchUsers = () => {
      searchUsers(text).then(data => setUsers(data));
    }

    const handleDeleteCallback = (userId) => {
      let yes = window.confirm("Seguro de eliminar el Usuario?");
      if (yes) {
        deleteUser(userId).then(response => {
          console.log(response.ok);
          if (response.ok) {
            doSearchUsers();
          }
        });
      }
    }

    return (
        <div className="container">
          <div className="py-4 text-center">
              <h2>Listado con Búsqueda</h2>
          </div>

          <div className="mt-2 mb-6 py-4">
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2 col-10" type="text" placeholder="Buscar" aria-label="Buscar" onChange={onChangeCriteria}/>
              <button className="btn btn-outline-secondary my-2 my-sm-0 ml-1" type="submit" onClick={handleSearch}>Buscar</button>
            </form>
          </div>

          <div className="table-responsive">
            <ListGrid users={users} deleteUserCallback={handleDeleteCallback} />
          </div>
        </div>
    );
}

export default List;