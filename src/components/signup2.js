import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerAluno } from "../database/database";
import logo from "../imgs/logositeazul.png";

export default function SignupStep2() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmar) {
      alert("As palavras-passe não coincidem.");
      return;
    }

    try {
      await registerAluno(email, password, state.escola , state.codigo);
      navigate("/login");
    } catch (err) {
      alert("Erro ao criar conta: " + err.message);
    }
  };

  const handleClick = () => {
    navigate('/login');
  }

  return (
    <div className="container-fluid min-vh-100 d-flex flex-row p-0">
      <div className="col-md-6 bg-white"></div>

      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-light p-5">
        <img src={logo} alt="Logo" style={{ maxWidth: 160 }} className="mb-4" />

        <div className="mb-4 w-100 text-start" style={{ maxWidth: "400px" }}>
            <h3 className="fw-semibold" style={{ color: "#69a6a4" }}>Criar uma conta</h3>
            <p className="text-muted">
            ou{" "}
            <span
                onClick={handleClick}
                style={{ cursor: "pointer", textDecoration: "underline", color: "#69a6a4" }}
            >
                entrar na tua conta
            </span>
            </p>
        </div>

        <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label className="form-label">Email*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Inserir email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Inserir palavra-passe*</label>
            <input
              type="password"
              className="form-control"
              placeholder="palavra-passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirmar palavra-passe</label>
            <input
              type="password"
              className="form-control"
              placeholder="Inserir palavra-passe"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn w-100" style={{ backgroundColor: "#9bd3cf", color: "white" }}>
            Seguinte
          </button>
        </form>
      </div>
    </div>
  );
}
