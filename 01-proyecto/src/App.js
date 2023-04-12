import './App.css';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/registerPage';
import MainRoutes from './routes/mainRoutes';
function App() {
  return (
    <div className="App">
      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
