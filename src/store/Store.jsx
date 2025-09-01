import { configureStore, createSlice } from "@reduxjs/toolkit";

let First = createSlice({
  name: "first",
  initialState: { name: "han", age: 17 }, 
  reducers: {
    Changename(state) {
      state.age += 1;
    },
  },
});

export let { Changename } = First.actions;

let Second = createSlice({
  name: "second",
  initialState: "seok",
});

let Data = createSlice({
  name: "data",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCount(state, action) {
      let itemIndex = state.findIndex((item) => item.id === action.payload);
      state[itemIndex].count += 1;
    },
  },
});

export let { increaseCount } = Data.actions;

export default configureStore({
  reducer: {
    F: First.reducer,
    S: Second.reducer,
    D: Data.reducer,
  },
});
