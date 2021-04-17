import React from "react";

const Profile = ({ name, post, src }) => {
  const src1 = require(`../assets/images/android_training_certification.jpeg`);
  return (
    // <div className="row m-0">
    <div
      className="col-12 col-md-3 my-3 mx-0 mx-md-3 text-center card profile-card"
      style={{ width: "18rem;" }}
    >
      {/* <img className="card-img-top" src={src} alt="pic"></img> */}
      <img src={src} alt="" loading="lazy" />
      <div className="card-body">
        <h4>{name}</h4>
        <p className="card-text">{post}</p>
      </div>
      <br />
      <br />
    </div>
    // </div>
  );
};

export default Profile;
