import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Contactos = () => {
  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-5 bg-white rounded shadow-sm">
            <h2 className="mb-3 font-poppins" style={{ color: "#66BFBF", fontWeight: 'bold' }}>Contactos</h2>
            <p className="font-poppins" style={{ fontSize: '1.15rem', color: '#444' }}>
              A nossa equipa de investigação está disponível para esclarecer qualquer dúvida e oferecer o apoio necessário.
            </p>

            <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#E3F4F4' }}>
              <h4 style={{ color: '#3B9C9C', fontWeight: '600' }}>📧 Contacto direto</h4>
              <p className="mb-1 ">
                Podes entrar em contacto com a <strong>Psicóloga Catarina Monteiro</strong>:
              </p>
              <a 
                href="mailto:catarinaamonteiro@ua.pt" 
                style={{ color: '#2A7F7F', textDecoration: 'none', fontWeight: '500' }}
              >
                catarinaamonteiro@ua.pt
              </a>
            </div>

            <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#F0FAFA' }}>
              <h4 style={{ color: '#3B9C9C', fontWeight: '600' }}>📞 Outras opções de apoio</h4>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, lineHeight: '1.8' }}>
                <li>
                  <strong>Linha S.O.S. Adolescente:</strong>{' '}
                  <a href="tel:800202484" style={{ color: '#2A7F7F', textDecoration: 'none' }}>800 202 484</a>
                </li>
                <li>
                  <strong>Linha Jovem:</strong>{' '}
                  <a href="tel:800208020" style={{ color: '#2A7F7F', textDecoration: 'none' }}>800 208 020</a>
                </li>
              </ul>
              <p className="mt-2" style={{ color: '#555' }}>
                Também podes falar diretamente com o/a psicólogo/a da tua escola.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
