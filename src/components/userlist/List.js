import React, { useState, useEffect } from 'react';
import ListGrid from './ListGrid';
import './List.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { findUsers, removeUser, cleanReponse } from '../../redux/actions/userActions';

// import { searchUsers, deleteUser } from '../../services/UserService';

const List = (props) => {
    const { users, response, findUsers: search, removeUser: deleteUser, cleanReponse: erase } = props;
    const [text, setText] = useState("");
    useEffect(() => {
      if (response) {
        if (response.ok) {
          erase();
          doSearchUsers();
        }
      }
    })

    const onChangeCriteria = (e) => {
      	setText(e.target.value);
    }

    const handleSearch = (event) => {
		event.preventDefault();
		doSearchUsers();
	}

    const doSearchUsers = () => {
		search(text);
    }

    const handleDeleteCallback = (userId) => {
      let yes = window.confirm("Seguro de eliminar el Usuario?");
      if (yes) {
        deleteUser(userId);
      }
    }

    return (
        <div className="container">
          <div className="py-4 text-center">
              <h2>Listado de Usuarios</h2>
          </div>

          <div className="mt-2 mb-6 py-4">
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2 col-9" type="text" placeholder="Buscar" aria-label="Buscar" onChange={onChangeCriteria}/>
              <button className="btn btn-outline-secondary my-2 my-sm-0 ml-1" type="submit" onClick={handleSearch}>Buscar</button>
              <Link to='/user-create'><button className="btn btn-outline-primary my-2 my-sm-0 ml-1">Crear</button></Link>
            </form>
          </div>

          <div className="table-responsive">
            <ListGrid users={users} deleteUserCallback={handleDeleteCallback} />
          </div>
        </div>
    );
}

const mapStateToProps = state => ({
  users: state.UserReducers.users,
  response: state.UserReducers.userResponse
})

export default connect(mapStateToProps, { findUsers, removeUser, cleanReponse })(List);