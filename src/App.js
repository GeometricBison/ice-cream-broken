import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Login} from './components/login/login.js';
import Home from './pages/home.js'
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {

  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="*" element={<Navigate to="/"/>} />
            <Route index element = {<Login/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/dashboard" element = {<Home/>}/>
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
