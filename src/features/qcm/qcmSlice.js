
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { qcmService } from '../../features/qcm/qcmApi'

const initialState = {

  listQcm:[],
  createStatus:'',
  message:'',
  updateStatus:'',
  deleteStatus:''


};
//createqcm

export const createQcm = createAsyncThunk(

  'qcm/ceateqcm',
  async (data) => {
    const response = await qcmService.createqcm(data)
    return response;
  }
);

//get qcm
export const getQcm = createAsyncThunk(

  'qcms/getqcm',
  async () => {
    //   await lel API function 
    const response = await qcmService.getqcm();

    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

//updateqcm
export const updateQcm = createAsyncThunk(

  'qcm/updateqcm',
  async (data) => {
    const response = await qcmService.update(data);
    return response;
  }
);

export const deleteQcm = createAsyncThunk(

  'qcm/delete',
  async (id) => {
    const response = await qcmService.deleteqcm(id);
    return response;
  }
);




export const qcmSlice = createSlice({
  name: 'qcms',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },

  extraReducers: (builder) => {

    builder


      //createoffre

      .addCase(createQcm.pending, (state) => {
        state.createStatus='loading'
      })
      .addCase(createQcm.fulfilled, (state, action) => {
        if (state.createStatus = 'success') {
         // state.listQcm.push(action.payload.data);

        } else {

          state.createStatus = 'failure'
        }
      })
    
      .addCase(createQcm.rejected, (state, action) => {
       
        state.status='rejected'


      })
       //getqcm
       .addCase(getQcm.pending, (state) => {
      })
      .addCase(getQcm.fulfilled, (state, action) => {
        state.listQcm = action.payload.data.data
      })
      
      .addCase(getQcm.rejected, (state, action) => {

      })
     
       //updateqcm
       .addCase(updateQcm.pending, (state) => {


      })

      .addCase(updateQcm.fulfilled, (state, action) => {
        if (action.payload.data = 200) {

          state.updateStatus = 'success'
        }
        
        else {
          state.updateStatus  = 'failure'
        }
      })
      .addCase(updateQcm.rejected, (state, action) => {

      })

//delete Qcm
      .addCase(deleteQcm.pending, (state) => {


      })
      .addCase(deleteQcm.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.deleteStatus = 'success'

          let index = state.listQcm.findIndex(listQcm => listQcm._id === action.payload._id);
          state.listQcm.splice(index, 1);
        }
        else {

          state.deleteStatus = 'failure'
        }
      })
      .addCase(deleteQcm.rejected, (state, action) => {

      });

    },
  });


  export const { } = qcmSlice.actions;
export const SelectCreateStatus = (state) => state.qcms.createStatus;
export const SelectListQcm = (state) => state.qcms.listQcm;
export const SelectUpdateStatus = (state) => state.qcms.updateStatus;
export const SelectDeleteStatus = (state) => state.qcms.deleteStatus;

export default qcmSlice.reducer;