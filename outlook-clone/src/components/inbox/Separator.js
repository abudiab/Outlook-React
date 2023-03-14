import React from "react";

const Separator = (props) => {
  const text = props.text;
  return (
    <div className="separator">
      <p>{text}</p>
    </div>
  );
};

export default Separator;
