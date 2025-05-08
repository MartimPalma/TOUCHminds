import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, BoxArrowRight } from 'react-bootstrap-icons';
import { UserContext } from '../App';
import { logoutAluno } from "../database/database";

import logo from "../imgs/logoazul.png";
import avatar1 from "../imgs/avatar1.jpg";
import avatar2 from "../imgs/avatar2.jpg";
import avatar3 from "../imgs/avatar3.jpg";
import avatar4 from "../imgs/avatar4.jpg";
import avatar5 from "../imgs/avatar5.jpg";
import avatar6 from "../imgs/avatar6.jpg";
import avatar7 from "../imgs/avatar7.jpg";
import avatar8 from "../imgs/avatar8.jpg";
import avatar9 from "../imgs/avatar9.jpg";
import avatar10 from "../imgs/avatar10.jpg";

const Navbar = () => {
  const avatarOptions = [
    { id: "avatar1", src: avatar1 },
    { id: "avatar2", src: avatar2 },
    { id: "avatar3", src: avatar3 },
    { id: "avatar4", src: avatar4 },
    { id: "avatar5", src: avatar5 },
    { id: "avatar6", src: avatar6 },
    { id: "avatar7", src: avatar7 },
    { id: "avatar8", src: avatar8 },
    { id: "avatar9", src: avatar9 },
    { id: "avatar10", src: avatar10 },
  ];

  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [notificacaoVisivel, setNotificacaoVisivel] = useState(false);
  const [notificacaoSemanal, setNotificacaoSemanal] = useState('');

  const handleLogout = async () => {
    try {
      await logoutAluno();
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
  };

  const toggleTooltip = () => {
    setShowTooltip(prev => !prev);
  };

  // Função para verificar o dia da semana e mostrar mensagens personalizadas
  const checkWeekMessages = () => {
    const dayOfWeek = new Date().getDay(); 
    let mensagem = '';

    switch (dayOfWeek) {
      case 0:
        mensagem = "Domingo: Aproveita o descanso, a nova semana está a chegar!";
        break;
      case 1:
        mensagem = "Segunda-feira: Novo módulo disponível! Começa a tua semana com o pé direito!";
        break;
      case 2:
        mensagem = "Terça-feira: Continua o teu progresso, estás a caminho do sucesso!";
        break;
      case 3:
        mensagem = "Quarta-feira: Já ultrapassaste a metade da semana! Força!";
        break;
      case 4:
        mensagem = "Quinta-feira: A reta final está a chegar, mantém o foco!";
        break;
      case 5:
        mensagem = "Sexta-feira: A semana está a acabar! Conclui o módulo antes do final da semana!";
        break;
      case 6:
        mensagem = "Sábado: Dia de refletir sobre o progresso, bom trabalho!";
        break;
      default:
        mensagem = '';
        break;
    }

    setNotificacaoSemanal(mensagem);
  };

  useEffect(() => {
    // Verifica se já mostrou a notificação hoje
    const today = new Date().toDateString();
    const lastNotificationDate = localStorage.getItem('lastNotificationDate');
    
    // Se não houver data armazenada ou se for de um dia diferente, mostra a notificação
    if (lastNotificationDate !== today) {
      checkWeekMessages(); 
      setNotificacaoVisivel(true); 
      
      localStorage.setItem('lastNotificationDate', today);
    }
  }, []); 
  
  // Efeito separado para gerenciar o tempo de exibição da notificação
  useEffect(() => {
    if (notificacaoVisivel) {
      const timer = setTimeout(() => {
        setNotificacaoVisivel(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [notificacaoVisivel]); // será executado sempre que notificacaoVisivel mudar

  let avatarSelecionado;
  for (let i = 0; i < avatarOptions.length; i++) {
    if (avatarOptions[i].id === userData?.avatarId) {
      avatarSelecionado = avatarOptions[i].src;
      break;
    }
  }

  return (
    <div className="navbar navbar-light bg-white py-2 px-4 position-relative">
      <div className="container-fluid">
        <a
          className="navbar-brand text-info"
          onClick={() => navigate('/homepage')} 
          style={{ width: "15%", cursor: 'pointer' }}
        >
          <img src={logo} alt="TOUCHminds Logo" className="mt-1" style={{ width: "80%" }} />
        </a>

        <div className="d-flex align-items-center">
          {/* Botão de notificação */}
          <div className="position-relative me-3">
            <button className="btn btn-link text-secondary position-relative">
              <Bell size={20} />
              {notificacaoVisivel && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  1
                </span>
              )}
            </button>
          </div>

          {/* Avatar e Logout */}
          <div className="position-relative">
            <img
              src={avatarSelecionado}
              alt="Avatar"
              className="rounded-circle"
              style={{ width: "44px", height: "44px", cursor: "pointer" }}
              onClick={toggleTooltip}
            />
            {showTooltip && (
              <div
                className="position-absolute bg-white border rounded-3 shadow-lg mt-2 p-1"
                style={{ right: 0, zIndex: 1000, width: '160px', transition: 'transform 0.3s ease-in-out' }}
              >
                <button
                  className="btn btn-sm btn-danger w-100 font-poppins px-4 py-2 rounded-3 d-flex align-items-center justify-content-center"
                  onClick={handleLogout}
                  style={{
                    backgroundColor: '#dc3545',
                    border: 'none',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#c82333"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#dc3545"}
                >
                  <BoxArrowRight size={20} className="me-2" />
                  SAIR
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notificação semanal */}
      {notificacaoVisivel && notificacaoSemanal && (
        <div
          className="position-fixed bottom-0 end-0 m-4 text-white px-4 py-3 rounded shadow"
          style={{ zIndex: 2, minWidth: '280px', maxWidth: '400px', backgroundColor: '#234970', transition: 'opacity 0.5s ease-in-out' }}
        >
          <strong>{notificacaoSemanal}</strong>
        </div>
      )}
    </div>
  );
};

export default Navbar;