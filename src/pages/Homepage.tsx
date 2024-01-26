import { Link } from "react-router-dom";
import "C:/Users/tomek/Rick and Morty/src/styles/homepage.css";
import Header from "../styledcomps/Header";

function Homepage() {
  return (
    <div>
      <Header/>
      <Link to="/characters">Characters</Link>
    </div>
  );
}

export default Homepage;
