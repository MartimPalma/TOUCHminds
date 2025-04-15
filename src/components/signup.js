import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/logositeazul.png";
import { registerAluno } from "./../database/database";

export default function SignupSimplified() {
  const [codigoParticipante, setCodigoParticipante] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
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
      await registerAluno(codigoParticipante, password);
      navigate('/homepage');
    } catch (error) {
      setError(error.message || "Erro ao registrar a conta. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
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
        
        {error && (
          <div className="alert alert-danger w-100" style={{ maxWidth: "400px" }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label className="form-label">Código de Participante*</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Inserir código de participante"
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
                className="form-control rounded-start-3"
                placeholder="Palavra-passe"
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
            <small className="text-muted">A senha deve ter pelo menos 6 caracteres.</small>
          </div>
          
          <div className="mb-4">
            <label className="form-label">Confirmar Palavra-passe*</label>
            <input
              type={mostrarSenha ? "text" : "password"}
              className="form-control rounded-3"
              placeholder="Confirmar palavra-passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="btn w-100 mb-3 rounded-3" 
            style={{ backgroundColor: "#99CBC8", color: "white" }}
            disabled={loading}
          >
            {loading ? "A processar..." : "Criar conta"}
          </button>
        </form>
      </div>
    </div>
  );
}