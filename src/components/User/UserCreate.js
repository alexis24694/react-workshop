import React from 'react';
import UserForm from './UserForm'
import { createUser } from '../../services/UserService';

function UserCreate(){

    const handleSubmitCallback = (userModel) => {

        createUser(userModel).then(
            response => {
                if (response.ok) {
                    alert("Usuario se registro exitosamente.");
                }
            });
    }

    const user = {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        zipCode: ""
    };

    return (
        <UserForm user={user} submitCallback={handleSubmitCallback} />
    );

}

export default UserCreate;
