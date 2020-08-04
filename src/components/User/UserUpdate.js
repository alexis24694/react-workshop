import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import UserForm from './UserForm';
import { useParams } from 'react-router-dom';
import { getUser, editUser } from '../../redux/actions/userActions';

const UserUpdate = (props) => {

    const { user, userResponse: response, getUser: getUserById, editUser: updateUser } = props
    const params = useParams();

    const [currentUser, setUser] = useState({});

    useEffect(() => {
        if (user) {
            getUserById(params.id)
        }
        
        setUser(user);
        return () => setUser([]);
    }, [user, getUserById, params.id]);

    if (response) {
        if (response.ok) {
            alert("Usuario se actualizó exitosamente.");
        }
    }

    const handleSubmitCallback = (userModel) => {
        updateUser(userModel);
    }

    return (
        currentUser ? <UserForm user={currentUser} submitCallback={handleSubmitCallback} /> : null
    );
}

const mapStateToProps = state => ({
    user: state.UserReducers.user,
    response: state.UserReducers.userResponse
})

export default connect(mapStateToProps, { getUser, editUser })(UserUpdate);
