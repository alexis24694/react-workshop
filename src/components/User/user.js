import React, { useState } from 'react';
import './User.css';
import { createUser } from '../../services/UserService';

function User() {

    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry]= useState("");
    const [zip, setZip]= useState("");

    const handleUserName = (event) => setUserName(event.target.value);
    const handleFirstName = (event) => setFirstName(event.target.value);
    const handleLastName = (event) => setLastName(event.target.value);
    const handleEmail = (event) => setEmail(event.target.value);
    const handleCountry = (event) => setCountry(event.target.value);
    const handleZip = (event) => setZip(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validFields()){
            const payload = {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                country: country,
                zipCode: zip,
                telephone: "",
                age: "",
                adress: ""
            };
            createUser(payload).then(
                response => {
                    if (response.ok) {
                        alert("Usuario se registro exitosamente.");
                    }
                });
        }
        else {
            alert("Complete la informacion requerida");
        }
    }

    const validFields = () => {
        return  (userName !== "" &&
            firstName !== "" &&
            lastName !== "" &&
            country !== "" &&
            zip !== "");
    }

    return (
        <div className="container">
            <div className="py-5 text-center">
                <h2>Registro de Usuarios</h2>
            </div>
            <div className="col-md-8 order-md-1">
                <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">Nombre de usuario</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text"
                                className="form-control"
                                id="username"
                                placeholder="Usuario"
                                onChange={handleUserName}
                                required/>
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
                            onChange={handleEmail} />
                        <div className="invalid-feedback">
                            Por favor ingrese un email válido.
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-6">
                            <label htmlFor="country">País</label>
                            <select className="custom-select d-block w-100" id="country" onChange={handleCountry} required>
                                <option value="">Seleccione...</option>
                                <option>Perú</option>
                                <option>Argentina</option>
                                <option>Chile</option>
                                <option>Mexico</option>
                                <option>Estados Unidos</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div className="col-md-6 mb-6">
                            <label htmlFor="zip">Zip</label>
                            <input type="text"
                                className="form-control"
                                id="zip"
                                placeholder=""
                                onChange={handleZip}
                                required/>
                            <div className="invalid-feedback">
                                Zip code es requerido.
                            </div>
                        </div>
                    </div>

                    <hr className="mb-4"/>

                    <button className="btn btn-primary mr-1" type="submit">Grabar</button>
                    <button className="btn btn-secondary">Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default User;