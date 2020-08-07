import React from 'react';
import './List.css';
import ListGridRow from './ListGridRow';

function ListGrid(props) {

    return (
        <table className="table table-striped table-sm table-hover">
            <thead>
                <tr>
                    <th>Nombre Usuario</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user) => {
                        return (
                            <ListGridRow user={user} deleteUserCallback={props.deleteUserCallback} key={user.id} />
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default ListGrid;
