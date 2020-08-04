import React, { useState, useEffect } from 'react';
import CustomInput from '../../controls/CustomInput/CustomInput'

const UserForm = (props) => {

    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry]= useState("");
    const [zipCode, setZipCode]= useState("");

    useEffect(()=>{
        setUserName(props.user.userName);
        setFirstName(props.user.firstName);
        setLastName(props.user.lastName);
        setEmail(props.user.email);
        setCountry(props.user.country);
        setZipCode(props.user.zipCode);

        document.getElementById("userName").value = props.user.userName;
        document.getElementById("firstName").value = props.user.firstName;
        document.getElementById("lastName").value = props.user.lastName;
        document.getElementById("email").value = props.user.email;
        document.getElementById("country").value = props.user.country;
        document.getElementById("zipCode").value = props.user.zipCode;
    }, [props.user]);


    const handleUserName = (event) => setUserName(event.target.value);
    const handleFirstName = (event) => setFirstName(event.target.value);
    const handleLastName = (event) => setLastName(event.target.value);
    const handleEmail = (event) => setEmail(event.target.value);
    const handleCountry = (event) => setCountry(event.target.value);
    const handleZipCode = (event) => setZipCode(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validFields()){
            const userModel = {
                id: props.user.id,
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                country: country,
                zipCode: zipCode,
                telephone: props.user.telephone
            }
            props.submitCallback(userModel);
        }
        else {
            alert("Complete la información requerida");
        }
    }

    const validFields = () => {
        return  (userName !== "" &&
            firstName !== "" &&
            lastName !== "" &&
            country !== "" &&
            zipCode !== "");
    }

    return (
        <div className="container">
            <div className="py-5 text-center">
                <h2>Registro de Usuarios</h2>
            </div>
            <div className="col-md-8 order-md-1">
                <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        {/* <CustomInput id="userName" label="Nombre de usuario" placeholder="Usuario" onChange={handleUserName} show_prepend="true"/> */}
                        <label htmlFor="userName">Nombre de usuario</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text"
                                className="form-control"
                                id="userName"
                                placeholder="Usuario"
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
                            <select className="custom-select d-block w-100"
                                id="country"
                                onChange={handleCountry}
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
                                onChange={handleZipCode}
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

export default UserForm;