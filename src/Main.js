// this is where pages are managed
import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import RegistrationForm from "./Components/registrationForm";
import UpdatePasswordPage from "./Pages/Update_password_page";
import HomePage from "./Components/HomePage";
const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/updatepassword' element={<UpdatePasswordPage />} />
        <Route path='/register' element={<RegistrationForm/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
