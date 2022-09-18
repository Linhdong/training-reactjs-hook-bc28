import React from 'react'
import HocModal from '../../HOC/HocModal';
import ModalHoc from '../../HOC/ModalHoc'
import UseStateDemo from '../HooksDemo/UseStateDemo/UseStateDemo';
import Login from '../Login/Login'

//Tạo ra component từ HOC
let WrapFormLoginModal = ModalHoc(Login,'Login');
let WrapUseStateDemoModal = ModalHoc(UseStateDemo, 'UseState');

export default function DemoHoc() {
  return (
    <div>
        {/* HOC */}
        {/* <WrapFormLoginModal/>
        <WrapUseStateDemoModal/> */}
        {/* HOC2 Container Functional Component*/}
        <HocModal Component={Login} id="modal1" title={<h1 className='text-danger'>Login</h1>}/>
        <HocModal Component={UseStateDemo} id="modal2" title={<h1 className='text-danger'>UseState Demo</h1>}/>
    </div>
  )
}
