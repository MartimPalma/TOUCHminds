import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Conquistas = () => {
  const [modulosConcluidos, setModulosConcluidos] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user, userData } = useContext(UserContext); 
  
  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        if (user) {
            setModulosConcluidos(userData.modulosConcluidos || 0);
        }
      } catch (error) {
        console.error("Erro ao buscar progresso:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, [user, userData]);

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-3" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm h-100">
            <h2 className="mb-2" style={{ color: "#66BFBF", fontWeight: 'bold' }}>
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
                
                <div 
                  className="position-relative"
                  style={{ 
                    width: "500px", 
                    height: "350px", 
                    border: "2px dashed #66BFBF",
                    borderRadius: "10px",
                    backgroundColor: "#F0FAFA"
                  }}
                >
                  {/* Mostrar imagem baseada no número de módulos concluídos */}
                  {modulosConcluidos > 0 && (
                    <img 
                      src={''} 
                      alt={`${modulosConcluidos} módulos concluídos`} 
                      className="w-100 h-100 object-fit-contain"
                    />
                  )}
                  
                  {modulosConcluidos === 0 && (
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <p className="text-center text-muted">
                        Completa módulos para revelar partes do puzzle!
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mt-3 text-center">
                  <p className="text-muted">
                    {modulosConcluidos === 6 ? (
                      <span className="text-success fw-bold">Parabéns! Completaste todos os módulos!</span>
                    ) : (
                      `Módulos concluídos: ${modulosConcluidos} de 6`
                    )}
                  </p>
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