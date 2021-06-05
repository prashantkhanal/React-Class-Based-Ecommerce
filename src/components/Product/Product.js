import React, { Component } from 'react';
import Button from '../Button/Button';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-5 mt-5 ml-5">
        <div className="card product__listing">
          <img
            src={this.props.image}
            className="card-img-top product__image"
            alt="..."
          />
          <div className="card-body d-flex justify-content-between">
            <h6 className="card-text product_name">{this.props.name}</h6>
            <h6 className="card-text price">${this.props.price}</h6>
          </div>
          <div className="mt-5 ml-2 ">
            <span className="dot red pl-2"></span>
            <span className="dot green p "></span>

            <span className="dot blue"></span>
          </div>
          <div className="mb-5">
            <Button className="cart_bottom " name="Add to cart" />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
