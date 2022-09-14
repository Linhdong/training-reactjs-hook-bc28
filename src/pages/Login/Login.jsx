import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { signinApi } from '../../redux/reducers/userReducer';

export default function Login() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            email:'',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Khong duoc bo trong !!').email('Email khong dung dinh dang'),
            password: Yup.string().required('Password khong duoc bo trong !!').min(3,'password tu 6 - 32 ky tu').max(32,'password tu 6 den 32 ky tu')
            //.matches(/cybersoft/,'Password phai co cybersoft')
        }),
        onSubmit: (values) => {
            //console.log(values);
            const action = signinApi(values);
            dispatch(action);
        }
    });

  return (
    <form className='container' onSubmit={formik.handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
            <p>Email</p>
            <input className='form-control' id='email'
            onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors ? <p className='text text-danger'>{formik.errors.email}</p> : ''}
        </div>
        <div className="form-group">
            <p>Password</p>
            <input className='form-control' id='password'
            onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors ? <p className='text text-danger'>{formik.errors.password}</p> : ''}
        </div>
        <div className="form-group">
            <button type='submit' className='btn btn-primary mt-2'>Login</button>
        </div>
    </form>
  )
}
