import React, { useEffect } from 'react';
import UserForm from './UserForm'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { addUser, cleanReponse, cleanUser } from '../../redux/actions/userActions';

const UserCreate = (props) => {
    const { response, addUser: createUser, cleanReponse: erase, cleanUser: cancel } = props;
    const history = useHistory();
    useEffect(() => {
        if (response) {
            if (response.ok) {
                alert("Usuario se registro exitosamente.");
                erase();
                history.goBack();
            }
        }
    })
    const handleSubmitCallback = (userModel) => {
        createUser(userModel);
    }

    const user = {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        zipCode: "",
        telephone: ""
    };

    return (
        <UserForm currentUser={user} submitCallback={handleSubmitCallback} cancelCallback={cancel} nameForm="Registrar Usuario"/>
    );
}

const mapStateToProps = state => ({
    response: state.UserReducers.userResponse
});

export default connect(mapStateToProps, { addUser, cleanReponse, cleanUser })(UserCreate);
