import React from 'react';
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
          <td>{props.user.telephone}</td>
          <td>{props.user.email}</td>
          <td>
            <span title="Eliminar">
              <button type="button" className="close" aria-label="Close" onClick={onDeleteCLick} >
                <span aria-hidden="true">&times;</span>
              </button>
            </span>
          </td>
        </tr>
    );
}

export default ListGridRow;