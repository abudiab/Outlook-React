import React from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const InboxHeader = () => {
  return (
    <div className="inbox-header">
      <div className="inbox-header__section title">
        <CheckCircleOutlineRoundedIcon
          fontSize="small"
          style={{ color: "#605E5C" }}
        />
        <h2 className="section-title">Inbox</h2>
        <StarOutlineRoundedIcon fontSize="small" style={{ color: "#0178D4" }} />
      </div>

      <div className="inbox-header__section filters">
        <h3>Filter</h3>
        <ExpandMoreRoundedIcon style={{ color: "#0178D4" }} />
      </div>
    </div>
  );
};

export default InboxHeader;
