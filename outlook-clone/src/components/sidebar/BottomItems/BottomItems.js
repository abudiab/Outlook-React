import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "./bottomitems.css";

const BottomItems = () => {
  const bottomItems = [
    {
      Icon: <EmailOutlinedIcon fontSize="50px" />,
    },
    {
      Icon: <CalendarMonthOutlinedIcon fontSize="50px" />,
    },
    {
      Icon: <PeopleOutlineOutlinedIcon fontSize="50px" />,
    },
    {
      Icon: <MoreHorizOutlinedIcon fontSize="50px" />,
    },
  ];

  return (
    <div className="bottomItems">
      {bottomItems.map((item, index) => (
        <div className="item" key={index}>
          <a href="Bottom">
            <div className="low">{item.Icon}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BottomItems;
