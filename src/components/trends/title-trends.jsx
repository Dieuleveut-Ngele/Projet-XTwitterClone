import React from "react";
import imgProfile from "./images-trends/imgprofile.png";

const TitleTrends = ({ title1, title2, img }) => {
  return (
    <div className="box-tweetTitle">
      <div className="children-tweetTitle">
        <p>{title1} </p>
        <p className="paragraph">{title2} </p>
      </div>
      <img src={imgProfile} alt="icon-tweet" className={img} />

    </div>
  );
}
export default TitleTrends;