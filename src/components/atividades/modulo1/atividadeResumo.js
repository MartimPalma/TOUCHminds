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
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [userChoices, setUserChoices] = useState({
    0: null, // Chegada ao Clube
    1: null, // Durante a primeira atividade
    2: null  // Após a atividade
  });
  
  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const modulo = modulos.find((m) => m.id === moduloId);
  const atividade = modulo?.atividades.find(a => a.url === "atividade-resumo");

  // Debug user choices with console.log
  useEffect(() => {
    console.log("Current userChoices state:", userChoices);
  }, [userChoices]);

  const avancarPagina = () => setPagina((prev) => prev + 1);
  const retrocederPagina = () => setPagina((prev) => prev - 1);

  const progresso = Math.round((pagina / 7) * 100);

  const handleHashtagChange = (index, value) => {
    const newHashtags = [...hashtags];
    newHashtags[index] = value;
    setHashtags(newHashtags);
  };

  const handleOptionClick = (feedbackImage, option, questionIndex) => {
    console.log("Option clicked:", option);
    console.log("For question index:", questionIndex);
    
    setModalContent(feedbackImage);
    setShowModal(true);
    setSelectedOption(option.text.substring(0, 20)); // Store abbreviated version to identify selection
    
    // Store user choice for the current question (store the entire option object)
    setUserChoices(prev => {
      const newChoices = {
        ...prev,
        [questionIndex]: option
      };
      console.log("Updated userChoices:", newChoices);
      return newChoices;
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Quiz content for pages 2, 3, and 4
  const quizPages = [
    {
      title: "Chegada ao Clube",
      questionImage: "/imgs/resumo_1.png",
      options: [
        {
          text: "Decidir aproximar-se de um grupo e iniciar uma conversa, mesmo sentindo algum desconforto.",
          feedbackImage: "/imgs/resumo_1_1.png",
          feedback: "A Sara respira fundo e, com o coração acelerado, aproxima-se de um grupo que está a falar sobre o teatro. No início, a voz sai um pouco trémula, mas aos poucos vai-se sentindo mais confortável. Os outros colegas sorriem e fazem perguntas, o que a faz sentir-se mais integrada. A ansiedade começa a diminuir conforme vai participando na conversa.",
          summary: "Sara decide aproximar-se de um grupo e iniciar uma conversa. Com o tempo, sente-se mais confortável e a ansiedade diminui."
        },
        {
          text: "Ficar próxima da porta, a observar os outros antes de decidir onde se sentar.",
          feedbackImage: "/imgs/resumo_1_2.png",
          feedback: "A Sara opta por não se apressar. Fica encostada à parede, observando e ouvindo as conversas, tentando perceber o ambiente antes de se juntar a alguém. Isso permite-lhe acalmar-se um pouco, mas também a faz sentir-se mais distante dos colegas que já estão a socializar.",
          summary: "Sara fica próxima da porta, observando. Sente-se mais calma, mas um pouco distante dos colegas."
        },
        {
          text: "Ficar num canto, a fingir que está no telemóvel para parecer ocupada.",
          feedbackImage: "/imgs/resumo_1_3.png",
          feedback: "A Sara pega no telemóvel e finge enviar mensagens, evitando olhar para os colegas. Isso diminui temporariamente a ansiedade, mas não a ajuda a integrar-se no grupo. Conforme os minutos passam, começa a sentir-se mais isolada, como se estivesse a perder a oportunidade de se relacionar com os outros.",
          summary: "Sara finge estar ocupada no telemóvel, o que diminui a ansiedade temporariamente, mas faz sentir-se mais isolada."
        }
      ]
    },
    {
      title: "Durante a primeira atividade",
      questionImage: "/imgs/resumo_2.png",
      options: [
        {
          text: "Aceitar o desafio e participar, mesmo com a voz um pouco trémula.",
          feedbackImage: "/imgs/resumo_2_1.png",
          feedback: "Com a respiração acelerada, a Sara decide tentar. Sobe ao palco com as mãos a tremer e começa a improvisar. No início, sente-se inquieta, mas à medida que continua, nota que os colegas estão a prestar atenção com curiosidade e não com julgamento. A ansiedade começa a diminuir à medida que se envolve mais com a atividade.",
          summary: "Sara aceita o desafio da improvisação. No início, está ansiosa, mas à medida que continua a ansiedade diminui."
        },
        {
          text: "Sugerir começar com uma parte mais pequena e deixar a improvisação completa para outra pessoa.",
          feedbackImage: "/imgs/resumo_2_2.png",
          feedback: "A Sara sente que não está preparada para fazer uma improvisação longa e decide sugerir que o papel seja dividido. Participa num pequeno segmento, o que reduz a ansiedade, mas também a impede que se envolva totalmente na atividade, deixando alguma ansiedade presente.",
          summary: "Sara sugere uma intervenção mais pequena. Participa um pouco, reduzindo a pressão, mas não se envolve totalmente, deixando alguma ansiedade presente."
        },
        {
          text: "Recusar educadamente, dizendo que prefere observar os outros por enquanto.",
          feedbackImage: "/imgs/resumo_2_3.png",
          feedback: "A Sara diz ao professor que não se sente pronta para participar e pede para observar. Sente um alívio momentâneo, mas à medida que vê os outros a participar, surge um sentimento de culpa por não ter tentado, o que faz com que a ansiedade e a frustração aumentem ligeiramente.",
          summary: "Sara recusa participar e prefere observar. Sente alívio momentâneo, mas depois sente culpa e frustração por não ter tentado."
        }
      ]
    },
    {
      title: "Após a atividade",
      questionImage: "/imgs/resumo_3.png",
      options: [
        {
          text: "Aceitar e combinar ensaiar com eles.",
          feedbackImage: "/imgs/resumo_3_1.png",
          feedback: "Apesar da ansiedade, a Sara decide aceitar o convite. Durante o ensaio, começa a sentir-se mais à vontade, fazendo novas amizades e percebendo que os outros também têm os seus momentos de ansiedade. A ansiedade diminui e sente-se mais integrada.",
          summary: "Sara aceita ensaiar com os colegas. Aos poucos, faz amizades e sente-se mais à vontade e integrada no grupo, com a ansiedade reduzida."
        },
        {
          text: "Dizer que está um pouco ocupada, mas que vai tentar aparecer no próximo ensaio",
          feedbackImage: "/imgs/resumo_3_2.png",
          feedback: "A Sara agradece o convite, mas diz que tem de ficar para uma próxima porque agora precisa de ir para casa. Embora mantenha uma porta aberta para futuras interações, sente que perdeu uma oportunidade de se aproximar do grupo, e a ansiedade por não ter participado permanece.",
          summary: "Sara agradece, mas diz que está ocupada e promete tentar na próxima vez. Sente que perdeu uma oportunidade de aproximar dos colegas e a ansiedade permanece."
        },
        {
          text: "Recusar e ir para casa rapidamente.",
          feedbackImage: "/imgs/resumo_3_3.png",
          feedback: "A Sara diz que não vai poder e sai rapidamente, sentindo um alívio imediato por não ter de interagir mais naquele dia. No entanto, ao chegar a casa, fica com a sensação de que se afastou ainda mais do grupo e teme que a próxima aula seja ainda mais desafiante.",
          summary: "Sara recusa e vai para casa rapidamente, sentindo alívio imediato. No entanto, depois, sente que se afastou ainda mais do grupo."
        }
      ]
    }
  ];

  // Modal component
  const Modal = ({ show, onClose, content }) => {
    if (!show) return null;
    
   return (
      <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header fw-bold" style={{ color: "black" }}>
              <h5 className="modal-title">Resultado da tua escolha</h5>
            </div>
            <div className="modal-body pt-4 ps-4 pe-4 text-center">
              <img 
                src={content} 
                alt="Resultado da escolha" 
                className="img-fluid"
                style={{ maxWidth: "400px", height: "auto" }}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => {
                onClose();
                avancarPagina();
              }}>Prosseguir</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Debug function to check if an option is selected
  const isOptionSelected = (pageIdx, option) => {
    console.log(`Checking if option is selected for page ${pageIdx}:`, option);
    console.log(`Current selection:`, userChoices[pageIdx]);
    
    if (!userChoices[pageIdx]) return false;
    
    // Compare text values as a simple way to compare objects
    return userChoices[pageIdx].text === option.text;
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
                        Sê muito bem-vindo ou bem-vinda à atividade resumo do Módulo 1 – 'Ansiedade NÃO é Bicho Papão!'. 
                        O objetivo desta atividade é consolidar os conteúdos que explorámos ao longo do módulo. Imagina que és tu que estás
                        na situação que te vou apresentar, e seleciona a opção que melhor representa a forma como te irias comportar nessa situação.
                        Cada escolha representará um comportamento e influenciará como a personagem lida com a ansiedade e se relaciona com os outros.
                        Este exercício é uma oportunidade para refletires sobre como os teus comportamentos e escolhas podem moldar as tuas 
                        experiências em momentos de ansiedade e em interações sociais. Vamos a isto!
                      </p>
                      <button className="btn btn-primary mt-3 px-4 py-2" onClick={avancarPagina}>
                        <i className="bi bi-play-fill me-2"></i>Vamos a isto?
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {pagina === 1 && (
                <div className="text-center py-4">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <img 
                        src="/imgs/resumo_0.png" 
                        alt="O Primeiro Dia no Clube de Teatro" 
                        className="img-fluid mb-4"
                        style={{ maxWidth: "400px", height: "auto" }}
                      />
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                          <i className="bi bi-arrow-left me-2"></i>Anterior
                        </button>
                        <button className="btn btn-primary" onClick={avancarPagina}>
                          Próximo<i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* QUIZ PAGES (1-3) */}
              {pagina >= 2 && pagina <= 4 && (
                <>
                  <h4 className="fw-bold mb-3" style={{ color: "#234970" }}>{quizPages[pagina-2].title}</h4>
                  <div className="mb-4">
                    {/* Display question image */}
                    <div className="text-center mb-4">
                      <img 
                        src={quizPages[pagina-2].questionImage} 
                        alt={`Pergunta ${pagina-1}`}
                        className="img-fluid"
                        style={{ maxWidth: "300px", height: "auto" }}
                      />
                    </div>
                    
                    {/* Display option images as clickable buttons */}
                    <div className="d-flex flex-column gap-3">
                      {quizPages[pagina-2].options.map((option, index) => {
                        const isSelected = userChoices[pagina-2] && userChoices[pagina-2].text === option.text;
                        console.log(`Option ${index} selected:`, isSelected);
                        
                        return (
                          <button 
                            key={index} 
                            className={`btn ${isSelected ? 'btn-primary' : 'btn-outline-secondary'} text-${isSelected ? 'white' : 'dark'} p-3 text-start`} 
                            onClick={() => handleOptionClick(option.feedbackImage, option, pagina-2)}
                          >
                            {option.text}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                   <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-secondary" onClick={retrocederPagina}>
                          <i className="bi bi-arrow-left me-2"></i>Anterior
                        </button>
                        <button className="btn btn-primary" onClick={avancarPagina}>
                          Próximo<i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      </div>
                </>
              )}
              
              {/* QUIZ PAGE 5 - ADDITIONAL CONTENT */}
              {pagina === 5 && (
                <>
                  <h4 className="fw-bold mb-3" style={{ color: "#234970" }}>Conclusão da atividade</h4>
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <p className="lead">
                        Espero que esta atividade tenha sido útil e que te tenha permitido refletir sobre a tua própria forma de 
                        lidar com a ansiedade. Assim como a Sara, todos nós tomamos decisões todos os dias que moldam as nossas 
                        experiências e as nossas interações com os outros. Mesmo quando estamos ansiosos, as escolhas que fazemos
                         têm impacto na forma como vivemos e superamos esses momentos. Embora evitar situações possa trazer alívio
                          temporário, isso pode tornar mais difícil lidar com elas no futuro. Enfrentar o desconforto pode não só 
                          ajudar-te a criar relações novas, mas também a reduzir a ansiedade ao longo do tempo. Lembra-te: a 
                          ansiedade é algo comum e todos nós a sentimos. Ao enfrentar os desafios e praticar novas formas de agir,
                           poderás fortalecer as tuas relações e melhorar a forma como te vês e te sentes contigo mesmo/a.
                      </p>
                      <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={avancarPagina}>
                          Próximo<i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {pagina === 6 && (
                <>
                  <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Tabela Resumo</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead style={{ backgroundColor: "#99CBC8" }}>
                        <tr>
                          <th style={{ width: "20%",  backgroundColor: "#99CBC8"  }}>Cenário</th>
                          <th style={{ width: "26.6%",  backgroundColor: "#99CBC8"  }}>Opção A</th>
                          <th style={{ width: "26.6%", backgroundColor: "#99CBC8"  }}>Opção B</th>
                          <th style={{ width: "26.6%", backgroundColor: "#99CBC8"  }}>Opção C</th>
                        </tr>
                      </thead>
                      <tbody>
                        {quizPages.map((page, idx) => {
                          console.log(`Rendering row for page ${idx}`);
                          console.log(`Current choice for this page:`, userChoices[idx]);
                          
                          return (
                            <tr key={idx}>
                              <td style={{ backgroundColor: "#99CBC8", fontWeight: "bold", verticalAlign: "middle" }}>{page.title}</td>
                              {page.options.map((option, optIdx) => {
                                // Check if this option was selected
                                const isSelected = userChoices[idx] && userChoices[idx].text === option.text;
                                console.log(`Row ${idx}, Option ${optIdx} selected:`, isSelected);
                                
                                return (
                                  <td 
                                    key={optIdx} 
                                    style={{ 
                                      position: "relative",
                                      verticalAlign: "middle"
                                    }}
                                  >
                                    {isSelected && (
                                      <div style={{ 
                                        textDecoration: "underline", 
                                        fontWeight: "bold",
                                        marginBottom: "5px" 
                                      }}>
                                        A tua escolha:
                                      </div>
                                    )}
                                    {option.summary}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
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
      
      {/* Modal for option feedback */}
      <Modal 
        show={showModal} 
        onClose={closeModal} 
        content={modalContent} 
      />
    </div>
  );
};

export default AtividadeResumo;