import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { http } from '../../util/config';

const initialState = {
    arrProduct : [
        {id:1, name: 'Giày 1', price: 1300, image: 'https://picsum.photos/200/200'}
    ],
    productDetail: []
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
        //Lấy dữ liệu từ payload component dispatch lên 
        const arrProduct = action.payload;
        //Cập nhật lại state
        state.arrProduct = arrProduct;
    },
    setProductDetailAction: (state, action) => {
        //Lấy dữ liệu từ payload
        const productDetail = action.payload;
        //Cập nhật lại sate.productDetail
        state.productDetail = productDetail;
    }
  }
});

export const {setArrProductAction, setProductDetailAction} = productReducer.actions

export default productReducer.reducer

//--------------------- action api ---------------------------
export const getProductApi = async (dispatch2) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      console.log("Kết quả", result.data.content);
      //Sau khi lấy kết quả từ api về đưa vào state arrProduct
      // setArrProduct(result.data.content);
      //dispatch lên redux
      const action = setArrProductAction(result.data.content);
      dispatch2(action);
    } catch (err) {
      console.log(err);
    }
  }

//Kỹ thuật closure function
export const getProductDetailActionApi = (idProduct) => {
    return async dispatch => {
        try {
            let result = await http({
              url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`,
              method: "GET",
            });
            console.log(result.data.content);
            //Sau khi có dữ liệu gửi lên action loại 2 đưa lên reducer
            const actionLoai1 = setProductDetailAction(result.data.content);
            dispatch(actionLoai1);
            
          } catch (err) {
            console.log(err);
          }
    }
}