import { createSlice } from "@reduxjs/toolkit";

interface stateTypes {
  showNavPage:boolean;
  overlapLoadingPage:boolean;
}
const initialState: stateTypes = {
   showNavPage:false,
   overlapLoadingPage:false
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
      }
    }
})


export const {updateNavPageState, updateOverlapLoadingPage} = AppSlice.actions;
export default AppSlice.reducer;