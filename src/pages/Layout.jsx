import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout({children}) {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="columns mt-6">
            <div className="columns is-2">
                <Sidebar/>
            </div>
            <div className="columns has-background-dark">
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Layout