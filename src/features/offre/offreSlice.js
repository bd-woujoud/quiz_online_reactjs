
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { offreService } from '../../features/offre/offreApi'


const initialState = {

  offres: [],
  deleteOffre: '',
  addOffre: '',
  errorMessage: '',
  offreUpdate: '',
  updateStatus: ''

};

//createoffre

export const createOffre = createAsyncThunk(

  'offres/ceate',
  async (data) => {

    const response = await offreService.create(data);
    return response;
  }
);

//getoffre

export const getAllOffre = createAsyncThunk(

  'offres/get',
  async (data) => {
    const response = await offreService.search(data);
    return response;
  }
);

//deleteOffre

export const deleteOffre = createAsyncThunk(

  'offres/delete',
  async (id) => {
    const response = await offreService.delete(id);
    return response;
  }
);

//updateOffre

export const updateOffre = createAsyncThunk(

  'offres/update',
  async (data) => {
    const response = await offreService.update(data);
    return response;
  }
);


export const offresSlice = createSlice({
  name: 'offres',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    reset: state => initialState
  },

  extraReducers: (builder) => {

    builder

   //createoffre

      .addCase(createOffre.pending, (state) => {
      })

      .addCase(createOffre.fulfilled, (state, action) => {
      
        if (action.payload.data) {
          state.addOffre = action.payload.data
        }
        else {
          state.addOffre = 'failure'
        }
      })
      
      .addCase(createOffre.rejected, (state, action) => {

      })

      //getoffre

      .addCase(getAllOffre.pending, (state) => {

      })
      .addCase(getAllOffre.fulfilled, (state, action) => {

        state.offres = action.payload.data.data
      })
      .addCase(getAllOffre.rejected, (state, action) => {
      })

      //deleteOffre

      .addCase(deleteOffre.pending, (state) => {

      })
      .addCase(deleteOffre.fulfilled, (state, action) => {

        if (action.payload.data) {
          state.deleteOffre = 'success'

          let index = state.offres.findIndex(offres => offres._id === action.payload._id);
          state.offres.splice(index, 1);
        }
        else {

          state.deleteOffre = 'failure'
        }

      })

      //updateOffre

      .addCase(updateOffre.pending, (state) => {
        state.updateOffre = ''
      })

      .addCase(updateOffre.fulfilled, (state, action) => {

        if (action.payload.data) {

          state.updateOffre = 'success'
        }

        else {

          state.updateOffre = 'failure'
        }
      })

      .addCase(updateOffre.rejected, (state, action) => {

      })
  }
})

export const { reset} = offresSlice.actions;
export const selectAddOffre = (state) => state.offres.addOffre;
export const selectOffres = (state) => state.offres.offres;
export const selectErorrStatus = (state) => state.condidatures.errorMessage
export const selectDeleteOffre = (state) => state.offres.deleteOffre;
export const selectUpdateOffre = (state) => state.offres.updateOffre;
export default offresSlice.reducer;