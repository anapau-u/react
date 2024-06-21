import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login/Login';
import { Route, Routes} from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Clientes from './pages/Clientes/Clientes';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();
  console.log('Is authenticated', isAuthenticated); // <--- Se autentifica?
  console.log('Dashboard importado:', Dashboard); // <--- Agrega esta línea

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Topbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cliente" element={<Clientes />} />
            {/* Agrega más rutas aquí */}
          </Routes>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;