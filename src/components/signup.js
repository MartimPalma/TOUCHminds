import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/logositeazul.png";

export default function SignupStep1() {
  const [codigo, setCodigo] = useState("");
  const [escola, setEscola] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/signup2", { state: { codigo, escola } });
  };

  const handleClick = () => {
    navigate("/login");
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

        <form onSubmit={handleNext} className="w-100" style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label className="form-label">Código de Participante</label>
            <input
              type="text"
              className="form-control"
              placeholder="Inserir código de participante"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Nome da Escola</label>
            <select
              className="form-select"
              value={escola}
              onChange={(e) => setEscola(e.target.value)}
              required
            >
              <option value="">Escolher Opção</option>
              <option value="Escola A">Escola A</option>
              <option value="Escola B">Escola B</option>
              <option value="Escola C">Escola C</option>
            </select>
          </div>

          <button type="submit" className="btn w-100" style={{ backgroundColor: "#99CBC8", color: "white" }}>
            Seguinte
          </button>
        </form>
      </div>
    </div>
  );
}
