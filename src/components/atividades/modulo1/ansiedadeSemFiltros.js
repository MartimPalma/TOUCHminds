import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import modulos from '../../../data/modulos';
import AtividadeProgressao from '../atividadeProgressao';

const AnsiedadeSemFiltros = () => {
  const [pagina, setPagina] = useState(0);
  const [hashtags, setHashtags] = useState(Array(12).fill(""));
  const [inputError, setInputError] = useState(false);
  
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const modulo = modulos.find((m) => m.id === moduloId);
  const atividade = modulo?.atividades.find(a => a.url === "ansiedade-sem-filtros");

  const avancarPagina = () => {
    // If on a hashtag page and the input is empty, show error
    if (pagina > 0 && pagina <= 12 && !hashtags[pagina - 1].trim()) {
      setInputError(true);
      return;
    }
    
    // Otherwise proceed
    setInputError(false);
    setPagina((prev) => prev + 1);
  };
  
  const retrocederPagina = () => {
    setInputError(false);
    setPagina((prev) => prev - 1);
  };
  
  
  const progresso = Math.round((pagina / 14) * 100);

  const handleHashtagChange = (index, value) => {
    // Se houver espaço ou vírgula no texto colado, mostrar erro
    if (value.includes(" ") || value.includes(",")) {
      setInputError(true);
      return;
    }

    const newHashtags = [...hashtags];
    newHashtags[index] = value;
    setHashtags(newHashtags);

    // Se o valor agora for válido, remove o erro
    if (inputError && value.trim() !== "") {
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
                        Sê muito bem-vindo ou bem-vinda ao Ansiedade Sem Filtros.
                         Nesta atividade, vais ver uma sequência de imagens com informações 
                         sobre a ansiedade na adolescência — como aparece, o impacto que pode ter e porque 
                         é tão importante falarmos sobre isto. Imagina que estás a fazer scroll no Instagram e
                          deste de caras com um post sobre este tema. Lê cada imagem com atenção e, no final, reage
                           com um hashtag que mostre o que sentiste ao ver aquela informação. Podes escrever qualquer
                            hashtag — algo que sintas, penses ou te venha à cabeça naquele momento. O objetivo é parares
                            um instante e refletires sobre o que estás a ver e como isso te faz sentir. Vamos a isso?"
                      </p>
                      <button className="btn btn-primary mt-3 px-4 py-2" style={{
                        backgroundColor: "#66BFBF",
                        color: "white",
                        borderRadius: "8px",
                        fontSize: "1.05rem",
                        border: "none",
                      }} onClick={avancarPagina}>
                        <i className="bi bi-play-fill me-2"></i>Vamos a isto?
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 12 IMAGENS COM HASHTAG INPUTS */}
              {pagina > 0 && pagina <= 12 && (
                <>
                  <h4 className="fw-bold mb-3" style={{ color: "#234970" }}>Imagem {pagina} de 12</h4>
                  <div className="text-center mb-4">
                    {/* Actual image */}
                    <div className="mb-3">
                      <img 
                        src={`/imgs/modulo1/hashtag/hashtag_${pagina}.png`}
                        alt={`Imagem ${pagina} sobre ansiedade`}
                        className="img-fluid rounded"
                        style={{ 
                          maxWidth: "100%", 
                          maxHeight: "400px",
                          objectFit: "contain"
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder in case image fails to load */}
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
                        <p className="text-secondary mb-0">
                          Imagem {pagina} não encontrada
                        </p>
                      </div>
                    </div>
                    
                    {/* Hashtag input with error state */}
                    <div className="input-group mx-auto" style={{ maxWidth: "500px" }}>
                      <span className="input-group-text" id="hashtag-addon">
                        <i className="bi bi-hash"></i>
                      </span>
                      <input
                      type="text"
                      className={`form-control ${inputError ? 'is-invalid' : ''}`}
                      placeholder="hashtag"
                      value={hashtags[pagina - 1]}
                      onChange={(e) => handleHashtagChange(pagina - 1, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === " " || e.key === "," || e.key === "Tab") {
                          e.preventDefault();
                          setInputError(true);
                        }
                      }}
                      aria-label="Hashtag"
                      aria-describedby="hashtag-addon"
                      required
                    />
                    {inputError && (
                      <div className="invalid-feedback">
                        Usa apenas uma palavra, sem espaços nem vírgulas.
                      </div>
                    )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-secondary" style={{
                        backgroundColor: "#E7C8C2",
                        color: "white",
                        borderRadius: "8px",
                        fontSize: "1.05rem",
                        border: "none",
                      }} onClick={retrocederPagina}>
                      <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                    <button 
                      className="btn btn-primary" style={{
                        backgroundColor: "#66BFBF",
                        color: "white",
                        borderRadius: "8px",
                        fontSize: "1.05rem",
                        border: "none",
                      }}
                      onClick={avancarPagina}
                    >
                      {pagina === 12 ? "Ver reflexão" : "Próximo"}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </>
              )}

              {/* CONCLUSÃO */}
              {pagina === 13 && (
                <>
                  <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Conclusão da Atividade</h4>
                  <p className="lead">
                  Agora que refletiste sobre as imagens e reagiste com hashtags, percebeste que a ansiedade não é algo isolado.
                   Pelo contrário, afeta muitos jovens e pode, por vezes, ser um problema maior do que parece. Ao longo das imagens, 
                   exploraste como a ansiedade pode surgir, como ela pode persistir ao longo do tempo e os desafios que traz a muitos
                    adolescentes. Ao mesmo tempo, aprendeste que a ansiedade não é um problema que deva ser ignorado, mas sim reconhecido
                     e cuidado, para evitar consequências mais graves no futuro. A informação que partilhaste através dos hashtags ajuda-te
                      a entender e expressar as diferentes emoções que sentiste ao aprender sobre as diversas formas de ansiedade e como 
                      elas afetam o nosso bem-estar, a nossa saúde mental e o nosso futuro. Lembra-te que falar sobre isso é fundamental 
                      para lidar com os desafios da saúde mental 
                  </p>
                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-outline-secondary" style={{
                        backgroundColor: "#E7C8C2",
                        color: "white",
                        borderRadius: "8px",
                        fontSize: "1.05rem",
                        border: "none",
                      }} onClick={retrocederPagina}>
                      <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                    <AtividadeProgressao
                      moduloId={moduloId}
                      atividadeIndex={3}
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

export default AnsiedadeSemFiltros;