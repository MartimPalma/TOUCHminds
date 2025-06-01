import React, { useState, useContext } from 'react';
import { UserContext } from '../../../App';

const AtividadeSemanal2 = () => {
  const { userData, updateUserData } = useContext(UserContext);
  
  // Initialize form with 7 situations and reflections
  const [form, setForm] = useState(() => {
    const module2Form = {};
    for (let i = 1; i <= 7; i++) {
      module2Form[`situacao_${i}`] = '';
      module2Form[`reflexao_${i}`] = '';
    }
    return module2Form;
  });
  
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    // Check if at least one situation is filled
    const hasContent = Object.values(form).some(val => val.trim() !== '');
    if (!hasContent) {
      setFeedback('Por favor, preenche pelo menos uma situação.');
      return;
    }

    const novoRegisto = {
      ...form,
      dataCriacao: new Date().toLocaleString('pt-PT'),
    };

    try {
      setLoading(true);
      setFeedback('');

      const modulosAtualizados = {
        ...userData.modulos,
        modulo2: {
          ...userData.modulos.modulo2,
          atividadeSemanal: [
            ...(userData.modulos.modulo2?.atividadeSemanal || []),
            novoRegisto,
          ],
        },
      };

      await updateUserData({ ...userData, modulos: modulosAtualizados });
      setFeedback('Registo adicionado com sucesso!');
      
      // Reset form
      const resetForm = {};
      for (let i = 1; i <= 7; i++) {
        resetForm[`situacao_${i}`] = '';
        resetForm[`reflexao_${i}`] = '';
      }
      setForm(resetForm);
    } catch (error) {
      setFeedback('Erro ao guardar. Tenta novamente.');
    } finally {
      setLoading(false);
    }
  };

  // Get saved records
  const registos = userData.modulos?.modulo2?.atividadeSemanal || [];

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h3 className="mb-4">Desafio Semanal - Módulo 2</h3>
      
      <div className="mb-4">
        <b>Queria lançar-te um desafio para esta semana!</b><br />
        Ao longo dos próximos dias, fica <b>atento/a</b> a <b>conversas, comentários ou atitudes</b> em que percebes um <b>mito</b> ou <b>estigma</b> relacionado à ansiedade.<br />
        Pode ser algo que ouças em <b>conversas</b>, vejas nas <b>redes sociais</b> ou observes em situações do teu <b>dia-a-dia</b>.<br />
        Depois de a <b>notares</b>, convido-te a <b>refletir</b> sobre como poderias <b>intervir</b> ou <b>apoiar</b> a pessoa envolvida e podes <b>registar</b> aqui ou simplesmente refletires sobre isso.<br />
        Podes usar esta <b>tabela</b> para registares:
      </div>

      <div className="table-responsive mb-4">
        <table className="table table-bordered text-center align-middle">
          <thead>
            <tr>
              <th
                className="text-center align-middle"
                style={{ backgroundColor: "#E7C8C2", color: "#234970" }}
              >
                Situação
              </th>
              <th
                className="text-center align-middle"
                style={{ backgroundColor: "#E7C8C2", color: "#234970" }}
              >
                Situação Observada
              </th>
              <th
                className="text-center align-middle"
                style={{ backgroundColor: "#E7C8C2", color: "#234970" }}
              >
                Reflexão/Resposta Empática
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <tr key={num}>
                <td style={{ backgroundColor: "white", color: "black", fontWeight: "bold" }}>
                  Situação {num}
                </td>
                <td>
                  <textarea
                    name={`situacao_${num}`}
                    value={form[`situacao_${num}`] || ''}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Descrição breve da situação..."
                    rows={2}
                    style={{ resize: 'vertical' }}
                  />
                </td>
                <td>
                  <textarea
                    name={`reflexao_${num}`}
                    value={form[`reflexao_${num}`] || ''}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Reflexão/Resposta..."
                    rows={2}
                    style={{ resize: 'vertical' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <ul style={{ marginTop: "0px" }}>
          <li><b>Situação Observada:</b> Descrição breve da situação, como uma conversa ou um comentário feito por alguém.</li>
          <li><b>Reflexão/Resposta Empática:</b> Reflete como poderias responder ou agir de forma empática.</li>
        </ul>
        
        <div className="mt-3">
          Ao <b>tirares estes minutos para refletir</b> sobre o que aprendeste com essas <b>observações</b>, estarás a mudar a tua <b>perceção</b> sobre a ansiedade e o <b>estigma</b> associado a ela.<br />
          <b>Espero que esta semana te ajude a aprender mais sobre ti!</b><br />
          <b>Vamos em frente! #DesmistificarAnsiedade</b>
        </div>
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
                  <th>Situações Observadas</th>
                  <th>Reflexões/Respostas</th>
                </tr>
              </thead>
              <tbody>
                {registos.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.dataCriacao}</td>
                    <td style={{ textAlign: 'left' }}>
                      {[1, 2, 3, 4, 5, 6, 7].map(num => (
                        item[`situacao_${num}`] ? (
                          <div key={num} className="mb-2">
                            <strong>Situação {num}:</strong> {item[`situacao_${num}`]}
                          </div>
                        ) : null
                      ))}
                    </td>
                    <td style={{ textAlign: 'left' }}>
                      {[1, 2, 3, 4, 5, 6, 7].map(num => (
                        item[`reflexao_${num}`] ? (
                          <div key={num} className="mb-2">
                            <strong>Reflexão {num}:</strong> {item[`reflexao_${num}`]}
                          </div>
                        ) : null
                      ))}
                    </td>
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

export default AtividadeSemanal2;