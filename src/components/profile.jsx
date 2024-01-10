import source from "../images-sidebar/Profile-Photo.png";

function Avatar() {

    return (
        <div className="avatar"> 
            <img src={source} alt="avatar"  />
            <p>Bradley Ortiz</p>
            <img src="src/images-sidebar/Body.png" alt="profile-settings"  />"
        </div>
    )
}

export default Avatar;