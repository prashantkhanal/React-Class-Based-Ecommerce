import React, { Component } from 'react';
import Button from '../Button/Button';
import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div class="jumbotron text-center">
        <div class="intro">
          <h6 class="main__heading">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
            suscipit?
          </h6>
          <p class="main__subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis et
            facere dolores magni deserunt ab repellendus magnam maiores dolorum
            molestiae.
          </p>
          <input type="text" class="main__search" placeholder="Search" />
          <Button name="Search" />
        </div>
      </div>
    );
  }
}

export default Banner;
