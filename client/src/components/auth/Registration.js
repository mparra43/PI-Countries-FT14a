import  React from 'react';
import  './styles/register.css'

export const Registration = () => {
    return (
        <div className="container login-container">
            <div className="col-md-6 login-form-2">
                <h3>Registro</h3>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Correo"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repita la contraseña"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Crear cuenta" />
                    </div>
                </form>
            </div>
        </div>

    );
};