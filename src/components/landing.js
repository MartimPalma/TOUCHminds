import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FaArrowDown } from 'react-icons/fa';
import logo from "../imgs/logositeazul.png";
import cerebro from "../imgs/cerebro.png";
import Footer from "./footer";
import ModuleCard from "./moduleCardLanding";
import mod1 from "../imgs/module1.jpg";
import mod2 from "../imgs/module2.jpg";
import mod3 from "../imgs/module3.jpg";
import mod4 from "../imgs/module4.jpg";
import mod5 from "../imgs/module5.jpg";
import mod6 from "../imgs/module6.jpg";


import Login from "./login";
import Signup from "./signup";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleOpenLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleOpenSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleClosePopups = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {(showLogin || showSignup) && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 1000,
          }}
          onClick={handleClosePopups}
        />
      )}

      {showLogin && (
        <div
          className="position-fixed top-50 start-50 translate-middle"
          style={{ zIndex: 1050, width: "100%", maxWidth: "500px" }}
        >
          <Login
            onClose={handleClosePopups}
            onSwitchToSignup={handleOpenSignup}
          />
        </div>
      )}

      {showSignup && (
        <div
          className="position-fixed top-50 start-50 translate-middle"
          style={{ zIndex: 1050, width: "100%", maxWidth: "500px" }}
        >
          <Signup
            onClose={handleClosePopups}
            onSwitchToLogin={handleOpenLogin}
          />
        </div>
      )}

      <img src={logo} alt="TOUCHminds Logo" className="mt-4 mx-auto d-block" style={{ width: "10%" }} />

      {/* Hero */}
      <section className="container py-5 d-flex align-items-center ">
        <div className="text-center text-md-start w-50">
          <h1 className="fw-bold font-poppins py-4" style={{ color: "#99CBC8", fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
            Procurar ajuda é o começo da mudança!
          </h1>
          <p className="text-muted mt-4 font-lato py-4">
            O TOUCHminds oferece um programa online gratuito destinado a ajudar os adolescentes a compreender a ansiedade e a promover a procura de ajuda.
          </p>
          <div className="py-4 ">
            <div className="py-4">
              <button
                className="btn btn-lg font-poppins fw-bold py-3 px-5"
                style={{
                  backgroundColor: "#E7C8C2",
                  borderColor: "#E7C8C2",
                  color: "#234970",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s",
                }}
                onClick={handleOpenSignup}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Começa a tua jornada agora
              </button>
            </div>


          </div>
        </div>
        <div className="w-50 text-center">
          <img src={cerebro} alt="Brain Illustration" className="img-fluid w-50" />
        </div>
      </section>

      <div className="text-center pb-4" style={{ color: "#234970" }}>
        <a href="#faq" style={{ textDecoration: "none", color: "#234970" }}>
          <FaArrowDown className="arrow-down" />
        </a>
      </div>

      {/* FAQ */}
      <section className="py-5 text-start" style={{ backgroundColor: "#99CBC8", color: "white", minHeight: "380px" }}>
        <div className="container" id="faq">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="font-poppins">O que é?</Accordion.Header>
              <Accordion.Body className="font-lato">
                O TOUCHminds é um programa online e gratuito, criado para promover a procura de ajuda nos adolescentes que lidam com dificuldades relacionadas com a
                ansiedade. Sabemos que, muitas vezes, a dificuldade em pedir ajuda vem da falta de conhecimento sobre saúde mental, do medo de ser julgado ou até da ideia
                de que as nossas emoções não são importantes e que sou capaz de lidar com elas sozinho/a. Este programa foi desenvolvido para mudar essa realidade.
                <br />
                O programa vai ajudar-te a:
                <ul style={{ marginTop: "0px" }}>
                  <li>Compreender melhor a tua ansiedade. </li>
                  <li>Refletir sobre como superar os obstáculos que te impedem de pedir ajuda.</li>
                  <li>Encorajar-te a procurar ajuda sempre que for necessário.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="font-poppins">A quem se dirige?</Accordion.Header>
              <Accordion.Body>
                O TOUCHminds destina-se a adolescentes dos 15 aos 17 anos que sentem que a ansiedade tem impacto na sua vida. Atualmente, o programa está disponível para
                participantes das escolas selecionadas no norte do país, sendo necessário efetuar um registo na plataforma para aceder ao programa.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="font-poppins">Como funciona?</Accordion.Header>
              <Accordion.Body>
               <ul style={{ marginTop: "0px" }}>
                  <li>É 100% online e gratuito.</li>
                  <li>Composto por seis módulos interativos com vídeos, áudios, imagens e atividades interativas.</li>
                  <li>O programa adapta-se à tua rotina, para que possas fazê-lo ao teu ritmo.</li>
                  <li>Oferece privacidade total e recursos personalizados.</li>
                  <li>Inclui três sessões com um psicólogo, online e síncronos.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>

      {/* Módulos */}
      <section className="container py-5">
        <h2 className="text-start font-poppins fw-bold mb-4" style={{ color: "#234970" }}>
          Espreita os Módulos!
        </h2>
        <div className="row mt-4">
          <ModuleCard image={mod1} title="Módulo 1" subtitle="Ansiedade NÃO é bicho-papão!" description="Descobre porque a ansiedade não é um monstro: diferencia ansiedade comum de SOS, reconhece como te afeta e as suas consequências. " />
          <ModuleCard image={mod2} title="Módulo 2" subtitle="Desmistificar a Ansiedade!" description="Desmistifica a ansiedade: percebe o impacto do estigma e aprende a separar factos de mitos." />
          <ModuleCard image={mod3} title="Módulo 3" subtitle="Sê Amigo de Ti Mesmo!" description="Examina como o autocriticismo te trava e descobre a autocompaixão como superpoder para cuidares melhor de ti." />
          <ModuleCard image={mod4} title="Módulo 4" subtitle="O Poder da Mudança!" description="Explora as fases da mudança, avalia prós e contras de novos comportamentos e desenvolve confiança para dares pequenos passos." />
          <ModuleCard image={mod5} title="Módulo 5" subtitle="Reviravolta em Rede!" description="Identifica sinais de ansiedade, explora terapias baseadas em evidência e aprende a distinguir diferentes fontes de ajuda." />
          <ModuleCard image={mod6} title="Módulo 6" subtitle="Um Novo Começo!" description="Conhece o papel do psicólogo, compreende as etapas da psicoterapia e explora recursos disponíveis para pedires ajuda sempre que precisares." />
        </div>
      </section>

      {/* Call to Action 
      <section className="text-start py-5 ps-5" style={{ backgroundColor: "#E7C8C2", color: "#ffffff" }}>
        <p className="fs-2 ms-5 fw-semibold font-poppins">Dá o primeiro passo para o teu bem-estar mental!</p>
        <p className="mb-5 ms-5 fs-3 mt-2 font-poppins" style={{ color: "#234970" }}>Regista-te agora no TOUCHminds!</p>
        <div className="d-flex ms-5 mt-4 mb-2">
          <button
            className="btn btn-lg me-3 font-poppins fw-semibold"
            style={{ backgroundColor: "#ffffff", color: "#99CBC8", border: "none" }}
            onClick={handleOpenSignup}
          >
            Criar Conta
          </button>
          <button
            className="btn btn-lg font-poppins fw-semibold"
            style={{ backgroundColor: "white", color: "#C8C2AF", border: "none" }}
            onClick={handleOpenLogin}
          >
            Entrar
          </button>
        </div>
      </section>*/}

      <Footer />
    </div>
  );
};

export default LandingPage;

