import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
 
function HomepageCarousel()  {
  
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    console.log(product)
    dispatch(addToCart(product))
  }
  const shirtOne = {
    type:'shirt',
    name:'tegnell-stayhome'
  }
 // Check if carousel size adjusts to image size
  return (
    
    <Carousel> 
      <div>
        <img src={require('../media/images/Shirt2.png')} />
        
        <a onClick={() =>handleAddToCart(shirtOne)} 
          className="addToCart" 
          href="#"
        >Add to cart
        </a>
      </div>
      <div>
        <img src={require('../media/images/Shirt3.jpg')} />
        <p className="carousel-item">carousel-item 2</p>
        <a className="addToCart" href="#">Add to cart</a>
      </div>
      <div>
        <img src={require('../media/images/Tegnell-300x300.webp')} />
        <p className="carousel-item">carousel-item 2</p>
        <a className="addToCart" href="#">Add to cart</a>
      </div>
    </Carousel>
  );
    
};
 
/* ReactDOM.render(<HomepageCarousel />, document.querySelector('.demo-carousel')); */

export default HomepageCarousel;