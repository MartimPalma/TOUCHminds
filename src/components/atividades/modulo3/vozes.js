import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import AtividadeProgressao from "../atividadeProgressao";

const AtividadeVozCritica = () => {
  const [pagina, setPagina] = useState(0);
  const [vozCritica, setVozCritica] = useState("");
  const [vozCompassiva, setVozCompassiva] = useState("");
  const [mostrarErro, setMostrarErro] = useState(false);
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const avancarPagina = () => {
    // Validação para a página de reflexão (página 10)
    if (pagina === 10) {
      if (!vozCritica.trim() || !vozCompassiva.trim()) {
        setMostrarErro(true);
        return;
      }
      setMostrarErro(false);
    }
    setPagina((prev) => prev + 1);
  };
  
  const retrocederPagina = () => setPagina((prev) => prev - 1);

  const progresso = Math.round((pagina / 12) * 100);

  const imagens = [
    null, // Página 0: instrução
    "/imgs/modulo3/vozes/vozes1.png",
    "/imgs/modulo3/vozes/vozes2.png",
    "/imgs/modulo3/vozes/vozes3.png",
    "/imgs/modulo3/vozes/vozes4.png",
    "/imgs/modulo3/vozes/vozes5.png",
    "/imgs/modulo3/vozes/vozes6.png",
    "/imgs/modulo3/vozes/vozes7.png",
    "/imgs/modulo3/vozes/vozes8.png",
    "/imgs/modulo3/vozes/vozes9.png",
    null,
    null, // Reflexão
    null  // Conclusão
  ];

  const textos = [
    // Página 0: Introdução
    <>
      <p className="mb-3"><strong>A Voz Crítica E A Voz Compassiva</strong></p>
      <p>Sê muito bem-vindo ou bem-vinda à Banda Desenhada da Voz Crítica e da Voz Compassiva!</p>
      <p>Nesta banda desenhada, vais acompanhar duas personagens e perceber como a voz crítica pode afetar negativamente o nosso bem-estar, as nossas relações com os outros e a nossa capacidade de pedir ajuda.</p>
      <p>Por outro lado, vais ver como a voz compassiva pode transformar essa experiência, trazendo compreensão, cuidado e aceitação.</p>
      <p>Para isso, lê com atenção os quadros da banda desenhada e a sua descrição.</p>
      <p>No final da atividade, vais refletir sobre a tua própria voz crítica e voz compassiva. Vais ser convidado/a a pensar no que a tua voz crítica costuma dizer-te nos momentos difíceis e em como poderias responder a ela com mais gentileza e compreensão.</p>
      <p>Vamos a isto?</p>
    </>,
    // Página 1
    <>Vamos falar sobre algo que nos afeta a todos: aquilo a que chamamos de autocriticismo. Muitas vezes, sem perceber, tornamo-nos os nossos piores inimigos. O autocriticismo é aquela voz interna que só vê os nossos erros e falhas, sem olhar para o que fazemos bem. Isso pode afetar profundamente a forma como nos sentimos e como nos relacionamos com os outros.</>,
    // Página 2
    <>Quando ouvimos esta voz crítica, começamos a acreditar que as nossas falhas nos definem. O autocriticismo pode criar uma sensação constante de insuficiência, como se não fôssemos bons o suficiente. Ele pode trazer vergonha, ansiedade, tristeza e insegurança, fazendo-nos sentir distantes dos outros, mesmo quando não é verdade. Esses pensamentos podem fazer-nos duvidar de nós mesmos, criando uma barreira entre o que sentimos e o que realmente somos.</>,
    // Página 3
    <>O autocriticismo pode afetar também as nossas relações com os outros. Podemos sentir-nos em desvantagem em relação aos outros, como se estivéssemos sempre a falhar ou a dececioná-los. Começamos a acreditar que ninguém vai gostar de nós ou que estamos constantemente a ser rejeitados. Isso cria uma sensação de isolamento, onde evitamos situações sociais, pensando que não temos valor.</>,
    // Página 4
    <>Quando estamos afundados no autocriticismo, acreditamos que devemos enfrentar tudo sozinhos. Pensamos que nos mostrarmos vulneráveis é sinal de fraqueza ou que não somos dignos de cuidado, o que nos impede de pedir ajuda. Quando sentimos que não somos bons o suficiente, é mais fácil isolarmo-nos, achando que os outros vão acabar por se afastar. Isso cria um ciclo de solidão, onde nos sentimos rejeitados, mesmo quando não estamos a ser rejeitados de verdade.</>,
    // Página 5
    <>Uma alternativa ao autocriticismo é a autocompaixão. A autocompaixão é a capacidade de sermos gentis e compreensivos connosco mesmos nos momentos difíceis. Em vez de nos criticarmos, é sermos capazes de reconhecer o nosso sofrimento e, perante ele, adotarmos uma atitude de cuidado e bondade, reconhecendo que todos temos falhas e que isso não nos torna menos merecedores de compreensão e apoio.</>,
    // Página 6
    <>A autocompaixão não significa ignorar os nossos erros, mas sim olharmos para eles com compreensão e vontade de melhorar. Ao praticá-la, criamos um ambiente interno seguro e positivo, onde podemos aprender, em vez de nos criticarmos. Esta nova forma de nos tratarmos a nós mesmos é essencial para o nosso bem-estar. Cada vez que enfrentamos uma situação difícil, temos a oportunidade de escolher a forma como falamos connosco.</>,
    // Página 7
    <>Quando praticamos a autocompaixão, as nossas relações com os outros também melhoram. Ao sermos mais gentis connosco, podemos ser mais genuínos nas nossas interações. Isso faz com que as nossas amizades e conexões se tornem mais autênticas, porque não estamos a tentar esconder as nossas imperfeições. A autocompaixão não só nos faz mais compreensivos connosco, como também nos ajuda a receber o carinho e apoio que merecemos.</>,
    // Página 8
    <>A autocompaixão também significa saber pedir ajuda quando necessário. Quando reconhecemos o nosso sofrimento e aceitamos que precisamos de ajuda, estamos a dar o primeiro passo para o nosso bem-estar. Todos merecemos cuidar de nós mesmos e procurar ajuda quando precisamos.</>,
    // Página 9
    <>A voz crítica pode sempre estar por perto, mas não define quem somos. Ela faz parte de nós, mas não é a nossa verdade. Quando começamos a reconhecê-la e a perceber de onde vem, podemos começar a construir uma relação mais saudável connosco — uma relação baseada na aceitação, no cuidado e no respeito por quem somos.</>,
    // Página 10 - Reflexão
    <>
      <h4>Vamos refletir!</h4>
      <p>Pensa no pensamento mais comum que a tua voz crítica te diz e escreve uma resposta mais gentil e acolhedora.</p>
      {mostrarErro && (
        <div className="alert alert-danger" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Por favor, preenche ambos os campos antes de avançar.
        </div>
      )}
      <label>O que é que a tua voz crítica te costuma dizer nos momentos difíceis?</label>
      <textarea 
        required 
        className="form-control mb-3" 
        placeholder="Exemplo: Nunca faço nada de jeito"
        value={vozCritica}
        onChange={(e) => {
          setVozCritica(e.target.value);
          if (mostrarErro) setMostrarErro(false);
        }}
      ></textarea>
      <label>Como poderias responder a essa voz com mais gentileza e compreensão?</label>
      <textarea 
        required 
        className="form-control mb-3" 
        placeholder="Exemplo: Eu sei que te sentes desapontado..."
        value={vozCompassiva}
        onChange={(e) => {
          setVozCompassiva(e.target.value);
          if (mostrarErro) setMostrarErro(false);
        }}
      ></textarea>
    </>,
    // Página 11 - Conclusão
    <>
      <h4>Conclusão da atividade!</h4>
      <p>Ao longo desta atividade, tiveste a oportunidade de refletir sobre como as nossas vozes internas podem impactar o nosso bem-estar, as nossas relações com os outros e a nossa capacidade de pedir ajuda.</p>
      <p>A voz crítica, muitas vezes, pode ser muito severa, levando-nos a duvidar de nós mesmos e a sentir que não somos bons o suficiente.</p>
      <p>Mas, como vimos, a voz compassiva nos oferece uma maneira diferente de lidar com os desafios da vida — com gentileza, compreensão e aceitação.</p>
      <p>Ao praticarmos a autocompaixão, começamos a cultivar um espaço interno mais saudável, onde podemos aprender com os nossos erros e sermos mais genuínos e felizes nas nossas relações.</p>
      <p>Agora que refletiste sobre a tua própria voz crítica e voz compassiva, lembra-te: todas as vozes fazem parte de ti, mas a forma como escolhes ouvi-las e responder-lhes pode mudar a forma como te sentes e te relacionas com o mundo à tua volta.</p>
      <p>Escolher ser mais compassivo contigo mesmo/a é um passo importante para o teu bem-estar.</p>
    </>
  ];

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
            {imagens[pagina] && (
              <div className="text-center mb-4">
                <img
                  src={imagens[pagina]}
                  alt={`Página ${pagina}`}
                  className="img-fluid"
                  style={{ maxWidth: "400px", height: "auto" }}
                />
              </div>
            )}
            <div className="mb-4">{textos[pagina]}</div>
            <div className="d-flex justify-content-between">
              {pagina > 0 && (
                <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                  <i className="bi bi-arrow-left me-2"></i>Anterior
                </button>
              )}
              {pagina < 11 ? (
                <button className="btn btn-primary" onClick={avancarPagina}>
                  Próximo<i className="bi bi-arrow-right ms-2"></i>
                </button>
              ) : (
                <AtividadeProgressao
                  moduloId={moduloId}
                  atividadeIndex={0}
                  updateUserData={updateUserData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtividadeVozCritica;