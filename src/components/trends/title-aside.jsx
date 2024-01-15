import React from "react";
import profile from "./images-trends/Tweet-Profile-Photo.png";


const TitleAside = ({ title1, title2, img }) => {
  return (
    <div className="box-tweetTitle">
      <div className="children-tweetTitle">
        <p>{title1} </p>
        <p className="paragraph">{title2} </p>
      </div>
      <img src={profile} alt="icon-profile" className={img} />
      
    </div>
  );
}
export default TitleAside;