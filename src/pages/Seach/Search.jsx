import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

let timeout = null;

export default function Search() {
  const [arrProduct, setArrProduct] = useState([]);
  //Đưa dữ liệu lên url: setSearchParams 
  //Lấy dữ liệu từ url về: searchParams.get('keyword')

  const [searchParams, setSearchParams] = useSearchParams();


  const handleChange = (e) => {
    //Bước 4: khi người dùng gõ trên thanh search thì lấy ra giá trị value gán vào thanh url
    const { value, id } = e.target;
    //Khi người dùng gõ phím thì setSearchParams thực thi => dẫn đến function được render lại để kích useEffect chạy 
    setSearchParams({ //Làm thay đổi ?keyword trên url đồng thời kích useEffect chạy lần 2 
      keyword: value,
    });
  };

  const getProductByKeyWordApi = async () => {
    
    //Call api (b2 -> gọi api sau khi lần đầu tiên load trang )
    try {
      if (searchParams.get("keyword") !== null) {
        const result = await axios({
          url: `https://shop.cyberlearn.vn/api/product?keyword=${searchParams.get(
            "keyword"
          )}`,
          method: "GET",
        });
        setArrProduct(result.data.content); //Bước 3 sau khi lấy API thành công về => state thay đổi -> giao diện render lại (kết thúc lần 1)

        console.log(result.data.content);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Goi API thuc thi
  };

  useEffect(() => {
    //B1 khi load trang thì hàm này gọi api 1 lần 
    //Neu State thay doi thi link params(?keyword) tren url cung thay doi theo
    //Debound Search
    timeout = setTimeout(() => {
      getProductByKeyWordApi();
    }, 1000);
    return () => {
        if (timeout != null) {
            clearTimeout(timeout);
          }
    }
  }, [searchParams.get("keyword")]); //khi params trên url thay đổi thì hàm này kích hoạt

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keyword"
            onChange={handleChange}
            value={searchParams.get('keyword')}
          />
          <button className="btn bg-dark text-white mt-2">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={item.image} alt={"..."} />
                </div>
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="btn btn-success">View detail</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}
