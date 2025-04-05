import React from "react";

import { useNavigate } from "react-router-dom";

import { Accordion } from "react-bootstrap";
import logo from "../imgs/logositeazul.png"; 
import cerebro from "../imgs/cerebro.png"; 
import { FaArrowDown } from 'react-icons/fa';  // Importando o ícone de seta para baixo da FontAwesome
import mod1 from "../imgs/module1.jpg";
import mod2 from "../imgs/module1.jpg";
import mod3 from "../imgs/module1.jpg";
import mod4 from "../imgs/module1.jpg";
import mod5 from "../imgs/module1.jpg";
import mod6 from "../imgs/module1.jpg";



const LandingPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  }

  return (
    <div>
      {/* validar tamanho de letra */}
      <img src={logo} alt="TOUCHminds Logo" className="mt-4 mx-auto d-block" style={{ width: "10%" }}/>
        <section className="container py-5 d-flex align-items-center ">
          <div className="text-center text-md-start w-50">
            <h1 className="fw-bold font-poppins py-4" style={{ color: "#99CBC8" }}>Procurar ajuda é o começo da mudança!</h1>
            <p className="text-muted mt-4 font-lato py-4"> O TOUCHminds oferece um programa online gratuito destinado a ajudar os adolescentes a compreender a ansiedade e a promover a procura de ajuda. O acesso está atualmente disponível em escolas selecionadas da região norte. </p>
            <div className="py-5">
              <button 
                className="btn btn-primary mt-4 font-poppins fw-bold py-2" 
                style={{ backgroundColor: "#E7C8C2", borderColor: "#E7C8C2" , color: "#234970"}}
                onClick={handleClick}>
                  Começar AGORA
              </button>
            </div>
          </div>
          <div className="w-50 text-center">
            <img src={cerebro} alt="Brain Illustration" className="img-fluid w-50" />
          </div>
        </section>  

        <div className="text-center pb-5" style={{ color: "#234970" }}>
          <FaArrowDown className="arrow-down" />
        </div>


        
        <section 
          className="py-5 justify-content-center text-start" 
          style={{ 
            backgroundColor: "#99CBC8", 
            color: "white", 
            minHeight: "380px", 
            overflow: "hidden" 
          }}
        >
          <div className="container">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="font-poppins">O que é?</Accordion.Header>
                <Accordion.Body className="font-lato">
                  O TOUCHminds é um programa online e gratuito, criado para promover a compreensão das dificuldades relacionadas com a ansiedade e a procura de ajuda quando necessário. Cada adolescente pode percorrer cada um dos seis módulos interativos ao seu ritmo, com conteúdos como vídeos, atividades interativas e práticas.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="font-poppins">A quem se dirige?</Accordion.Header>
                <Accordion.Body style={{ color: "white" }}>
                  A adolescentes dos 15 aos 17 anos que sentem que a ansiedade afeta a sua vida e desejam compreendê-la melhor, refletindo sobre estratégias para superar obstáculos na procura de ajuda e promover essa procura.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="font-poppins">Como funciona?</Accordion.Header>
                <Accordion.Body>
                  A plataforma oferece conteúdo de acesso livre, disponível para os participantes das escolas selecionadas no norte do país. Para aceder ao programa TOUCHminds, é necessário efetuar um registo.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

            
          <section className="container py-5">
            <h2 className="text-center text-primary fw-bold mb-4">Espreita os Módulos!</h2>
            <div className="row mt-4">
              <div className="col-md-4 mb-4">
                <div className="card shadow-lg border-0 rounded-4">
                  <img src={mod1} alt="Módulo 1" className="card-img-top rounded-4"/>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#234970" }}><span className="fs-6">Módulo 1</span> – Ansiedade NÃO é bicho-papão!</h5>
                    <p className="card-text text-muted">A ansiedade é normal! Aprende a diferenciar entre uma ansiedade comum e uma ansiedade SOS que causa sofrimento, compreendendo melhor as emoções e o impacto delas no dia a dia.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-lg border-0 rounded-4">
                  <img src={mod1} alt="Módulo 2" className="card-img-top rounded-4"/>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#234970" }}><span className="fs-6">Módulo 2</span> – Desmistificar a Ansiedade!</h5>
                    <p className="card-text text-muted">Nem tudo o que dizem sobre a ansiedade é verdade! Descobre os mitos, entende como o estigma pode atrapalhar e aprende a ver a ansiedade sem medo e sem julgamentos.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-lg border-0 rounded-4">
                  <img src={mod1} alt="Módulo 3" className="card-img-top rounded-4"/>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#234970" }}><span className="fs-6">Módulo 3</span> – Sê Amigo de Ti Mesmo!</h5>
                    <p className="card-text text-muted">O que dizes a ti próprio faz a diferença! Aprende a reconhecer o impacto do autocriticismo e descobre como a autocompaixão pode ser uma aliada no teu bem-estar.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-lg border-0 rounded-4">
                  <img src={mod1} alt="Módulo 4" className="card-img-top rounded-4"/>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#234970" }}><span className="fs-6">Módulo 4</span> – O Poder da Mudança!</h5>
                    <p className="card-text text-muted">A mudança faz parte da vida! Explora os diferentes estádios da mudança, aprende a definir objetivos realistas e descobre como pequenos passos podem fazer uma grande diferença.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-lg border-0 rounded-4">
                  <img src={mod1} alt="Módulo 5" className="card-img-top rounded-4"/>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#234970" }}><span className="fs-6">Módulo 5</span> – Reviravolta em Rede!</h5>
                    <p className="card-text text-muted">Pedir ajuda não é sinal de fraqueza! Aprende a identificar sinais de alerta, a diferenciar entre os vários tipos de ajuda e a reconhecer a importância da ajuda das pessoas mais próximas.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-lg border-0 rounded-4">
                  <img src={mod1} alt="Módulo 6" className="card-img-top rounded-4"/>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#234970" }}><span className="fs-6">Módulo 6 –</span> Um Novo Começo!</h5>
                    <p className="card-text text-muted">E como funciona a ajuda formal? Descobre os sinais que indicam que podes precisar de ajuda formal, conhece o papel do psicólogo e explora os recursos disponíveis para o próximo passo.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-start py-5 ps-5" style={{ backgroundColor: "#E7C8C2", color: "#234970" }}>
            <p className="fs-2 ms-5 fw-semibold font-poppins">Dá o primeiro passo para o teu bem-estar mental!</p>
            <p className="mb-5 ms-5 fs-3 mt-2 font-poppins">Regista-te agora no TOUCHminds!</p>
            <div className="d-flex ms-5 mt-4">
              <button
                className="btn btn-lg me-3 font-poppins"
                style={{
                  backgroundColor: "#99CBC8",
                  color: "white",
                  border: "none",
                  transition: "background-color 0.3s",
                }}
                onClick={handleSignUpClick}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#81b2ad"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#99CBC8"}
              >
                Sign up
              </button>
              <button
                className="btn btn-lg font-poppins"
                style={{
                  backgroundColor: "#C8C2AF",
                  color: "white",
                  border: "none",
                  transition: "background-color 0.3s",
                }}
                onClick={handleClick}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#a59b88"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#C8C2AF"}
              >
                Log in
              </button>
            </div>
          </section>


      
      <footer className="text-white text-center py-3" style={{ backgroundColor: "#99CBC8" }}>
        <p>Copyright © 2025 TOUCHminds®. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
