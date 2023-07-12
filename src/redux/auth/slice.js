import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
        name: null,
        email: null,
      },
    token: null,
    isLoggedIn: false,

}


const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setToken:(state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        setlogOut: (state, action)  => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
      
    }
})

export const {setToken, setlogOut} = authReducer.actions;
export default authReducer.reducer;