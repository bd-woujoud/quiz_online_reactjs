
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { condidatureService} from './condidatureAPI';


const initialState = {

  condidatures: [],
  registerStatus: '',
  errorMessage: '',
  errors : []

};

//create condidature

export const createCondidature = createAsyncThunk(
  'candidatures/create',
  async (data) => {
      const response = await condidatureService.create(data);
      return response;
  }
);

//getcondidature

export const getAllCondidature = createAsyncThunk(

  'condidature/getcondidature',
  async () => {
    const response = await condidatureService.get()
    return response;
  }
);


export const condidatureSlice = createSlice({
  name: 'condidatures',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {

    builder



     //create condidature
     .addCase(createCondidature.pending, (state) => {
      state.registerStatus = 'loading'

    })

    .addCase(createCondidature.fulfilled, (state, action) => {

      if (action.payload.status === 200) {
          state.registerStatus = 'success'
      } else {
          state.registerStatus = 'failure' 
          state.errors = action.payload.response.data.errors.details
      }
    })
    .addCase(createCondidature.rejected, (state, action) => {
      state.registerStatus = 'rejected'


    })



      //getcondidature

      .addCase(getAllCondidature.pending, (state) => {
      })

      .addCase(getAllCondidature.fulfilled, (state, action) => {
    
        state.condidatures = action.payload.data.data
      })
      .addCase(getAllCondidature.rejected, (state, action) => {

      })

  },
  
});


export const { } = condidatureSlice.actions;
export const selectCondidatures = (state) => state.condidatures.condidatures
export const selectRegisterStatus = (state) => state.condidatures.registerStatus
export const selectErorrStatus = (state) => state.condidatures.errorMessage
export default condidatureSlice.reducer;