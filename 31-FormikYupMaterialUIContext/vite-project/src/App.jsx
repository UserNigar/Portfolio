import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { ProductProvider } from './Context/ProductContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbra';
import Products from './Context/Product';
import Register from './components/Pages/Register';


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <Navbar />
          <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
