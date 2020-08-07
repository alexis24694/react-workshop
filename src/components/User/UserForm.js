import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomInput from '../../controls/CustomInput/CustomInput'

const UserForm = (props) => {
    const { currentUser, nameForm, cancelCallback } = props;
    const [user, setUser] = useState(currentUser);
    const history = useHistory();
    const handleUserName = (event) => {
        if (event.target.value) {
            user.userName = event.target.value;
        } else {
            user.userName = '';
        }
        setUser(user);
    }
    const handleFirstName = (event) => {
        if (event.target.value) {
            user.firstName = event.target.value;
        } else {
            user.firstName = '';
        }
        setUser(user);
    } //setFirstName(event.target.value);
    const handleLastName = (event) => {
        if (event.target.value) {
            user.lastName = event.target.value;
        } else {
            user.lastName = '';
        }
        setUser(user);
    } //setLastName(event.target.value);
    const handleEmail = (event) => {
        if (event.target.value) {
            user.email = event.target.value;
        } else {
            user.email = '';
        }
        setUser(user);
    } //setEmail(event.target.value);
    const handleCountry = (event) => {
        if (event.target.value) {
            user.country = event.target.value;
        } else {
            user.country = '';
        }
        setUser(user);
    } //setCountry(event.target.value);
    const handleZipCode = (event) => {
        if (event.target.value) {
            user.zipCode = event.target.value;
        } else {
            user.zipCode = '';
        }
        setUser(user);
    } //setZipCode(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validFields()){
            const userModel = {
                id: currentUser.id,
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                country: user.country,
                zipCode: user.zipCode,
                telephone: currentUser.telephone
            }
            props.submitCallback(userModel);
        }
        else {
            alert("Complete la información requerida");
        }
    }

    const cancelAction = (event) => {
        event.preventDefault();
        cancelCallback();
        history.goBack();
    }

    const validFields = () => {
        return  (user.userName !== "" &&
            user.firstName !== "" &&
            user.lastName !== "" &&
            user.country !== "" &&
            user.zipCode !== "");
    }

    return (
        <div className="container">
            <div className="py-5 text-center">
                <h2>{nameForm}</h2>
            </div>
            <div className="col-md-8 order-md-1">
                <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <CustomInput id="userName" 
                            label="Nombre de usuario" 
                            defaultValue={currentUser.userName} 
                            placeholder="Usuario" 
                            onChange={handleUserName} 
                            show_prepend="true"/>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <CustomInput id="firstName" 
                                label="Nombres" 
                                defaultValue={currentUser.firstName} 
                                onChange={handleFirstName}
                                isMandatory="true"
                                validationMessage="Nombre es requerido."/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <CustomInput id="lastName" 
                                label="Apellidos" 
                                defaultValue={currentUser.lastName} 
                                onChange={handleLastName}
                                isMandatory="true"
                                validationMessage="Apellido es requerido."/>
                        </div>
                    </div>

                    <div className="mb-3">
                        <CustomInput id="email" 
                            isEmail="true"
                            label="Email" 
                            defaultValue={currentUser.email} 
                            onChange={handleEmail}
                            validationMessage="Por favor ingrese un email válido."/>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-6">
                            <label htmlFor="country">País</label>
                            <select className="custom-select d-block w-100"
                                id="country"
                                onChange={handleCountry}
                                defaultValue={currentUser.country}
                                required>
                                    <option value="">Seleccione...</option>
                                    <option value="Perú">Perú</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Chile">Chile</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div className="col-md-6 mb-6">
                            <CustomInput id="zipCode" 
                                label="Zip" 
                                defaultValue={currentUser.zipCode} 
                                onChange={handleZipCode}
                                isMandatory="true"
                                validationMessage="Zip code es requerido."/>
                        </div>
                    </div>

                    <hr className="mb-4"/>

                    <button className="btn btn-primary mr-1" type="submit">Grabar</button>
                    <button className="btn btn-secondary" onClick={cancelAction}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default UserForm;
