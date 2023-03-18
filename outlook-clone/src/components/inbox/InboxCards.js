import React from "react";
import InboxCard from "./InboxCard";
import Separator from "./Separator";

const InboxCards = () => {
  return (
    <div className="inbox-cards">
      <InboxCard color="#D13438" text="A" date="Wed 7:32 AM" />
      <InboxCard color="#8E562E" text="A" date="Wed 7:32 AM" />
      <Separator text="April" />
      <InboxCard color="#E3008C" text="T" date="Wed 7:32 AM" />
      <InboxCard color="#4F6BEE" text="N" date="Wed 7:32 AM" />
      <Separator text="Older" />
      <InboxCard color="#CA5110" text="L" date="Wed 7:32 AM" />
      <InboxCard color="#4F6BEE" text="N" date="Wed 7:32 AM" />
    </div>
  );
};

export default InboxCards;
