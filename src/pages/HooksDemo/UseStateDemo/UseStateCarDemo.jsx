import React, {useState} from 'react'

export default function UseStateCarDemo() {
    const [imgCar, setImgCar] = useState('./img/black-car.jpg');
    const handleChange = (color) => {
        setImgCar(`./img/${color}-car.jpg`)
    }
  return (
    <div className='container'>
        <br/>
        <hr/>
        <h3 className='text-center mt-2'>Demo chọn xe sử dụng UseState</h3>
        <div className='row'>
            <div className="col-6">
                <img src={imgCar} alt='car' className='w-100'/>
            </div>
            <div className="col-6">
                <button className='btn btn-dark text-white mx-2' onClick={() => {handleChange('black')}}>
                    Black
                </button>
                <button className='btn btn-danger text-white mx-2' onClick={() => {handleChange('red')}}>
                    Red
                </button>
                <button className='btn btn-secondary text-white mx-2' onClick={() => {handleChange('silver')}}>
                    Silver
                </button>
                <button className='btn btn-warning text-white mx-2' onClick={() => {handleChange('steel')}}>
                    Steel
                </button>
            </div>
        </div>
    </div>
  )
}
