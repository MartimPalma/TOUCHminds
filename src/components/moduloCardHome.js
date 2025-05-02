import React from "react";

const ModuloCard = ({ imagem, titulo, subtitulo, descricao, status, onNavigate }) => {
  const isBloqueado = status === "bloqueado";

  return (
    <div
      className="mb-4"
      onClick={!isBloqueado ? onNavigate : null}
      style={{
        cursor: isBloqueado ? "not-allowed" : "pointer",
        filter: isBloqueado ? "grayscale(100%)" : "none",
        opacity: isBloqueado ? 0.7 : 1,
        transition: "0.3s",
      }}
    >
      <div className="position-relative">
        <img
          src={imagem}
          alt={titulo}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
        {isBloqueado && (
          <div
            className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 text-white rounded px-3 py-1"
            style={{ fontSize: "0.9rem" }}
          >
            Módulo Bloqueado
          </div>
        )}
      </div>

      <div className="mt-3 text-start">
        <h5 className="fw-bold font-poppins" style={{ color: "#99CBC8" }}>{titulo}</h5>
        <p className="mb-1 font-poppins fw-bold" style={{ color: "#234970" }}>{subtitulo}</p>
        <p className="small">{descricao}</p>
      </div>
    </div>
  );
};


export default ModuloCard;
