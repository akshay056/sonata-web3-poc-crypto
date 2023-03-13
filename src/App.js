import * as React from 'react';
import Dashboard from './Components/Dashboard';
import Transaction from "./Components/Transaction";
import {Route,Routes,BrowserRouter} from 'react-router-dom';
export default function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<Transaction />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    {/* <Login /> */}
    </BrowserRouter>
    </>
  );
}
