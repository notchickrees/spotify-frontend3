import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
// import Icon from '@mui/material/Icon';
// import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Sidebar(){
    return (
        <div className="sidebar">
            <img className="sidebar_logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
            />
            <SidebarOptions  title = "Home" />
            <SidebarOptions  title = "Search" />
            <SidebarOptions  title = "Your Library" />
            
            <br/>
            <strong className="sidebar_title"><a href='http://localhost:3000/likedsongs'>LIKED SONGS</a></strong>
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