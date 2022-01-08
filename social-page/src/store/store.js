import {configureStore,createSlice} from "@reduxjs/toolkit";

const ind = [{likes : 0,comments : 0,shares : 0,views : 0}];
const slice = createSlice({
    name : "Counter",
    initialState : {ind},
    reducers : {
         addLikeCount(state,action){
            state.ind[0].likes = state.ind[0].likes + action.payload;
         },
         addCommentCount(state,action){
            state.ind[0].comments = state.ind[0].comments + action.payload;
         },
         addShareCount(state,action){
            state.ind[0].shares = state.ind[0].shares + action.payload;
         },
        count(state,action){
            //console.log(action.payload[0].views);
            state.ind = action.payload;
            //console.log(state.ind);
        }
    }
})
const store = configureStore({
    reducer : slice.reducer
})

export default store;
export const action = slice.actions;