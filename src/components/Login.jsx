// src/components/Login.js

import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de autenticación
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="box">
        <div className="field">
          <label className="label has-text-white">Usuario</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label has-text-white">Contraseña</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary is-fullwidth">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
