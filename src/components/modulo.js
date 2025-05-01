import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import DesafioSemanal from './desafioSemanal';
import { UserContext } from '../App';
import modulos from '../data/modulos';

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

            <div className="mb-4">
              <h3 className="fw-bold" style={{ color: "#99CBC8" }}>{modulo.titulo}</h3>
              <h5 className="mb-3">{modulo.subtitulo}</h5>
              <p className="text-muted">{modulo.introducao}</p>

              <h4 className="mt-5" style={{ color: "#99CBC8" }}>Atividades</h4>
              <hr />
            </div>

            <div className="row">
              {modulo.atividades.map((atividade, index) => {
                const isUnlocked = atividadesStatus[index] === 'desbloqueado';
                const cardStyle = {
                  filter: isUnlocked ? 'none' : 'grayscale(100%)',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                };

                return (
                  <div key={atividade.url} className="col-sm-6 col-md-4 mb-4">
                    {isUnlocked ? (
                      <Link
                        to={`/modulos/${modulo.id}/atividade/${atividade.url}`}
                        className="text-decoration-none text-dark"
                      >
                        <div className="card h-100 shadow-sm border-0" style={cardStyle}>
                          <img
                            src={atividade.imagem}
                            alt={atividade.titulo}
                            className="card-img-top"
                            style={{ objectFit: 'cover', height: '180px' }}
                          />
                          <div className="card-body text-center">
                            <h6 className="card-title fw-semibold">{atividade.titulo}</h6>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="card h-100 shadow-sm border-0" style={cardStyle}>
                        <img
                          src={atividade.imagem}
                          alt={atividade.titulo}
                          className="card-img-top"
                          style={{ objectFit: 'cover', height: '180px' }}
                        />
                        <div className="card-body text-center text-muted">
                          <h6 className="card-title fw-semibold">{atividade.titulo}</h6>
                            <div
                              className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 text-white rounded px-3 py-1"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Atividade Bloqueada
                            </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <DesafioSemanal id={modulo.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulos;
