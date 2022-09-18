import React from "react";
import { NavLink } from "react-router-dom";
import HocModal from "../HOC/HocModal";

export default function AdminTemplate(props) {
  return (
    <div>
      <HocModal />
      <div className="d-flex">
        <div
          className="dashboard w-25 bg-warning text-white"
          style={{ minHeight: "300vh" }}
        >
          <img
            src="https://i.pravatar.cc?u=9"
            alt="..."
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
          <nav className="mt-5">
            <div>
              <NavLink to="/products">Product Management</NavLink>
              <NavLink to="/users">User Management</NavLink>
            </div>
          </nav>
        </div>
        <div className="componet-content">
          <props.component />
        </div>
      </div>
    </div>
  );
}
