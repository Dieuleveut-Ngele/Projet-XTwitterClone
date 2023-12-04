import React from 'react';

function Sidebar () {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3></h3>
        <img src="src/images/Normal.png" alt=""/>
      </div>
      
      <div className="sidebar-content">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Notification</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Bookmarks</a></li>
          <li><a href="#">Lists</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </div>
      <div>
        <img src="src/images/Tweet-Buton-Xl.png" alt="image-tweet"/>
      </div>
    </div>
  )
}

export default Sidebar;