import React from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const InboxHeader = () => {
  return (
    <div className="inbox-header">
      <div className="inbox-header__section title">
        <CheckCircleOutlineRoundedIcon fontSize="small" />
        <h2 className="section-title">Inbox</h2>
        <StarOutlineRoundedIcon fontSize="small" />
      </div>

      <div className="inbox-header__section filters">
        <h3>Filter</h3>
        <ExpandMoreRoundedIcon />
      </div>
    </div>
  );
};

export default InboxHeader;
