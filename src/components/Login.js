import logo from '../logo.png';
import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="container">
      <div className="row logo-row justify-content-center"> 
        {/* LOGO */}
        <img src={logo} className="logo-img" alt="logo"></img>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
            <h5>Inicia sesión en Setups.cl</h5>
          <div className="card bg-light">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nombre de usuario o correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  ></input>
                  <div id="passwordHelp" className="form-text">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                </div>
                <button type="submit" className="btn ">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row new-registry justify-content-center">
          <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                    <p>¿No tienes una cuenta? <a href="#">Regístrate...</a></p>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};
