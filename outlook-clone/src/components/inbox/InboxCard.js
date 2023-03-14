import React from "react";

const InboxCard = (props) => {
  return (
    <div className="inbox-card">
      <div className="inbox-card__icon-box">
        <div className="inbox-card__icon" style={{ background: props.color }}>
          <h2>{props.text}</h2>
        </div>
      </div>

      <div className="inbox-card__card-content">
        <h2 className="card-content__title">Lorem Ipsum</h2>
        <span className="card-content__date">{props.date}</span>
        <p className="card-content__body">
          Sed ut perspiciatis unde omnis iste natus error sit volu tate…
        </p>
      </div>
    </div>
  );
};

export default InboxCard;
