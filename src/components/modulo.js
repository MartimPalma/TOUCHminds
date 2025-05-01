import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import DesafioSemanal from './desafioSemanal';
import { useParams, Link } from 'react-router-dom';
import modulos from '../data/modulos';

const Modulos = () => {
  const { id } = useParams();

  // Verifica se o id é um número válido
  const modulo = modulos.find((m) => m.id === id);

  if (!modulo) return <p>Módulo não encontrado.</p>;

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">

            <div className="mb-4">
              <h3 className="text-primary fw-bold">{modulo.titulo}</h3>
              <h5 className="text-secondary mb-3">{modulo.subtitulo}</h5>
              <p className="text-muted">{modulo.introducao}</p>

              <h5 className="text-secondary mb-1 mt-5">Atividades</h5>
              <hr />
            </div>

            <div className="row">
              {modulo.atividades.map((atividade) => (
                <div key={atividade.url} className="col-sm-6 col-md-4 mb-4">
                  <Link
                    to={`/modulos/${modulo.id}/atividade/${atividade.url}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="card h-100 shadow-sm border-0">
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
                </div>
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
