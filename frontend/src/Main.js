import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import RegistrationForm from "./Components/registrationForm";
import UpdatePasswordPage from "./Pages/Update_password_page";
import HomePage from "./Components/HomePage";
import DashBoard_page from "./Pages/DashBoard_page";
import Dashboard from "./Components/Dashboard";
import './App.css';
import LikedSongs from "./Components/LikedSongs";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/updatepassword' element={<UpdatePasswordPage />} />
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path='/dashboard' element={<DashBoard_page/>}/>
        <Route path='/likedsongs' element={<LikedSongs/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
