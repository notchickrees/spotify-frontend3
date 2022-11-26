import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar.jsx"
import Body from "./Body.jsx"

function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="Dashboard_body">
                <Sidebar/>
                <Body/>
            </div>

            {/* {footer} */}
        </div>
    )
}

export default Dashboard;