import React from "react";
import Data from "./data";
class Bullet extends React.Component {
  constructor(props) {
    super(props);
    this.bullet = props.bullet;
    this.bulletRef = React.createRef();
    this.machineRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.slideIn = this.slideIn.bind(this);
    this.machineSlideIn = this.machineSlideIn.bind(this);
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
    if (bounds.y < Math.floor(window.innerHeight * 0.9)) {
      this.setState(() => {
        return { left: "0px" };
      });
    }
  };

  machineSlideIn = (el) => {
    const bounds = el.current.getBoundingClientRect();
    if (bounds.y < Math.floor(window.innerHeight * 0.6)) {
      this.setState(() => {
        return {
          right: Math.floor(window.innerWidth / 2),
          opacity: 1,
        };
      });
    }
  };

  render() {
    return (
      <div ref={this.bulletRef}>
        <img
          className="flyingmachine"
          ref={this.machineRef}
          src={this.bullet.machineImg}
          alt={this.bullet.alt}
          style={{
            left: this.state.right,
            transform: "translate(0, -10vh)",
            opacity: this.state.opacity,
          }}
        ></img>

        <li className="flyingbullet" style={{ left: this.state.left }}>
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
