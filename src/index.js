import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UseStateDemo from "./pages/HooksDemo/UseStateDemo/UseStateDemo";
import UseStateCarDemo from "./pages/HooksDemo/UseStateDemo/UseStateCarDemo";
import UseEffectDemo from "./pages/HooksDemo/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/HooksDemo/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/HooksDemo/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/HooksDemo/UserRefDemo/UseRefDemo";
//Setup Redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/HooksDemo/UseRedux/DemoNumber";
import { DemoFacebookApp } from "./pages/HooksDemo/UseRedux/DemoFacebookApp/DemoFacebookApp";
import ReactForm from "./pages/HookRoutes/ReactForm/ReactForm";
import Profile from "./pages/HookRoutes/ReactForm/Profile";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import DemoUseRoute from "./pages/DemoUseRoute/DemoUseRoute";
import DemoAnimation from "./pages/DemoAnimation/DemoAnimation";
import Search from "./pages/Seach/Search";
import Login from "./pages/Login/Login";

//Tạo ra 1 biến để quản lý chuyển hướng trang
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import DemoHoc from "./pages/DemoHoc/DemoHoc";
import AdminTemplate from "./templates/AdminTemplate";
import UserManagement from "./pages/Admin/UserManagement/UserManagement";
import ProductManagement from "./pages/Admin/ProductManagement/ProductManagement";

export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home/>}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail/>}></Route>
          </Route>
          <Route path="usestate" element={<UseStateDemo />}></Route>
          <Route path="cardemo" element={<UseStateCarDemo />}></Route>
          <Route path="useeffect" element={<UseEffectDemo />}></Route>
          <Route path="usecallback" element={<UseCallBackDemo />}></Route>
          <Route path="usememo" element={<UseMemoDemo />}></Route>
          <Route path="useref" element={<UseRefDemo />}></Route>
          <Route path="reduxnumber" element={<DemoNumber/>}></Route>
          <Route path="facebookappdemo" element={<DemoFacebookApp/>}></Route>
          <Route path="reactform" element={<ReactForm/>}></Route>
          <Route path="search" element={<Search/>}></Route>
          <Route path="customhook" element={<DemoUseRoute/>}></Route>
          <Route path="aniamtion" element={<DemoAnimation/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="*" element={<Navigate to={'/'}/>}></Route>
          <Route path="demohoc" element={<DemoHoc/>}></Route>
          <Route path="users" element={<AdminTemplate component={UserManagement}/>}></Route>
          <Route path="product" element={<AdminTemplate component={ProductManagement}/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
