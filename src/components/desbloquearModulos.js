import { useEffect, useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../database/database";

const segundosPassados = (dataISO) => {
  if (!dataISO) return 0;
  const dataDesbloqueio = new Date(dataISO);
  const agora = new Date();
  const diffMs = agora - dataDesbloqueio;
  return Math.floor(diffMs / 1000);
};

const useDesbloquearModulos = (userId, modulos) => {
  const modulosRef = useRef(modulos);

  useEffect(() => {
    modulosRef.current = modulos;
  }, [modulos]);

  useEffect(() => {
  if (!userId || !modulos) return;

  const intervalId = setInterval(async () => {
    const modulosAtual = modulosRef.current;
    if (!modulosAtual) return;

    // Ordena os módulos pelo número, no formato "moduloX"
    const nomesModulos = Object.keys(modulosAtual).sort((a, b) => {
      const numA = parseInt(a.replace("modulo", ""), 10);
      const numB = parseInt(b.replace("modulo", ""), 10);
      return numA - numB;
    });

    console.log("Ordem dos módulos:", nomesModulos);

    for (let i = 0; i < nomesModulos.length - 1; i++) {
      const nomeAtual = nomesModulos[i];
      const nomeSeguinte = nomesModulos[i + 1];

      const moduloAtual = modulosAtual[nomeAtual];
      const moduloSeguinte = modulosAtual[nomeSeguinte];

      if (!moduloAtual || !moduloSeguinte) continue;

      const todasConcluidas = moduloAtual.atividades.every(a => a.concluido);
      const segundosDesdeDesbloqueio = segundosPassados(moduloAtual.datafim);

      console.log(`Módulo ${nomeAtual}: todas concluídas?`, todasConcluidas);
      console.log(`Segundos desde desbloqueio:`, segundosDesdeDesbloqueio);
      console.log(`Status do próximo módulo (${nomeSeguinte}):`, moduloSeguinte.status);

      const podeDesbloquear =
        todasConcluidas &&
        segundosDesdeDesbloqueio >= 10 &&
        moduloSeguinte.status === "bloqueado";

      if (podeDesbloquear) {
        try {
          await updateDoc(doc(db, "alunos", userId), {
            [`modulos.${nomeSeguinte}.status`]: "desbloqueado",
            [`modulos.${nomeSeguinte}.datafim`]: new Date().toISOString(),
          });
          console.log(`Módulo ${nomeSeguinte} desbloqueado.`);
          break; // evita múltiplos updates seguidos
        } catch (error) {
          console.error("Erro ao desbloquear módulo:", error);
        }
      }
    }
  }, 5000);

  return () => clearInterval(intervalId);
}, [userId, modulos]);

};

export default useDesbloquearModulos;
