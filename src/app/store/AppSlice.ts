import { createSlice } from "@reduxjs/toolkit";

interface stateTypes {
  showNavPage:boolean;
  overlapLoadingPage:boolean;
  testVar: boolean;
}
const initialState: stateTypes = {
   showNavPage:false,
   overlapLoadingPage:false,
   testVar: false
}

export const AppSlice = createSlice({
    name:'AppSlice',
    initialState,
    reducers:{
      updateNavPageState:(state, action) => {
         state.showNavPage = action.payload;
      },
      updateOverlapLoadingPage:(state, action) => {
         state.overlapLoadingPage = action.payload;
      },
      updateTestVar:(state, action) => {
         state.testVar = action.payload
      }
    }
})


export const {updateNavPageState, updateOverlapLoadingPage, updateTestVar} = AppSlice.actions;
export default AppSlice.reducer;