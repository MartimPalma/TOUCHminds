//METER AS CORES CERTAS, METER O LOGO CERTO
//
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { House, Envelope, Trophy, People, Gear, Bell, PersonCircle } from 'react-bootstrap-icons';

// coloca por componentes para pudemros reutilizar a nav e sidebar

const TouchMindsApp = () => {
  return (
    <div className="container-fluid vh-100 p-0">
      {/* Top navbar */}
      <div className="navbar navbar-light bg-white py-2 px-4 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="#">
            TOUCH <span className="fst-italic">minds</span>
          </a>
          <div className="d-flex align-items-center">
            <button className="btn btn-link text-secondary position-relative me-3">
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                1
              </span>
            </button>
            <button className="btn btn-link">
              <PersonCircle size={24} className="text-secondary" />
            </button>
          </div>
        </div>
      </div>

      <div className="row h-100 m-0" style={{}}>
        {/* Sidebar */}
        <div className="col-auto bg-white shadow-sm py-4 px-3" style={{ width: '220px' }}>
          <div className="nav flex-column">
            <NavItem icon={<House />} text="Página Inicial" active={true} />
            <NavItem icon={<Envelope />} text="O meu progresso" />
            <NavItem icon={<Trophy />} text="Conquistas" />
            <NavItem icon={<People />} text="Contactos" />
            <NavItem icon={<Gear />} text="Definições" />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="col px-4 py-4 bg-light">
          <div className="container p-4 bg-white rounded shadow-sm">
            <h2 className="text-info mb-1">Bem Vindo Rodrigo Bastos</h2>
            <p className="text-muted mb-4">Escola Secundária de Rio Tinto</p>
            
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
              {/* Module 1 */}
              <div className="col">
                <div className="card h-100">
                  <img 
                    src="/api/placeholder/400/250" 
                    className="card-img-top" 
                    alt="Dark forest scene" 
                  />
                  <div className="card-body">
                    <h5 className="card-title text-info">Módulo 1</h5>
                    <h6>Ansiedade NÃO é bicho-papão!</h6>
                    <p className="card-text">
                      Aprende a diferenciar entre uma ansiedade comum e uma ansiedade SOS
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Module 2 */}
              <div className="col">
                <div className="card h-100">
                  <img 
                    src="/api/placeholder/400/250" 
                    className="card-img-top" 
                    alt="Misty landscape" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Módulo 2</h5>
                    <h6>Desmitificar a Ansiedade</h6>
                    <p className="card-text">
                      Nem tudo o que dizem sobre a ansiedade é verdade!
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Module 3 */}
              <div className="col">
                <div className="card h-100">
                  <img 
                    src="/api/placeholder/400/250" 
                    className="card-img-top" 
                    alt="Reflective portrait" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Módulo 3</h5>
                    <h6>Sê amigo de ti mesmo!</h6>
                    <p className="card-text">
                      O que dizes a ti próprio faz a diferença!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* Module 4 */}
              <div className="col">
                <div className="card h-100">
                  <img 
                    src="/api/placeholder/400/250" 
                    className="card-img-top" 
                    alt="Person climbing stairs" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Módulo 4</h5>
                    <h6>O Poder da Mudança!</h6>
                    <p className="card-text">
                      A mudança faz parte da vida! Explora os diferentes estádios da mudança, aprende a definir objetivos realistas e descobre como dar pequenos passos pode fazer uma grande diferença.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Module 5 */}
              <div className="col">
                <div className="card h-100">
                  <img 
                    src="/api/placeholder/400/250" 
                    className="card-img-top" 
                    alt="Person looking at horizon" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Módulo 5</h5>
                    <h6>Reviravolta em Rede!</h6>
                    <p className="card-text">
                      Pedir ajuda pode parecer difícil, mas não estás sozinho. Aprende a identificar sinais de alerta, a diferenciar entre ajuda formal e informal e descobre como a ajuda das pessoas mais próximas podem fazer toda a diferença.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Module 6 */}
              <div className="col">
                <div className="card h-100">
                  <img 
                    src="/api/placeholder/400/250" 
                    className="card-img-top" 
                    alt="Road with new start sign" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Módulo 6</h5>
                    <h6>Um novo Começo!</h6>
                    <p className="card-text">
                      Como funciona a ajuda profissional? Descobre os sinais que indicam que podes precisar de ajuda profissional, conhece o papel do psicólogo e explora os recursos disponíveis para dares o próximo passo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navigation item component
const NavItem = ({ icon, text, active }) => {
  return (
    <a 
      href="#" 
      className={`nav-link d-flex align-items-center py-2 ${active ? 'text-info' : 'text-secondary'}`}
    >
      <span className="me-3" style={{ width: '24px' }}>
        {icon}
      </span>
      <span>{text}</span>
    </a>
  );
};

export default TouchMindsApp;