import React from "react";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./folders.css";

const Folders = () => {
  const Folders = [
    {
      Icon: <KeyboardArrowRightIcon fontSize="small" />,
      Description: "Favorites",
    },
    {
      Icon: <KeyboardArrowRightIcon fontSize="small" />,
      Description: "Folders",
    },
  ];
  const folderItems = [
    {
      Icon: <InboxOutlinedIcon fontSize="50px" />,
      Description: "Inbox",
    },
    {
      Icon: <NotInterestedOutlinedIcon fontSize="50px" />,
      Description: "Junk Email",
      numberOfPendingAction: 9,
    },
    {
      Icon: <CreateOutlinedIcon fontSize="50px" />,
      Description: "Drafts",
    },
    {
      Icon: <SendOutlinedIcon fontSize="50px" />,
      Description: "Sent Items",
    },
    {
      Icon: <AccessTimeOutlinedIcon fontSize="50px" />,
      Description: "Scheduled",
    },
    {
      Icon: <DeleteOutlineOutlinedIcon fontSize="50px" />,
      Description: "Deleted Items",
      numberOfPendingAction: 6,
    },
    {
      Icon: <Inventory2OutlinedIcon fontSize="50px" />,
      Description: "Archive",
    },
    {
      Icon: <NoteOutlinedIcon fontSize="50px" />,
      Description: "Notes",
    },
  ];
  const [showHidden, setShowHidden] = useState(false);
  const [toggleArrow, setToggleArrow] = useState(true);
  const handleClick = (item) => {
    if (item.Description === "Folders") {
      setShowHidden(!showHidden);
      setToggleArrow(!toggleArrow);
    }
  };
  return (
    <div className="folders">
      {Folders.map((item, index) => (
        <a href="#home" key={index} onClick={handleClick.bind(this, item)}>
          <div className="item" key={index}>
            <div className="icon" key={index}>
              {(toggleArrow || item.Description === "Favorites") && item.Icon}
              {!toggleArrow && item.Description === "Folders" && (
                <KeyboardArrowDownOutlinedIcon fontSize="small" />
              )}
            </div>
            <div className="description">{item.Description}</div>
          </div>
        </a>
      ))}
      {showHidden &&
        folderItems.map((item, index) => (
          <div className="parent">
            <div className="items" key={index}>
              <div className="icon">{item.Icon}</div>
              <div className="description">{item.Description}</div>
              <div className="pending">{item.numberOfPendingAction}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Folders;
