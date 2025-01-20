import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../features/category/categorySlice';
import { TextField, Button, Box } from '@mui/material';

function CategoryForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory({ name }));
    setName('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Category Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Category
      </Button>
    </Box>
  );
}

export default CategoryForm;