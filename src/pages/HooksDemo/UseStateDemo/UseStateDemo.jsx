import React, {useState} from 'react'
import UseStateCarDemo from './UseStateCarDemo';

export default function UseStateDemo() {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  const handleClick =  () => {
    //setNumber làm 2 nhiệm vụ là thay đổi giá trị number = giá trị mới, và gọi lại function component chạy lại
    setNumber(number + 1);
  };
  const handleLike =  () => {
    setLike(like + 1)
  }
  return (
    <div className='container'>
      <h3>Number: {number}</h3>
      <button className='btn btn-success' onClick={() => {
       handleClick();
      }}>+</button>
      <div className="card w-25 mt-2">
        <img src='https://i.pravatar.cc' alt='avatar'/>
        <div className="card-body">
          <h3>Name: Văn Hậu</h3>
          <p>Age: 28</p>
          <button className='btn btn-danger' onClick={() => {
            handleLike();
          }}>
            <i className='fa fa-heart'></i> {like}
          </button>
        </div>
      </div>
      <UseStateCarDemo/>
    </div>
  )
}
