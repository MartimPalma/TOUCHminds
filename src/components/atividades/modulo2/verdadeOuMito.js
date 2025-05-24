import React, { useState } from "react";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import AtividadeProgressao from "../atividadeProgressao";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import { useContext } from "react";

const afirmacoes = [
  {
    texto: "A ansiedade é algo comum e normal.",
    resposta: "Verdade",
    explicacao:
      "Verdade! Sentir ansiedade é algo que todos nós experimentamos — é uma emoção natural do corpo para nos preparar para enfrentar desafios. Por exemplo, se estás ansioso/a antes de um teste, é porque queres ter um bom desempenho! A ansiedade só se torna um problema quando é excessiva e começa a interferir com o nosso dia-a-dia."
  },
  {
    texto: "A medicação é a única solução para a ansiedade.",
    resposta: "Mito",
    explicacao:
      "Mito! A medicação pode ajudar, nos casos mais intensos, mas não é a única forma de lidar com a ansiedade. Muitas pessoas melhoram com psicoterapia, especialmente com terapias que ensinam a reconhecer padrões de pensamento e a desenvolver formas mais equilibradas de lidar com eles, como a Terapia Cognitivo-Comportamental (TCC)."
  },
  {
    texto: "Se eu admitir que fico ansioso, serei visto como fraco/a ou estranho/a.",
    resposta: "Mito",
    explicacao:
      "Mito! Sentir ansiedade não tem nada de estranho — é algo humano e que todos sentimos. O medo de ser julgado pode fazer com que as pessoas hesitem em falar sobre a sua ansiedade. No entanto, admitir que estamos ansiosos é um sinal de coragem e autoconhecimento."
  },
  {
    texto: "A ansiedade manifesta-se de forma diferente nas pessoas.",
    resposta: "Verdade",
    explicacao:
      "Verdade! A ansiedade é uma experiência única e individualizada. Cada pessoa pode sentir e expressar a ansiedade de maneiras diferentes."
  },
  {
    texto: "Ter ansiedade não é o mesmo que sentir medo.",
    resposta: "Verdade",
    explicacao:
      "Verdade! A ansiedade é mais sobre o que poderá acontecer no futuro — uma preocupação constante — enquanto o medo é uma resposta a um perigo imediato."
  },
  {
    texto: "Eu devia ser capaz de lidar com a minha ansiedade sozinho/a.",
    resposta: "Mito",
    explicacao:
      "Mito! A ansiedade não é um 'defeito' que se resolve com força de vontade. Às vezes, é preciso ajuda para perceber o que está a acontecer e aprender a lidar com isso."
  },
  {
    texto: "Pessoas com ansiedade devem evitar situações desafiadoras.",
    resposta: "Mito",
    explicacao:
      "Mito! Evitar situações pode dar alívio temporário, mas aumenta a ansiedade a longo prazo. Enfrentar desafios, com apoio, ajuda a diminuir os sintomas."
  },
  {
    texto: "Pessoas ansiosas são sempre tímidas ou introvertidas.",
    resposta: "Mito",
    explicacao:
      "Mito! Pessoas extrovertidas também podem ter ansiedade — e às vezes escondem isso muito bem."
  },
  {
    texto: "A ansiedade não aparece do nada.",
    resposta: "Verdade",
    explicacao:
      "Verdade! Há sempre um gatilho — pode ser um pensamento, uma memória, um som, um lugar… mesmo que nem sempre seja fácil identificá-lo."
  },
  {
    texto: "Se controlo tudo à minha volta, não vou sentir ansiedade.",
    resposta: "Mito",
    explicacao:
      "Mito! Tentar controlar tudo pode aumentar a ansiedade. Aprender a aceitar o que não controlas é essencial para te sentires melhor."
  }
];

const VerdadeOuMito = () => {
  const [pagina, setPagina] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);
  

  const avancarPagina = () => {
    setRespostaSelecionada(null);
    setMostrarPopup(false);
    setPagina((prev) => prev + 1);
  };

  const retrocederPagina = () => {
    setRespostaSelecionada(null);
    setMostrarPopup(false);
    setPagina((prev) => prev - 1);
  };

  const selecionarResposta = (resposta) => {
    setRespostaSelecionada(resposta);
    setMostrarPopup(true);
  };

  const estaNaIntroducao = pagina === 0;
  const estaNaConclusao = pagina === afirmacoes.length + 1;
  const estaNaAfimacao = pagina >= 1 && pagina <= afirmacoes.length;

  const afirmacaoAtual = afirmacoes[pagina - 1];

  return (
    <div className="container-fluid vh-100 p-0 font-poppins">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-5 bg-white rounded shadow-sm">
            {estaNaIntroducao && (
              <div className="text-center py-4">
                <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>
                  Verdade ou Mito?
                </h4>
                <p className="lead mb-3">
                    Sê muito bem-vindo ou bem-vinda ao Verdade ou Mito?! <br></br>

                    Nesta atividade, terás a oportunidade de explorar diversas afirmações sobre a ansiedade. <br></br>

                    Para cada uma delas, deverás decidir se é verdade ou se se trata de um mito. <br></br>

                    Após a tua escolha, aparecerá uma explicação que te ajudará a entender melhor o que está por trás de cada afirmação.                
                </p>
                <button className="btn btn-primary px-4 py-2" onClick={avancarPagina}>
                  Vamos começar?
                </button>
              </div>
            )}

            {estaNaAfimacao && (
              <div className="text-center py-4">
                <h5 className="fw-bold mb-4">{afirmacaoAtual.texto}</h5>
                <div className="d-flex justify-content-center gap-4 mb-4">
                  <button
                    className="btn btn-outline-success"
                    disabled={respostaSelecionada !== null}
                    onClick={() => selecionarResposta("Verdade")}
                  >
                    Verdade
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    disabled={respostaSelecionada !== null}
                    onClick={() => selecionarResposta("Mito")}
                  >
                    Mito
                  </button>
                </div>

                {mostrarPopup && (
                  <div className="alert alert-info mt-3" role="alert">
                    {afirmacaoAtual.explicacao}
                  </div>
                )}

                <div className="d-flex justify-content-between mt-4">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={retrocederPagina}
                    disabled={pagina === 0}
                  >
                    Anterior
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={avancarPagina}
                    disabled={!mostrarPopup}
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {estaNaConclusao && (
              <div className="text-center py-4">
                <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>
                  Conclusão da Atividade
                </h4>
                <p className="lead mb-3">
                  Boa! Chegaste ao fim desta atividade — e isso já é um passo muito importante!
                </p>
                <p>
                  Ao longo desta atividade, percebemos que há muitas ideias erradas sobre a ansiedade, e que esses mitos podem dificultar o entendimento do que estamos a viver.
                </p>
                <p>
                  Quando aprendemos a identificar e desconstruir esses mitos, damos passos importantes para melhorar o nosso bem-estar.
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                    Anterior
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

export default VerdadeOuMito;
