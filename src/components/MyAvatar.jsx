import React from "react";

function MyAvatar(props) {
  return (
    <video className="circular-video" autoPlay muted>
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
}
export default MyAvatar;
