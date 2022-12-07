import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";

function Sidebar(){
    return (
        <div className="sidebar">
            <img className="sidebar_logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
            />
            <SidebarOptions title = "Home" />
            <SidebarOptions title = "Search" />
            <SidebarOptions title = "Your Library" />
            
            <br/>
            <strong className="sidebar_title">LIKED SONGS</strong>
            <hr />

            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />

            <SidebarOptions title="Midnights"/>
            <SidebarOptions title="Your Top Songs 2021"/>
            <SidebarOptions title="Coco Butter"/>
            <SidebarOptions title="Generic Lumsu playlist"/>
            <SidebarOptions title="Discover Weekly"/>
            <SidebarOptions title="Harry Styles"/>
            <SidebarOptions title="Desi Rave"/>
            <SidebarOptions title="New Releases Friday"/>
            <SidebarOptions title="Indie Hits"/>
            <SidebarOptions title="Workout"/>
            <SidebarOptions title="sad boi hours"/>



        </div>
    );
}

export default Sidebar;