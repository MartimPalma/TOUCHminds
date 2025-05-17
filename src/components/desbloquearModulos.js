import { useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../database/database"; 

const diasPassados = (dataISO) => {
  if (!dataISO) return 0;
  const dataDesbloqueio = new Date(dataISO);
  const hoje = new Date();
  const diffMs = hoje - dataDesbloqueio;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24)); 
};

const useDesbloquearModulos = (userId, modulos) => {
  useEffect(() => {
    const verificarEAtualizarModulos = async () => {
      if (!modulos) return;

      const nomesModulos = Object.keys(modulos);

      for (let i = 0; i < nomesModulos.length - 1; i++) {
        const nomeAtual = nomesModulos[i];
        const nomeSeguinte = nomesModulos[i + 1];

        const moduloAtual = modulos[nomeAtual];
        const moduloSeguinte = modulos[nomeSeguinte];

        if (!moduloAtual || !moduloSeguinte) continue;

        const todasConcluidas = moduloAtual.atividades.every(a => a.concluido);
        const diasDesdeDesbloqueio = diasPassados(moduloAtual.datafim);

        const podeDesbloquear =
          todasConcluidas &&
          diasDesdeDesbloqueio >= 7 &&
          moduloSeguinte.status === "bloqueado";

        if (podeDesbloquear) {
          try {
            await updateDoc(doc(db, "alunos", userId), {
              [`modulos.${nomeSeguinte}.status`]: "desbloqueado",
              [`modulos.${nomeSeguinte}.datafim`]: new Date().toISOString(),
            });
            console.log(`Módulo ${nomeSeguinte} desbloqueado.`);
          } catch (error) {
            console.error("Erro ao desbloquear módulo:", error);
          }
        }
      }
    };

    if (userId && modulos) {
      verificarEAtualizarModulos();
    }
  }, [userId, modulos]);
};

export default useDesbloquearModulos;
