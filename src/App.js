import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute'
import UpdateProfile from './pages/UpdateProfile';

function App() {
  return (
    <div className='container'>
      <Router>
        <AuthProvider>

          <Routes>

            <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/' element={<Dashboard/>}/>
            </Route>

            <Route exact path='/update-profile' element={<PrivateRoute/>}>
              <Route exact path='/update-profile' element={<UpdateProfile/>}/>
            </Route>

            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/forgot-password" element={<ForgotPassword/>} /> 

          </Routes>

        </AuthProvider>
        

      </Router>
    </div>
  );
}

export default App;
