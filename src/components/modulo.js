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

  const modulo = modulos.find((m) => m.id === id);

  if (!userData) return <p>A carregar dados do utilizador...</p>;

  const moduloUserKey = `modulo${modulo.id}`;
  const atividadesStatus = userData.modulos[moduloUserKey]?.atividades || [];

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">

            {/* Falta colocar progress bar do modúlo */}

            <div className="mb-4">
              <h2 className="fw-semibold" style={{ color: "#99CBC8" }}>{modulo.titulo}</h2>
              <h5 className="mb-3" style={{ color: "#234970" }}>{modulo.subtitulo}</h5>
              <p className="text-muted">{modulo.introducao}</p>

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
                status={atividadesStatus[index] === 'desbloqueado'}
                moduloId={modulo.id}
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
