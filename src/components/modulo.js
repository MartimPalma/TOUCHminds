import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import DesafioSemanal from './desafioSemanal';
import { UserContext } from '../App';
import modulos from '../data/modulos';
import AtividadeCard from './atividadeCard';

const Modulos = () => {
  const { id } = useParams();  
  const { userData } = useContext(UserContext);  

  const modulo = modulos.find((m) => m.id === id);  // Encontra o módulo pelo ID

  if (!userData) return <p>A carregar dados do utilizador...</p>;

  const moduloUserKey = `modulo${modulo.id}`;  
  const atividadesStatus = userData.modulos[moduloUserKey]?.atividades || [];  

  const atividadesConcluidas = atividadesStatus.filter((atividade) => atividade.concluido).length;
  const progressoModulo = (atividadesConcluidas / atividadesStatus.length) * 100;

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">

            <div className="mb-4">
              <h2 className="fw-semibold" style={{ color: "#99CBC8" }}>{modulo.titulo}</h2>
              <h5 className="mb-3" style={{ color: "#234970" }}>{modulo.subtitulo}</h5>
              <p className="text-muted">{modulo.introducao}</p>

              <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small fw-semibold" style={{ color: "#234970" }}>Progresso do Módulo</span>
                    <span className="small fw-semibold" style={{ color: "#234970" }}>{progressoModulo}%</span>
                  </div>

                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${progressoModulo}%`,
                        backgroundColor: "#99CBC8",
                      }}
                      aria-valuenow={progressoModulo}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>

                  {progressoModulo === 0 && (
                    <div className="mt-2 small text-muted">
                      Ainda não começaste nenhuma atividade.{" "}
                      <span className="small fw-semibold fs-6" style={{ color: "#234970" }}>
                        Dá o primeiro passo!
                      </span>
                    </div>
                  )}
                </div>


              <h4 className="mt-5" style={{ color: "#99CBC8" }}>
                <span
                  style={{
                    borderBottom: "3px solid #99CBC8",
                    display: "inline-block",
                    paddingBottom: "2px",
                  }}
                >
                  Atividades
                </span>
              </h4>
            </div>

            <div className="row">
              {modulo.atividades.map((atividade, index) => (
                <AtividadeCard
                  key={atividade.url}
                  atividade={atividade}
                  status={atividadesStatus[index]?.status === 'desbloqueado'}
                  concluido={atividadesStatus[index]?.concluido}
                  moduloId={modulo.id}
                  atividadeIndex={index}
                />
              ))}
            </div>

            <DesafioSemanal id={modulo.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulos;
