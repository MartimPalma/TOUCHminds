import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import AtividadeProgressao from "../atividadeProgressao";

const PodcastTouchminds = () => {
  const [pagina, setPagina] = useState(0);
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const avancarPagina = () => {
    setPagina((prev) => prev + 1);
  };

  const retrocederPagina = () => {
    setPagina((prev) => prev - 1);
  };

  const progresso = Math.round((pagina / 2) * 100); // 0 - Instrução, 1 - Audio, 2 - Conclusão

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

            {/* PÁGINA 0 - INTRODUÇÃO */}
            {pagina === 0 && (
              <div className="text-center py-4">
                <p className="lead mb-4">
                  Sê muito bem-vindo(a) ao <strong>Podcast TOUCHminds</strong>!
                </p>
                <p className="mb-3">
                  Nesta atividade, vais ouvir um episódio especial do podcast TOUCHminds — uma iniciativa criada para dar voz a histórias reais sobre saúde mental.
                </p>
                <p className="mb-3">
                  O episódio chama-se <strong>“O Peso do Silêncio”</strong> e reúne relatos verdadeiros de jovens e adultos que viveram de perto com a ansiedade.
                </p>
                <p className="mb-3">
                  Vais perceber que, muitas vezes, o maior obstáculo não é a ansiedade em si, mas o medo do julgamento, da rejeição ou daquilo que os outros possam pensar — o <strong>estigma</strong>.
                </p>
                <p className="mb-4">
                  Ao ouvires estas histórias, poderás refletir sobre a tua própria experiência ou sobre a de alguém próximo. Ouvir é o primeiro passo para compreender e ajudar.
                </p>
                <button className="btn btn-primary mt-2 px-4 py-2"
                  style={{
                    backgroundColor: "#66BFBF",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1.05rem",
                    border: "none",
                  }}
                  onClick={avancarPagina}>
                  <i className="bi bi-play-fill me-2"></i> Vamos a isto?
                </button>
              </div>
            )}

            {/* PÁGINA 1 */}
            {pagina === 1 && (
              <div className="text-center py-4">
                <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>
                  Episódio: O Peso do Silêncio
                </h4>
                <p className="lead mb-3">
                  Ouve com atenção as histórias reais sobre ansiedade, estigma e o silêncio que muitos vivem em silêncio.
                </p>

                <audio controls style={{ width: "100%", maxWidth: "600px" }}>
                  <source src="/audios/o-peso-do-silencio.mp3" type="audio/mpeg" />
                  O teu navegador não suporta a reprodução de áudio.
                </audio>

                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary"
                    style={{
                      backgroundColor: "#E7C8C2",
                      color: "white",
                      borderRadius: "8px",
                      fontSize: "1.05rem",
                      border: "none"
                    }}
                    onClick={retrocederPagina}>
                    <i className="bi bi-arrow-left me-2"></i>Anterior
                  </button>
                  <button className="btn btn-primary"
                    style={{
                      backgroundColor: "#66BFBF",
                      color: "white",
                      borderRadius: "8px",
                      fontSize: "1.05rem",
                      border: "none",
                    }}
                    onClick={avancarPagina}>
                    Conclusão
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            )}


            {/* PÁGINA 2 - CONCLUSÃO */}
            {pagina === 2 && (
              <>
                <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>
                  Conclusão da Atividade
                </h4>
                <p className="lead mb-3">
                  Chegamos ao fim deste episódio, e esperamos que ele tenha trazido reflexão e empatia.
                </p>
                <p className="mb-3">
                  A ansiedade faz parte da vida, mas o estigma que a rodeia torna-a ainda mais difícil de enfrentar. O medo de ser julgado ou de não ser compreendido pode levar ao silêncio — e esse silêncio pesa.
                </p>
                <p className="mb-3">
                  Falar sobre o que sentimos é um ato de coragem. Quando partilhamos as nossas experiências, damos espaço à compreensão e ajudamos a quebrar tabus.
                </p>
                <p className="mb-3">
                  Lembra-te: procurar ajuda não é sinal de fraqueza, mas sim de maturidade e cuidado contigo próprio(a). Todos merecem ser ouvidos e acolhidos.
                </p>
                <p className="mb-4">
                  Ao desconstruir o estigma, contribuímos para um mundo mais empático, solidário e saudável para todos.
                </p>

                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary"
                    style={{
                      backgroundColor: "#E7C8C2",
                      color: "white",
                      borderRadius: "8px",
                      fontSize: "1.05rem",
                      border: "none"
                    }}
                    onClick={retrocederPagina}>
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

export default PodcastTouchminds;
