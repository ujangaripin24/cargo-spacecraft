import React from 'react';
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
        <aside className="menu pl-2 has-shadow">
        <p className="menu-label">
            General
        </p>
        <ul className="menu-list">
            <li><NavLink to={"/dashboard"}><IoHome/> Dashboard</NavLink></li>
            <li><NavLink to={"/product"}><IoPricetag/> Product</NavLink></li>
        </ul>
        <p className="menu-label">
            Administration
        </p>
        <ul className="menu-list">
            <li><NavLink to={"/user"}><IoPerson/> User</NavLink></li>
        </ul>
        <p className="menu-label">
            Sign out
        </p>
        <ul className="menu-list">
            <li><button className="button is-success has-shadow full-width"><IoLogOut/> Logout</button></li>
        </ul>
        </aside>
    </div>
  )
}

export default Sidebar