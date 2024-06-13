import React from 'react';
import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import UsersPage from './components/Users';
import Products from './components/products';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Header />}> </Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path="/users" element={<UsersPage/>}> </Route>
        <Route path="/products" element={<Products/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
