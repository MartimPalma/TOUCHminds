import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

const DesafioSemanal = ({ id }) => {
  const { userData, updateUserData } = useContext(UserContext);
  const [form, setForm] = useState({
    dia: '',
    situacao: '',
    comoMeSenti: '',
    pensamentos: '',
    comoLidei: '',
    funcionou: '',
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (Object.values(form).some(val => val.trim() === '')) {
      setFeedback('Por favor, preenche todos os campos.');
      return;
    }

    const novoRegisto = {
      ...form,
      dataCriacao: new Date().toLocaleString('pt-PT'),
    };

    try {
      setLoading(true);
      setFeedback('');

      const chaveModulo = `modulo${id}`;
      const modulosAtualizados = {
        ...userData.modulos,
        [chaveModulo]: {
          ...userData.modulos[chaveModulo],
          desafioSemanal: [
            ...(userData.modulos[chaveModulo]?.desafioSemanal || []),
            novoRegisto,
          ],
        },
      };

      await updateUserData({ ...userData, modulos: modulosAtualizados });
      setFeedback('Registo adicionado com sucesso!');
      setForm({
        dia: '',
        situacao: '',
        comoMeSenti: '',
        pensamentos: '',
        comoLidei: '',
        funcionou: '',
      });
    } catch (error) {
      setFeedback('Erro ao guardar. Tenta novamente.');
    } finally {
      setLoading(false);
    }
  };

  // Obtém os registos guardados
  const registos =
    userData.modulos?.[`modulo${id}`]?.desafioSemanal || [];

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h3 className="mb-4">Desafio Semanal - Módulo {id}</h3>

      <div className="table-responsive mb-4">
        <table className="table table-bordered text-center align-middle">
          <thead>
            <tr>
              {[
                "Dia",
                "Situação",
                "Como me senti?",
                "Que pensamentos surgiram?",
                "Como lidei com a situação?",
                "O que funcionou?",
              ].map((title) => (
                <th
                  key={title}
                  style={{ backgroundColor: "#E7C8C2", color: "#234970" }}
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                { name: "dia", placeholder: "Ex: Segunda" },
                { name: "situacao", placeholder: "Ex: Escola" },
                { name: "comoMeSenti", placeholder: "Ex: Ansioso" },
                { name: "pensamentos", placeholder: "Ex: Não vou conseguir" },
                { name: "comoLidei", placeholder: "Ex: Respirei fundo" },
                { name: "funcionou", placeholder: "Ex: Falar com alguém" },
              ].map(({ name, placeholder }) => (
                <td key={name}>
                  <textarea
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={placeholder}
                    rows={3}
                    style={{ resize: 'vertical' }}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3 text-start">
        <button
          onClick={handleAdd}
          className="btn"
          style={{
            backgroundColor: "#66BFBF",
            color: "white",
            fontWeight: "600",
            borderRadius: "8px",
            fontSize: "1.05rem",
          }}
          disabled={loading}
        >
          {loading ? (
            <div className="d-flex align-items-center justify-content-center">
              <div className="spinner-border spinner-border-sm me-2" role="status">
                <span className="visually-hidden">A processar...</span>
              </div>
              A processar...
            </div>
          ) : (
            "Guardar alterações"
          )}
        </button>
      </div>

      {feedback && (
        <div
          className={`alert ${feedback.includes("sucesso") ? "alert-success" : "alert-danger"} mt-3`}
        >
          {feedback}
        </div>
      )}

      {registos.length > 0 && (
        <>
          <h5 className="mt-5">Registos anteriores:</h5>
          <div className="table-responsive">
            <table className="table table-bordered text-center align-middle">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Dia</th>
                  <th>Situação</th>
                  <th>Como me senti?</th>
                  <th>Pensamentos</th>
                  <th>Como lidei?</th>
                  <th>Funcionou?</th>
                </tr>
              </thead>
              <tbody>
                {registos.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.dataCriacao}</td>
                    <td>{item.dia}</td>
                    <td>{item.situacao}</td>
                    <td>{item.comoMeSenti}</td>
                    <td>{item.pensamentos}</td>
                    <td>{item.comoLidei}</td>
                    <td>{item.funcionou}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default DesafioSemanal;

