
import { Footer } from './components/Layout/Footer/Footer';
import { NavBar } from './components/Layout/NavBar/NavBar';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className="AppContainer">
       <NavBar />
       <main className='mainContent'>
       <AppRoutes />

    </main>
    <Footer/>
    </div>
  );
}

export default App;