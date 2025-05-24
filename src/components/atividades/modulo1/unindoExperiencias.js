import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import modulos from '../../../data/modulos';
import AtividadeProgressao from '../atividadeProgressao';
import AtividadesEmDesenvolvimento from "../atividadesDesenvolvimento";

const UnindoExperiencias = () => {

  const { id: moduloId } = useParams();
  const { updateUserData } = useContext(UserContext);

  const modulo = modulos.find((m) => m.id === moduloId);
  
  return (
    <div className="container-fluid vh-100 p-0 font-poppins">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-5 bg-white rounded shadow-sm">
            
            {/* Componente para exibir atividades em desenvolvimento */}
            <AtividadesEmDesenvolvimento atividades={modulo?.atividades} />
            

                    <AtividadeProgressao
                      moduloId={moduloId}
                      atividadeIndex={2}
                      updateUserData={updateUserData}
                    />

          </div>
        </div>
      </div>
    </div>
  );
};

export default UnindoExperiencias;
