import React, { useState, useEffect } from "react";
import axios from "axios";
import { clear } from "@testing-library/user-event/dist/clear";

let timeout = {};
export default function UseEffectDemo() {
  const [arrProduct, setArrProduct] = useState([]);
  const [count, setCount] = useState(60);

  const getApi = () => {
    let promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET"
    });

    promise.then(result => {
        // console.log('kết quả: ', result.data.content);
        setArrProduct(result.data.content);
    });

    promise.catch(err => {
        console.log({err})
    });
  }
  
  const renderProduct = () => {
    return arrProduct.map((item, index) => {
        return <div className="col-3" key={index}>
                    <div className="card mt-2 rounded">
                        <img src={item.image} alt="product" className="w-100" />
                    <div className="card-body bg-dark text-white" style={{height:'200px', display:'flex', flexDirection:'column', justifyContent:'end'}}>
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                        <button className="btn btn-success w-100">Add to cart</button>
                    </div>
                    </div>
                </div>
    })
  }

  useEffect(() => {
    //CallBack function này sẽ chạy 1 lần đầu tiên và các lần sau phụ thuộc vào dependency thứ 2 của hàm useEffect (giống DidUpdate)
    //Khi nào count thay đổi thì mới chạy hàm callback này tiếp còn state khác thay đổi thì hàm này ko chạy
    console.log('hehe')
  },[count])

  useEffect(() => {
    //Chạy 1 lần sau khi render (Giống như componentDidMount bên class Component)
    getApi();
    timeout = setInterval(() => {
        setCount((count) => {
            return count + 2;
        });
        console.log('123');
    },1000)
    
    return () => {
        //function return trong useEffect sẽ được kích hoạt trước khi component này mất khỏi giao diện giống như componentWillUnmount bên React Class Component 
        clearInterval(timeout);
    }

  },[])
  return (
    <div className="container">
      <h4>Componentwillunmount</h4>
      <p>Count: {count}</p>

      <h3>UseEffect Demo</h3>
      <h4>
        ComponentDidMount (Sử dụng cho việc load 1 lần sau render dùng để call
        API)
      </h4>
      <h3 className="text-center">Shoes Shop</h3>
      <div className="row">
            {renderProduct()}
      </div>
    </div>
  );
}
