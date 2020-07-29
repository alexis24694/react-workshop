import React from 'react';
import './user.css';

function User() {
    return (
        <div class="container">
            <div class="py-5 text-center">
                <h2>Registro de Usuarios</h2>
            </div>
            <div class="col-md-8 order-md-1">
                <form class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="username">Nombre de usuario</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input type="text" class="form-control" id="username" placeholder="Usuario" required/>
                            <div class="invalid-feedback">
                                Nombre de usuario es requerido.
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">Nombres</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                            <div class="invalid-feedback">
                            Nombre es requerido.
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">Apellidos</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                            <div class="invalid-feedback">
                            Apellido es requerido.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">Email <span class="text-muted">(Opcional)</span></label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                        <div class="invalid-feedback">
                            Por favor ingrese un email válido.
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-6">
                            <label for="country">País</label>
                            <select class="custom-select d-block w-100" id="country" required>
                                <option value="">Seleccione...</option>
                                <option>Perú</option>
                                <option>Argentina</option>
                                <option>Chile</option>
                                <option>Mexico</option>
                                <option>Estados Unidos</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div class="col-md-6 mb-6">
                            <label for="zip">Zip</label>
                            <input type="text" class="form-control" id="zip" placeholder="" required/>
                            <div class="invalid-feedback">
                                Zip code es requerido.
                            </div>
                        </div>
                    </div>
        
                    <hr class="mb-4"/>

                    <hr class="mb-4"/>
                    <button class="btn btn-primary" type="submit">Grabar</button>
                    <button class="btn btn-secondary">Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default User;