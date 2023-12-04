import React from 'react';

function Tweets() {
  return (
    <div className='tweets'>
      <div className='tweet'>
        <div>
           <img src="src/images/tweet-profile-photo.png" alt="Profile photo"/>
        </div>

        <div>
           <img src="src/images/Tweet-Title.png" alt="Tweet title"/>
          <p>President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.</p><br/>
          <img src="src/images/Tweet-Replies.png" alt=""/>
          <img src="src/images/Tweet-Replies-un.png" alt=""/>
          <img src="src/images/Tweet-Replies-deux.png" alt=""/>
          <img src="src/images/Tweet-Replies-trois.png" alt=""/>

          </div>
    </div>
      <div className='tweet'>
        <div>
           <img src="src/images/Tweet-Profile-Photo.png" className='tweet-avatar'/>
        </div>

          <div className='tweet-content'>
            <div className='tweet-body'> 
              <div className='tweet-title'>
              <img src="src/images/Tweet-Title1.png" alt="" /> 
              </div>
              <div className='tweet-text'>
                <p>Gardening boomed during the pandemic.Six 
                  Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land</p>
              </div>
              <div className="tweet-image">
                 <img src="src/images/imagefeuille.png" alt=""/>
              </div>
              </div>
              <div className="tweet-actions">
                 <div className="tweet-action">
               <img src="src/images/Frame8.png" alt="tweet-like"/>                              

            </div>       
          </div>
          </div>
    </div>



         <div className="tweet">
             <img src="src/images/Tweet-pro.png" alt=""/>
                 <div className="tweet-title-author">   
                    <h5>Twitter</h5>
                   <div>
                     <p>BIG NEW lol jk still Twetter</p>
                   </div>
                    <br/>
                     <img src="src/images/Frame10.png" alt=""/>
    </div>  


           <div className="tweet-title-author">
              <img src="src/images/Verified.png" alt="valided"  />
            </div>            
           <p className="tweet-title-details">@Twitter . oct 29</p>
        </div> 

     <div className="tweet">
        <img src="src/images/Tweet-pro.png" alt="tweet-profil" />
         <div>       
           <img src="src/images/Frame11.png" alt=""/>
         </div>
    </div>

    <div className="tweet">
       <img src="src/images/Tweet-pro.png" alt="tweet-profil"/>
      <div>       
         <img src="src/images/Frame11.png" alt=""/>
      </div> 
    </div>
  </div>                       
  )
};

export default Tweets;
