import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import modulos from '../../../data/modulos';
import AtividadeProgressao from '../atividadeProgressao';

const NaoEstasSozinho = () => {
  const [pagina, setPagina] = useState(0);
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const modulo = modulos.find((m) => m.id === moduloId);
  const atividade = modulo?.atividades.find(a => a.url === "nao-estas-sozinho");

  const progresso = Math.round((pagina / 1) * 100); 

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/imgs/flyers/flyer-ajuda.png"; // Caminho fictício
    link.download = "nao_estas_sozinho_flyer.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container-fluid vh-100 p-0 font-poppins">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-5 bg-white rounded shadow-sm">
            <div className="progress mb-4" style={{ height: "8px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progresso}%`, backgroundColor: "#99CBC8" }}
                aria-valuenow={progresso}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <div className="container bg-white rounded shadow-sm p-4">
              {/* Página 0 - Introdução */}
              {pagina === 0 && (
                <div className="text-center py-4">
                  <h2 className="fw-bold mb-4" style={{ color: "#234970" }}>
                    Não Estás Sozinho/a
                  </h2>
                  <div className="row justify-content-center">
                    <div className="col-md-9">
                      <p className="lead">
                        Sê muito bem-vindo ou bem-vinda à atividade “Não Estás Sozinho/a”!
                        Lembra-te que, quando estás a passar por momentos difíceis, falar com alguém pode mesmo ajudar.
                        Pode ser um amigo, um familiar, um professor — pessoas que estão por perto e que se preocupam contigo.
                      </p>
                      <p className="lead">
                        Mas se sentires que a ansiedade está a afetar o teu dia a dia de forma intensa — como no caso da ansiedade SOS —
                        é importante considerar também falar com um psicólogo. Ele ou ela é a pessoa certa para te ajudar a entender
                        melhor o que estás a sentir e encontrar estratégias para lidar com isso.
                      </p>
                      <p className="lead">
                        Sabemos que dar esse primeiro passo pode parecer difícil. Por isso, existem linhas de apoio gratuitas,
                        anónimas e sempre disponíveis para te ouvir e orientar.
                      </p>
                      <p className="lead">
                        Descarrega o flyer com essa informação, guarda-o no teu telemóvel e partilha com quem possa precisar.
                        Às vezes, uma simples partilha pode fazer toda a diferença.
                      </p>
                      <button className="btn btn-success mt-4 px-4 py-2"
                        style={{
                          backgroundColor: "#66BFBF",
                          border: "none",
                          fontSize: "1.1rem",
                          borderRadius: "8px"
                        }}
                        onClick={() => setPagina(1)}>
                        <i className="bi bi-play-fill me-2"></i>Vamos a isso?
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Página 1 - Flyer */}
              {pagina === 1 && (
                <>
                  <div className="text-center">
                    <img
                      src="/imgs/flyers/flyer-ajuda.png"
                      alt="Flyer de apoio psicológico"
                      className="img-fluid rounded border shadow-sm mb-4"
                      style={{ maxHeight: "400px" }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="border rounded mx-auto"
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "300px",
                        backgroundColor: "#f8f9fa",
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <p className="text-secondary mb-0">Imagem do flyer não encontrada.</p>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <button className="btn btn-outline-secondary"
                        style={{
                          backgroundColor: "#E7C8C2",
                          color: "white",
                          border: "none",
                          borderRadius: "8px"
                        }}
                        onClick={() => setPagina(0)}>
                        <i className="bi bi-arrow-left me-2"></i>Anterior
                      </button>
                      <button className="btn btn-info" onClick={handleDownload}>
                        <i className="bi bi-download me-2"></i>Download
                      </button>

                      <AtividadeProgressao
                        moduloId={moduloId}
                        atividadeIndex={2}
                        updateUserData={updateUserData}
                    />
                      
                    </div>
                  </div>
                </>
              )}
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaoEstasSozinho;
