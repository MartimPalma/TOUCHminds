import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAluno } from "./../database/database";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import logo from "../imgs/logoazul.png";
import avatar1 from "../imgs/avatar1.jpg"; 
import avatar2 from "../imgs/avatar1.jpg";
import avatar3 from "../imgs/avatar1.jpg";
import avatar4 from "../imgs/avatar1.jpg";
import avatar5 from "../imgs/avatar1.jpg";

export default function SignupWithPersonalization() {
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
    { id: "avatar5", src: avatar5 }
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
  
  const handlePersonalizationSave = async () => {
    if (!nome) {
      setError("Por favor, insira um nome.");
      return;
    }
    
    try {
      setLoading(true);
      
      // Atualizar o documento do aluno com nome e avatar escolhido
      const userRef = doc(db, "alunos", userId);
      await updateDoc(userRef, {
        nome: nome,
        avatar: selectedAvatar
      });
      
      // Redirecionar para homepage após concluir personalização
      navigate('/homepage');
    } catch (error) {
      setError(error.message || "Erro ao salvar personalização.");
      setLoading(false);
    }
  };
  
  const handleClick = () => {
    navigate("/login");
  }
  
  // Componente do modal de personalização
  const PersonalizationPopup = () => (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
      <div className="bg-white p-4 rounded-4 shadow" style={{ maxWidth: "650px", width: "90%" }}>
        
      <h2
        className="text-center mb-4 font-poppins"
        style={{ color: "#69a6a4", fontWeight: "300" }}
      >
        Personaliza o teu{" "}
        <span>
          <img src={logo} alt="Logo" style={{ height: "60px" }} />
        </span>
      </h2>
        
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Nome na Plataforma</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nome que queres ser tratado na Plataforma"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label mb-2">Escolher Avatar*</label>
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Escolher Avatar
              </button>
              <ul className="dropdown-menu">
                {avatarOptions.map(avatar => (
                  <li key={avatar.id} className="dropdown-item" onClick={() => setSelectedAvatar(avatar.id)}>
                    <div className="d-flex align-items-center">
                      <img src={avatar.src} alt={`Avatar ${avatar.id}`} style={{ width: "30px", marginRight: "10px" }} />
                      Avatar {avatar.id.replace("avatar", "")}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center mt-3">
              <img 
                src={avatarOptions.find(a => a.id === selectedAvatar)?.src} 
                alt="Selected Avatar" 
                style={{ width: "80px" }} 
              />
            </div>
          </div>
        </div>
        
        <div className="text-end mt-4">
          <button
            className="btn rounded-3"
            style={{ backgroundColor: "#99CBC8", color: "white" }}
            onClick={handlePersonalizationSave}
            disabled={loading}
          >
            {loading ? "A processar..." : "Começar"}
          </button>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="container-fluid min-vh-100 d-flex flex-row p-0">
      <div className="col-md-6 bg-light d-flex align-items-center justify-content-center">
        <div style={{ width: "80%", maxWidth: "400px" }}>
          <img src="/brain-colorful.jpg" alt="Brain" className="img-fluid" style={{ width: "100%" }} />
        </div>
      </div>
      
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
      
      {showPopup && <PersonalizationPopup />}
    </div>
  );
}