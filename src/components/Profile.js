import "../styles/profile.scss";
import ProfileIcon from "./Profileicon";
import users from "../data/users";

function Profile(props) {
    const {
        username,
        caption,
        urlText,
        iconSize,
        captionSize,
        storyBorder,
        hideAccountName,
        image,
    } = props;

    let accountName = username
    ? username
    :users[Math.floor(Math.random() * users.length)].username;
  
    return <div className="profile">
        <ProfileIcon iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
    


}

export default Profile;
