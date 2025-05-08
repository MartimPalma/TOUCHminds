import React, { useState, useContext } from 'react';
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
  const [showMessage, setShowMessage] = useState(false);
  const [notificacaoVisivel, setNotificacaoVisivel] = useState(true);
  const [quote, setQuote] = useState(null);

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

  const mensagensInspiradoras = [
    { q: "A persistência realiza o impossível.", a: "Provérbio Chinês" },
    { q: "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.", a: "José de Alencar" },
    { q: "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.", a: "Cynthia Kersey" },
    { q: "Não importa que você vá devagar, contanto que você não pare.", a: "Confúcio" },
    { q: "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.", a: "Mark Twain" },
    { q: "A única maneira de fazer um excelente trabalho é amar o que você faz.", a: "Steve Jobs" },
    { q: "A vida é 10% o que acontece com você e 90% como você reage a isso.", a: "Charles R. Swindoll" },
    { q: "A melhor maneira de prever o futuro é criá-lo.", a: "Peter Drucker" },
    { q: "Grandes realizações são possíveis quando se acredita em si mesmo.", a: "Anônimo" },
    { q: "A jornada de mil milhas começa com um único passo.", a: "Lao Tsé" }
  ];

  const showInspirationalPopup = () => {
    if (notificacaoVisivel) {
      const randomIndex = Math.floor(Math.random() * mensagensInspiradoras.length);
      setQuote(mensagensInspiradoras[randomIndex]);
      setShowMessage(true);
      setNotificacaoVisivel(false);
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

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
            <button className="btn btn-link text-secondary position-relative" onClick={showInspirationalPopup}>
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
              style={{ width: "32px", height: "32px", cursor: "pointer" }}
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

      {/* Toast da Mensagem Inspiradora */}
      {showMessage && quote && (
        <div
          className="position-fixed bottom-0 end-0 m-4 text-white px-4 py-3 rounded shadow"
          style={{ zIndex: 2, minWidth: '280px', maxWidth: '400px', backgroundColor: '#234970', transition: 'opacity 0.5s ease-in-out' }}
        >
          <strong>Mensagem para ti:</strong>
          <div className="mt-2">
            <em>"{quote.q}"</em>
            <br />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
