import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        {name: 'Hậu Mentor', content:'ahihi'},
        {name: 'Quân Mentor', content:'ahuhu'}
    ]
}

const FacebookReducer = createSlice({
  name: 'facebookReducer',
  initialState,
  reducers: {
    addComment: (state, action) => {
        //B1: Lấy dữ liệu từ payload
        let userComment = action.payload;
        //clone state
        // let arrCommentUpdate = [...state.arrComment];
        // arrCommentUpdate.push(userComment);
        // state.arrComment = arrCommentUpdate
        //B2: Cập nhật state
        state.arrComment.push(userComment);
    }
  }
});

export const {addComment} = FacebookReducer.actions

export default FacebookReducer.reducer