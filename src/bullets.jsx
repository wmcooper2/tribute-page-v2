import React from "react";
import Data from "./data";
class Bullet extends React.Component {
  constructor(props) {
    super(props);
    this.bullet = props.bullet;
    this.bulletRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.slideIn = this.slideIn.bind(this);
    this.state = {
      classes: "rotationkey",
      left: -window.innerWidth,
    };
  }

  handleScroll = () => {
    this.slideIn(this.bulletRef);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  slideIn = (el) => {
    // console.log(el.current.children[1].style);
    if (!(el.current.children[0].className === this.state.defaultClass)) {
      const bounds = el.current.getBoundingClientRect();
      if (bounds.y < Math.floor(window.innerHeight * 0.9)) {
        this.setState(() => {
          return { left: "0px" };
        });
      }
    }
  };

  render() {
    // console.log(this.state.xPos);
    return (
      <div ref={this.bulletRef}>
        <li className="flyingbullet" style={{ left: this.state.left }}>
          {/* <img src={this.bullet.img} className={this.state.classes} alt={this.bullet.alt} ></img> */}
          {this.bullet.data}
        </li>
      </div>
    );
  }
}

class BulletPoints extends React.Component {
  bullets = Data.map((bullet, index) => {
    return <Bullet bullet={bullet} key={index} />;
  });

  render() {
    return this.bullets;
  }
}

export default BulletPoints;
