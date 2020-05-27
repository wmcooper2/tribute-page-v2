import React from "react";
import Images from "./imageData";

console.log(Images);

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <img src={this.props.image.src} alt={this.props.image.alt}></img>;
  }
}

class FlyingImages extends React.Component {
  images = Images.map((image, index) => {
    return <Image image={image} key={index} />;
  });
  //   bullets = Data.map((bullet, index) => {
  // return <Bullet bullet={bullet} key={index} />;
  //   });

  render() {
    return this.images;
  }
}

export default FlyingImages;
