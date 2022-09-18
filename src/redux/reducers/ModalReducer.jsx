import { createSlice } from '@reduxjs/toolkit'

const ComponentDefault = (props) => {
    return <div>
        default value
    </div>
}

const initialState = {
    title: 'title',
    Component:ComponentDefault,
    submitForm: () => {
        alert('Submit form ')
    }
}

const ModalReducer = createSlice({
  name: 'ModalReducer',
  initialState,
  reducers: {
    setModalAction: (state,action) => {
        //Lấy state từ payload ra 
        const {Component, title} = action.payload;
        state.Component = Component;
        state.title = title;
    },
    setSubmitAction: (state, action) => {
        //payload: function submit form
        state.submitForm = action.payload;
    }
  }
});

export const {setModalAction, setSubmitAction} = ModalReducer.actions

export default ModalReducer.reducer