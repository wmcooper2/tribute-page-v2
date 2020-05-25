import React from "react";
import "./App.css";
import Data from "./data";
// import rotationkey from "./rotationkey.jpg";

const BulletPoints = (props) => {
  console.log(props);
  let bullets = Data.map((point, index) => {
    return (
      <React.Fragment key={index}>
        <img src={point.img} className="rotationkey" alt={point.alt}></img>
        <li>{point.data}</li>
      </React.Fragment>
    );
  });
  return bullets;
};

const displayScroll = () => {
  console.log(window.pageXOffset);
};

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <div
        className="App"
        onScroll={() => {
          displayScroll();
        }}
      >
        <header>John Keely</header>
        <img src="portrait.jpg" id="portrait" alt="portrait"></img>
        <p id="lifespan">Life to Death</p>
        <p id="summary">
          Keely is my favorite person in history. Although his work is marred
          with claims of fraud and incomplete theories, I love those incomplete
          ideas that he left behind; so much is left to one's imagination. His
          research and thoughts about the vibratory nature of our reality is a
          fantastic concept to consider. Here are some interesting things about
          this man.
        </p>
        <ul>{BulletPoints(Data)}</ul>
        <img
          src="book.jpg"
          alt="free energy pioneer book cover"
          id="book"
        ></img>
      </div>
    );
  }
}

export default App;
