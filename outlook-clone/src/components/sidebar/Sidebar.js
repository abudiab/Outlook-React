import React from "react";
import SideItem from "./SideItem/SideItem";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideItem">
        <SideItem />
      </div>
    </div>
  );
};

export default Sidebar;
