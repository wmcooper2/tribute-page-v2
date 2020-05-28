import React from "react";
import BulletPoints from "./bullets";

class App extends React.Component {
  render() {
    return (
      <div className="App" onClick={this.handleScroll}>
        <div classname="landing">
          <h1>John Keely</h1>
          <img
            src="https://wmcooper2.com/tribute-page2/portrait.jpg"
            id="portrait"
            alt="portrait"
          ></img>
          <p id="lifespan">September 3rd, 1837 - November 18th, 1898</p>
        </div>
        <p id="summary">
          Keely is my favorite person in history. Although his work is marred
          with business failure, fraud and incomplete theories, I love those
          incomplete ideas that he left behind; so much is left to one's
          imagination. His research and thoughts about the vibratory nature of
          our reality is a fantastic concept to consider. Although the idea that
          nature has a vibratory, or "harmonic", foundation is not his original
          idea, he took that idea into what I think was an original direction.
          He took that idea to such a great depth as he attempted to carve out a
          new science, or to perpetuate an elaborate fraud. Whichever is the
          truth, he is fascinating nonetheless. Here are some interesting things
          about this man.
        </p>
        <BulletPoints />
        <div id="bookdiv">
          <p id="bookrecommendation">
            {" "}
            If you are interested in old-timey science before the era of Nikola
            Tesla, then I absolutely recommend reading this book. The author did
            an amazing job collecting and citing resources on this fascinating,
            largely forgotten, historical figure.{" "}
          </p>
          <a
            href="https://www.amazon.com/Free-Energy-Pioneer-Worrell-Science/dp/1931882339"
            alt="book link"
          >
            <img
              src="https://wmcooper2.com/tribute-page2/book.jpg"
              alt="free energy pioneer book cover"
              id="book"
            ></img>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
