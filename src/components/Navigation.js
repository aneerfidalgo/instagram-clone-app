import "../styles/navigation.scss";
import logo from "../images/instagramLogo.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src="" alt="instagram logo" />
        <div className="search">
          <img className="searchIcon" src="" alt="search icon" />
          <span className="searchText">Search</span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
