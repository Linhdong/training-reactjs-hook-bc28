import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const {userLogin} = useSelector(state => state.userReducer);
  const renderNavLink = () => {
    if(userLogin){
      return <NavLink className="nav-link" to="/profile">
        Hello ! {userLogin.email}
      </NavLink>
    }
    return <NavLink className="nav-link" to="/login">
      Login
    </NavLink>
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white">
        <NavLink className="navbar-brand" to="">
          React Hook
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              {renderNavLink()}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DemoHook 
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/usestate">
                  useStateDemo
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  UseEffectDemo
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                  UseCallBackDemo
                </NavLink>
                <NavLink className="dropdown-item" to="/usememo">
                  UseMemoDemo
                </NavLink>
                <NavLink className="dropdown-item" to="/useref">
                  UseRefDemo
                </NavLink>
                <NavLink className="dropdown-item" to="/customhook">
                  customhook(useRoute)
                </NavLink>
                <NavLink className="dropdown-item" to="/aniamtion">
                  animation
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Redux Hook 
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/reduxnumber">
                  Demo Number
                </NavLink>
                <NavLink className="dropdown-item" to="/facebookappdemo">
                  Demo Facebook App
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Router Hook 
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/reactform">
                  Demo Navigate
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0" onSubmit={(e) => {
            e.preventDefault(); 
              const keyword = document.querySelector('#keyword').value;
              navigate(`/search?keyword= ${keyword}`)
          }}>
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
              id="keyword"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
