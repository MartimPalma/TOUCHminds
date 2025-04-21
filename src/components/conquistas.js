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

  console.log(userData);
  
  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        if (userData) {
            setModulosConcluidos(userData.modulosConcluidos || 0);
        }
      } catch (error) {
        console.error("Erro ao buscar progresso:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, [ userData]);


  // Função para renderizar imagens de módulos concluídos
  const renderModuleImages = () => {
    const images = [];
  
    for (let i = 1; i <= 6; i++) {
      const isCompleted = modulosConcluidos >= i;
      const imagePath = {modulo1, modulo2, modulo3, modulo4, modulo5, modulo6}[`modulo${i}`]; 
  
      images.push(
        <div className="col-4 p-0" key={i}>
          <img
            src={imagePath}
            alt={`Módulo ${i}`}
            className="w-100 h-100 object-fit-contain"
            style={{ filter: isCompleted ? 'none' : 'grayscale(100%)' }} // Aplica o filtro cinza para módulos não concluídos
          />
        </div>
      );
    }
  
    return images;
  };

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-5 bg-white rounded shadow-sm h-100">
            <h2 className="mb-2 font-poppins" style={{ color: "#66BFBF", fontWeight: 'bold' }}>
              As Minhas Conquistas
            </h2>
            <p style={{ fontSize: '1rem', color: '#444' }}>
              Completa todos os módulos para revelar o puzzle completo!
            </p>
            
            {loading ? (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div className="spinner-border" role="status" style={{ color: "#66BFBF" }}>
                  <span className="visually-hidden">A carregar...</span>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column align-items-center">
                <div className="mb-3 w-100">
                  <div className="progress" style={{ height: "20px" }}>
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ width: `${(modulosConcluidos / 6) * 100}%`, backgroundColor: "#66BFBF" }}
                      aria-valuenow={(modulosConcluidos / 6) * 100} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                      {Math.round((modulosConcluidos / 6) * 100)}%
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="row justify-content-center">
                    {renderModuleImages()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conquistas;
