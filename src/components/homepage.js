import React, { useContext } from 'react';
import { UserContext } from '../App'; 
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';
import ModuloCard from './moduloCardHome'; 
import modulos from '../data/modulos'; 

const Homepage = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  console.log("HomePage:" , userData);

  if (!userData) {
    return <div className="text-center p-5">A carregar dados do utilizador...</div>;
  }

  const handleNavigate = (moduloId) => {
    navigate(`/modulos/${moduloId}`);
  };

  const totalModulos = 6;
  const concluidos = userData.modulosConcluidos || 0;
  const percentagem = Math.round((concluidos / totalModulos) * 100);

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />

        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">
            <h2 className="mb-3 fw-semibold" style={{ color: "#99CBC8" }}>
              Bem vindo, <span>{userData.nome}!</span>
            </h2>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <span className="small fw-semibold" style={{ color: "#234970" }}>Progresso dos Módulos</span>
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

              {percentagem === 0 && (
                <div className="mt-2 small text-muted">
                  Ainda não começaste nenhum módulo. <span className="small fw-semibold fs-6" style={{ color: "#234970" }}>Dá o primeiro passo!</span>
                </div>
              )}
            </div>


            <div className="row row-cols-1 row-cols-md-3 g-4">
              {modulos.map((modulo) => {
                const chaveModulo = `modulo${modulo.id}`;
                const status = userData.modulos?.[chaveModulo]?.status || 'bloqueado';
                return (
                  <ModuloCard
                    key={modulo.id}
                    {...modulo}
                    status={status}
                    onNavigate={() => handleNavigate(modulo.id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;