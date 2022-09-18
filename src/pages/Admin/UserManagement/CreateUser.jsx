import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setSubmitAction } from '../../../redux/reducers/ModalReducer'

export default function CreateUser() {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    const dispatch = useDispatch();
    useEffect(() => { 
        const action = setSubmitAction(formik.handleSubmit);
        dispatch(action);
    });

  return (
    <form>
    <div className='form-group' >
        <p>UserName</p>
        <input className='form-control'name='username' id='username' onChange={formik.handleChange}/>
    </div>
    <div className='form-group' >
        <p>Password</p>
        <input className='form-control'name='password' id='password' onChange={formik.handleChange}/>
    </div>
    <button className='btn btn-success mt-2'>CreateUser</button>
</form>
  )
}
