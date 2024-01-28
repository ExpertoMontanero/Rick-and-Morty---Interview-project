import { Link } from "react-router-dom";
import "/src/styles/homepage.css";
import Header from "../components/Header";
import LeftComponent from "../components/LeftComponent";
import RightComponent from "../components/RightComponent";

function Homepage() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="left-side">
          <LeftComponent />
        </div>
        <div className="right-side">
          <RightComponent />
        </div>
      </div>
      <Link to="/characters">Characters</Link>
    </div>
  );
}

export default Homepage;
