import { React }  from 'react';
import './App.css';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Transaction from './Components/Transaction';
import Dashboard from './Components/Dashboard';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Landingpage from './Components/Landingpage';

function App() {
  return (     
        
  
      <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<Login />} />
      <Route path="/pay" element={<Transaction />} />
      <Route path="/dashboard" element={<Landingpage />} />
      </Route>
    </Routes>
    {/* <Login /> */}
    </BrowserRouter>
    
  );
}

export default App;
