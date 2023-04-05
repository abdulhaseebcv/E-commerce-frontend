import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';
import ProtectedRoute from './Components/Login/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route exact path='/signup' element={<SignupPage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/cart' element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
