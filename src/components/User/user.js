import React from 'react';
import './User.css';

function User() {
    return (
        <div className="container">
            <div className="py-5 text-center">
                <h2>Registro de Usuarios</h2>
            </div>
            <div className="col-md-8 order-md-1">
                <form className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="username">Nombre de usuario</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="username" placeholder="Usuario" required/>
                            <div className="invalid-feedback">
                                Nombre de usuario es requerido.
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">Nombres</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" required/>
                            <div className="invalid-feedback">
                            Nombre es requerido.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Apellidos</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" required/>
                            <div className="invalid-feedback">
                            Apellido es requerido.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email <span className="text-muted">(Opcional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                            Por favor ingrese un email válido.
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-6">
                            <label htmlFor="country">País</label>
                            <select className="custom-select d-block w-100" id="country" required>
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
                            <input type="text" className="form-control" id="zip" placeholder="" required/>
                            <div className="invalid-feedback">
                                Zip code es requerido.
                            </div>
                        </div>
                    </div>

                    <hr className="mb-4"/>

                    <hr className="mb-4"/>
                    <button className="btn btn-primary" type="submit">Grabar</button>
                    <button className="btn btn-secondary">Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default User;