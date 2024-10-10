import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:'counterStore',
    initialState:{
        count:0

    },
    reducers:{
        increment:(state)=>{
           state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            return {...state,count:0}
        },
        incrementAdd:(state,addIncrement)=>{
           state.count+= Number(addIncrement.payload)
        }
    }
})

export const {increment,decrement,reset,incrementAdd}=counterSlice.actions
export default counterSlice.reducer