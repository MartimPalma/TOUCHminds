import Navbar from './navbar';
import Sidebar from './sidebar';
import { useContext } from 'react';
import { UserContext } from '../App';
import Loading from './loading';
import modulosData from '../data/modulos';

const LinhaTemporal = () => {
  const { userData } = useContext(UserContext);

  if (!userData || !userData.modulos) {
    return <Loading message="A carregar o progresso..." />;
  }

  // Obter progresso do user para cada módulo
  const progressoDoUser = Object.entries(userData.modulos).map(([key, value], index) => {
    const moduloBase = modulosData[index]; // Assume que a ordem em modulosData é correta (modulo1, modulo2...)

    // Verifica se todas as atividades estão concluídas
    const atividadesCompletas = value.atividades?.every((a) => a.concluido);
    const statusModulo = atividadesCompletas ? "concluído" : "em progresso";

    // Pega o status do desafio semanal da última atividade
    const ultimaAtividade = value.atividades?.[value.atividades.length - 1];
    const desafioStatus = ultimaAtividade?.status || "bloqueado";

    return {
      ...moduloBase,
      status: statusModulo,
      atividades: moduloBase.atividades.map((atividade, idx) => ({
        ...atividade,
        concluido: value.atividades?.[idx]?.concluido || false
      })),
      desafioSemana1: { status: desafioStatus }
    };
  });

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">
            <h2 className="mb-3 fw-semibold" style={{ color: "#99CBC8" }}>Linha Temporal</h2>
            <p className="text-muted" style={{ fontSize: '1rem' }}>
              Acompanhe seu progresso nos diferentes módulos do programa.
            </p>

            <div className="timeline mt-4">
              {progressoDoUser.map((modulo, index) => (
                <div key={modulo.id} className="timeline-item">
                  <div className="timeline-marker">
                    {modulo.status === "concluído" ? (
                      <span className="icon has-background-success">
                        <i className="fas fa-check"></i>
                      </span>
                    ) : (
                      <span className={`icon has-background-${index === 0 || progressoDoUser[index - 1]?.status === "concluído" ? 'info' : 'light'}`}>
                        <i className={`fas ${index === 0 || progressoDoUser[index - 1]?.status === "concluído" ? 'fa-play' : 'fa-lock'}`}></i>
                      </span>
                    )}
                  </div>

                  <div className="timeline-content p-4 mb-4 rounded shadow-sm"
                       style={{ backgroundColor: modulo.status === "concluído" ? '#E3F4F4' : '#F0FAFA' }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="fw-semibold mb-0" style={{ color: '#3B9C9C' }}>
                          {modulo.titulo}
                        </h5>
                        <p className="small mb-0 text-muted">{modulo.subtitulo}</p>
                      </div>
                      <span className={`badge ${modulo.status === "concluído" ? 'bg-success' :
                        (index === 0 || progressoDoUser[index - 1]?.status === "concluído" ? 'bg-primary' : 'bg-secondary')}`}>
                        {modulo.status === "concluído" ? 'Concluído' :
                          (index === 0 || progressoDoUser[index - 1]?.status === "concluído" ? 'Disponível' : 'Bloqueado')}
                      </span>
                    </div>

                    <div className="mt-3">
                      <h6 className="fw-semibold">Atividades:</h6>
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        {modulo.atividades.map((atividade, idx) => (
                          <span key={atividade.url} className={`badge ${atividade.concluido ? 'bg-success' :
                            (idx === 0 || modulo.atividades[idx - 1]?.concluido ? 'bg-light text-dark' : 'bg-secondary text-light')}`}>
                            {atividade.titulo} {atividade.concluido ? '✓' :
                              (idx === 0 || modulo.atividades[idx - 1]?.concluido ? '⌛' : '🔒')}
                          </span>
                        ))}
                      </div>
                    </div>

                    {modulo.desafioSemana1 && (
                      <div className="mt-3">
                        <h6 className="fw-semibold">Desafio da Semana:</h6>
                        <span className={`badge ${modulo.desafioSemana1.status === "concluído" ? 'bg-success' :
                          (modulo.desafioSemana1.status === "desbloqueado" ? 'bg-info' : 'bg-secondary')}`}>
                          {modulo.desafioSemana1.status === "concluído" ? 'Concluído' :
                            (modulo.desafioSemana1.status === "desbloqueado" ? 'Desbloqueado' : 'Bloqueado')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <style jsx>{`
              .timeline {
                position: relative;
                padding-left: 2rem;
              }
              .timeline:before {
                content: '';
                position: absolute;
                left: 18px;
                top: 0;
                bottom: 0;
                width: 2px;
                background: #99CBC8;
              }
              .timeline-item {
                position: relative;
                margin-bottom: 1rem;
              }
              .timeline-marker {
                position: absolute;
                left: -2rem;
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                border: 2px solid #99CBC8;
              }
              .timeline-content {
                margin-left: 2.5rem;
              }
              .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
              }
              .has-background-success {
                background-color: #28a745 !important;
                color: white;
              }
              .has-background-info {
                background-color: #17a2b8 !important;
                color: white;
              }
              .has-background-light {
                background-color: #f8f9fa !important;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinhaTemporal;
