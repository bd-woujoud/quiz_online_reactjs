
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { testService } from '../../features/testt/testApi'

const initialState = {

  test:null,
  updateTestt:''


};

//create test

export const createTest= createAsyncThunk(

  'tests/createtests',
  async (data) => {
    const response = await testService.create(data);
    return response;
  }
);
//get test

export const getTest= createAsyncThunk(

  'tests/gettests',
  async (id) => {
    const response = await testService.testbyid(id);
    return response.data;
  }
);

//update test

export const updateTest = createAsyncThunk(

  'tests/updatetests',
  async (data) => {
    const response = await testService.update(data);
    return response.data;
  }
);



export const testSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {

    builder

      .addCase(getTest.pending, (state) => {

      })
      
      .addCase(getTest.fulfilled, (state, action) => {
      
        state.test = action.payload.data

      })
      .addCase(getTest.rejected, (state, action) => {

      })

      //update test

      .addCase(updateTest.pending, (state) => {
      })

      .addCase(updateTest.fulfilled, (state, action) => {
  
        if (action.payload.data = 200) {

          state.updateTestt = 'success'
        }
        else {
          state.updateTestt = 'failure'
        }
      })
      
      .addCase(updateTest.rejected, (state, action) => {

      });

  }
})



export const { } = testSlice.actions;
export const selectTest = (state) => state.tests.test
export const selectUpdateTest = (state) => state.tests.updateTestt
export default testSlice.reducer;