import {configureStore,createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name : "Counter",
    initialState : {likeCount : 0,commentCount : 0,shareCount : 0},
    reducers : {
        addLikeCount(state,action){
            state.likeCount = state.likeCount + action.payload;
        },
        addCommentCount(state,action){
            state.commentCount = state.commentCount + action.payload;
        },
        addShareCount(state,action){
            state.shareCount = state.shareCount + action.payload;
        }
    }


})

const store = configureStore({
    reducer : slice.reducer
})

export default store;
export const action = slice.actions;