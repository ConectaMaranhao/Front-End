import { Footer } from "./components/Layout/Footer/Footer";
import { AppRoutes } from "./routes";
import "./App.css";

function App() {
  return (
    <div className="AppContainer">
      <main className="mainContent">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
