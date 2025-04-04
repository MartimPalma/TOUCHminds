import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import logo from "../imgs/logositeazul.png"; 
import cerebro from "../imgs/cerebro.png"; 
import seta from "../imgs/icon-seta.png";



const LandingPage = () => {
  return (
    <div>
      {/* validar tamanho de letra */}
      <img src={logo} alt="TOUCHminds Logo" className="mt-4 mx-auto d-block" style={{ width: "10%" }}/>
        <section className="container py-5 d-flex align-items-center ">
          <div className="text-center text-md-start w-50">
            <h1 className="fw-bold font-poppins py-4" style={{ color: "#99CBC8" }}>Procurar ajuda é o começo da mudança!</h1>
            <p className="text-muted mt-4 font-lato py-4"> O TOUCHminds oferece um programa online gratuito destinado a ajudar os adolescentes a compreender a ansiedade e a promover a procura de ajuda. O acesso está atualmente disponível em escolas selecionadas da região norte. </p>
            <div className="py-5">
              <button className="btn btn-primary mt-4 font-poppins fw-bold py-2" style={{ backgroundColor: "#E7C8C2", borderColor: "#E7C8C2" , color: "#234970"}}>Começar AGORA</button>
            </div>
          </div>
          <div className="w-50 text-center">
            <img src={cerebro} alt="Brain Illustration" className="img-fluid w-50" />
          </div>
        </section>
  
        <div className="text-center">
          <img src={seta} alt="as" className=""/>
        </div>
        
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

            
            <section className="container py-5"> {/* validar texto e imagens dos módulos */}
              <h2 className="text-center">Espreita os módulos!</h2>  {/* validar se este é o melhor titulo */}
              <div className="row mt-4">
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module1.jpg" alt="Módulo 1" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 1 – Ansiedade NÃO é bicho-papão!</h5>
                      <p className="card-text">Todos nós sentimos ansiedade – e isso é perfeitamente normal! Aqui, vais compreender melhor as emoções, como elas influenciam o nosso dia a dia e aprender a distinguir entre uma ansiedade comum, que é normal, e que todos sentimos e uma ansiedade SOS que causa sofrimento.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module2.jpg" alt="Módulo 2" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 2– Desmistificar a Ansiedade! </h5>
                      <p className="card-text">Será que tudo o que dizem sobre ansiedade é verdade? Vais desvendar os mitos, entender como o estigma pode atrapalhar e aprender a ver a ansiedade sem medo e sem julgamentos! </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module3.jpg" alt="Módulo 3" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 3 – Sê Amigo de Ti Mesmo!</h5>
                      <p className="card-text">O que dizes a ti próprio pode fazer toda a diferença. Aprende a reconhecer o impacto do autocriticismo e descobre como a autocompaixão pode ser uma aliada no teu bem-estar mental.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module4.jpg" alt="Módulo 4" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 4 – O Poder da Mudança!</h5>
                      <p className="card-text">A mudança faz parte da vida! Explora os diferentes estádios da mudança, aprende a definir objetivos realistas e descobre como dar pequenos passos pode fazer uma grande diferença.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module5.jpg" alt="Módulo 5" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 5 – Reviravolta em Rede!</h5>
                      <p className="card-text">Pedir ajuda pode parecer difícil, mas não estás sozinho. Aprende a identificar sinais de alerta, a diferenciar entre ajuda formal e informal e descobre como a ajuda das pessoas mais próximas podem fazer toda a diferença.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img src="/module6.jpg" alt="Módulo 6" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Módulo 6 – Um Novo Começo!</h5>
                      <p className="card-text">Como funciona a ajuda profissional? Descobre os sinais que indicam que podes precisar de ajuda profissional, conhece o papel do psicólogo e explora os recursos disponíveis para dares o próximo passo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      
      <section className="text-start py-5 ps-5" style={{ backgroundColor: "#E7C8C2", color: "#234970" }}>
        <p className="fs-2 ms-5 fw-semibold font-poppins">Dá o primeiro passo para o teu bem-estar mental!</p>
        <p className="mb-5 ms-5  fs-3 mt-2 font-poppins">Regista-te agora no TOUCHminds!</p>
        <button className="btn btn-lg me-3 ms-5 mt-4 font-poppins" style={{ backgroundColor: "white", color: "#99CBC8", border: "1px solid #99CBC8" }}>Sign up</button>
        <button className="btn btn-lg  mt-4 font-poppins" style={{ backgroundColor: "white", color: "#C8C2AF", border: "1px solid #C8C2AF" }}>Log in</button>
      </section>

      
      <footer className="text-white text-center py-3" style={{ backgroundColor: "#99CBC8" }}>
        <p>Copyright © 2025 TOUCHminds®. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
