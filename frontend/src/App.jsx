import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import CategoryList from './components/categories/CategoryList';
import SupplierList from './components/suppliers/SupplierList';
import InventoryList from './components/inventories/InventoryList';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/suppliers">Suppliers</Link>
            </li>
            <li>
              <Link to="/inventories">Inventories</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/inventories" element={<InventoryList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
