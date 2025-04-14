import React, { useState } from "react";
import { loginAluno } from "./../database/database"; 
import { useNavigate } from "react-router-dom";

import logo from "../imgs/logositeazul.png";    

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginAluno(email, password);
  };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signup');
    }

  return (
    <div className="container-fluid min-vh-100 d-flex flex-row p-0">
    
    <div className="col-md-6 d-flex align-items-center justify-content-center bg-white">
    </div>

    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-light p-5">
        <img src={logo} alt="Logo" style={{ maxWidth: 160 }} className="mb-4" />

        <div className="mb-4 w-100 text-start" style={{ maxWidth: "400px" }}>
            <h3 className="fw-semibold" style={{ color: "#69a6a4" }}>Entrar na tua conta</h3>
            <p className="text-muted">
            ou{" "}
            <span
                onClick={handleClick}
                style={{ cursor: "pointer", textDecoration: "underline", color: "#69a6a4" }}
            >
                criar uma conta
            </span>
            </p>
        </div>

      <form onSubmit={handleLogin} className="w-100" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email*</label>
          <input
            type="email"
            className="form-control rounded-3"
            placeholder="Inserir email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Inserir palavra-passe*</label>
          <div className="input-group">
            <input
              type={mostrarSenha ? "text" : "password"}
              className="form-control rounded-start-3"
              placeholder="palavra-passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary rounded-end-3"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? "Esconder" : "Mostrar"}
            </button>
          </div>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="lembrar" />
          <label className="form-check-label" htmlFor="lembrar">
            Relembrar a minha palavra-passe
          </label>
        </div>

        <button
          type="submit"
          className="btn w-100 mb-3 rounded-3"
          style={{ backgroundColor: "#9bd3cf", color: "white" }}
        >
          Entrar
        </button>
      </form>
    </div>
  </div>
  );
}
