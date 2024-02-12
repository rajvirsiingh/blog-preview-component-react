import React from "react";
import image from "./assets/images/image-avatar.webp";
const Profile = () => {
  return (
    <div className="profile">
      <img src={image} alt="profile" className="profile-img" />
      <p className="profile-text">Greg Hooper</p>
    </div>
  );
};

export default Profile;
