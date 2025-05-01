import React from "react";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";


const BandaDesenhada = () => {
  return (

    <div className="container-fluid vh-100 p-0">
      <Navbar />
      <div className="row h-100 m-0">
        <Sidebar />
        <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
          <div className="container p-5 bg-white rounded shadow-sm">

            <div className="container bg-white rounded shadow-sm p-4">
            <h2 className="text-primary fw-bold mb-3">Ansiedade: Aliada ou Empecilho?</h2>

            <p className="mb-4">
                Sê muito bem-vindo ou bem-vinda à <strong>Banda Desenhada da Ansiedade: Aliada ou Empecilho?!</strong> Nesta banda desenhada, vais conhecer dois tipos de ansiedade: a ansiedade comum, que nos ajuda a enfrentar desafios, e a ansiedade SOS, que pode atrapalhar o nosso bem-estar. O teu desafio é compreender a diferença entre estas duas formas de ansiedade. Para isso, lê com atenção os quadros da banda desenhada.
                <br /><br />
                No final, escreve uma palavra que, para ti, represente: o que é a ansiedade comum e o que é a ansiedade SOS. Não há respostas certas ou erradas — o importante é o que tu compreendeste! Vamos a isto?
            </p>

            <div className="mb-4">
                <h5 className="fw-bold">Quadros</h5>

                <div className="mb-3">
                <p><strong>QUADRO 1:</strong><br />
                    Rapariga: “Olá, como estás? Pareces pensativo?”<br />
                    Rapaz: “Olá estou bem e tu? Ah, estava só a pensar nas coisas que tenho de fazer hoje... Como sempre, fico um pouco ansioso com isso.”
                </p>
                <p><strong>QUADRO 2:</strong><br />
                    Rapariga: “Ah, sim, isso é normal. Sabias que a ansiedade é uma resposta natural do nosso corpo a situações de ameaça?”<br />
                    Rapaz: “Sim, mas às vezes ela pode se tornar um problema.”<br />
                    Rapariga: "Pois! Então, queres saber a diferença entre uma ansiedade comum, que é normal, e uma ansiedade SOS, que causa sofrimento?”<br />
                    Rapaz: “Sim, quero entender melhor a diferença.”
                </p>
                <p><strong>QUADRO 3:</strong><br />
                    Rapariga: “A ansiedade comum é uma reação adaptativa. Ela acontece em situações que parecem imprevisíveis ou incontroláveis...”<br />
                    Rapaz: “Ah, sim! Nesses momentos, a ansiedade ajuda-nos a preparar e a enfrentar o desafio, certo?”<br />
                    Rapariga: “Exatamente! O corpo ativa a resposta de luta ou fuga...”<br />
                    Rapaz: “E a ansiedade SOS? O que é que a torna diferente?”
                </p>
                <p><strong>QUADRO 4:</strong><br />
                    Rapariga: “A ansiedade SOS acontece quando a resposta é desproporcional ou persiste por muito tempo...”<br />
                    Rapaz: “A pessoa pode até evitar situações comuns, como conversar com outras pessoas?”<br />
                    Rapariga: “Sim, e o corpo também reage de forma intensa...”<br />
                    Rapaz: “Então, a principal diferença é a intensidade e a duração.”
                </p>
                <p><strong>QUADRO 5:</strong><br />
                    Rapariga: “A ansiedade comum vai embora depois da situação.”<br />
                    Rapaz: "Então ela é temporária e desaparece assim que o perigo passa."<br />
                    Rapaz: “Mas a ansiedade SOS não vai embora assim tão facilmente, certo?”<br />
                    Rapariga: “Não, ela é intensa, duradoura e pode aparecer antes, durante e depois da situação.”
                </p>
                <p><strong>QUADRO 6:</strong><br />
                    Rapaz: "E isso pode afetar a vida da pessoa..."<br />
                    Rapariga: “Exatamente! A ansiedade SOS tem um grande impacto no bem-estar.”<br />
                    Rapaz: “Foi fixe falar contigo. Mas tenho de ir.”<br />
                    Rapariga: “Sim, até logo! Boa sorte para hoje!”
                </p>
                </div>
            </div>

            {/* Campo de resposta */}
            <div className="mb-4">
                <h5 className="fw-bold">Partilha a tua reflexão</h5>
                <p>Escreve aqui duas palavras que para ti representem o que é a ansiedade comum e o que é a ansiedade SOS.</p>

                <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="ansiedadeComum">A minha palavra para definir a ansiedade comum é:</label>
                <input type="text" className="form-control" id="ansiedadeComum" placeholder="Exemplo: alerta" />
                </div>

                <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="ansiedadeSOS">A minha palavra para definir a ansiedade SOS é:</label>
                <input type="text" className="form-control" id="ansiedadeSOS" placeholder="Exemplo: sufoco" />
                </div>
            </div>

            {/* Conclusão */}
            <div className="bg-light p-3 rounded border">
                <p>
                Espero que tenha sido um primeiro passo importante para compreenderes melhor como a ansiedade pode afetar a tua vida. Lembra-te de que a ansiedade comum pode ser uma aliada, ajudando-nos a enfrentar desafios. No entanto, quando se torna SOS, pode interferir no nosso bem-estar e prejudicar as nossas relações e atividades diárias. É importante saber distinguir quando a ansiedade está a ser útil e quando está a tornar-se um problema.
                </p>
            </div>
            </div>

    </div>
        </div>
      </div>
    </div>
  );
};

export default BandaDesenhada;
