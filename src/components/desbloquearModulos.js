import { useEffect, useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../database/database";

const diasPassados = (dataISO) => {
  if (!dataISO) return 0;
  const dataDesbloqueio = new Date(dataISO);
  const agora = new Date();
  return Math.floor((agora - dataDesbloqueio) / (1000 * 60 * 60 * 24));
};

const useDesbloquearModulos = (userData) => {
  const modulosRef = useRef(userData?.modulos);

  useEffect(() => {
    modulosRef.current = userData?.modulos;
  }, [userData]);

  useEffect(() => {
    if (!userData?.uid || !userData?.modulos) {
      console.log("Dados incompletos no hook: userId ou modulos ausentes");
      return;
    }

    const checkAndUpdate = async () => {
      const modulosAtual = modulosRef.current;
      if (!modulosAtual) {
        console.log("Nenhum módulo disponível para verificação");
        return;
      }

      const nomesModulos = Object.keys(modulosAtual).sort((a, b) => {
        const numA = parseInt(a.replace("modulo", ""), 10);
        const numB = parseInt(b.replace("modulo", ""), 10);
        return numA - numB;
      });

      console.log("Verificando desbloqueio de módulos na ordem:", nomesModulos);

      for (let i = 0; i < nomesModulos.length - 1; i++) {
        const nomeAtual = nomesModulos[i];
        const nomeSeguinte = nomesModulos[i + 1];
        const moduloAtual = modulosAtual[nomeAtual];
        const moduloSeguinte = modulosAtual[nomeSeguinte];

        if (!moduloAtual?.dataFim) {
          console.log(`Módulo ${nomeAtual} ainda não foi concluído`);
          continue;
        }

        if (moduloSeguinte?.status !== "bloqueado") {
          console.log(`Módulo ${nomeSeguinte} já está desbloqueado ou em progresso`);
          continue;
        }

        const diasDesdeFinalizacao = diasPassados(moduloAtual.dataFim);

        console.log(`Módulo ${nomeAtual} finalizado em ${moduloAtual.dataFim}`);
        console.log(`Já se passaram ${diasDesdeFinalizacao} dias desde a conclusão`);

        if (diasDesdeFinalizacao >= 7) {
          try {
            const dataDesbloqueio = new Date().toISOString();
            await updateDoc(doc(db, "alunos", userData.uid), {
              [`modulos.${nomeSeguinte}.status`]: "desbloqueado",
              [`modulos.${nomeSeguinte}.dataInicio`]: dataDesbloqueio,
            });
            console.log(`✅ Módulo ${nomeSeguinte} foi desbloqueado com sucesso!`);
            break; // Evita múltiplos desbloqueios na mesma verificação
          } catch (error) {
            console.error("Erro ao desbloquear módulo:", error);
          }
        } else {
          console.log(`Ainda faltam ${7 - diasDesdeFinalizacao} dias para desbloquear ${nomeSeguinte}`);
        }
      }
    };

    // Chama imediatamente após `userData` ser carregado
    console.log("Executando verificação inicial de desbloqueio");
    checkAndUpdate();

    // Chama periodicamente a cada 10 minutos
    const intervalId = setInterval(() => {
      console.log("Executa verificação periódica de desbloqueio");
      checkAndUpdate();
    }, 600000); // 10 minutos em milissegundos

    return () => {
      clearInterval(intervalId);
    };
  }, [userData]);
};

export default useDesbloquearModulos;
