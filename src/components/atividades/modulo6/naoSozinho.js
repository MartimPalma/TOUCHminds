import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import modulos from '../../../data/modulos';
import AtividadeProgressao from '../atividadeProgressao';

const NaoEstasSozinho = () => {
  const [pagina, setPagina] = useState(0);
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const modulo = modulos.find((m) => m.id === moduloId);
  const atividade = modulo?.atividades.find(a => a.url === "nao-estas-sozinho");

  const progresso = Math.round((pagina / 1) * 100);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/imgs/modulo6/flyer/flyer.png"; 
    link.download = "nao_estas_sozinho_flyer.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                aria-valuemax="100"
              ></div>
            </div>


            {/* Página 0 - Introdução */}
            {pagina === 0 && (
              <div className="text-start py-4 ps-2">
                <h2 className="fw-bold mb-4" style={{ color: "#234970" }}>
                  Não Estás Sozinho/a
                </h2>
                <div className="">
                  <div className="">
                    <p className="lead mb-3">
                      <b>Sê muito bem-vindo ou bem-vinda</b> à atividade <b>“Não Estás Sozinho/a”!</b><br></br><br></br>
                      Lembra-te que, quando estás a passar por momentos difíceis, <b>falar com alguém pode mesmo ajudar</b>. Pode 
                      ser um <b>amigo</b>, um <b>familiar</b>, um <b>professor</b> — pessoas que estão por perto e que se <b>preocupam contigo</b>.
                    </p>
                    <p className="lead mb-3">
                      Mas se sentires que a <b>ansiedade</b> está a afetar o teu dia a dia de forma intensa — como no caso da <b>ansiedade SOS</b> —
                      é importante considerar também <b>falar com um psicólogo</b>. <b>Ele ou ela é a pessoa certa para te ajudar</b> a entender
                      melhor o que estás a sentir e encontrar <b>estratégias para lidar com isso</b>.
                    </p>
                    <p className="lead mb-3">
                      Sabemos que dar esse primeiro passo pode parecer <b>difícil</b>. Por isso, existem <b>linhas de apoio gratuitas</b>, <b>anónimas e sempre disponíveis</b> para te ouvir e orientar.
                    </p>
                    <p className="lead mb-3">
                      <b>Descarrega o flyer</b> com essa informação, <b>guarda-o no teu telemóvel</b> e <b>partilha com quem possa precisar</b>. Às vezes, <b>uma simples partilha pode fazer toda a diferença</b>.
                    </p>
                    <div className="text-center">
                    <button className="custom-btn-turquoise mt-3 px-4 py-2" onClick={() => setPagina(1)}>
                      <i className="bi bi-play-fill me-2"></i>Vamos a isto?
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            )}

            {/* Página 1 - Flyer */}
            {pagina === 1 && (
              <>
                <div className="text-center">
                  <img
                    src="/imgs/modulo6/flyer/flyer.png"
                    alt="Flyer de apoio psicológico"
                    className="img-fluid rounded border shadow-sm mb-4"
                    style={{ maxHeight: "700px" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
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
                    <p className="text-secondary mb-0">Imagem do flyer não encontrada.</p>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <button className="custom-btn-pink" onClick={() => setPagina(0)}>
                      <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                    <button className="custom-btn-complete" onClick={handleDownload}>
                      <i className="bi bi-download me-2"></i>Download
                    </button>

                    <AtividadeProgressao
                      moduloId={moduloId}
                      atividadeIndex={2}
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
  );
};

export default NaoEstasSozinho;
