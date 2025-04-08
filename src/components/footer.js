import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="row g-4">
          {/* Promotores */}
          <div className="col-md-6">
            <h5 className="fw-semibold mb-3 text-uppercase" style={{ color: "#234970" }}>Promotores</h5>
            <div className="d-flex flex-column gap-3">
              <img
                src="/images/logo_dep.png"
                alt="Departamento de Educação e Psicologia"
                className="img-fluid"
                style={{ maxHeight: "50px", objectFit: "contain" }}
              />
              <img
                src="/images/logo_wjcr.png"
                alt="William James Center for Research"
                className="img-fluid"
                style={{ maxHeight: "50px", objectFit: "contain" }}
              />
              <img
                src="/images/logo_hml.png"
                alt="Healthy Minds Lab"
                className="img-fluid"
                style={{ maxHeight: "50px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Financiadores */}
          <div className="col-md-6">
            <h5 className="fw-semibold mb-3 text-uppercase" style={{ color: "#234970" }}>Financiadores</h5>
            <div className="d-flex flex-wrap align-items-center gap-4">
              <img src="/images/logo_ue.png" alt="União Europeia" className="img-fluid" style={{ maxHeight: "40px" }} />
              <img src="/images/logo_rp.png" alt="República Portuguesa" className="img-fluid" style={{ maxHeight: "40px" }} />
              <img src="/images/logo_fct.png" alt="FCT" className="img-fluid" style={{ maxHeight: "40px" }} />
              <img src="/images/logo_pessoas2030.png" alt="Pessoas 2030" className="img-fluid" style={{ maxHeight: "40px" }} />
              <img src="/images/logo_portugal2030.png" alt="Portugal 2030" className="img-fluid" style={{ maxHeight: "40px" }} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-5" style={{ borderTop: "1px solid #ccc" }} />

        {/* Nota de Rodapé */}
        <div className="text-center mt-3">
          <p className="text-muted small mb-0">
            Desenvolvido pelo Departamento de Psicologia e Educação da Universidade de Aveiro e pelo William James Center for Research,
            com financiamento da Fundação para a Ciência e Tecnologia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
