import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmpresasPage from './pages/Empresas/EmpresasPage';
import { AboutPage } from './pages/About/AboutPage';
import { CadastroPageUsuario } from './pages/Login/CadastroPageUsuario';
import CadastroPageEmpresa from './pages/Login/CadastroPageEmpresa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/empresas" element={<EmpresasPage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/cadastro-usuario' element={<CadastroPageUsuario/>} />
        <Route path='/cadastro-empresa' element={<CadastroPageEmpresa/>} />
        {/* outras rotas */}
      </Routes>
    </Router>
  );
}

export default App;