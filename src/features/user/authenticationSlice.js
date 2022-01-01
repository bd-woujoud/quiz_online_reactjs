import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthenticationService } from './authenticationAPI'
const initialState = {

}

/* asyncthunk actions  */


// login admin redux action
export const login = createAsyncThunk(
    'admin/login',
    async (data) => {
        const response = AuthenticationService.login(data)

        return response
    }
)

// logout admin redux action
export const logout = createAsyncThunk(
    'admin/logout',
    async () => {
        const response = AuthenticationService.logout()

        return response
    }
)

/* createtion du slice */

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {

    },

    extraReducers: {

        // login http request 3 cases
        [login.pending]: (state, action) => {

        },

        [login.fulfilled]: (state, action) => {
          
            if (action.payload.status === 200) {

                window.location.href = '/dash'
            }
        },
        
        [login.rejected]: (state, action) => {

        },
        
        // logout http request 3 cases

        [logout.pending]: (state, action) => {

        },

        [logout.fulfilled]: (state, action) => {
            
            window.location.href = "/login"
        },

        [logout.rejected]: (state, action) => {

        },
    }

})

export const { } = authenticationSlice.actions;


export default authenticationSlice.reducer;