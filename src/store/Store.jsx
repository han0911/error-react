import { configureStore, createSlice } from '@reduxjs/toolkit'

let First = createSlice({
    name :'first',
    initialState: 'han'
})
let Second = createSlice({
    name:'second',
    initialState: 'seok'
})
let Data = createSlice({
    name:'data',
    initialState: [{id : 0, name : 'White and Black', count : 2},{id : 2, name : 'Grey Yordan', count : 1}] 
})
export default configureStore({
  reducer: { 
    F:First.reducer,
    S:Second.reducer,
    D:Data.reducer
  }
}) 