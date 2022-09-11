import React, {useState, useEffect} from "react";
import useCookieCustome from "../../hooks/useCookie";

import useRoute from "../../hooks/useRoute";

export default function DemoUseRoute() {
  const {
    navigate,
    params,
    searchParams: [search, setSearch],
  } = useRoute();
  
  const [setCookie, getCookie] = useCookieCustome('my-cookie', '',);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    console.log(username, password);
    setCookie(username, 30)
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
        <h3>Login Cookie</h3>
        <div className="form-group">
            <p>Nhập vào username</p>
            <input id='username' className="form-control"/>
        </div>
        <div className="form-group">
            <p>Nhập vào password</p>
            <input id='password' className="form-control" type={'password'}/>
        </div>
        <div className="form-group">
            <button className="btn btn-success mt-2" type="submit">Login</button>
        </div>
    </form>
  );
}
