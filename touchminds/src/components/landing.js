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
            <h1 className="fw-bold" style={{ color: "#99CBC8" }}>Procurar ajuda é o começo da mudança!</h1>
            <p className="text-muted mt-4">
          O TOUCHminds oferece um programa online gratuito destinado a ajudar os
          adolescentes a compreender a ansiedade e a promover a procura de ajuda.
            </p>
            <button className="btn btn-primary mt-4" style={{ backgroundColor: "#99CBC8", borderColor: "#99CBC8" }}>Começar AGORA</button>
          </div>
          <div className="w-50 text-end">
            <img src={cerebro} alt="Brain Illustration" className="img-fluid w-50" />
          </div>
        </section>

        {/* FAQ Section */}
            <section className="py-5 justify-content-start text-start" style={{ backgroundColor: "#99CBC8", color: "white" }}>
        <div className="container" >
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" >
              <Accordion.Header >O que é?</Accordion.Header>
              <Accordion.Body >
          O TOUCHminds é um programa online e gratuito, criado para promover a procura de
          ajuda nos adolescentes que lidam com desafios relacionados com a ansiedade.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>A quem se dirige?</Accordion.Header>
              <Accordion.Body style={{color: "white" }}>
          Este programa é destinado a adolescentes que lidam com ansiedade e querem entender
          melhor suas emoções e procurar ajuda de forma segura.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Como funciona?</Accordion.Header>
              <Accordion.Body>
          O acesso ao programa está disponível em escolas selecionadas da região norte,
          permitindo que os adolescentes explorem módulos educativos sobre ansiedade.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
            </section>

            {/* Modules Section */}
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

      {/* Call to Action */}
      <section className="text-center py-5" style={{ backgroundColor: "#E7C8C2", color: "#234970" }}>
        <h2 className="">Dá o primeiro passo para o teu bem-estar</h2>
        <h3 className="mb-4 mt-2">Regista-te agora no Touchminds!</h3>
        <button className="btn btn-lg mx-2" style={{ backgroundColor: "white", color: "#99CBC8", border: "1px solid #99CBC8" }}>Sign up</button>
        <button className="btn btn-lg mx-2" style={{ backgroundColor: "white", color: "#C8C2AF", border: "1px solid #C8C2AF" }}>Log in</button>
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-3" style={{ backgroundColor: "#99CBC8" }}>
        <p>Copyright © 2032 Creativo®. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
