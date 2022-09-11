import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailActionApi } from "../../redux/reducers/productReducer";
export default function Detail(props) {
  // const [productDetail, setProductDetail] = useState({});
  const {productDetail} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const getProductDetailApi = async () => {
    const actionThunk = getProductDetailActionApi(params.id)
    //async dispatch => 
    //logic api gọi tại đây 
    dispatch(actionThunk);
  }

  useEffect( () => {
    //Chạy 2 trường hợp: lần đầu tiên load page,  và khi params.id thay đổi thì hàm này sẽ chạy 
    getProductDetailApi();
  },[params.id])

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-4">
          <img
            src={productDetail.image}
            alt="..."
            style={{ objectFit: "cover" }}
            height={200}
            className="w-100"
          />
        </div>
        <div className="col-8">
          <h3>{productDetail.name}</h3>
          <p>
            {productDetail.description}
          </p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
      <div className="mt-2">
        <h3>Related product</h3>
        <div className="row">
            {productDetail.relatedProducts?.map((item, index) => {
                return <div className="col-3" key={index}>
                        <div className="card">
                        <img
                            src={item.image}
                            alt="..."
                            style={{ objectFit: "cover" }}
                            height={200}
                            className="w-100"
                        />
                        <div className="card-body">
                            <p>{item.id}</p>
                            <p>{item.price}</p>
                            <NavLink className="btn btn-success"
                            to={`/detail/${item.id}`}
                            >View Detail
                            </NavLink>
                            <button className="btn btn-primary mx-2" onClick={() => { navigate(`/detail/${item.id}`) }}>
                                View Detail
                            </button>
                        </div>
                        </div>
                    </div>
            })}
        </div>
      </div>
    </div>
  );
}
