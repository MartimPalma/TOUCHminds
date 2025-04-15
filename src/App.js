import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
// rotas de navegação
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// firebase
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// componentes
import LandingPage from './components/landing';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import SignupPage2 from './components/signup2';
import Homepage from './components/homepage';
import { dadosAlunos } from './database/database';


const App = () => {

  // TEM DE SER APRIMORADO PARA A LÓGICA DO PROJETO
  // COLOCAR O UID DO USER NO ESTADO GLOBAL USERDATA

  const [user, setUser] = useState(null); // Armazena o UID do user
  const [userData, setUserData] = useState(null); // Armazena os dados do user

  // UTILIZAR NA PÁGINA DE PERFIL DO ALUNO
  const updateUserData = (updatedData) => {
    setUserData(updatedData); 
  };

  // monitorar mudanças na autenticação do Firebase
  useEffect(() => {
    const auth = getAuth(); 

    // função do Firebase A função onAuthStateChanged é chamada sempre que ocorre um login ou um logout.
    // O objeto user vem diretamente do Firebase Authentication e é passado como parâmetro pela função onAuthStateChanged
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user); 
        try {
          const data = await dadosAlunos(user.uid); 
          setUserData(data); 
        } catch (error) {
          console.error("Erro ao carregar dados do user:", error.message); 
        }
      } else {
        // CHAMAR MÉTODO NO FICHEIRO DATABASE PARA FAZER LOGOUT
        setUser(null); 
        setUserData(null); 
      }
    });
  }, []); // Executa o useEffect apenas uma vez, ao montar o componente

  console.log(user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup2" element={<SignupPage2 />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;

