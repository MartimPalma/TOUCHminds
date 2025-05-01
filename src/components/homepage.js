//METER AS CORES CERTAS, METER O LOGO CERTO
import React, { useContext } from 'react';
import { UserContext } from '../App'; 
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';
import ModuloCard from './moduloCardHome'; 

const Homepage = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  console.log("HomePage:" , userData);

  if (!userData) {
    return <div className="text-center p-5">A carregar dados do utilizador...</div>;
  }

  const handleNavigate = (moduloId) => {
    navigate(`/modulos/${moduloId}`);
  };

  const modulos = [
    {
      id: 1,
      titulo: "Módulo 1",
      subtitulo: "Ansiedade NÃO é bicho-papão!",
      descricao: "Aprende a diferenciar entre uma ansiedade comum e uma ansiedade SOS",
      imagem: "../imgs/module1.jpg",
    },
    {
      id: 2,
      titulo: "Módulo 2",
      subtitulo: "Desmitificar a Ansiedade",
      descricao: "Nem tudo o que dizem sobre a ansiedade é verdade!",
      imagem: "../imgs/module1.jpg",
    },
    {
      id: 3,
      titulo: "Módulo 3",
      subtitulo: "Sê amigo de ti mesmo!",
      descricao: "O que dizes a ti próprio faz a diferença!",
      imagem: "../imgs/module1.jpg",
    },
    {
      id: 4,
      titulo: "Módulo 4",
      subtitulo: "O Poder da Mudança!",
      descricao:
        "A mudança faz parte da vida! Explora os diferentes estádios da mudança, aprende a definir objetivos realistas e descobre como dar pequenos passos pode fazer uma grande diferença.",
      imagem: "../imgs/module1.jpg",
    },
    {
      id: 5,
      titulo: "Módulo 5",
      subtitulo: "Reviravolta em Rede!",
      descricao:
        "Pedir ajuda pode parecer difícil, mas não estás sozinho. Aprende a identificar sinais de alerta, a diferenciar entre ajuda formal e informal e descobre como a ajuda das pessoas mais próximas podem fazer toda a diferença.",
      imagem: "../imgs/module1.jpg",
    },
    {
      id: 6,
      titulo: "Módulo 6",
      subtitulo: "Um novo Começo!",
      descricao:
        "Como funciona a ajuda profissional? Descobre os sinais que indicam que podes precisar de ajuda profissional, conhece o papel do psicólogo e explora os recursos disponíveis para dares o próximo passo.",
      imagem: "../imgs/module1.jpg",
    },
  ];

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />

        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">
            <h2 className="mb-3" style={{ color: "#99CBC8" }}>
              Bem Vindo, <span>{userData.nome}!</span>
            </h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
              {modulos.map((modulo) => {
                const chaveModulo = `modulo${modulo.id}`;
                const status = userData.modulos?.[chaveModulo]?.status || 'bloqueado';
                return (
                  <ModuloCard
                    key={modulo.id}
                    {...modulo}
                    status={status}
                    onNavigate={() => handleNavigate(modulo.id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;