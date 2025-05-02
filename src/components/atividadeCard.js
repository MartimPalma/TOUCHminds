import { Link } from "react-router-dom";

const AtividadeCard = ({ atividade, status, moduloId }) => {
  const containerStyle = {
    filter: status ? "none" : "grayscale(100%)",
    cursor: status ? "pointer" : "not-allowed",
    opacity: status ? 1 : 0.7,
    transition: "0.3s",
  };

  const content = (
    <div className="position-relative" style={containerStyle}>
      <img
        src={atividade.imagem}
        alt={atividade.titulo}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
      {!status && (
        <div
          className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 text-white rounded px-3 py-1"
          style={{ fontSize: "0.9rem" }}
        >
          Atividade Bloqueada
        </div>
      )}
      <div className="mt-2 text-start">
        <h6 className="fw-semibold mb-1" style={{ color: "#234970" }}>{atividade.titulo}</h6>
      </div>
    </div>
  );

  return (
    <div className="col-sm-6 col-md-4 mb-4">
      {status ? (
        <Link
          to={`/modulos/${moduloId}/atividade/${atividade.url}`}
          className="text-decoration-none text-dark"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};

export default AtividadeCard;
