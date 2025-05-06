import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import modulos from '../../../data/modulos';
import AtividadeProgressao from '../atividadeProgressao'; 

// Catarina vai fornecer o texto/imagens da banda desenhada

const BandaDesenhada = () => {
  const [pagina, setPagina] = useState(0);
  const [ansiedadeComum, setAnsiedadeComum] = useState('');
  const [ansiedadeSOS, setAnsiedadeSOS] = useState('');

  // Obter parâmetros da URL e contexto do utilizador
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  console.log("Banda Desenhada", moduloId);
  
  // Encontrar o módulo e a atividade atual
  const modulo = modulos.find((m) => m.id === moduloId);
  const atividade = modulo?.atividades.find(a => a.url === "banda-desenhada");

  // Obter quadros da banda desenhada do módulo
  const quadros = atividade?.quadros || [];

  const avancarPagina = () => setPagina((prev) => prev + 1);
  const retrocederPagina = () => setPagina((prev) => prev - 1);
  
  const progresso = Math.round((pagina / (quadros.length + 1)) * 100);

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
                aria-valuemax="100">
              </div>
            </div>

            <div className="container bg-white rounded shadow-sm p-4">
              {pagina === 0 && (
                <div className="text-center py-4">
                  <h2 className="fw-bold mb-4" style={{ color: "#234970" }}>{atividade?.titulo || "Ansiedade: Aliada ou Empecilho?"}</h2>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                    <p className="lead">
                    <strong>Bem-vindo(a) à nossa aventura em Banda Desenhada:</strong><br />
                    <em>"Ansiedade: Aliada ou Empecilho?!"</em><br /><br />
                    Vais embarcar numa jornada onde conhecerás dois tipos de ansiedade: 
                    <strong> a ansiedade comum</strong>, que te ajuda a enfrentar desafios, 
                    e <strong>a ansiedade SOS</strong>, que pode atrapalhar o teu bem-estar.<br /><br />
                    O teu desafio é descobrir a diferença entre estas duas formas de ansiedade. 
                    Lê com atenção cada quadro da banda desenhada e, no final, pensa em <strong>duas palavras</strong>:
                    uma que represente a <strong>ansiedade comum</strong> e outra que represente a <strong>ansiedade SOS</strong>.<br /><br />
                    Não existem respostas certas ou erradas — o mais importante é o que tu compreendes e sentes. 
                  </p>

                  <button className="btn btn-primary mt-3 px-4 py-2" onClick={avancarPagina}>
                    <i className="bi bi-play-fill me-2"></i>Vamos a isto?
                  </button>

                    </div>
                  </div>
                </div>
              )}

              {pagina > 0 && pagina <= quadros.length && (
                <>
                  <h4 className="fw-bold mb-3" style={{ color: "#234970" }}>Quadro {pagina}</h4>
                  <div
                    className="border border-dark rounded p-4 mb-4"
                    style={{
                      backgroundColor: "#FDF6E3",
                      fontFamily: "'Comic Neue', 'Comic Sans MS', cursive",
                      minHeight: "200px"
                    }}
                  >
                    {quadros[pagina - 1].rapariga && (
                      <div className="mb-3">
                        <p className="mb-1 fw-bold" style={{ color: "#9C27B0" }}>Rapariga:</p>
                        <p className="ms-3 p-2 bg-white rounded-3 d-inline-block" style={{ borderRadius: "15px" }}>
                          "{quadros[pagina - 1].rapariga}"
                        </p>
                      </div>
                    )}
                    {quadros[pagina - 1].rapaz && (
                      <div>
                        <p className="mb-1 fw-bold" style={{ color: "#2196F3" }}>Rapaz:</p>
                        <p className="ms-3 p-2 bg-white rounded-3 d-inline-block" style={{ borderRadius: "15px" }}>
                          "{quadros[pagina - 1].rapaz}"
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-light p-3 rounded mb-4">
                    {pagina === 1 && <p className="mb-0">O diálogo começa com um momento do dia-a-dia, onde surge uma conversa sobre preocupações.</p>}
                    {pagina === 2 && <p className="mb-0">Todos sentimos ansiedade - é uma resposta natural do nosso corpo a situações de stress.</p>}
                    {pagina === 3 && <p className="mb-0">A ansiedade comum ajuda-nos a estar alerta e preparados para desafios.</p>}
                    {pagina === 4 && <p className="mb-0">A ansiedade SOS é mais intensa e prolongada, causando desconforto significativo.</p>}
                    {pagina === 5 && <p className="mb-0">Os dois tipos têm durações diferentes - a comum é passageira, a SOS persiste.</p>}
                    {pagina === 6 && <p className="mb-0">Reconhecer a diferença entre os tipos é o primeiro passo para gerir melhor a ansiedade.</p>}
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                      <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                    <button className="btn btn-primary" onClick={avancarPagina}>
                      {pagina === quadros.length ? "Refletir" : "Próximo"}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </>
              )}

              {pagina === quadros.length + 1 && (
                <>
                  <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Vamos Refletir!</h4>
                  
                  <p className="lead">
                    Agora que aprendeste sobre os dois tipos de ansiedade, partilha a tua perspetiva:
                  </p>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card h-100">
                        <div className="card-header bg-success text-white">
                          <h5 className="mb-0">Ansiedade Comum</h5>
                        </div>
                        <div className="card-body">
                          <p>Escreve duas palavras que representem o que é a ansiedade comum para ti:</p>
                          <input
                            type="text"
                            className="form-control"
                            id="ansiedadeComum"
                            value={ansiedadeComum}
                            onChange={(e) => setAnsiedadeComum(e.target.value)}
                            placeholder="Exemplo: alerta, motivação"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="card h-100">
                        <div className="card-header bg-danger text-white">
                          <h5 className="mb-0">Ansiedade SOS</h5>
                        </div>
                        <div className="card-body">
                          <p>Escreve duas palavras que representem o que é a ansiedade SOS para ti:</p>
                          <input
                            type="text"
                            className="form-control"
                            id="ansiedadeSOS"
                            value={ansiedadeSOS}
                            onChange={(e) => setAnsiedadeSOS(e.target.value)}
                            placeholder="Exemplo: sufoco, paralisante"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                      <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                    <div>
                        <AtividadeProgressao 
                          moduloId={moduloId}  
                          atividadeIndex={0} 
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

export default BandaDesenhada;
