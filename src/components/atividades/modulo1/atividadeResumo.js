import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import modulos from '../../../data/modulos';
import AtividadeProgressao from '../atividadeProgressao';

const AtividadeResumo = () => {
  const [pagina, setPagina] = useState(0);
  const [hashtags, setHashtags] = useState(Array(12).fill(""));
  
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const modulo = modulos.find((m) => m.id === moduloId);
  const atividade = modulo?.atividades.find(a => a.url === "atividade-resumo");
  const quadros = atividade?.quadros || [];

  const avancarPagina = () => setPagina((prev) => prev + 1);
  const retrocederPagina = () => setPagina((prev) => prev - 1);

  const progresso = Math.round((pagina / 7) * 100);

  const handleHashtagChange = (index, value) => {
    const newHashtags = [...hashtags];
    newHashtags[index] = value;
    setHashtags(newHashtags);
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
                        Sê muito bem-vindo ou bem-vinda à <strong>atividade resumo</strong> do Módulo 1 – 'Ansiedade NÃO é Bicho Papão!'. 
                        O objetivo desta atividade é consolidar os conteúdos que explorámos ao longo do módulo. Imagina que és tu que está?” 
                        s na situação que te vou apresentar, e <strong>seleciona a opção que melhor representa</strong> a forma como te irias comportar nessa situação.
                         Cada escolha representará um comportamento e influenciará como a personagem lida com a ansiedade e se relaciona com os outros.
                          Este exercício é uma oportunidade para refletires sobre como os teus comportamentos e escolhas podem moldar as tuas 
                            experiências em momentos de ansiedade e em interações sociais. Vamos a isto
                      </p>
                      <button className="btn btn-primary mt-3 px-4 py-2" onClick={avancarPagina}>
                        <i className="bi bi-play-fill me-2"></i>Vamos a isto?
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 12 IMAGENS COM HASHTAG INPUTS */}
              {pagina > 0 && pagina <= 5 && (
                <>
                  <h4 className="fw-bold mb-3" style={{ color: "#234970" }}>Página {pagina} de 5</h4>
                  <div className="text-center mb-4">
                    
                  </div>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                      <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                    <button className="btn btn-primary" onClick={avancarPagina}>
                      {pagina === 12 ? "Ver reflexão" : "Próximo"}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </>
              )}

              

              {/* CONCLUSÃO */}
              {pagina === 6 && (
                <>
                  <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Conclusão da Atividade</h4>
                  <p className="lead">
                  Espero que esta atividade tenha sido útil e que te tenha permitido refletir sobre a tua própria forma de lidar com a ansiedade. 
                  Assim como a Sara, todos nós tomamos decisões todos os dias que moldam as nossas experiências e as nossas interações com os outros. 
                  Mesmo quando estamos ansiosos, as escolhas que fazemos têm impacto na forma como vivemos e superamos esses momentos. Embora evitar 
                  situações possa trazer alívio temporário, isso pode tornar mais difícil lidar com elas no futuro. Enfrentar o desconforto pode não só
                   ajudar-te a criar relações novas, mas também a reduzir a ansiedade ao longo do tempo. Lembra-te: a ansiedade é algo comum e todos nós
                    a sentimos. Ao enfrentar os desafios e praticar novas formas de agir, poderás fortalecer as tuas relações e melhorar a forma como te
                     vês e te sentes contigo mesmo/a.
                  </p>
                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                      <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                   <button className="btn btn-primary" onClick={avancarPagina}>
                      {pagina === 12 ? "Ver reflexão" : "Próximo"}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </>
              )}
            {pagina === 7 && (
                <>
                  <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Tabela Resumo</h4>
                  
                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                      <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                    <AtividadeProgressao
                      moduloId={moduloId}
                      atividadeIndex={4}
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

export default AtividadeResumo;