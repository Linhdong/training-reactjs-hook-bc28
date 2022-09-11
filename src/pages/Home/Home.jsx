import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductApi, setArrProductAction } from "../../redux/reducers/productReducer";

export default function Home(props) {
  // const [arrProduct, setArrProduct] = useState([]);
  const { arrProduct } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();

  const getApiProduct = async () => {
    // try{
    //     let result = await axios({
    //         url: 'https://shop.cyberlearn.vn/api/Product',
    //         method: 'GET'
    //     });
    //     console.log('Kết quả', result.data.content);
    //     //Sau khi lấy kết quả từ api về đưa vào state arrProduct
    //     // setArrProduct(result.data.content);
    //     //dispatch lên redux
    //     const action = setArrProductAction(result.data.content);
    //     dispatch(action);

    // }catch(err){
    //     console.log(err);
    // }
    /**
     *  action có 2 dạng:
     *      + action dạng 1:
     *          action = {
     *              type: action_name,
     *              payload: data
     *          }
     *      + action (thunk) dạng 2:
     *          action = (dispatch, getState) => {
     *              //logic xử lý ở đây sau đó có dữ liệu sẽ dùng tham số     dispatch2 để đưa redux hoặc thực hiện tiếp 1 logic khác
     *          }
     */
    
    const actionLoai2 = getProductApi;
    dispatch(actionLoai2);
  };

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3 mt-2" key={index}>
          <div className="card">
            <img src={item.image} alt="..." />
            <div className="card-body bg-dark text-light">
              <p>{item.name}</p>
              <p>{item.price} $</p>
              {/* <button className="btn btn-success">View Detail</button> */}
              <NavLink to={`/detail/${item.id}`} className="btn btn-success">
                View Detail
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    //Sau khi giao diện load xong thì gọi API thực thi
    getApiProduct();
  }, []);

  return (
    <div className="container">
      <h3>Shoes App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
