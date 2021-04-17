import React from "react";

const Eventcard = ({ title, text, date }) => {
  return (
    <div
      className="col-12 col-md-6 mx-0 card"
      style={{ width: "25rem" }}
    >
      <div class="card-body">
        <h5 class="card-title text-white">{title}</h5>
        <p class="card-text text-white">{text}</p>
        <h6 className="text-white">{date}</h6>
      </div>
    </div>
  );
};

export default Eventcard;
