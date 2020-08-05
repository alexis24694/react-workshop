import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import UserForm from './UserForm';
import { useParams } from 'react-router-dom';
import { getUser, editUser, cleanReponse } from '../../redux/actions/userActions';

const UserUpdate = (props) => {

    const { user, response, getUser: getUserById, editUser: updateUser, cleanReponse: erase } = props
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        getUserById(params.id)
    }, [getUserById, params.id]);

    useEffect(() => {
        console.log(response);
        if (response) {
            if (response.ok) {
                alert("Usuario se actualizó exitosamente.");
                erase();
                history.goBack();
            }
        }
    });
    
    const handleSubmitCallback = (userResponse) => {
        console.log(userResponse);
        updateUser(userResponse);
    }

    if (user.userName)
        return (
            <UserForm currentUser={user} submitCallback={handleSubmitCallback} nameForm="Editar Usuario"/>
        );
    return null;
}

const mapStateToProps = state => ({
    user: state.UserReducers.user,
    response: state.UserReducers.userResponse
})

export default connect(mapStateToProps, { getUser, editUser, cleanReponse })(UserUpdate);
