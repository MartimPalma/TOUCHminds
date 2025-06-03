
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";


const DesafioSemanal = () => {
  return (
    <div className="container-fluid vh-100 p-0 font-poppins">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-5 bg-white rounded shadow-sm">
            
            {/* CABEÇALHO COM ÍCONE */}
            <div className="text-center mb-5">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                   style={{ width: "80px", height: "80px", backgroundColor: "#E8F4F8" }}>
                <i className="bi bi-trophy-fill" style={{ fontSize: "2.5rem", color: "#234970" }}></i>
              </div>
              <h2 className="fw-bold" style={{ color: "#234970" }}>
                Desafio Semanal
              </h2>
              <div className="badge bg-primary fs-6 px-3 py-2 mt-2">
                #OPoderdaMudança
              </div>
            </div>

            {/* INTRODUÇÃO DO DESAFIO */}
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card border-0 shadow-sm mb-4" style={{ backgroundColor: "#F8F9FA" }}>
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-3" style={{ color: "#234970" }}>
                      <i className="bi bi-wave me-2"></i>
                      Queria lançar-te um desafio para esta semana!
                    </h4>
                    <p className="mb-3">
                      Ao longo dos próximos dias, observa a tua própria <strong>mudança a acontecer</strong>. 
                      Tal como quem está no mar, <strong>não é preciso nadar sempre com força</strong> nem tomar 
                      decisões rápidas — às vezes, o mais importante é simplesmente <strong>estar presente</strong> e 
                      <strong>reparar no que está a acontecer contigo</strong>.
                    </p>
                  </div>
                </div>

                {/* INSTRUÇÕES DO DESAFIO */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#234970" }}>
                      <i className="bi bi-eye me-2"></i>
                      Durante os próximos dias, convida-te a fazer o seguinte:
                    </h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0">
                            <div className="rounded-circle d-flex align-items-center justify-content-center" 
                                 style={{ width: "40px", height: "40px", backgroundColor: "#99CBC8" }}>
                              <i className="bi bi-search text-white"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p className="mb-0">
                              <strong>Repara</strong> como te sentes em relação ao <strong>comportamento ou situação</strong> que decidiste mudar.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0">
                            <div className="rounded-circle d-flex align-items-center justify-content-center" 
                                 style={{ width: "40px", height: "40px", backgroundColor: "#99CBC8" }}>
                              <i className="bi bi-graph-up text-white"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p className="mb-0">
                              <strong>Nota</strong> se há momentos em que a <strong>"onda" parece mais calma ou mais agitada</strong>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PERGUNTAS DE REFLEXÃO */}
                <div className="card border-0 shadow-sm mb-4" style={{ backgroundColor: "#FFF8E1" }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#234970" }}>
                      <i className="bi bi-question-circle me-2"></i>
                      Pergunta-te, sem julgar:
                    </h5>
                    <div className="row">
                      <div className="col-lg-4 mb-3">
                        <div className="h-100 p-3 rounded" style={{ backgroundColor: "rgba(153, 203, 200, 0.1)" }}>
                          <div className="text-center mb-2">
                            <i className="bi bi-water" style={{ fontSize: "1.5rem", color: "#234970" }}></i>
                          </div>
                          <p className="fw-bold text-center mb-0 small">
                            "Hoje, como está o mar dentro de mim?"
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <div className="h-100 p-3 rounded" style={{ backgroundColor: "rgba(153, 203, 200, 0.1)" }}>
                          <div className="text-center mb-2">
                            <i className="bi bi-compass" style={{ fontSize: "1.5rem", color: "#234970" }}></i>
                          </div>
                          <p className="fw-bold text-center mb-0 small">
                            "Sinto que estou mais perto ou mais longe do meu objetivo?"
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <div className="h-100 p-3 rounded" style={{ backgroundColor: "rgba(153, 203, 200, 0.1)" }}>
                          <div className="text-center mb-2">
                            <i className="bi bi-binoculars" style={{ fontSize: "1.5rem", color: "#234970" }}></i>
                          </div>
                          <p className="fw-bold text-center mb-0 small">
                            "O que noto quando olho para este processo com atenção?"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MENSAGEM DE ENCORAJAMENTO */}
                <div className="card border-0 shadow-sm mb-4" style={{ backgroundColor: "#E8F5E8" }}>
                  <div className="card-body p-4">
                    <div className="text-center">
                      <i className="bi bi-heart-fill mb-3" style={{ fontSize: "2rem", color: "#28a745" }}></i>
                      <p className="mb-3">
                        Não precisas de <strong>mudar nada</strong>. Não precisas de <strong>ter respostas</strong>. 
                        Este é apenas um tempo para <strong>escutar-te com curiosidade e paciência</strong>.
                      </p>
                      <p className="mb-0">
                        Ao <strong>observar</strong>, estás a dar <strong>espaço à mudança</strong> para continuar a acontecer — no teu tempo, à tua maneira.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CITAÇÃO FINAL */}
                <div className="card border-0 shadow-sm mb-4" style={{ backgroundColor: "#234970", color: "white" }}>
                  <div className="card-body p-4">
                    <div className="text-center">
                      <i className="bi bi-quote mb-3" style={{ fontSize: "2rem", opacity: "0.7" }}></i>
                      <h5 className="fw-bold mb-3">Lembra-te:</h5>
                      <p className="mb-3 fs-5">
                        Nem sempre conseguimos <strong>controlar a onda</strong>, mas podemos aprender a <strong>ouvir o mar</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FINAL */}
                <div className="text-center py-4">
                  <div className="mb-3">
                    <i className="bi bi-arrow-right-circle-fill" style={{ fontSize: "3rem", color: "#99CBC8" }}></i>
                  </div>
                  <h4 className="fw-bold mb-2" style={{ color: "#234970" }}>
                    Vamos em frente!
                  </h4>
                  <p className="lead mb-3">
                    <span className="badge bg-primary fs-6 px-3 py-2">#OPoderdaMudança</span>
                  </p>
                  <p className="mb-4" style={{ color: "#666" }}>
                    Até para a Semana!
                  </p>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DesafioSemanal;