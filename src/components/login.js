import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { loginAluno } from "./../database/database";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/logositeazul.png";

export default function Login() {
  const [codigoParticipante, setCodigoParticipante] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      await loginAluno(codigoParticipante, password);
      navigate('/homepage'); 
    } catch (error) {
      console.error("Erro no login:", error);
      setError("Código de participante ou senha incorretos. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleClick = () => {
    navigate('/signup');
  }
  
  return (
    <div className="container-fluid min-vh-100 d-flex flex-row p-0" style={{ backgroundColor: "#234970" }} >
     
      <motion.div 
        className="col-12 d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#234970" }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="card shadow-lg p-5 border-0" 
          style={{ maxWidth: "450px", width: "90%", borderRadius: "20px", backgroundColor: "#FBF9F9" }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-center mb-4"
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={logo} 
              alt="Logo" 
              style={{ maxWidth: 140 }} 
              className="mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.h3 
              className="fw-semibold mb-1" 
              style={{ color: "#99CBC8" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Entrar na tua conta
            </motion.h3>
            <motion.p 
              className="text-muted mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              ou{" "}
              <motion.span
                onClick={handleClick}
                style={{ cursor: "pointer", textDecoration: "underline", color: "#99CBC8" }}
                whileHover={{ color: "#7ab3b0" }}
              >
                criar uma conta
              </motion.span>
            </motion.p>
          </motion.div>
          
          {error && (
            <motion.div 
              className="alert alert-danger"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {error}
            </motion.div>
          )}
          
          <form onSubmit={handleLogin}>
            <motion.div 
              className="mb-3"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="form-label fw-medium">Código de Participante*</label>
              <motion.input
                type="text"
                className="form-control custom-input"
                placeholder="Inserir código de participante"
                value={codigoParticipante}
                onChange={(e) => setCodigoParticipante(e.target.value)}
                required
                whileFocus={{ boxShadow: "0 0 0 3px rgba(153, 203, 200, 0.25)" }}
              />
            </motion.div>
            
            <motion.div 
              className="mb-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label className="form-label fw-medium">Palavra-passe*</label>
              <div className="input-group">
                <motion.input
                  type={mostrarSenha ? "text" : "password"}
                  className="form-control custom-input"
                  placeholder="Palavra-passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(153, 203, 200, 0.25)" }}
                />
                <motion.button
                  type="button"
                  className="btn btn-toggle"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  whileHover={{ backgroundColor: "#f2f2f2" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                </motion.button>
              </div>
            </motion.div>
            
            <motion.button
              type="submit"
              className="btn w-50 rounded-pill mx-auto d-flex justify-content-center align-items-center"
              style={{ 
                backgroundColor: "#E7C8C2", 
                color: "#fff", 
                fontWeight: "600" 
              }}
              disabled={loading}
              whileHover={{ backgroundColor: "#88bab7", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {loading ? (
                <div className="d-flex align-items-center justify-content-center">
                  <div className="spinner-border spinner-border-sm me-2" role="status">
                    <span className="visually-hidden">A processar...</span>
                  </div>
                  A processar...
                </div>
              ) : (
                "Entrar"
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}