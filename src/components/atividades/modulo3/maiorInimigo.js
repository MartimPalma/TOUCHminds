import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import AtividadeProgressao from "../atividadeProgressao";

const MaiorInimigo = () => {
  const [pagina, setPagina] = useState(0);
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

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
              ></div>
            </div>

            {pagina === 0 && (
              <div className="text-center py-4">
                <h4 className="fw-bold mb-4">O Nosso Maior Inimigo</h4>
                <p className="mb-3">
                  Sê muito bem-vindo ou bem-vinda ao "O Nosso Maior Inimigo"!
                </p>
                <p className="mb-3">
                  Nesta atividade, vou convidar-te a fazer um exercício de imaginação que te ajudará a perceber melhor como é que a tua voz crítica se manifesta e como isso te pode afetar.
                </p>
                <p className="mb-3">
                  Vou pedir-te que recordes uma situação específica, que tenha acontecido recentemente, em que sentiste que foste crítico contigo mesmo/a. Pode ser um momento em que cometeste um erro, ou uma situação em que te sentiste frustrado ou insatisfeito com algo que não conseguiste atingir.
                </p>
                <p className="mb-3">
                  Lembra-te de que as imagens que vais criar na tua mente não precisam de ser nítidas como uma fotografia. E, se a tua mente se distrair, o que é completamente normal, basta trazê-la gentilmente de volta para a atividade.
                </p>
                <p className="mb-4">
                  Ouve o áudio "O Nosso Maior Inimigo", que te irá guiar pela atividade.
                </p>
                <button className="btn btn-primary mt-2 px-4 py-2" onClick={avancarPagina}>
                  Vamos a isto?
                </button>
              </div>
            )}

            {pagina === 1 && (
              <div className="text-center py-4">
                <h5 className="fw-bold mb-3">Áudio: O Nosso Maior Inimigo</h5>
                <audio controls style={{ width: "100%", maxWidth: "600px" }}>
                  <source src="/audios/o-nosso-maior-inimigo.mp3" type="audio/mpeg" />
                  O teu navegador não suporta a reprodução de áudio.
                </audio>
                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                    <i className="bi bi-arrow-left me-2"></i>Anterior
                  </button>
                  <button className="btn btn-primary" onClick={avancarPagina}>
                    Conclusão <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            )}

            {pagina === 2 && (
              <div className="py-4">
                <h4 className="fw-bold mb-4">Conclusão da atividade!</h4>
                <p className="mb-3">
                  Este momento serviu para te ajudar a reconhecer a forma como falas contigo próprio/a em situações difíceis.
                </p>
                <p className="mb-3">
                  Ao refletires sobre a tua voz crítica, percebeste que, muitas vezes, nós somos excessivamente duros connosco na tentativa de nos motivarmos a melhorar.
                </p>
                <p className="mb-3">
                  Embora a intenção por trás dessa crítica seja de nos ajudar a evitar erros, o impacto emocional que ela nos causa pode ser negativo, alimentando emoções de raiva, ansiedade e frustração.
                </p>
                <p className="mb-4">
                  Se não usamos esse discurso tão severo com os outros, por que o fazemos connosco?
                </p>

                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                    <i className="bi bi-arrow-left me-2"></i>Anterior
                  </button>
                  <AtividadeProgressao
                    moduloId={moduloId}
                    atividadeIndex={1}
                    updateUserData={updateUserData}
                  />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MaiorInimigo;