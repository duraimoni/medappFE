import React from 'react';
import './App.css';
 
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter ,Route } from  'react-router-dom';



import NavBar from './components/NavBar';
import HeaderComponent from './components/HeaderComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import TestComponent from './components/TestComponent';
import ForgotPasswordComponent from './components/ForgotPasswordComponent';



function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar/>
        <Route path="/home" component={HeaderComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/forgotpassword" component={ForgotPasswordComponent} />
        <Route path="/test" component={TestComponent} />
      </div>
    </BrowserRouter>
  );
}

export default App;
