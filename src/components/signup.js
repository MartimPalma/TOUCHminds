import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, X } from "lucide-react";
import { registerAluno } from "../database/database";
import logo from "../imgs/logositeazul.png";
import PersonalizationPopup from "./personalizacao";
import "../App.css";

export default function SignupModal({ onClose, onSwitchToLogin }) {
  const [codigoParticipante, setCodigoParticipante] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userId, setUserId] = useState(null);

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
    } catch (error) {
      setError("Erro ao registrar. Verifica os dados.");
    } finally {
      setLoading(false);
    }
  };

  if (showPopup) {
    return (
      <PersonalizationPopup
        userId={userId}
        setLoading={setLoading}
        setError={setError}
      />
    );
  }

  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Botão de fechar */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar"
        >
          <X />
        </button>

        <div className="text-center mb-3">
          <img src={logo} alt="Logo" style={{ maxWidth: 100 }} className="mb-2" />
          <h4 style={{ color: "#99CBC8" }}>Criar uma conta</h4>
          <p className="text-muted">
            ou{" "}
            <span
              onClick={onSwitchToLogin}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#99CBC8"
              }}
            >
              entrar na tua conta
            </span>
          </p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Código de Participante*</label>
            <input
              type="text"
              className="form-control"
              value={codigoParticipante}
              onChange={(e) => setCodigoParticipante(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Palavra-passe*</label>
            <div className="input-group">
              <input
                type={mostrarSenha ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Confirmar Palavra-passe*</label>
            <input
              type={mostrarSenha ? "text" : "password"}
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "A processar..." : "Criar conta"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}


