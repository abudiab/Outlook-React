import React from "react";
import "./inbox.css";
import InboxHeader from "./InboxHeader";
import InboxCards from "./InboxCards";

const Inbox = () => {
  return (
    <div id="inbox">
      <InboxHeader />
      <InboxCards />
    </div>
  );
};

export default Inbox;
