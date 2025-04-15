import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, createContext } from 'react';
// rotas de navegação
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// firebase
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// componentes
import LandingPage from './components/landing';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import Homepage from './components/homepage';
import { dadosAlunos } from './database/database';


export const UserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(null); // Armazena o objeto de autenticação do Firebase
  const [userData, setUserData] = useState(null); // Armazena os dados do user 

  const updateUserData = (updatedData) => {
    setUserData(updatedData); 
  };

  useEffect(() => {
    const auth = getAuth();
    
    // A função onAuthStateChanged é chamada sempre que ocorre um login ou um logout
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        
        try {
          const data = await dadosAlunos(user.uid);
          // Incluir o uid 
          setUserData({ 
            ...data, 
            uid: user.uid 
          });
        } catch (error) {
          console.error("Erro ao carregar dados do user:", error.message);
          // Mesmo em caso de erro, pelo menos armazenamos o UID
          setUserData({ uid: user.uid });
        }
      } else {
        
        setUser(null);
        setUserData(null);
      }
    });
    
    // Limpar a inscrição ao desmontar o componente
    return () => unsubscribe();
  }, []); // Executa o useEffect apenas uma vez, ao montar o componente

  console.log(user);

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;