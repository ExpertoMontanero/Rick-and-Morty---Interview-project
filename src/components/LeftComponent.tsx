import "../styles/leftComponent.css";

export default function LeftComponent() {
  return (
    <div className="left-side-container">
      <h2 className="title-text">
        Episodes of the <span className="highlight"> 4th</span> season of the
        series{" "}
        <span className="colored">
          <br />
          Rick and Morty
        </span>
      </h2>
      <img className="image-main" src="src\images\image.png"></img>
    </div>
  );
}
