import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {history} from './../../index.js'

import { ACCESS_TOKEN, getStore, getStoreJSON, http, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/config';

const initialState = {
    userLogin: getStoreJSON(USER_LOGIN)
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
        let userLogin = action.payload;
        state.userLogin = userLogin; //<=> state.userLogin.email = email
    }
  }
});

export const {setUserLoginAction} = userReducer.actions

export default userReducer.reducer

//----------------Action api (Thunk)--------------
export const signinApi = (userLogin) => {
    //userLogin = {email: '', password: ''}
    return async dispatch => {
        try{
            let result = await http.post('/Users/signin',userLogin);
            //Thanh cong 
            //Luu lai Token
            setStore(ACCESS_TOKEN, result.data.content.accessToken);
            setCookie(result.data.content,30,ACCESS_TOKEN);
            //Luu lai email
            setStoreJSON(USER_LOGIN, result.data.content);
            // console.log(result);
            //Dua len userLogin thanh cong len reducer
            //result.data.content = {email: '' , accessToken: ''}
            const action = setUserLoginAction(result.data.content);
            dispatch(action);
            history.push('/profile');
        }catch(err){
            console.log(err);
            history.push('/login');
        }

    }
}
//Call API getProfile
export const getProfileApi = () => {
    return async dispatch => {
        try{
            let result = await http.post('/users/getprofile');
            console.log('Result: ', result.data.content);
            //Tao actioncreater => dispatch len redux
            const action = setUserLoginAction(result.data.content);
            dispatch(action);
        }catch(err){
            alert('Đăng nhập để vào trang này !');
            history.push('/login');
            console.log(err);
        }
    }
}



