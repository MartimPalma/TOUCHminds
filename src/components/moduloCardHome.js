import React from "react";

const ModuloCard = ({ imagem, titulo, subtitulo, descricao, status, onNavigate }) => {
  const isBloqueado = status === "bloqueado";

  return (
    <div className="col">
      <div
        className="card h-100 shadow-sm border-0 position-relative"
        onClick={!isBloqueado ? onNavigate : null}
        style={{
          cursor: isBloqueado ? "not-allowed" : "pointer",
          filter: isBloqueado ? "grayscale(100%)" : "none",
          opacity: isBloqueado ? 0.7 : 1,
          transition: "0.3s",
        }}
      >
        <img
          src={imagem}
          alt={titulo}
          className="card-img-top"
          style={{ objectFit: "cover", height: "180px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{titulo}</h5>
          <p className="card-subtitle mb-2 text-muted">{subtitulo}</p>
          <p className="card-text small">{descricao}</p>
        </div>

        {isBloqueado && (
          <div
            className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 text-white rounded px-3 py-1"
            style={{ fontSize: "0.9rem" }}
          >
            Módulo Bloqueado
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuloCard;
