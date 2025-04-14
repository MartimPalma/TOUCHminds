import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// rotas de navegação
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// componentes
import LandingPage from './components/landing';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import SignupPage2 from './components/signup2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup2" element={<SignupPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;

