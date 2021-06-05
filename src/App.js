import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Product from './components/Product/Product';
import Banner from './components/Banner/Banner';
// import Banner from './components/Banner/Banner';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="container">
          <div className="row">
            <div className="product__heading d-flex">
              <h5 className="">All</h5>
              <h6>Category</h6>
            </div>
            <Product
              image="https://cdn.pixabay.com/photo/2015/12/08/00/36/luggage-1081872_960_720.jpg"
              name="Laptop"
              price="300"
            />
            <Product
              image="https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_960_720.png"
              name="T shrit"
              price="50"
            />
            <Product
              image="https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_960_720.jpg"
              name="IPhone 12 pro"
              price="20"
            />
            <Product
              image="https://cdn.pixabay.com/photo/2015/01/18/13/31/tablet-602968_960_720.jpg"
              name="Tablet"
              price="500"
            />
            <Product
              image="https://cdn.pixabay.com/photo/2015/11/19/11/45/macbook-pro-1050973_960_720.jpg"
              name="Mac Book Pro"
              price="1100"
            />
            <Product
              image="https://www.climamarket.eu/13178-large_default/wall-split-air-conditioner-lg-s09et.jpg"
              name="AC"
              price="1300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
