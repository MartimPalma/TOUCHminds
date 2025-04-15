import React from 'react';
import { House, Envelope, Trophy, People, Gear,} from 'react-bootstrap-icons';  

const Sidebar = () => {
    return(
        <div className="col-auto bg-white shadow-sm py-4 px-3" style={{ width: '220px' }}>
                  <div className="nav flex-column">
                    <NavItem icon={<House />} text="Página Inicial" active={true} />
                    <NavItem icon={<Envelope />} text="O meu progresso" />
                    <NavItem icon={<Trophy />} text="Conquistas" />
                    <NavItem icon={<People />} text="Contactos" />
                    <NavItem icon={<Gear />} text="Definições" />
                  </div>
        </div>
    )
}

const NavItem = ({ icon, text, active }) => {
    return (
      <a 
        href="#" 
        className={`nav-link d-flex align-items-center py-2 ${active ? 'text-green' : 'text-secondary'}`}
      >
        <span className="me-3" style={{ width: '24px' }}>
          {icon}
        </span>
        <span>{text}</span>
      </a>
    );
  };

export default Sidebar;