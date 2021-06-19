import React from "react";
import Data from "./data";
class Bullet extends React.Component {
  constructor(props) {
    super(props);
    this.bullet = props.bullet;
    this.index = props.index;
    this.bulletRef = React.createRef();
    this.machineRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.slideIn = this.slideIn.bind(this);
    this.machineSlideIn = this.machineSlideIn.bind(this);
    this.borderColor = this.borderColor.bind(this);

    this.state = {
      left: -window.innerWidth,
      right: window.innerWidth,
      opacity: 0,
    };
  }

  handleScroll = () => {
    this.slideIn(this.bulletRef);
    this.machineSlideIn(this.machineRef);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  slideIn = (el) => {
    const bounds = el.current.getBoundingClientRect();
    if (bounds.y < Math.floor(window.innerHeight * 0.5)) {
      this.setState(() => {
        return { left: "0px" };
      });
    }
  };

  machineSlideIn = (el) => {
    const bounds = el.current.getBoundingClientRect();
    if (bounds.y < Math.floor(window.innerHeight * 0.5)) {
      this.setState(() => {
        return {
          right: Math.floor(window.innerWidth / 2),
          opacity: 1,
        };
      });
    }
  };

  borderColor = (index) => {
    console.log("index === ", index);
    let color = "5px solid ";
    const color1 = "rgb(215, 132, 80)";
    console.log("Color===", color + color1);
    switch (index) {
      case 0:
        return color + color1;
      default:
        return color + "black";
    }
  };

  render() {
    return (
      <div className="bullet" ref={this.bulletRef}>
        <img
          className="flyingImage"
          ref={this.machineRef}
          src={this.bullet.machineImg}
          alt={this.bullet.alt}
          style={{ left: this.state.right, opacity: this.state.opacity }}
        ></img>
        <div className="flyingtext" style={{ left: this.state.left }}>
          <p>{this.bullet.data}</p>
        </div>
      </div>
    );
  }
}

class BulletPoints extends React.Component {
  bullets = Data.map((bullet, index) => {
    return <Bullet bullet={bullet} key={index} index={index} />;
  });

  render() {
    return this.bullets;
  }
}

export default BulletPoints;

