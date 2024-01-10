import ButtonTweet  from '../components/buttons-tweet';
import Avatar from '../components/profile';
import imgHome from "../images-sidebar/Home-Fill.png";
import imgExplore from "../images-sidebar/Explore.png";
import imgNotification from "../images-sidebar/Notifications.png";
import twitter from "../images-sidebar/Normal.png";
import imgMessage from "../images-sidebar/Messages.png";
import imgBookmarks from "../images-sidebar/Bookmarks.png";
import imgList from "../images-sidebar/Lists.png";
import imgProfile from "../images-sidebar/Profile.png";
import imgMore from "../images-sidebar/More.png";


function SidebarLeft() {
  return (
    <>
      <div>
        <div>
            <img src={twitter} alt="" />
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgHome} alt="" />
          <p className='sidebar-title'>Home</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgExplore} alt="" />
          <p className='sidebar-title'>Explore</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgNotification} alt="" />
          <p className='sidebar-title'>Notification</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgMessage} alt="" />
          <p className='sidebar-title'>Messages</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgBookmarks} alt="" />
          <p className='sidebar-title'>Bookmarks</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgList} alt="" />
          <p className='sidebar-title'>Lists</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgProfile} alt="" />
          <p className='sidebar-title'>Profile</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgMore} alt="" />
          <p className='sidebar-title'>More</p>
        </div>


        <ButtonTweet style={"button-sidebar"} />
        <Avatar style={"img-profile"} 
          
          />
      </div>
    </>
    
  )
}

export default SidebarLeft;