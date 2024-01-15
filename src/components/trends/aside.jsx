import React from "react";
import AsideSquid from "./aside-squid.jsx";
import iconSearch from "./images-trends/Search.png";
import ShowMore from "./show-more.jsx";
import TitleAside from "./title-aside.jsx";
import TitleTweet from "./title-tweet.jsx";
import TitleTrends from "./title-trends.jsx";



const Aside = () => {
  return (
    <div className="aside">
      <div className="search-input">
        <img src={iconSearch} alt="" />
      <input
        type="text"
        placeholder="Search twitter"
        className="search-twitter"
      />
    </div>
      <div className="trendForYou">
        <h4 className="trend-setting">
          Trends for you <img src="src/components/trends/images-trends/Settings.png" alt="icon-setting" />
        </h4>

          <div className="trend-item">
          {[...Array(4)].map((_, i) => (
            <AsideSquid key={i} />
          ))}
        </div>
        <ShowMore />

        <div className="whoToFollow">
        <h3>who to Follow</h3>
          <div className="parent-tweetTitle">
            <TitleTrends
              title1={"The New York Times"} 
              title2={"@mytime"} 
              img={"profile"} />
          </div>
        <div className="parent-tweetTitle">
          <TitleAside
            title1={"CNN"}
            title2={"@CNN"}
            img={"profile"}
          />
        </div>
          <div className="parent-tweetTitle">
            <TitleTweet
              title1={"Twitter"}
              title2={"@Twetter"}
              img={"imgTweet"}
            />
          </div>
          <ShowMore />
      </div>   
    </div>
  </div>
  );
}

export default Aside;