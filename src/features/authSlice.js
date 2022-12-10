import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("user/loginUser", async(user, thunkAPI)=> {
    try {
        const response = await axios.post('http://localhost:5000/login',{
            email: user.email,
            password: user.password
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginUser.pandng, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const{reset} = authSlice.actions;
export default authSlice.reducer;
