import Navbar from './navbar';
import Sidebar from './sidebar';
import { useContext } from 'react';
import { UserContext } from '../App';
import Loading from './loading';

const Contactos = () => {

  const { userData } = useContext(UserContext);
  if (!userData) {
    return <Loading message="A carregar os contactos..." />;
  }


  return (
    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-4 bg-white rounded shadow-sm">
            <h2 className="mb-3 fw-semibold" style={{ color: "#99CBC8" }}>Contactos</h2>
            <p className="text-muted" style={{ fontSize: '1rem' }}>
              A nossa equipa de investigação está disponível para esclarecer qualquer dúvida e oferecer o apoio necessário.
            </p>

            <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#fbf9f9' }}>
              <h5 className="fw-semibold mb-2" style={{ color: '#3B9C9C' }}>📧 Contacto direto</h5>
              <p className="mb-1">
                Podes entrar em contacto com a <strong>Psicóloga Catarina Monteiro</strong>:
              </p>
              <a
                href="mailto:catarinaamonteiro@ua.pt"
                style={{ color: '#2A7F7F', textDecoration: 'none', fontWeight: '500' }}
              >
                catarinaamonteiro@ua.pt
              </a>
            </div>

            <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#fbf9f9' }}>
              <h5 className="fw-semibold mb-2" style={{ color: '#3B9C9C' }}>📞 Outras opções de apoio</h5>
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
              <p className="mt-2 text-muted">
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
