
import { Footer } from './components/Layout/Footer/Footer';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className="AppContainer">

       <main className='mainContent'>
       <AppRoutes />

    </main>
    <Footer/>
    </div>
  );
}

export default App;