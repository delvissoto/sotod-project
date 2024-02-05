import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    somethings:[], 
    status:"idle", 
    error:null
}

const somethingsSlice = createSlice({
    name:'somethings',
    initialState,
    reducers:{
      
    }
});

export default somethingsSlice.reducer