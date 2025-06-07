import React, { useState, useContext } from 'react';
import { UserContext } from '../../../App';
import { color } from 'framer-motion';

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
      <h3 className="mb-4" style={{ color: "#234970" }}>Desafio Semanal</h3>
      <p><b>Queria lançar-te um desafio para esta semana! </b>Ao longo dos próximos dias, sempre que sentires <b>ansiedade</b> em alguma situação, convido-te a <b>refletir</b> sobre a tua experiência.
        <br />Se quiseres, podes depois vir aqui e registar o que pensaste sobre a situação.
        <br />A ideia é que <b>reflitas como te sentes</b>, o que <b>pensas</b> e como te <b>comportas</b> nessa situação.
        <br />Podes usar esta <b>tabela</b> para registares.</p>
        <ul style={{ marginTop: "0px" }}>
          <li><b>Situação:</b> Regista a situação que te deixou ansioso/a.</li>
          <li><b>Como me senti?:</b> Descreve as sensações físicas que sentiste (por exemplo, suor, coração acelerado).</li>
          <li><b>Pensamentos que surgiram?:</b> Anota os pensamentos que te passaram pela cabeça naquele momento.</li>
          <li><b>Como agi na situação?:</b> Descreve o que fizeste para lidar com a ansiedade.</li>
          <li><b>Funcionou?:</b> Avalia se o que fizeste te aproximou ou te afastou dos teus objetivos, daquilo que queres ser ou das outras pessoas.</li>
        </ul>

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
                  className="text-center align-middle"
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
                { name: "dia" },
                { name: "situacao" },
                { name: "comoMeSenti" },
                { name: "pensamentos" },
                { name: "comoLidei" },
                { name: "funcionou" },
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
        
        <p>Ao <b>refletires</b> sobre a tua <b>experiência de ansiedade</b>, estarás a dar um passo importante para a <b>compreenderes</b> e <b>lidares</b> com ela de forma mais <b>eficaz</b>.</p>
          <p>Espero que esta semana te ajude a <b>aprender mais sobre ti</b> e sobre a tua <b>experiência da ansiedade!</b></p>
          <p><b>Vamos em frente! #SemBichoPapão</b></p>
          <p>Até para a semana!</p>
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

