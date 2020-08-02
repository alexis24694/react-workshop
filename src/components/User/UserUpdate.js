import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import { useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../../services/UserService';

const UserUpdate = () => {

    const params = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        getUserById(params.id).then(data => {
            setUser(data);
        })
    }, [params.id]);

    const handleSubmitCallback = (userModel) => {
        updateUser(userModel).then(
            response => {
                if (response.ok) {
                    alert("Usuario se actualizó exitosamente.");
                }
            });
    }

    return (
        user ? <UserForm user={user} submitCallback={handleSubmitCallback} /> : null
    );

}

export default UserUpdate;
