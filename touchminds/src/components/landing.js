import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import logo from "../imgs/logositeazul.png"; 
import cerebro from "../imgs/cerebro.png"; 

const LandingPage = () => {
  return (
    <div>
      <img src={logo} alt="TOUCHminds Logo" className="mt-4 mx-auto d-block" style={{ width: "10%" }}/>
        
        <section className="container py-5 d-flex align-items-center">
          <div className="text-center text-md-start w-50">
            <h1 className="fw-bold font-poppins" style={{ color: "#99CBC8" }}>Procurar ajuda é o começo da mudança!</h1>
            <p className="text-muted mt-4 font-lato">
          O TOUCHminds oferece um programa online gratuito destinado a ajudar os
          adolescentes a compreender a ansiedade e a promover a procura de ajuda.
            </p>
            <button className="btn btn-primary mt-4 font-poppins fw-bold" style={{ backgroundColor: "#E7C8C2", borderColor: "#E7C8C2" , color: "#234970"}}>Começar AGORA</button>
          </div>
          <div className="w-50 text-end">
            <img src={cerebro} alt="Brain Illustration" className="img-fluid w-50" />
          </div>
        </section>

        
          <section className="py-5 justify-content-start text-start" style={{ backgroundColor: "#99CBC8", color: "white" }}>
            <div className="container" >
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" >
                  <Accordion.Header className="font-poppins">O que é?</Accordion.Header>
                  <Accordion.Body className="font-lato">
                      O TOUCHminds é um programa online e gratuito, criado para promover a compreensão das dificuldades relacionadas com a ansiedade e a procura de ajuda quando necessário. Cada adolescente pode percorrer cada um dos seis módulos interativos ao seu ritmo, com conteúdos como vídeos, atividades interativas e práticas.                   </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="font-poppins">A quem se dirige?</Accordion.Header>
                  <Accordion.Body style={{color: "white" }}>
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
              <h2 className="text-center">Espreita os módulos!</h2>
              <div className="row mt-4">
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module1.jpg" alt="Módulo 1" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 1</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module2.jpg" alt="Módulo 2" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 2</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module3.jpg" alt="Módulo 3" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 3</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module4.jpg" alt="Módulo 4" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 4</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module5.jpg" alt="Módulo 5" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 5</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module6.jpg" alt="Módulo 6" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 6</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      
      <section className="text-center py-5" style={{ backgroundColor: "#E7C8C2", color: "#234970" }}>
        <p className="fs-1 font-poppins">Dá o primeiro passo para o teu bem-estar mental!</p>
        <p className="mb-4 mt-2 font-poppins">Regista-te agora no Touchminds!</p>
        <button className="btn btn-lg mx-2 font-poppins" style={{ backgroundColor: "white", color: "#99CBC8", border: "1px solid #99CBC8" }}>Sign up</button>
        <button className="btn btn-lg mx-2 font-poppins" style={{ backgroundColor: "white", color: "#C8C2AF", border: "1px solid #C8C2AF" }}>Log in</button>
      </section>

      
      <footer className="text-white text-center py-3" style={{ backgroundColor: "#99CBC8" }}>
        <p>Copyright © 2032 Creativo®. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
