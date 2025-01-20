// src/features/category/categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories, createCategory, updateCategory, deleteCategory } from '../../api';

// 비동기 액션 생성
export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const response = await getCategories();
    return response.data;
  }
);

export const addCategory = createAsyncThunk(
  'category/addCategory',
  async (category) => {
    const response = await createCategory(category);
    return response.data;
  }
);

export const editCategory = createAsyncThunk(
  'category/editCategory',
  async ({ id, category }) => {
    const response = await updateCategory(id, category);
    return response.data;
  }
);

export const removeCategory = createAsyncThunk(
  'category/removeCategory',
  async (id) => {
    await deleteCategory(id);
    return id;
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload
        );
      });
  },
});

export default categorySlice.reducer;