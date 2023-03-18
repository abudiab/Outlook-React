import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const EmailPreview = () => {
  return (
    <div className="preview-container">
      <h2>Lorem Ipsum</h2>
      <div className="email-preview-container">
        <div className="email-header">
          <div className="sender-details">
            <div className="sender-details__icon-box">
              <div className="sender-details__icon">
                <p>A</p>
              </div>
            </div>
            <div className="sender-details__metadata">
              <p>Lorem Ipsum</p>
              <p>no_reply@loremipsum.com</p>
              <p>
                <span>Thu 6/18/2020</span> <span>4:49PM</span>
              </p>
              <p>To: You</p>
            </div>
          </div>
          <div className="action-buttons">
            <ReplyIcon fontSize="small" style={{ color: "#0178D4" }} />
            <ReplyAllIcon fontSize="small" style={{ color: "#0178D4" }} />
            <ArrowForwardIcon fontSize="small" style={{ color: "#0178D4" }} />
            <MoreHorizIcon fontSize="small" style={{ color: "#0178D4" }} />
          </div>
        </div>
        <div className="email-content">
          <div className="email-content__image-container">
            <p>Hi</p>
          </div>
          <div className="email-content__body">
            Jeremy,
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
