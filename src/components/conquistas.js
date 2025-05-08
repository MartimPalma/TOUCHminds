import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';
import Navbar from './navbar';
import Sidebar from './sidebar';
import modulo1 from "../imgs/module1.jpg";
import modulo2 from "../imgs/module1.jpg";
import modulo3 from "../imgs/module1.jpg";
import modulo4 from "../imgs/module1.jpg";
import modulo5 from "../imgs/module1.jpg";
import modulo6 from "../imgs/module1.jpg";

const Conquistas = () => {
  const [modulosConcluidos, setModulosConcluidos] = useState(0);
  const [loading, setLoading] = useState(true);
  const { userData } = useContext(UserContext); 

  useEffect(() => {
    if (userData) {
      setModulosConcluidos(userData.modulosConcluidos || 0);
      setLoading(false);
    }
  }, [userData]);

  const renderModuleImages = () => {
    const images = { modulo1, modulo2, modulo3, modulo4, modulo5, modulo6 };

    return Array.from({ length: 6 }, (_, i) => {
      const index = i + 1;
      const isCompleted = modulosConcluidos >= index;
      const imagePath = images[`modulo${index}`];

      return (
        <div className="col-4 p-0" key={index}>
          <img
            src={imagePath}
            alt={`Módulo ${index}`}
            className="w-100 h-100 object-fit-contain"
            style={{ filter: isCompleted ? 'none' : 'grayscale(100%)' }}
          />
        </div>
      );
    });
  };

  const percentagem = Math.round((modulosConcluidos / 6) * 100);

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm h-100">
            <h2 className="mb-2 fw-semibold" style={{ color: "#99CBC8" }}>
              As Minhas Conquistas
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1rem' }}>
              Completa todos os módulos para revelar o puzzle completo!
            </p>

            {loading ? (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div className="spinner-border" role="status" style={{ color: "#66BFBF" }}>
                  <span className="visually-hidden">A carregar...</span>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small fw-semibold" style={{ color: "#234970" }}>Progresso</span>
                    <span className="small fw-semibold" style={{ color: "#234970" }}>{percentagem}%</span>
                  </div>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentagem}%`, backgroundColor: "#99CBC8" }}
                      aria-valuenow={percentagem}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>

                <div className="row justify-content-center">
                  {renderModuleImages()}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conquistas;
