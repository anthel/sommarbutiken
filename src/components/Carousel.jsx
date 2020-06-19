import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={require('../media/images/Shirt2.png')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('../media/images/Shirt3.jpg')} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('../media/images/Tegnell-300x300.webp')} />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        );
    }
};
 
/* ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel')); */

export default DemoCarousel;