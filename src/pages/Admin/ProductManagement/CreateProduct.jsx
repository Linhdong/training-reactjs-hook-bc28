import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSubmitAction } from '../../../redux/reducers/ModalReducer';

export default function CreateProduct() {
  const dispatch = useDispatch();
  useEffect(() => {
    const action = setSubmitAction();
    dispatch(action);
  });
  return (
    <form>
        <div className='form-group' >
            <p>ID</p>
            <input className='form-control'name='id' id='id'/>
        </div>
        <div className='form-group' >
            <p>Name</p>
            <input className='form-control'name='name' id='name'/>
        </div>
        <div className='form-group' >
            <p>Price</p>
            <input className='form-control'name='price' id='price'/>
        </div>
        <button className='btn btn-success mt-2'>Create Product</button>
    </form>
  )
}
