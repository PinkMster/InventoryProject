import axios from 'axios';

const API_BASE_URL = 'https://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getCategories = () => api.get('/categories/');
export const createCategory = (data) => api.post('/categories/', data);
export const updateCategory = (id, data) => api.put(`/categories/${id}/`, data);
export const deleteCategory = (id) => api.delete(`/categories/${id}/`);

export const getSuppliers = () => api.get('/suppliers/');
export const createSupplier = (data) => api.post('/suppliers/', data);
export const updateSupplier = (id, data) => api.put(`/suppliers/${id}/`, data); 

export const getProducts = () => api.get('/products/');
export const createProduct = (data) => api.post('/products/', data);
export const updateProduct = (id, data) => api.put(`/products/${id}/`, data); 
export const deleteProduct = (id) => api.delete(`/products/${id}/`); 

export const getInventories = () => api.get('/inventories');
export const updateInventory = (id, data) => api.put(`/inventories/${id}/`, data);
