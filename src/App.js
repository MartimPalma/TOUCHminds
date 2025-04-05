import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// rotas de navegação
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// componentes
import LandingPage from './components/landing';
import LoginPage from './components/login';
import SignupPage from './components/signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;

