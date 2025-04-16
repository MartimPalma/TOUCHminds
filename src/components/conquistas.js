import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Conquistas = () => {
  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">
            <h2 className="mb-1" style={{ color: "#99CBC8" }}>Conquistas</h2>
            <p>Conteúdo da página de conquistas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conquistas;