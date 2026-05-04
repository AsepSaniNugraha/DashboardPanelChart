import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/pages/Products';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories';
import Customers from './components/pages/Customers';
import Inventory from './components/pages/Inventory';
import Reports from './components/pages/Reports';
import Setting from './components/pages/Setting';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='categories' element={<Categories />} />
          <Route path='customers' element={<Customers />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='reports' element={<Reports />} />
          <Route path='setting' element={<Setting />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App