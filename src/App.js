import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import './App.css'
import Home from "./Components/Pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Components/Pages/UsersList/UserList.jsx";
import User from "./Components/Pages/User/User.jsx";
import NewUser from "./Components/Pages/NewUser/NewUser.jsx";
import RoomsList from "./Components/Pages/RoomsList/RoomsList.jsx";
import Room from "./Components/Pages/Room/Room.jsx";
import NewRoom from "./Components/Pages/NewRoom/NewRoom.jsx";
import Login from "./Components/Pages/Login/Login.jsx";
import React from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import CountriesList from "./Components/Pages/CountriesList/CountriesList.jsx";
import NewCountry from "./Components/Pages/NewCountry/NewCountry.jsx";
import Country from "./Components/Pages/Country/Country.jsx";


function App() {
const navigate = useNavigate();
  const admin = true;
useEffect(() => {
    const checkUser = async()=> {
      try {
      //  const response = await axios.post('/api/checkuser');
      //  if (response.data.status === 'success') {
        if (admin ){
          navigate('/');
        } else if (!admin) {
          navigate('/login');
        }
      } catch (error) {
        navigate('/login');
      }
    }
      checkUser();
  }, [admin]);
  

  return (
        <>
      <Routes>
      <Route exact path="/login" element={<Login />} />
       </Routes>
        {admin && (
          <>
      <Navbar/>
    <div className="container">
    <Sidebar/>
    <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/user" element={<UserList />} />
              <Route exact path="/user/:userId" element={  <User />} />
              <Route exact path="/newUser" element={  <NewUser />} />

              <Route exact path="/rooms" element={  <RoomsList />} />
              <Route exact path="/room/:roomId" element={  <Room />} />
              <Route exact path="/newroom" element={  <NewRoom />} />
              
              <Route exact path="/countries" element={  <CountriesList />} />
              <Route exact path="/newcountry" element={  <NewCountry />} />
              <Route exact path="/country/:countryId" element={  <Country />} />


        </Routes>
 </div>
</>
        )}  
        </>
  );
}

export default App;
