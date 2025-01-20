import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import CategoryList from './components/categories/CategoryList';
import CategoryForm from './components/categories/CategoryForm';
import SupplierList from './components/suppliers/SupplierList';
import InventoryList from './components/inventories/InventoryList';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inventory Management
          </Typography>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/categories">
            Categories
          </Button>
          <Button color="inherit" component={Link} to="/suppliers">
            Suppliers
          </Button>
          <Button color="inherit" component={Link} to="/inventories">
            Inventories
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/suppliers" element={<SupplierList />} />
        <Route path="/inventories" element={<InventoryList />} />
      </Routes>
      <CategoryForm />
    </Router>
  );
}

export default App;