import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { registerAluno } from "./../database/database";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import logo from "../imgs/logositeazul.png";
import avatar1 from "../imgs/avatar1.jpg";
import avatar2 from "../imgs/avatar1.jpg";
import avatar3 from "../imgs/avatar1.jpg";
import avatar4 from "../imgs/avatar1.jpg";
import avatar5 from "../imgs/avatar1.jpg";
import PersonalizationPopup from "./personalizacao"; // Import the separate component

export default function SignupPage() {
  const [codigoParticipante, setCodigoParticipante] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [nome, setNome] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("avatar1");
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();
  const db = getFirestore();

  const avatarOptions = [
    { id: "avatar1", src: avatar1 },
    { id: "avatar2", src: avatar2 },
    { id: "avatar3", src: avatar3 },
    { id: "avatar4", src: avatar4 },
    { id: "avatar5", src: avatar5 },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const user = await registerAluno(codigoParticipante, password);
      setUserId(user.uid);
      setShowPopup(true);
      setLoading(false);
    } catch (error) {
      setError(error.message || "Erro ao registrar a conta. Por favor, tente novamente.");
      setLoading(false);
    }
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center p-0" style={{ backgroundColor: "#234970" }}>
      <div className="card shadow-lg p-4 border-0" style={{ maxWidth: "420px", width: "90%", borderRadius: "20px" }}>
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" style={{ maxWidth: 140 }} className="mb-3" />
          <h3 className="fw-semibold mb-1" style={{ color: "#99CBC8" }}>Criar uma conta</h3>
          <p className="text-muted mb-0">
            ou{" "}
            <span
              onClick={handleClick}
              style={{ cursor: "pointer", textDecoration: "underline", color: "#99CBC8" }}
            >
              entrar na tua conta
            </span>
          </p>
        </div>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-medium">Código de Participante*</label>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Inserir código de participante"
              value={codigoParticipante}
              onChange={(e) => setCodigoParticipante(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium">Palavra-passe*</label>
            <div className="input-group">
              <input
                type={mostrarSenha ? "text" : "password"}
                className="form-control custom-input"
                placeholder="Palavra-passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-toggle"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? "Esconder" : "Mostrar"}
              </button>
            </div>
            <small className="text-muted">A senha deve ter pelo menos 6 caracteres.</small>
          </div>

          <div className="mb-4">
            <label className="form-label fw-medium">Confirmar Palavra-passe*</label>
            <input
              type={mostrarSenha ? "text" : "password"}
              className="form-control custom-input"
              placeholder="Confirmar palavra-passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn w-100 rounded-pill"
            style={{ backgroundColor: "#99CBC8", color: "#fff", fontWeight: "600" }}
            disabled={loading}
          >
            {loading ? "A processar..." : "Criar conta"}
          </button>
        </form>
      </div>

      {showPopup && (
        <PersonalizationPopup
          nome={nome}
          setNome={setNome}
          selectedAvatar={selectedAvatar}
          setSelectedAvatar={setSelectedAvatar}
          avatarOptions={avatarOptions}
          userId={userId}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
        />
      )}
    </div>
  );
}