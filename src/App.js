import React from "react";
import BulletPoints from "./bullets";

class App extends React.Component {
  render() {
    return (
      <div className="App" onClick={this.handleScroll}>
        <header>John Keely</header>
        <img src="portrait.jpg" id="portrait" alt="portrait"></img>
        <p id="lifespan">September 3rd, 1837 - November 18th, 1898</p>
        <p id="summary">
          Keely is my favorite person in history. Although his work is marred
          with claims of fraud and incomplete theories, I love those incomplete
          ideas that he left behind; so much is left to one's imagination. His
          research and thoughts about the vibratory nature of our reality is a
          fantastic concept to consider. Here are some interesting things about
          this man.
        </p>
        <ul>
          <BulletPoints />
        </ul>
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
