import { useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../database/database";

const useAtualizarDataFim = (userId, modulos) => {
  useEffect(() => {
    const atualizarDataFim = async () => {
      if (!modulos) return;

      const idsModulos = Object.keys(modulos);

      for (let id of idsModulos) {
        const modulo = modulos[id];
        const todasConcluidas = modulo.atividades.every(a => a.concluido);

        if (todasConcluidas) {
          try {
            await updateDoc(doc(db, "alunos", userId), {
              [`modulos.${id}.datafim`]: new Date().toISOString(),
            });
            console.log(`Datafim atualizada para ${id}`);
          } catch (error) {
            console.error("Erro ao atualizar datafim:", error);
          }
        }
      }
    };

    if (userId && modulos) {
      atualizarDataFim();
    }
  }, [userId, modulos]);
};

export default useAtualizarDataFim;
