import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import AtividadeProgressao from "../atividadeProgressao";

const AtividadeResumoCarta = () => {
  const [pagina, setPagina] = useState(0);
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);
  const [carta, setCarta] = useState({
    parte1: "",
    parte2: "",
    parte3: "",
    parte4: "",
    parte5: "",
    parte6: "",
    parte7: "",
    parte8: "",
    parte9: "",
    parte10: ""
  });
  const [erroCampos, setErroCampos] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarta((prev) => ({ ...prev, [name]: value }));
    setErroCampos(false);
  };

  const gerarConteudoCarta = () => {
    return `Querido/a eu,\n\nSei que estás a passar por um momento difícil, e quero que saibas que ${carta.parte1}.\nEu sei que às vezes é difícil lidar com ${carta.parte2}.\nMesmo que estejas a sentir ${carta.parte3},\nQuando cometes erros, é importante lembrares-te que ${carta.parte4}.\nEu estou aqui para te apoiar, porque ${carta.parte5}.\nÉ normal sentires-te frustrado/a às vezes, mas ${carta.parte6}.\nEu sei que já enfrentaste situações complicadas antes, e ${carta.parte7}.\nLembra-te de que, mesmo quando erramos, podemos aprender, porque ${carta.parte8}.\nEstou muito orgulhoso/a de ti por ${carta.parte9}.\nPara o futuro, desejo-te que ${carta.parte10}.`;
  };

  const gerarCarta = () => {
    const conteudo = gerarConteudoCarta();
    const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Carta_para_mim.txt";
    a.click();
  };

  const validarCampos = () => {
    const todosPreenchidos = Object.values(carta).every((v) => v.trim() !== "");
    if (todosPreenchidos) {
      setErroCampos(false);
      setPagina(2);
    } else {
      setErroCampos(true);
    }
  };

  const progresso = Math.round((pagina / 2) * 100);

  return (
    <div className="container-fluid vh-100 p-0 font-poppins">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-5 bg-white rounded shadow-sm">
            <div className="progress mb-4" style={{ height: "8px" }}>
              <div className="progress-bar" style={{ width: `${progresso}%`, backgroundColor: "#99CBC8" }}></div>
            </div>

            {pagina === 0 && (
              <div>
                <h4 className="fw-bold mb-4">Atividade Resumo</h4>
                <p className="mb-3">Sê muito bem-vindo ou bem-vinda à atividade resumo do Módulo 3 – "Sê Amigo de Ti Mesmo!"</p>
                <p className="mb-3">O objetivo desta atividade é consolidar os conteúdos que explorámos ao longo do módulo.</p>
                <p className="mb-3">Convido-te a escrever uma carta para ti próprio/a, que será uma ferramenta para usares nos momentos difíceis, para te lembrares de que és merecedor/a de compaixão e que os desafios fazem parte da experiência humana.</p>
                <p className="mb-4">Aproveita esta oportunidade para te tratares com carinho, aceitação e compreensão. No final, poderás fazer o download da carta para recorreres a ela sempre que considerares necessário.</p>
                <button className="btn btn-primary" onClick={() => setPagina(1)}>Vamos a isto?</button>
              </div>
            )}

            {pagina === 1 && (
              <div>
                <h5 className="fw-bold mb-3">Carta</h5>

                <div className="alert alert-light border mt-4 white-space-pre-wrap" style={{ whiteSpace: 'pre-wrap' }}>
                  <h5 className="fw-bold">Pré-visualização da Carta</h5>
                  <p>{gerarConteudoCarta()}</p>
                </div>

                {Object.keys(carta).map((key, i) => (
                  <div className="mb-3" key={key}>
                    <label className="form-label">{`Parte ${i + 1}`} *</label>
                    <input
                      type="text"
                      name={key}
                      value={carta[key]}
                      onChange={handleChange}
                      className={`form-control ${erroCampos && carta[key].trim() === "" ? "is-invalid" : ""}`}
                      required
                    />
                    {erroCampos && carta[key].trim() === "" && (
                      <div className="invalid-feedback">Este campo é obrigatório.</div>
                    )}
                  </div>
                ))}

                <div className="mb-4">
                  <button className="btn btn-success me-3" onClick={gerarCarta}>Download</button>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary" onClick={() => setPagina(0)}>
                    <i className="bi bi-arrow-left me-2"></i>Anterior
                  </button>
                  <button className="btn btn-primary" onClick={validarCampos}>Conclusão</button>
                </div>
              </div>
            )}

            {pagina === 2 && (
              <div>
                <h4 className="fw-bold mb-4">Conclusão da atividade!</h4>
                <p className="mb-3">Ao escreveres esta carta para ti próprio/a, estás a cultivar uma prática de autocompaixão que te permitirá lidar com os momentos difíceis de forma gentil.</p>
                <p className="mb-3">Lembra-te de que todos enfrentam desafios e que os erros fazem parte da condição humana.</p>
                <p className="mb-3">Ao tratares-te com bondade e compreensão, estás a reforçar a tua capacidade de cuidar de ti mesmo nas situações mais complicadas.</p>
                <p className="mb-4">Sempre que precisares de um lembrete, recorre a esta carta e lembra-te de que és digno/a de compaixão e que mereces tratar-te com bondade e de forma gentil.</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-secondary" onClick={() => setPagina(1)}>
                    <i className="bi bi-arrow-left me-2"></i>Anterior
                  </button>
                  <AtividadeProgressao
                    moduloId={moduloId}
                    atividadeIndex={3}
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

export default AtividadeResumoCarta;
