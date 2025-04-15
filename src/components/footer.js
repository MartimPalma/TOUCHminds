import React from "react";
import dep from "../imgs/depvertical.png";
import wjcr from "../imgs/depvertical.png";
import hml from "../imgs/depvertical.png";
import ue from "../imgs/ue.png";
import rp from "../imgs/rp.png";
import fct from "../imgs/fct.png";
import pessoas30 from "../imgs/pessoas30.jpg";
import portugal30 from "../imgs/portugal30.png";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="row g-4">
          {/* Promotores */}
          <div className="col-md-6">
            <h5 className="fw-semibold mb-3 text-uppercase" style={{ color: "#234970" }}>Promotores</h5>
            <div className="d-flex flex-wrap align-items-center gap-4">
              <img src={dep} alt="União Europeia" className="img-fluid" style={{ maxHeight: "45px" }} />
              <img src={wjcr} alt="William James Center for Research" className="img-fluid" style={{ maxHeight: "45px" }} />
              <img src={hml} alt="Healthy Minds Lab" className="img-fluid" style={{ maxHeight: "45px" }} />
            </div>
          </div>

          {/* Financiadores */}
          <div className="col-md-6">
            <h5 className="fw-semibold mb-3 text-uppercase" style={{ color: "#234970" }}>Financiadores</h5>
            <div className="d-flex flex-wrap align-items-center gap-4">
              <img src={ue} alt="União Europeia" className="img-fluid" style={{ maxHeight: "45px" }} />
              <img src={rp} alt="República Portuguesa" className="img-fluid" style={{ maxHeight: "45px" }} />
              <img src={fct} alt="FCT" className="img-fluid" style={{ maxHeight: "45px" }} />
              <img src={pessoas30} alt="Pessoas 2030" className="img-fluid" style={{ maxHeight: "45px" }} />
              <img src={portugal30} alt="Portugal 2030" className="img-fluid" style={{ maxHeight: "45px " }} />
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
