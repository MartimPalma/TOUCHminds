import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";
import { UserContext } from "../../../App";
import modulos from '../../../data/modulos';
import AtividadeProgressao from '../atividadeProgressao';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AtividadeResumoModulo2 = () => {
    const { id: moduloId } = useParams();
    const { updateUserData } = useContext(UserContext);
    const [pagina, setPagina] = useState(0);
    const [modalAberto, setModalAberto] = useState(false);
    const [mensagemPopUp, setMensagemPopUp] = useState("");
    const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    const modulo = modulos.find((m) => m.id === moduloId);
    const atividade = modulo?.atividades.find(a => a.url === "atividade-resumo");

    const cenarios = [
        {
            imagem: "/imgs/modulo2/resumo/resumo2_1.png",
            opcoes: [
                <><b>Reforçar o estigma:</b> Concordar com os comentários e afastar-se."</>,
                <><b>Responder com empatia:</b> Defender o colega, contrariar o julgamento e mostrar compreensão.</>
            ],
            explicacao: (
                <><b>Olhares de julgamento</b> podem intensificar a sensação de <b>vergonha</b> nas pessoas que lidam com dificuldades resultantes da <b>ansiedade</b>.
                    Responder com <b>empatia</b> e <b>compreensão</b> ajuda a reduzir o <b>estigma</b> e fortalece as <b>relações</b> com as outras pessoas.
                </>
            )
        },
        {
            imagem: "/imgs/modulo2/resumo/resumo2_2.png",
            opcoes: [
                <><b>Reforçar o estigma:</b> Ignorar ou afastar-se da pessoa.</>,
                <><b>Responder com empatia:</b> Aproximar-se, perguntar se está bem, oferecer companhia.</>
            ],
            explicacao: (
                <><b>O estigma</b> pode levar as pessoas a <b>isolarem-se</b>, acreditando que não merecem ter <b>amizades</b> ou o <b>apoio</b> dos outros. É fundamental mostrarmos <b>empatia</b> e
                    <b>compreensão</b>. Ao <b>apoiar</b> alguém que lida com dificuldades resultantes da <b>ansiedade</b>, estás a ajudar a <b>combater o estigma</b> e promover um <b>ambiente seguro</b>.
                </>
            )
        },
        {
            imagem: "/imgs/modulo2/resumo/resumo2_3.png",
            opcoes: [
                <><b>Reforçar o estigma:</b> Rir, comentar com colegas, não levar a apresentação a sério.</>,
                <><b>Responder com empatia:</b> Encorajar, sorrir de forma acolhedora, apoiar verbalmente.</>
            ],
            explicacao: (
                <>O <b>estigma</b> pode fazer com que situações que já são <b>desafiadoras</b> se tornem ainda mais <b>difíceis</b>. O <b>medo do julgamento</b> pode aumentar a <b>ansiedade</b>,
                    fazendo com que a pessoa se sinta ainda mais <b>insegura</b>. Ao oferecer <b>empatia</b>, como palavras de <b>incentivo</b> ou <b>compreensão</b>, ajudamos a criar um<b> ambiente</b> onde todos
                    se sintam <b>confortáveis</b> para se <b>expressar e participar</b>.
                </>
            )
        },
        {
            imagem: "/imgs/modulo2/resumo/resumo2_4.png",
            opcoes: [
                <><b>Reforçar o estigma:</b> Ignorar o que está a acontecer, fazer scroll, ou até concordar com os comentários.</>,
                <><b>Responder com empatia:</b> Denunciar os comentários, lembrar-lhe que não está sozinho.</>
            ],
            explicacao: (
                <><b>O estigma nas redes sociais</b> pode amplificar o <b>isolamento</b>. Comentários <b>negativos</b> podem fazer com que uma pessoa se sinta ainda
                    mais <b>sozinha</b> nas suas <b>dificuldades</b>. Todos nos devemos sentir <b>seguros</b> para <b>partilhar</b> as nossas <b>experiências</b> sem medo de sermos
                    <b>julgados</b> ou <b>ridicularizados</b>.
                </>
            )

        }
    ];

    const avancar = () => {
        setPagina(prev => prev + 1);
        setMostrarOpcoes(false);
        setOpcaoSelecionada(null);
    };

    const retroceder = () => {
        setPagina(prev => prev - 1);
        setMostrarOpcoes(false);
        setOpcaoSelecionada(null);
    };

    const escolherOpcao = (index) => {
        const explicacao = cenarios[pagina - 1].explicacao;
        setMensagemPopUp(explicacao);
        setOpcaoSelecionada(index);
        setModalAberto(true);
    };



    const progresso = Math.round((pagina / (cenarios.length + 1)) * 100);

    return (
        <div className="container-fluid vh-100 p-0 font-poppins">
            <Navbar />
            <div className="row h-100 m-0">
                <Sidebar />
                <div className="col px-4 py-4" style={{ backgroundColor: "#FBF9F9" }}>
                    <div className="container p-5 bg-white rounded shadow-sm text-center">
                        <div className="progress mb-4" style={{ height: "8px" }}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${progresso}%`, backgroundColor: "#99CBC8" }}
                                aria-valuenow={progresso}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>

                        {pagina === 0 && (
                            <>
                                <h2 className="fw-bold mb-4" style={{ color: "#234970" }}>
                                    {atividade?.titulo || "Atividade Resumo – Desmistificar a Ansiedade"}
                                </h2>
                                <p className="lead">
                                    <strong>Sê muito bem-vindo ou bem-vinda à atividade resumo do Módulo 2</strong> – 'Desmistificar a Ansiedade!'
                                    <br /><br />
                                    O objetivo desta atividade é <strong>consolidar os conteúdos que explorámos ao longo do módulo</strong>.
                                    <br /><br />
                                    Encontrarás diferentes <strong>cenários</strong> que mostram como o <strong>estigma pode ter impacto nas pessoas</strong>.
                                    <br /><br />
                                    Em cada cenário, vais ver <strong>balões de fala</strong> com comentários <strong>estigmatizantes</strong> dirigidos a adolescentes.
                                    <br /><br />
                                    O teu desafio é clicar no ícone e escolher como reagir: <strong>reforçar o estigma</strong> ou <strong>responder com empatia</strong> a cada um dos cenários.
                                    <br /><br />
                                    <strong>Estás pronto/a para fazer a diferença?</strong>
                                </p>
                                <button className="btn mt-3 px-4 py-2" style={{
                                    backgroundColor: "#66BFBF",
                                    color: "white",
                                    borderRadius: "8px",
                                    fontSize: "1.05rem",
                                    border: "none",
                                }} onClick={() => setPagina(1)}>
                                    Vamos começar!
                                </button>
                            </>
                        )}

                        {pagina > 0 && pagina <= cenarios.length && (
                            <>
                                <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>
                                    Cenário {pagina} de {cenarios.length}
                                </h4>

                                <div className="position-relative d-flex justify-content-center mb-4">
                                    <img
                                        src={cenarios[pagina - 1].imagem}
                                        alt={`Cenário ${pagina}`}
                                        className="img-fluid rounded"
                                        style={{ maxHeight: "400px", objectFit: "contain" }}
                                    />
                                    <div
                                        onClick={() => setMostrarOpcoes(true)}
                                        style={{
                                            position: "absolute",
                                            bottom: "10px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <img
                                            src="/imgs/modulo2/resumo/maozinha.png"
                                            alt="Interagir"
                                            style={{ height: "50px" }}
                                            onError={() => console.error("Erro ao carregar ícone da mãozinha")}
                                        />
                                    </div>
                                </div>

                                {mostrarOpcoes && (
                                    <div className="d-flex flex-column gap-3">
                                        {cenarios[pagina - 1].opcoes.map((opcao, index) => (
                                            <button
                                                key={index}
                                                className="btn"
                                                disabled={opcaoSelecionada !== null && opcaoSelecionada !== index}
                                                /*style={{ Para encurtar as caixas de texto
                                                    backgroundColor: opcaoSelecionada === index ? "#234970" : "#6B8BA4",
                                                    color: "white",
                                                    borderRadius: "8px",
                                                    fontSize: "1rem",
                                                    maxWidth: "600px",
                                                    width: "100%",
                                                    margin: "0 auto",
                                                    cursor: opcaoSelecionada !== null && opcaoSelecionada !== index ? "not-allowed" : "pointer",
                                                    opacity: opcaoSelecionada !== null && opcaoSelecionada !== index ? 0.6 : 1,
                                                    transition: "background-color 0.3s ease"
                                                }} */

                                                style={{
                                                    backgroundColor: opcaoSelecionada === index ? "#234970" : "#6B8BA4",
                                                    color: "white",
                                                    borderRadius: "8px",
                                                    fontSize: "1rem",
                                                    cursor: opcaoSelecionada !== null && opcaoSelecionada !== index ? "not-allowed" : "pointer",
                                                    opacity: opcaoSelecionada !== null && opcaoSelecionada !== index ? 0.6 : 1,
                                                    transition: "background-color 0.3s ease"
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (opcaoSelecionada === null) e.target.style.backgroundColor = "#234970";
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (opcaoSelecionada === null) e.target.style.backgroundColor = "#6B8BA4";
                                                }}
                                                onClick={() => escolherOpcao(index)}
                                            >
                                                {opcao}
                                            </button>
                                        ))}
                                    </div>
                                )}



                            </>
                        )}


                        {pagina === cenarios.length + 1 && (
                            <>
                                <h4 className="fw-bold mb-4" style={{ color: "#234970" }}>Conclusão da Atividade!</h4>
                                <div className="text-start lead" style={{ maxWidth: "900px", margin: "0 auto" }}>
                                    <p><strong>Terminaste a visita pela Sala do Estigma!</strong>
                                    Durante esta atividade, exploraste diferentes situações do dia a dia em que o <strong>estigma em relação à ansiedade</strong> pode surgir.
                                    Viste como <strong>palavras</strong>, <strong>olhares</strong> ou a <strong>ausência de apoio</strong> podem afetar profundamente quem vive com ansiedade — e também como um gesto de <strong>empatia</strong> pode transformar uma situação difícil num momento de <strong>acolhimento</strong> e <strong>compreensão</strong>.</p>
                                    <p>A <strong>ansiedade</strong> não é uma falha, nem uma fraqueza. É uma <strong>resposta humana, natural</strong>, e todos merecem ser tratados com <strong>respeito</strong>, <strong>apoio</strong> e <strong>empatia</strong>.</p>
                                    <p>Ao escolheres intervir de forma positiva em cada cenário, mostraste que tens o poder de contribuir para um <strong>ambiente mais seguro e inclusivo</strong>, onde ninguém se sinta sozinho nas suas dificuldades.</p>
                                    <p><strong>Lembra-te:</strong> combater o estigma começa com pequenas ações — e <strong>começa contigo</strong>.</p>
                                </div>

                                <AtividadeProgressao
                                    moduloId={moduloId}
                                    atividadeIndex={2}
                                    updateUserData={updateUserData}
                                />
                            </>
                        )}

                        <div className="d-flex justify-content-between mt-4">
                            {pagina > 0 && (
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: "#E7C8C2",
                                        color: "white",
                                        borderRadius: "8px",
                                        fontSize: "1.05rem",
                                        border: "none"
                                    }}
                                    onClick={retroceder}
                                >
                                    <i className="bi bi-arrow-left me-2"></i> Anterior
                                </button>
                            )}
                            {pagina > 0 && pagina <= cenarios.length && (
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: pagina === cenarios.length ? "#66BFBF" : "#66BFBF",
                                        color: "white",
                                        borderRadius: "8px",
                                        fontSize: "1.05rem",
                                        border: "none"
                                    }}
                                    onClick={avancar}
                                    disabled={opcaoSelecionada === null}
                                >
                                    {pagina === cenarios.length ? "Conclusão" : "Continuar"} <i className="bi bi-arrow-right ms-2"></i>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={modalAberto} onHide={() => setModalAberto(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Reflexão</Modal.Title>
                </Modal.Header>
                <Modal.Body>{mensagemPopUp}</Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "#234970", border: "none" }} onClick={() => setModalAberto(false)}>
                        Continuar
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default AtividadeResumoModulo2;