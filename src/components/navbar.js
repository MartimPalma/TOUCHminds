import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'react-bootstrap-icons';  
import logo from "../imgs/logoazul.png"; 
import { useState } from 'react';
import { logoutAluno } from "../database/database"; 
import avatar1 from "../imgs/avatar1.jpg";
import { UserContext } from '../App';
import { useContext } from 'react';
import { BoxArrowRight } from 'react-bootstrap-icons';


const Navbar = () => {

  const avatarOptions = [
    { id: "avatar1", src: avatar1 },
    { id: "avatar2", src: avatar1 },
    { id: "avatar3", src: avatar1 },
    { id: "avatar4", src: avatar1 },
    { id: "avatar5", src: avatar1 },
    { id: "avatar6", src: avatar1 },
    { id: "avatar7", src: avatar1 },
    { id: "avatar8", src: avatar1 },
    { id: "avatar9", src: avatar1 },
    { id: "avatar10", src: avatar1 },
  ];
  
  const { userData } = useContext(UserContext); 


  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

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
        <a className="navbar-brand text-info" onClick={() => navigate('/Homepage')} style={{ width: "15%", cursor: 'pointer' }}>
          <img src={logo} alt="TOUCHminds Logo" className="mt-1" style={{ width: "80%" }}/>
        </a>
        <div className="d-flex align-items-center">
          <button className="btn btn-link text-secondary position-relative me-3">
            <Bell size={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              1
            </span>
          </button>

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
              style={{ right: 0, zIndex: 1000, width: '160px', transition: 'transform 0.3s ease-in-out'}}
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
    </div>
  );
};

export default Navbar;
