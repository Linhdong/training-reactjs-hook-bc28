import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderComponent() {
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
              <a className="nav-link" href="#">
                Home <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
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
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
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
