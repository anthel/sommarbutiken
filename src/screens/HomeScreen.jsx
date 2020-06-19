import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import Carousel from '../components/Carousel';

export default function HomeScreen() {
  return (
    <div>
      <h2>Home screen</h2>
      <p> News and pictures</p>
      <Carousel/>
{/*       <Carousel showArrows={true} >
        <div>
            <img src="media/images/Shirt2.png"/>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="media/images/Shirt3.jpg" />
            <p className="legend">Legend 2</p>
        </div>

      </Carousel> */}
    </div>
  )
}
