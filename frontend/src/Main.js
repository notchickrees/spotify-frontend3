import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import RegistrationForm from "./Components/registrationForm";
import UpdatePasswordPage from "./Pages/Update_password_page";
import HomePage from "./Components/HomePage";
import DashBoard_page from "./Pages/DashBoard_page";
import Dashboard from "./Components/Dashboard";
import './App.css';
import CreateSong from "./Components/Createsong";


const Main = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<HomePage />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path='/updatepassword' element={<UpdatePasswordPage />} />
    //     <Route path='/register' element={<RegistrationForm/>}/>
    //     <Route path='/dashboard' element={<DashBoard_page/>}/>
    //   </Routes>
    // </BrowserRouter>





     <BrowserRouter>
      <Routes>
        <Route path='/' element={< CreateSong/>} />
        <Route path="/login" element={<Login />} />
        <Route path='/updatepassword' element={<UpdatePasswordPage />} />
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path='/dashboard' element={<DashBoard_page/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
