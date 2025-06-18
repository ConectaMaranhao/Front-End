import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmpresasPage from './pages/Empresas/EmpresasPage';
import { AboutPage } from './pages/About/AboutPage';
import { CadastroPageUsuario } from './pages/Login/CadastroPageUsuario';
import CadastroPageEmpresa from './pages/Login/CadastroPageEmpresa';
import { Footer } from './components/About/Layout/Footer/Footer';

function App() {
  return (
    <div className="AppContainer">
       {/* Nav Bar...... */}
       <div className='mainContent'>
    <Router>
      <Routes>
        <Route path="/empresas" element={<EmpresasPage />} />
        <Route path='/cadastro-usuario' element={<CadastroPageUsuario/>} />
        <Route path='/cadastro-empresa' element={<CadastroPageEmpresa/>} />
        <Route path='/about' element={<AboutPage/>} />
        {/* outras rotas */}
      </Routes>
    </Router>
    </div>
    <Footer/>
    </div>
  );
}

export default App;