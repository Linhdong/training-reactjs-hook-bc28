import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { ACCESS_TOKEN, getStore, getStoreJSON, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/config';

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
            let result = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/signin',
                method: 'POST',
                data: userLogin //{email: '' , password: ''}
            });
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
        }catch(err){
            console.log(err);
        }

    }
}
//Call API getProfile
export const getProfileApi = () => {
    return async dispatch => {
        try{
            let result = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/getProfile',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`
                }
            });
            console.log('Result: ', result.data.content);
            //Tao actioncreater => dispatch len redux
            const action = setUserLoginAction(result.data.content);
            dispatch(action);
        }catch(err){
            console.log(err);
        }
    }
}



