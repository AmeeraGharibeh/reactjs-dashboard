import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import './App.css'
import Home from "./Components/Pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Components/Pages/UsersList/UserList.jsx";
import User from "./Components/Pages/User/User.jsx";
import NewUser from "./Components/Pages/NewUser/NewUser.jsx";
import ProductList from "./Components/Pages/ProductList/ProductList.jsx";
import Product from "./Components/Pages/Product/Product.jsx";
import NewProduct from "./Components/Pages/NewProduct/NewProduct.jsx";
import Login from "./Components/Pages/Login/Login.jsx";
import React from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import StoreList from "./Components/Pages/StoresList/StoresList.jsx";
import NewStore from "./Components/Pages/NewStore/NewStore.jsx";
import Store from "./Components/Pages/Store/Store.jsx";


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
              <Route exact path="/products" element={  <ProductList />} />
              <Route exact path="/product/:productId" element={  <Product />} />
              <Route exact path="/newproduct" element={  <NewProduct />} />
              <Route exact path="/stores" element={  <StoreList />} />
              <Route exact path="/newstore" element={  <NewStore />} />
              <Route exact path="/store/:storeId" element={  <Store />} />


        </Routes>
 </div>
</>
        )}  
        </>
  );
}

export default App;
