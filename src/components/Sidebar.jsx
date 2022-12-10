import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Logout, reset } from "../features/authSlice";

const Sidebar = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const {user} = useSelector((state)=>state.auth);

        const logout = () =>{
            dispatch(Logout());
            dispatch(reset());
            navigate("/");
        }
  return (
    <div>
        <aside className="menu pl-2 has-shadow">
        <p className="menu-label">
            General
        </p>
        <ul className="menu-list">
            <li><NavLink to={"/dashboard"}><IoHome/> Dashboard</NavLink></li>
            <li><NavLink to={"/products"}><IoPricetag/> Product</NavLink></li>
        </ul>
        <p className="menu-label">
            Administration
        </p>
        <ul className="menu-list">
            <li><NavLink to={"/users"}><IoPerson/> User</NavLink></li>
        </ul>
        <p className="menu-label">
            Sign out
        </p>
        <ul className="menu-list">
            <li><button onClick={logout} className="button is-success has-shadow full-width"><IoLogOut/> Logout</button></li>
        </ul>
        </aside>
    </div>
  )
}

export default Sidebar