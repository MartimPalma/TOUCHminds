import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import modulos from '../../../data/modulos';
import AtividadeProgressao from '../atividadeProgressao';

const AnsiedadeSOSPOD = () => {
  const [pagina, setPagina] = useState(0);
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const modulo = modulos.find((m) => m.id === moduloId);
  const atividade = modulo?.atividades.find(a => a.url === "podcast2");

  const avancarPagina = () => setPagina((prev) => prev + 1);
  const retrocederPagina = () => setPagina((prev) => prev - 1);

  const progresso = Math.round((pagina / 2) * 100);

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
              />
            </div>

            {/* INTRODUÇÃO */}
            {pagina === 0 && (
              <div className="text-center py-4">
                <h2 className="fw-bold mb-4" style={{ color: "#234970" }}>
                  {atividade?.titulo || "Ansiedade SOS: Quando o Corpo Fala Mais Alto"}
                </h2>
                <p className="lead">
                  Sê muito bem-vindo ou bem-vinda ao Podcast TOUCHminds!<br /><br />
                  Neste episódio, "Ansiedade SOS: Quando o Corpo Fala Mais Alto", vamos explorar um tema que afeta muitas pessoas,
                  mas que nem sempre é falado: a ansiedade SOS.<br /><br />
                  Vamos perceber como a ansiedade pode passar de algo momentâneo para uma sensação intensa e constante, afetando o
                  nosso corpo, pensamentos e até os nossos comportamentos. Vais através de exemplos do dia a dia aprender a identificar
                  os sinais de alerta e conhecer alguns recursos que podem ajudar a lidar com isso.<br /><br />
                  Pronto para descobrir mais sobre este tema?
                </p>
                <button className="btn btn-primary mt-3 px-4 py-2"
                  style={{
                    backgroundColor: "#66BFBF",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1.05rem",
                    border: "none"
                  }}
                  onClick={avancarPagina}
                >
                  <i className="bi bi-play-fill me-2"></i>Vamos a isto?
                </button>
              </div>
            )}

            {/* ÁUDIO PAUSADO / CONTEÚDO PRINCIPAL */}
            {pagina === 1 && (
              <>
                <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Quando o Corpo Fala Mais Alto</h4>
                <div className="text-center mb-4">
                  <img
                    src="/imgs/podcast_cover.png"
                    alt="Capa do episódio"
                    className="img-fluid rounded mb-3"
                    style={{ maxWidth: "300px" }}
                  />
                  <p>
                  </p>
                  {/* Simulação do player (podes substituir por um real depois) */}
                   <audio controls style={{ width: "100%", maxWidth: "600px" }}>
                  <source src="/audios/abracar-me-a-mim-mesmo.mp3" type="audio/mpeg" />
                  O teu navegador não suporta a reprodução de áudio.
                </audio>
                </div>


                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-secondary" style={{
                    backgroundColor: "#E7C8C2",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1.05rem",
                    border: "none"
                  }} onClick={retrocederPagina}>
                    <i className="bi bi-arrow-left me-2"></i>Anterior
                  </button>
                  <button className="btn btn-primary" style={{
                    backgroundColor: "#66BFBF",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1.05rem",
                    border: "none"
                  }} onClick={avancarPagina}>
                    Conclusão <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </>
            )}

            {/* CONCLUSÃO */}
            {pagina === 2 && (
              <>
                <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Conclusão da Atividade</h4>
                <p className="lead">
                  Chegámos ao fim deste episódio, e antes de terminarmos, quero deixar-te com uma reflexão importante:
                  a ansiedade SOS é algo real, e por vezes pode tomar conta de nós sem aviso.<br /><br />
                  O que é fundamental é perceber que é possível entender esses sinais e começar a reagir de forma diferente.
                  Não se trata de ignorar a ansiedade ou de a 'aguentar' até ao limite. Trata-se de reconhecer quando ela aparece
                  e procurar maneiras de lidar com ela.<br /><br />
                  Lembra-te que a ansiedade não precisa de ser um bicho-papão.
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary" style={{
                    backgroundColor: "#E7C8C2",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1.05rem",
                    border: "none"
                  }} onClick={retrocederPagina}>
                    <i className="bi bi-arrow-left me-2"></i>Anterior
                  </button>
                  <AtividadeProgressao
                    moduloId={moduloId}
                    atividadeIndex={0}
                    updateUserData={updateUserData}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnsiedadeSOSPOD;
