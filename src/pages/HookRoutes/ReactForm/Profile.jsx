import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProfileApi } from '../../../redux/reducers/userReducer';
import  moment from 'moment';

export default function Profile(props) {
  
  const {userLogin} = useSelector(state => state.userReducer);
  console.log('Data Redux: ',userLogin);
  const dispatch = useDispatch();


  useEffect(() => {
    const action  = getProfileApi();
    dispatch(action);
  },[])
  //?: optional chaining: nếu như object có thuộc tính đó thì xử lý, ngược lại không có thuộc tính đó (undefine) bỏ qua

  const renderOrderHistory = () => {
    return userLogin?.ordersHistory?.map((order,index) => {
      return <div className='orderDetail' key={index}>
          <h3>Order Detail {moment(order.date).format('DD/MM/YYYY hh:mm:ss A')}</h3>
          <table className='table'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Img</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order?.orderDetail.map((item, index) => {
                  return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><img src={item.image} width={50} alt='...'/></td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}</td>
                  </tr>
                })}
              </tbody>
          </table>
      </div>
    })
  }

  return (
    <div className='container'>
      <h3>Profile</h3>
      <div className='d-flex'>
          <div className="w-25">
            <div className="profile mt-5">
              <img src={userLogin?.avatar} height={200}/>
              <div>
                email: {userLogin?.email}
              </div>
              <div>
                name: {userLogin?.name}
              </div>
            </div>
          </div>
          <div className="w-75">
            <h3>Thong tin don hang</h3>
            {renderOrderHistory()}
          </div>
      </div>
    </div>
  )
}
