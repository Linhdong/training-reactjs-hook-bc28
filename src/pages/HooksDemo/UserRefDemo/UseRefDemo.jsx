import React, { useRef, useState } from 'react'
/**
 * useRef: tương tự như useState tuy nhiên khi thay đổi giá trị useRef component ko render lại (useRef dùng để lưu giá trị sau mỗi lần render lại)
 * useRef: thường sử dụng cho các form ko có validation hoặc load dữ liệu chỉnh sửa
 * 
 */
export default function UseRefDemo(props) {
    const [number, setNumber] = useState(1);
    //Cách 1:
    // const [userLogin, setUserLogin] = useState({username: '', password: ''});
    //Cách 2:
    // let userLogin ={username:'',password:''};
    //Cach 3:
    const userLoginRef = useRef({username: '', password:''})
    console.log('render');
    const handleChangeInput =  (e) => {
        const {id, value} = e.target;
        userLoginRef.current[id] = value;
        console.log(userLoginRef.current);
        // setUserLogin({
        //     ...userLogin,
        //     [id]: value
        // })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userLoginRef.current);
    }
  return (
    <form className='container' onSubmit={handleSubmit}>  
        <h3>Number: {number}</h3>
        <button className='btn btn-success' onClick={() => {setNumber(number + 1)}}>+</button>
        <h3>Login</h3>
        <div className='form-group'>
            <p>username</p>
            <input className='form-control' id='username' onChange={handleChangeInput}/>
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className='form-control' id='password' type='text' onChange={handleChangeInput}/>
        </div>
        <div className='form-group mt-2'>
            <button className='btn btn-success'>Login</button>
        </div>
    </form>
  )
}
