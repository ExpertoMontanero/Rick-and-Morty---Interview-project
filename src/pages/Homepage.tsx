import "/src/styles/homepage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftComponent from "../components/LeftComponent";
import RightComponent from "../components/RightComponent";
import { useEffect } from "react";
import { useState } from "react";

function Homepage() {
  const [isResolutionAbove1000, setIsResolutionAbove1000] = useState<boolean>(
    window.innerWidth > 1000
  );
  const handleResize = () => {
    setIsResolutionAbove1000(window.innerWidth > 1000);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 
  return (
    <div className="page-container">
      <Header />
      <div className="main-container">
        <div className={isResolutionAbove1000 ? "left-side" : " "}>
          <LeftComponent />
        </div>
        <div className="right-side">
          <RightComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
