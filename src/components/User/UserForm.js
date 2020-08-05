import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UserForm = (props) => {
    const { currentUser, nameForm } = props;
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
                        <label htmlFor="userName">Nombre de usuario</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text"
                                className="form-control"
                                id="userName"
                                placeholder="Usuario"
                                defaultValue={currentUser.userName}
                                onChange={handleUserName}
                                required />
                            <div className="invalid-feedback">
                                Nombre de usuario es requerido.
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">Nombres</label>
                            <input type="text"
                                className="form-control"
                                id="firstName"
                                placeholder=""
                                defaultValue={currentUser.firstName}
                                onChange={handleFirstName}
                                required/>
                            <div className="invalid-feedback">
                                Nombre es requerido.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Apellidos</label>
                            <input type="text"
                                className="form-control"
                                id="lastName"
                                placeholder=""
                                defaultValue={currentUser.lastName}
                                onChange={handleLastName}
                                required/>
                            <div className="invalid-feedback">
                                Apellido es requerido.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email <span className="text-muted">(Opcional)</span></label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            placeholder="you@example.com"
                            defaultValue={currentUser.email}
                            onChange={handleEmail} />
                        <div className="invalid-feedback">
                            Por favor ingrese un email válido.
                        </div>
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
                            <label htmlFor="zipCode">Zip</label>
                            <input type="text"
                                className="form-control"
                                id="zipCode"
                                placeholder=""
                                defaultValue={currentUser.zipCode}
                                onChange={handleZipCode}
                                required/>
                            <div className="invalid-feedback">
                                Zip code es requerido.
                            </div>
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