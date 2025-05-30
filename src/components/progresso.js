import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Loading from './loading';
import { UserContext } from '../App';
import { useContext } from 'react';

const Progresso = () => {

  const { userData } = useContext(UserContext);
  
  if (!userData) {
    return <Loading message="A carregar o progresso..." />;
  }

  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">
            <h2 className="mb-1" style={{ color: "#99CBC8" }}>O meu progresso</h2>
            <p>Conteúdo da página de progresso.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progresso;