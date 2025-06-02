import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import AtividadeProgressao from "../atividadeProgressao";
import { UserContext } from "../../../App";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FerramentasMudanca = () => {
  const [pagina, setPagina] = useState(0);
  const [modalAberto, setModalAberto] = useState(null);
  const [canCloseModal, setCanCloseModal] = useState(false);
  const audioRef = useRef(null);
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const ferramentas = [
    { id: "lupa", titulo: "Lupa", audio: "/audios/lupa.mp3" },
    { id: "bussola", titulo: "Bússola", audio: "/audios/bussola.mp3" },
    { id: "mapa", titulo: "Mapa", audio: "/audios/mapa.mp3" },
    { id: "ancora", titulo: "Âncora", audio: "/audios/ancora.mp3" },
    { id: "martelo", titulo: "Martelo", audio: "/audios/martelo.mp3" },
    { id: "perigo", titulo: "Sinal de Perigo", audio: "/audios/perigo.mp3" },
  ];

  const progresso = Math.round((pagina / 2) * 100);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = () => setCanCloseModal(true);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [modalAberto]);

  const fecharModal = () => {
    setModalAberto(null);
    setCanCloseModal(false);
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
                style={{ width: `${progresso}%`, backgroundColor: "#99CBC8" }}
              ></div>
            </div>

            {/* PÁGINA 0: INSTRUÇÃO */}
            {pagina === 0 && (
              <div className="text-center">
                <h4 className="fw-bold mb-4">Ferramentas de Mudança</h4>
                <p>
                  Sê muito bem-vindo ou bem-vinda à atividade “Ferramentas de Mudança”!
                </p>
                <p>
                  Nesta atividade, vamos explorar o ciclo da mudança, que nos ajuda a compreender melhor o que acontece quando lidamos com a ansiedade e outros desafios do dia-a-dia e sentimos que não sabemos por onde começar.
                </p>
                <p>
                  O ciclo de mudança ajuda-nos a perceber que a evolução não acontece de uma só vez, mas sim aos poucos, com cada pequeno passo a fazer a diferença.
                </p>
                <p>
                  Durante esta atividade, vais conhecer cinco fases importantes que fazem parte deste processo — desde o momento em que ainda não sabemos bem o que se passa, até ao momento em que conseguimos manter as mudanças que nos fazem bem.
                </p>
                <p>
                  Para te ajudar a refletir sobre cada fase, vamos usar ferramentas simbólicas — como a lupa, a bússola, o mapa, a âncora ou o martelo — que representam atitudes ou gestos que podem ser úteis em diferentes momentos.
                </p>
                <button className="btn btn-primary mt-3 px-4 py-2" onClick={() => setPagina(1)}>
                  Vamos começar?
                </button>
              </div>
            )}

            {/* PÁGINA 1: FERRAMENTAS */}
            {pagina === 1 && (
              <div className="text-center">
                <h4 className="fw-bold mb-4">Explora as Ferramentas</h4>
                <p>Clica em cada ferramenta para saberes mais. Só podes fechar o áudio após ouvi-lo até ao fim.</p>
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                  <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
                    {ferramentas.map((f) => (
                        <div key={f.id} className="col text-center">
                        <button
                            onClick={() => setModalAberto(f)}
                            className="border-0 bg-transparent"
                            style={{ cursor: "pointer" }}
                        >
                            <img
                            src={`/images/ferramentas/${f.id}.png`}
                            alt={f.titulo}
                            style={{ maxWidth: "100px", height: "auto" }}
                            />
                            <p className="mt-2 fw-semibold">{f.titulo}</p>
                        </button>
                        </div>
                    ))}
                    </div>

                </div>
                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary" onClick={() => setPagina(0)}>
                    Anterior
                  </button>
                  <button className="btn btn-primary" onClick={() => setPagina(2)}>
                    Conclusão
                  </button>
                </div>
              </div>
            )}

            {/* PÁGINA 2: CONCLUSÃO */}
            {pagina === 2 && (
              <>
                <h4 className="fw-bold mb-4">Conclusão da Atividade</h4>
                <p>
                  Agora que exploraste o ciclo da mudança e experimentaste cada uma das ferramentas simbólicas, é importante parares um pouco e pensares no que levas desta viagem.
                </p>
                <p>
                  Percebeste que mudar não acontece de um dia para o outro — é um processo. Um caminho com momentos de dúvida, reflexão, pequenas vitórias e, por vezes, tropeços.
                </p>
                <p>
                  Cada fase do ciclo tem o seu valor, e não há uma forma "certa" de passar por elas. O mais importante é ires prestando atenção ao que sentes, ao que precisas e ao que te faz bem.
                </p>
                <p>
                  Tal como usaste a lupa para observar mais de perto, a bússola para refletir sobre o caminho, o mapa para planear, o martelo para agir, a âncora para manter, e caso precises podes recorrer à borracha para reajustar, lembra-te: todas estas ferramentas estão sempre contigo.
                </p>
                <p>Podes usá-las quando precisares.</p>
                <p>
                  Não te esqueças: não há problema nenhum em precisar de voltar atrás para seguir em frente.
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary" onClick={() => setPagina(1)}>
                    Anterior
                  </button>
                  <AtividadeProgressao
                    moduloId={moduloId}
                    atividadeIndex={0}
                    updateUserData={updateUserData}
                  />
                </div>
              </>
            )}

            {/* MODAL DE ÁUDIO */}
            <Modal show={!!modalAberto} centered backdrop="static">
              <Modal.Header>
                <Modal.Title>{modalAberto?.titulo}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-center">
                <audio ref={audioRef} controls autoPlay style={{ width: "100%" }}>
                  <source src={modalAberto?.audio} type="audio/mpeg" />
                  O teu navegador não suporta áudio.
                </audio>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn-success"
                  onClick={fecharModal}
                  disabled={!canCloseModal}
                >
                  Fechar
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FerramentasMudanca;
