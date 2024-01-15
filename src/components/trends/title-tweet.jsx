import React from "react";
import imgTweet from "./images-trends/tweetprofile.png";


const TitleTweet = ({ title1, title2, img }) => {
  return (
    <div className="box-tweetTitle">
      <div className="children-tweetTitle">
        <p>{title1} </p>
        <p className="paragraph">{title2} </p>
      </div>
      <img src={imgTweet} alt="icon-tweet" className={img} />

    </div>
  );
}
export default TitleTweet;