import React from 'react';
import { Bell, PersonCircle } from 'react-bootstrap-icons';  
import logo from "../imgs/logoazul.png"; 

const Navbar = () => {
    return(
        <div className="navbar navbar-light bg-white py-2 px-4">
                <div className="container-fluid">
                  <a className="navbar-brand text-info" href="#"  style={{ width: "15%" }}>
                    <img src={logo} alt="TOUCHminds Logo" className="mt-1" style={{ width: "80%" }}/>

                  </a>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-link text-secondary position-relative me-3">
                      <Bell size={20} />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-green">
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

export default Navbar;