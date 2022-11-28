import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"


function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="Dashboard_body">
                <Sidebar/>
                <Body/>
            </div>

            <Footer />
        </div>
    )
}

export default Dashboard;