

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { categorieService } from '../../features/categorie/categorieApi'

const initialState = {

  createCat: '',
  categories: [],
  deleteCat: '',
  updateCat: '',

};

//createCategorie

export const createCategorie = createAsyncThunk(
  'categories/createCategories',

  async (data) => {
    const response = await categorieService.create(data);
    return response.data;
  }
);

//getcategorie

export const getAllCategorie = createAsyncThunk(
  'categories/getcategories',

  async () => {
    const response = await categorieService.get();
    return response;
  }
);
// delete categorie

export const deleteCategory = createAsyncThunk(
  'categories/deletecategories',

  async (id) => {
    const response = await categorieService.delete(id);
    return response;
  }
);

// update categorie

export const updateCategorie = createAsyncThunk(
  'categories/updatecategories',
  async (data) => {
    const response = await categorieService.update(data);
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {

    builder

      //createCategorie

      .addCase(createCategorie.pending, (state) => {
      })

      .addCase(createCategorie.fulfilled, (state, action) => {

        if (state.createCat = 'success') {
          state.categories.push(action.payload.data);

        } else {

          state.createCat = 'failure'
        }

      })

      .addCase(createCategorie.rejected, (state, action) => {

      })

      //getcategorie

      .addCase(getAllCategorie.pending, (state) => {
      })

      .addCase(getAllCategorie.fulfilled, (state, action) => {
     
        state.categories = action.payload.data.data
      })

      .addCase(getAllCategorie.rejected, (state, action) => {
      })

      //deletecategorie

      .addCase(deleteCategory.pending, (state) => {

      })

      .addCase(deleteCategory.fulfilled, (state, action) => {
  
        if (action.payload.data) {
          state.deleteCat = 'success'

          let index = state.categories.findIndex(categories => categories._id === action.payload._id);
          state.categories.splice(index, 1);
        }
        else {

          state.deleteCat = 'failure'
        }
      })

      .addCase(deleteCategory.rejected, (state, action) => {

      })
      //updatecategorie

      .addCase(updateCategorie.pending, (state) => {

      })

      .addCase(updateCategorie.fulfilled, (state, action) => {

        if (action.payload.data = 200) {

          const index = state.categories.findIndex(categories => categories._id === action.payload.data._id);
          state.categories[index] = {
            ...state.categories[index],
            ...action.payload.data,
          }
      
          
        }

        else {
          state.updateCat = 'failure'
        }

      })

      .addCase(updateCategorie.rejected, (state, action) => {

      });

  }
})



export const { } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories.categories;
export const selectDeleteCat = (state) => state.categories.deleteCat;
export const selectCreateCat = (state) => state.categories.createCat;
export const selectUpdateCat = (state) => state.categories.updateCat;
export default categoriesSlice.reducer;