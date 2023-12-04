import React from 'react';

function TweetEditor() {
  return (
    <div className="tweet-editor">
      <img src="src/images/profile-photo.png" className="avatar"></img>
      <div className="tweet-editor-form">
        <input className="tweet-editor-input" type="text" 
          placeholder="What's happening?"/>
        <div className="tweet-editor-buttons">
           <div className="tweet-editor-actions">
             <button><img src="src/images/Top-Tweets5.png"/></button>
             <button><img src="src/images/Top-Tweets4.png" className="tweet-editor-actions"/></button>
               <button><img src="src/images/Top-Tweets3.png" className="tweet-editor-actions"></img></button>
              <button><img src="src/images/Top-Tweets6.png" className="tweet-editor-actions"/></button>
                 <button><img src="src/images/Top-Tweets2.png" className="tweet-editor-actions"></img></button>
           </div>  
           <button className="button">tweet</button>  
        </div>
      </div>
   </div>
  )
};

export default TweetEditor;