import "../styles/ProfileIcon.scss";

function ProfileIcon(props) {
  const { iconSize, storyBorder, image } = props;

  // GETS RANDOM NUMBERS TO DISPLAY ALL POSSIBLE IMAGES
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return <div className="profileIcon"></div>;
}

export default ProfileIcon;
