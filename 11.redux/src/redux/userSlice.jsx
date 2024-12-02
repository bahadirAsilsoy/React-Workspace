import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId: number, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data
//   },
// )

const initialState = {
    users: [],
    loading : false
}

export const getAllUsers = createAsyncThunk("users", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data)
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Http isteği olmazsa kullanılır !!
    },
    extraReducers: (builder) => {
        // Http isteklerinde kullanılır!!
        builder.addCase(getAllUsers.fulfilled), (state,actions) => {
            state.users = action.payload;
        }
    }
})

export const { } = userSlice.actions
export default userSlice.reducer