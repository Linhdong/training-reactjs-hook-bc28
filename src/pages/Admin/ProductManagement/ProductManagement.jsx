import React from 'react'
import { useDispatch } from 'react-redux'
import { setModalAction } from '../../../redux/reducers/ModalReducer'
import Login from '../../Login/Login'
import CreateProduct from './CreateProduct';

export default function ProductManagement() {
  const dispatch = useDispatch();
  return (
    <div className='container'>
        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target={`#modal`} onClick={() => {
          const action = setModalAction({
            Component: CreateProduct,
            title: 'Login'
          })
          dispatch(action);
        }}>Create Product</button>
    </div>
  )
}
