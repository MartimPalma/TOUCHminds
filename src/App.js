import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; 
import LandingPage from './components/landing';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import Progresso from './components/progresso';
import Conquistas from './components/conquistas';
import Contactos from './components/contactos';
import Definições from './components/def';
import Homepage from './components/homepage';
import Modulos from './components/modulo';
import BandaDesenhada from './components/atividades/modulo1/bandaDesenhada';
import LinhaAnsiedade from './components/atividades/modulo1/linhaAnsiedade';
import AnsiedadeSemFiltros from './components/atividades/modulo1/ansiedadeSemFiltros';
import AtividadeResumo from './components/atividades/modulo1/atividadeResumo';

import { dadosAlunos } from './database/database';

export const UserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  // Atualiza dados localmente e na Firestore
  const updateUserData = async (updatedData) => {

    if (!updatedData?.uid) {
      console.error("UID ausente em updateUserData");
      return;
    }

    setUserData(updatedData);

    try {
      const db = getFirestore();
      const userRef = doc(db, 'alunos', updatedData.uid); 
      await setDoc(userRef, updatedData, { merge: true }); 
      console.log('Dados atualizados na Firebase.');
    } catch (error) {
      console.error('Erro ao atualizar dados na Firebase:', error);
    }
  };

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        try {
          const data = await dadosAlunos(user.uid);
          setUserData({
            ...data,
            uid: user.uid,
          });
        } catch (error) {
          console.error('Erro ao carregar dados do user:', error.message);
          setUserData({ uid: user.uid });
        }
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(user);

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/progresso" element={<Progresso />} />
      <Route path="/conquistas" element={<Conquistas />} />
      <Route path="/contactos" element={<Contactos />} />
      <Route path="/definicoes" element={<Definições />} />

      {/* Página principal de cada módulo */}
      <Route path="/modulos/:id" element={<Modulos />} />

      {/* Atividades dentro de um módulo */}
      <Route path="/modulos/:id/atividade/banda-desenhada" element={<BandaDesenhada />} />
      <Route path="/modulos/:id/atividade/linha-ansiedade" element={<LinhaAnsiedade />} />
      <Route path="/modulos/:id/atividade/ansiedade-sem-filtros" element={<AnsiedadeSemFiltros />} />
      <Route path="/modulos/:id/atividade/atividade-resumo" element={<AtividadeResumo />} />

      
    </Routes>
  </Router>
</UserContext.Provider>

  );
};

export default App;
