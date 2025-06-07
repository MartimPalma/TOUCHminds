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


            {/* INTRODUÇÃO */}
            {pagina === 0 && (
              <div className="text-start py-4">
                <h2 className="fw-bold mb-4" style={{ color: "#234970" }}>{atividade?.titulo || "Ansiedade: Aliada ou Empecilho?"}</h2>
                <div className="row">
                  <div className="col-md-12">
                    <p className="lead">
                      <strong>Sê muito bem-vindo ou bem-vinda ao Ansiedade Sem Filtros.</strong><br></br><br></br>
                      Nesta <strong>atividade</strong>, vais ver uma <strong>sequência de imagens</strong> com informações
                      sobre a <strong>ansiedade na adolescência</strong> — como aparece, o <strong>impacto</strong> que pode ter e porque
                      é tão importante falarmos sobre isto. <br></br><br></br>
                      Imagina que estás a fazer <strong>scroll no Instagram</strong> e deste de caras com um post sobre este tema. Lê cada imagem com <strong>atenção</strong> e, no final, reagecom um <strong>hashtag</strong> que mostre o que sentiste ao ver aquela informação. <br></br>
                      Podes escrever <strong>qualquer hashtag</strong> — algo que sintas, penses ou te venha à cabeça naquele momento. <br></br><br></br>
                      O <strong>objetivo</strong> é parares um instante e <strong>refletires</strong> sobre o que estás a ver e como isso te <strong>faz sentir</strong>. Vamos a isso?"
                    </p>
                    <div className="text-center">
                      <button className="mt-3 px-4 py-2 custom-btn-turquoise " onClick={avancarPagina}>
                        <i className="bi bi-play-fill me-2"></i>Vamos a isto?
                      </button>
                    </div>
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
                  <button className="custom-btn-pink  " onClick={retrocederPagina}>
                    <i className="bi bi-arrow-left me-2"></i>Anterior
                  </button>
                  <button
                    className="custom-btn-turquoise" onClick={avancarPagina}
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
                  Agora que refletiste sobre as imagens e reagiste com <strong>hashtags</strong>, percebeste que a <strong>ansiedade</strong> não é algo <strong>isolado</strong>. Pelo
                  contrário, afeta muitos <strong>jovens</strong> e pode, por vezes, ser um <strong>problema maior</strong> do que parece.<br></br><br></br>
                  Ao longo das imagens, <strong>exploraste</strong> como a ansiedade pode <strong>surgir</strong>, como ela pode <strong>persistir</strong> ao longo do 
                  tempo e os <strong>desafios</strong> que traz a muitos adolescentes.<br></br><br></br> 
                  Ao mesmo tempo, <strong>aprendeste</strong> que a ansiedade não é um problema que deva ser <strong>ignorado</strong>, mas sim <strong>reconhecido</strong> e <strong>cuidado</strong>,
                   para evitar consequências mais graves no futuro.<br></br><br></br>
                  A informação que partilhaste através dos hashtags ajuda-te a entender e expressar as diferentes <strong>emoções</strong> que sentiste ao aprender sobre as diversas
                   formas de ansiedade e como elas afetam o nosso <strong>bem-estar</strong>, a nossa <strong>saúde mental</strong> e o nosso <strong>futuro</strong>.<br></br><br></br>
                  Lembra-te que <strong>falar</strong> sobre isso é <strong>fundamental</strong> para lidar com os desafios da saúde mental.
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <button className="custom-btn-pink" onClick={retrocederPagina}>
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
  );
};

export default AnsiedadeSemFiltros;