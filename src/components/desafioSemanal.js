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

      <table className="table table-bordered text-center font-poppins">
        <thead >
            <tr>
                <th style={{ backgroundColor: '#E7C8C2' , color : '#234970' }}>Dia</th>
                <th style={{ backgroundColor: '#E7C8C2' , color : '#234970' }}>Situação</th>
                <th style={{ backgroundColor: '#E7C8C2' , color : '#234970' }}>Como me senti?</th>
                <th style={{ backgroundColor: '#E7C8C2' , color : '#234970' }}>Que pensamentos surgiram?</th>
                <th style={{ backgroundColor: '#E7C8C2' , color : '#234970' }}>Como lidei com a situação?</th>
                <th style={{ backgroundColor: '#E7C8C2' , color : '#234970' }}>O que funcionou?</th>
                <th style={{ backgroundColor: '#E7C8C2' , color : '#234970' }}>O que não funcionou?</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                name="dia"
                value={form.dia}
                onChange={handleChange}
                className="form-control"
                placeholder="Ex: Segunda"
              />
            </td>
            <td>
              <input
                name="situacao"
                value={form.situacao}
                onChange={handleChange}
                className="form-control"
                placeholder="Ex: Escola"
              />
            </td>
            <td>
              <input
                name="comoMeSenti"
                value={form.comoMeSenti}
                onChange={handleChange}
                className="form-control"
                placeholder="Ex: Ansioso"
              />
            </td>
            <td>
              <input
                name="pensamentos"
                value={form.pensamentos}
                onChange={handleChange}
                className="form-control"
                placeholder="Ex: Não vou conseguir"
              />
            </td>
            <td>
              <input
                name="comoLidei"
                value={form.comoLidei}
                onChange={handleChange}
                className="form-control"
                placeholder="Ex: Respirei fundo"
              />
            </td>
            <td>
              <input
                name="funcionou"
                value={form.funcionou}
                onChange={handleChange}
                className="form-control"
                placeholder="Ex: Falar com alguém"
              />
            </td>
            <td>
              <input
                name="naoFuncionou"
                value={form.naoFuncionou}
                onChange={handleChange}
                className="form-control"
                placeholder="Ex: Evitar a situação"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 text-start">
                <button
                  onClick={handleAdd}
                  type="submit"
                  className="btn px-4 py-2"
                  style={{ 
                    backgroundColor: "#66BFBF", 
                    color: "white", 
                    fontWeight: "600",
                    borderRadius: "8px",
                    fontSize: "1.05rem"
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

      {feedback && <div className={`alert ${feedback.includes('sucesso') ? 'alert-success' : 'alert-danger'} mt-3`}>{feedback}</div>}
    </div>
  );
};

export default DesafioSemanal;
