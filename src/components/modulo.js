import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import DesafioSemanal from './desafioSemanal';
import { UserContext } from '../App';
import modulos from '../data/modulos';
import AtividadeCard from './atividadeCard';

const mensagensInicio = {
  1: "Falar de ansiedade pode ser desconfortável, mas ao reconhecer o que sentes ganhas clareza para a enfrentar—és mais resiliente do que imaginas!",
  2: "Desafiar mitos e estigmas pode abalar certezas, mas cada dúvida que vais esclarecendo fortalece a tua compreensão—continua curioso(a)!",
  3: "Olhar de frente para a tua voz crítica pode ser difícil, mas ao praticares autocompaixão constróis um alicerce sólido para o teu bem-estar.",
  4: "Mudar gera incerteza e desconforto, mas cada análise de prós e contras de mudar é um ato de coragem—confia na tua capacidade de evoluir!",
  5: "Falar de sintomas e pedir ajuda pode ser desafiante, mas reconhecer essa vulnerabilidade abre-te portas a ligações verdadeiras—és capaz de o fazer!",
  6: "Falar sobre ajuda profissional pode intimidar, mas este passo revela a tua determinação—acredita em ti para seguires em frente!"
};

const mensagensFim = {
  1: "Superaste o desconforto de falares sobre ansiedade e ganhaste clareza sobre o que sentes és mais resiliente do que pensas!",
  2: "Passaste pelo desafio de questionares mitos e estigmas, e acabaste com uma visão mais clara—mantém essa curiosidade!",
  3: "Enfrentaste a tua voz crítica e praticaste autocompaixão, construindo um alicerce sólido para o teu bem-estar—orgulha-te deste passo!",
  4: "Analisaste prós e contras da mudança e suportaste a incerteza—demonstraste coragem para evoluir!",
  5: "Falaste de sintomas e abriste-te à ajuda, reconhecendo a tua vulnerabilidade—foste corajoso(a)!",
  6: "Abordaste a ideia de ajuda profissional e confirmaste a tua determinação—confia em ti para continuares em frente!"
};

const Modulos = () => {
  const { id } = useParams();  
  const { userData } = useContext(UserContext);  

  const modulo = modulos.find((m) => m.id === id);
  if (!userData || !modulo) return <p>A carregar dados do utilizador...</p>;

  const moduloUserKey = `modulo${modulo.id}`;  
  const atividadesStatus = userData.modulos[moduloUserKey]?.atividades || [];  
  const atividadesConcluidas = atividadesStatus.filter((a) => a.concluido).length;
  const progressoModulo = (atividadesStatus.length > 0)
    ? (atividadesConcluidas / atividadesStatus.length) * 100
    : 0;

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">

            <div className="mb-4">
              <h2 className="fw-semibold" style={{ color: "#99CBC8" }}>{modulo.titulo}</h2>
              <h5 className="mb-3" style={{ color: "#234970" }}>{modulo.subtitulo}</h5>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="small fw-semibold" style={{ color: "#234970" }}>Progresso do Módulo</span>
                  <span className="small fw-semibold" style={{ color: "#234970" }}>{progressoModulo.toFixed(0)}%</span>
                </div>

                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progressoModulo}%`, backgroundColor: "#99CBC8" }}
                    aria-valuenow={progressoModulo}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>

              <div className="mt-2 small text-muted">
                {progressoModulo === 0 && mensagensInicio[modulo.id]}
                {progressoModulo === 100 && mensagensFim[modulo.id]}
              </div>

              <h4 className="mt-5" style={{ color: "#99CBC8" }}>
                <span
                  style={{
                    borderBottom: "3px solid #99CBC8",
                    display: "inline-block",
                    paddingBottom: "2px",
                  }}
                >
                  Atividades
                </span>
              </h4>
            </div>

            <div className="row">
              {modulo.atividades.map((atividade, index) => (
                <AtividadeCard
                  key={atividade.url}
                  atividade={atividade}
                  status={atividadesStatus[index]?.status === 'desbloqueado'}
                  concluido={atividadesStatus[index]?.concluido}
                  moduloId={modulo.id}
                  atividadeIndex={index}
                />
              ))}
            </div>

            <DesafioSemanal id={modulo.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulos;
