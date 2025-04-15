import React from 'react';
import { House, Envelope, Trophy, People, Gear, Bell, PersonCircle } from 'react-bootstrap-icons';  

const Sidebar = () => {
    return(
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
    )
}

export default Sidebar;