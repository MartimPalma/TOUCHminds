import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import AtividadeProgressao from "../atividadeProgressao";

const AbracarMe = () => {
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
                <h4 className="fw-bold mb-4">Abraçar-Me A Mim Mesmo/a</h4>
                <p className="mb-3">Sê muito bem-vindo ou bem-vinda ao “Abraçar-Me A Mim Mesmo”!</p>
                <p className="mb-3">
                  Nesta atividade, vou convidar-te a imaginares, o melhor que conseguires, uma situação ou desafio relacionado com a ansiedade que possas estar a enfrentar neste momento ou já enfrentaste no passado.
                </p>
                <p className="mb-3">
                  Como esta atividade tem o objetivo de te expor a emoções difíceis ou intensas, vais tentar permanecer com essas emoções quando elas surgirem. Reconhece-as e deixa que estejam presentes, sem as afastar.
                </p>
                <p className="mb-3">
                  Convida a tua voz compassiva, aquela que é gentil e bondosa, a estar contigo nesta atividade. Vais treinar a dirigir-te frases compassivas. Adota uma atitude de autocompaixão, procurando uma postura de curiosidade e aceitação em relação às emoções que surgirem.
                </p>
                <p className="mb-3">
                  Se, em algum momento, a tua atenção se dispersar ou desviar, lembra-te de que isso é natural. Quando te aperceberes, traz gentilmente a tua atenção de volta à atividade e às sensações do teu corpo, sem julgamento.
                </p>
                <p className="mb-4">
                  Ouve o áudio "Abraçar-Me A Mim Mesmo", que te irá guiar pela atividade.
                </p>
                <button className="btn btn-primary mt-2 px-4 py-2" onClick={avancarPagina}>
                  Vamos começar?
                </button>
              </div>
            )}

            {pagina === 1 && (
              <div className="text-center py-4">
                <h5 className="fw-bold mb-3">Áudio: Abraçar-Me A Mim Mesmo</h5>
                <audio controls style={{ width: "100%", maxWidth: "600px" }}>
                  <source src="/audios/abracar-me-a-mim-mesmo.mp3" type="audio/mpeg" />
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
                  Esta atividade teve como objetivo mostrar-te a importância de praticar a autocompaixão.
                </p>
                <p className="mb-3">
                  Lembra-te de que ao praticares ser mais gentil e compreensivo contigo mesmo/a, especialmente em momentos difíceis, podes reduzir o teu autocriticismo e facilitar a aceitação das tuas emoções.
                </p>
                <p className="mb-3">
                  A autocompaixão não significa ignorar os problemas, mas sim abordá-los com uma atitude de compreensão, aprendendo com as dificuldades sem julgamento.
                </p>
                <p className="mb-4">
                  A prática contínua dessa forma de cuidado pode contribuir para o teu bem-estar, ajudando-te a lidar melhor com os desafios do dia a dia.
                </p>

                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                    <i className="bi bi-arrow-left me-2"></i>Anterior
                  </button>
                  <AtividadeProgressao
                    moduloId={moduloId}
                    atividadeIndex={2}
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

export default AbracarMe;
