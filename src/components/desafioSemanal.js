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
    naoFuncionou: '',
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  console.log('Desafio semanal:', userData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    // Verifica se todos os campos do objeto form estão preenchidos
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
      setForm({ dia: '', situacao: '', comoMeSenti: '', pensamentos: '', comoLidei: '', funcionou: '', naoFuncionou: '' });
    } catch (error) {
      setFeedback('Erro ao guardar. Tenta novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h3 className="mb-4">Desafio Semanal - Módulo {id}</h3>
  
      <div className="table-responsive">
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
                "O que não funcionou?",
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
                { name: "naoFuncionou", placeholder: "Ex: Evitar a situação" },
              ].map(({ name, placeholder }) => (
                <td key={name}>
                  <input
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={placeholder}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
  
      <div className="mt-4 text-start">
        <button
          onClick={handleAdd}
          type="submit"
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
              <div
                className="spinner-border spinner-border-sm me-2"
                role="status"
              >
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
          className={`alert ${
            feedback.includes("sucesso") ? "alert-success" : "alert-danger"
          } mt-3`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
  
};

export default DesafioSemanal;
