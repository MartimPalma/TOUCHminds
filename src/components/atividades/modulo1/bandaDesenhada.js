import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import modulos from '../../../data/modulos';
import AtividadeProgressao from '../atividadeProgressao';

const BandaDesenhada = () => {
  const [pagina, setPagina] = useState(0);
  const [ansiedadeComum, setAnsiedadeComum] = useState('');
  const [ansiedadeSOS, setAnsiedadeSOS] = useState('');
  const [inputError, setInputError] = useState(false);

  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const modulo = modulos.find((m) => m.id === moduloId);
  const atividade = modulo?.atividades.find(a => a.url === "banda-desenhada");
  const quadros = atividade?.quadros || [];

  const avancarPagina = () => {
    // If on the reflection page and inputs are empty, show error
    if (pagina === quadros.length + 1) {
      if (!ansiedadeComum.trim() || !ansiedadeSOS.trim()) {
        setInputError(true);
        return;
      }
    }
    
    // Otherwise proceed
    setInputError(false);
    setPagina((prev) => prev + 1);
  };
  
  const retrocederPagina = () => {
    setInputError(false);
    setPagina((prev) => prev - 1);
  };
  
  const progresso = Math.round((pagina / (quadros.length + 2)) * 100); // +2: reflexão e conclusão

  const handleAnsiedadeComumChange = (e) => {
    setAnsiedadeComum(e.target.value);
    // Clear error when user starts typing in both fields
    if (inputError && e.target.value.trim() && ansiedadeSOS.trim()) {
      setInputError(false);
    }
  };

  const handleAnsiedadeSOSChange = (e) => {
    setAnsiedadeSOS(e.target.value);
    // Clear error when user starts typing in both fields
    if (inputError && e.target.value.trim() && ansiedadeComum.trim()) {
      setInputError(false);
    }
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
                aria-valuemax="100">
              </div>
            </div>

            <div className="container bg-white rounded shadow-sm p-4">
              {/* INTRODUÇÃO */}
              {pagina === 0 && (
                <div className="text-center py-4">
                  <h2 className="fw-bold mb-4" style={{ color: "#234970" }}>{atividade?.titulo || "Ansiedade: Aliada ou Empecilho?"}</h2>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <p className="lead">
                        Sê muito bem-vindo ou bem-vinda à Banda Desenhada da Ansiedade: Aliada ou Empecilho?! Nesta banda desenhada, vais conhecer dois tipos de ansiedade: A ansiedade comum, que nos ajuda a enfrentar desafios e a ansiedade SOS, que pode atrapalhar o nosso bem-estar. O teu desafio é compreender a diferença entre estas duas formas de ansiedade. Para isso, lê com atenção os quadros da banda desenhada. No final, escreve uma palavra que, para ti, represente: o que é a ansiedade comum e o que é a ansiedade SOS. Escreve essas duas palavras no espaço indicado. Não há respostas certas ou erradas — o importante é o que tu compreendeste! Vamos a isto?
                      </p>
                      <button className="btn btn-primary mt-3 px-4 py-2" onClick={avancarPagina}>
                        <i className="bi bi-play-fill me-2"></i>Vamos a isto?
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* QUADROS */}
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
                        <p className="ms-3 p-2 bg-white rounded-3 d-inline-block">
                          "{quadros[pagina - 1].rapariga}"
                        </p>
                      </div>
                    )}
                    {quadros[pagina - 1].rapaz && (
                      <div>
                        <p className="mb-1 fw-bold" style={{ color: "#2196F3" }}>Rapaz:</p>
                        <p className="ms-3 p-2 bg-white rounded-3 d-inline-block">
                          "{quadros[pagina - 1].rapaz}"
                        </p>
                      </div>
                    )}
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

              {/* REFLEXÃO */}
              {pagina === quadros.length + 1 && (
                <>
                  <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Vamos Refletir!</h4>
                  
                  {inputError && (
                    <div className="alert alert-danger mb-3" role="alert">
                      <i className="bi bi-exclamation-triangle me-2"></i>
                      Por favor, preenche os dois campos antes de avançar.
                    </div>
                  )}
                  
                  <p className="lead">
                    Escreve aqui duas palavras que para ti representem a o que é a ansiedade comum e o que é a ansiedade SOS. 
                    Escreve essas duas palavras no espaço indicado. <br></br> Não há respostas certas ou erradas — o importante é o que tu compreendeste! Vamos a isto?
                  </p>

                  <div className="mb-3">
                    <label htmlFor="ansiedadeComum" className="form-label fw-bold">
                      A minha palavra para definir a ansiedade comum é:
                    </label>
                    <input
                      type="text"
                      className={`form-control ${inputError && !ansiedadeComum.trim() ? 'is-invalid' : ''}`}
                      id="ansiedadeComum"
                      value={ansiedadeComum}
                      onChange={handleAnsiedadeComumChange}
                      placeholder="Exemplo: alerta"
                      required
                    />
                    {inputError && !ansiedadeComum.trim() && (
                      <div className="invalid-feedback">
                        Este campo é obrigatório.
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="ansiedadeSOS" className="form-label fw-bold">
                      A minha palavra para definir a ansiedade SOS é:
                    </label>
                    <input
                      type="text"
                      className={`form-control ${inputError && !ansiedadeSOS.trim() ? 'is-invalid' : ''}`}
                      id="ansiedadeSOS"
                      value={ansiedadeSOS}
                      onChange={handleAnsiedadeSOSChange}
                      placeholder="Exemplo: paralisante"
                      required
                    />
                    {inputError && !ansiedadeSOS.trim() && (
                      <div className="invalid-feedback">
                        Este campo é obrigatório.
                      </div>
                    )}
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                      <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                    <button className="btn btn-primary" onClick={avancarPagina}>
                      Submeter Respostas
                      <i className="bi bi-check-lg ms-2"></i>
                    </button>
                  </div>
                </>
              )}

              {/* CONCLUSÃO */}
              {pagina === quadros.length + 2 && (
                <>
                  <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Conclusão da Atividade</h4>
                  <p className="lead">
                    Espero que tenha sido um primeiro passo importante para compreenderes melhor como a ansiedade pode afetar a tua vida. <br></br>Lembra-te de que a ansiedade comum pode ser uma aliada, ajudando-nos a enfrentar desafios e a preparar para momentos difíceis.<br></br>No entanto, quando a ansiedade se torna SOS, ela pode interferir no nosso bem-estar e até prejudicar as nossas relações e atividades diárias. <br></br>É importante saber distinguir quando a ansiedade está a ser útil e quando está a tornar-se um problema.
                  </p>
                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
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
    </div>
  );
};

export default BandaDesenhada;