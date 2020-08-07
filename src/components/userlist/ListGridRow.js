import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

function ListGridRow(props) {

    function onDeleteCLick() {
        props.deleteUserCallback(props.user.id);
    }

    return (
        <tr>
          <td>{props.user.userName}</td>
          <td>{props.user.firstName}</td>
          <td>{props.user.lastName}</td>
          <td>{props.user.email}</td>
          <td>
            <span style={{marginLeft: "8px"}}>
                <button className="btn btn-link btn-sm"><Link to={`/user-update/${props.user.id}`}>Editar</Link></button>
            </span>
          </td>
          <td>
            <span title="Eliminar">
              <button className="btn btn-link btn-sm" onClick={onDeleteCLick} style={{cursor: 'pointer'}}>Delete</button>
            </span>
          </td>
        </tr>
    );
}

export default ListGridRow;
