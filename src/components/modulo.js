import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useParams } from 'react-router-dom'; 
import DesafioSemanal from './desafioSemanal';

const Modulos = () => {

    const { id } = useParams(); // pegar o id do módulo do URL
    console.log(`Id do módulo: ${id}`) 

return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-5 bg-white rounded shadow-sm">

            
            <DesafioSemanal id={id} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulos;
