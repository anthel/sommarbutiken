import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class HomeCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={require('../media/images/Shirt2.png')} />
                    
                    <a className="addToCart" href="#">Add to cart</a>
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
    }
};
 
/* ReactDOM.render(<HomeCarousel />, document.querySelector('.demo-carousel')); */

export default HomeCarousel;