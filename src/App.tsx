import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmpresasPage from './pages/Empresas/EmpresasPage';
import { AboutPage } from './pages/About/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/empresas" element={<EmpresasPage />} />
        <Route path='/about' element={<AboutPage/>} />
        {/* outras rotas */}
      </Routes>
    </Router>
  );
}

export default App;
