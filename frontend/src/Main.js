import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import RegistrationForm from "./Components/registrationForm";
import UpdatePasswordPage from "./Pages/Update_password_page";
import HomePage from "./Components/HomePage";
import DashBoard_page from "./Pages/DashBoard_page";
import './App.css';
import Settings from "./Components/Settings";
import LikedSongs from "./Components/LikedSongs";
import CreateSong from "./Components/Createsong";
import Search from "./Components/Search";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/updatepassword' element={<UpdatePasswordPage />} />
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path='/dashboard' element={<DashBoard_page/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/likedsongs' element={<LikedSongs/>}/>
        <Route path='/uploadsong' element={<CreateSong/>}/>
        <Route path='/search' element= {<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
