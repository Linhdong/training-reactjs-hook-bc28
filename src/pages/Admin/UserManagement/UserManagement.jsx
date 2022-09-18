import React from 'react'
import { useDispatch } from 'react-redux'
import { setModalAction } from '../../../redux/reducers/ModalReducer'
import CreateUser from './CreateUser'

export default function UserManagement() {
  const dispatch = useDispatch()
  return (
    <div className='container'>
        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target={`#modal`} onClick={() => {
          const action = setModalAction({
            Component: CreateUser,
            title: 'Create User'
          })
          dispatch(action);
        }}>Creat User</button>
    </div>
  )
}
