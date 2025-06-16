import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmpresasPage from './pages/Empresas/EmpresasPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/empresas" element={<EmpresasPage />} />
        {/* outras rotas */}
      </Routes>
    </Router>
  );
}

export default App;
