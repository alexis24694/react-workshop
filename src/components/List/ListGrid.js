import React from 'react';
import './List.css';
import ListGridRow from './ListGridRow';

function ListGrid(props) {

    return (
        <table className="table table-striped table-sm table-hover">
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Telephone</th>
                    <th>Email</th>
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
