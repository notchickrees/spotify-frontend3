import React from 'react';
import "./SidebarOptions.css";
import Icon from '@mui/material/Icon';

function SidebarOptions({title, Icon}) {
  return (
    <div className="sidebarOptions">
        {/* {Icon && <Icon className="sidebarOptions__icon" />} */}
        {/* {Icon ? <h4>{title}</h4> : <p>{title}</p>} */}
        <p>{title}</p>
    </div>
  );
}

export default SidebarOptions;