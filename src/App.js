import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './Pages/Account/Account';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import NewsAndPromotions from './Pages/NewsAndPromotions/NewsAndPromotions';
import Outlet from './Pages/Outlet/Outlet';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import ShopOnline from './Pages/ShopOnline/ShopOnline';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/shop-online" element={<ShopOnline />} />
          <Route path="/news-and-promotions" element={<NewsAndPromotions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
