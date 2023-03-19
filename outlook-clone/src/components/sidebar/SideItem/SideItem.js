/* eslint-disable array-callback-return */
import React from "react";
import "./sideitem.css";
import Folders from "../Folders/Folders";
import BottomItems from "../BottomItems/BottomItems";

const SideItem = () => {
  return (
    <div className="root">
      <Folders />
      <BottomItems />
    </div>
  );
};

export default SideItem;
