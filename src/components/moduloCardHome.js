import React from 'react';

const ModuloCard = ({ id, titulo, subtitulo, descricao, imagem, onNavigate }) => (
    <div className="col">
      <div className="card h-100" onClick={() => onNavigate(id)} style={{ cursor: "pointer" }}>
        <img src={imagem} className="card-img-top" alt={subtitulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <h6>{subtitulo}</h6>
          <p className="card-text">{descricao}</p>
        </div>
      </div>
    </div>
  );

export default ModuloCard;