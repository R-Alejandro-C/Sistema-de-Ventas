import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/registerPage';
import MainRoutes from './routes/mainRoutes';
import Peticiones from './services/peticiones';
function App() {
  return (
    <div className="App">
      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
