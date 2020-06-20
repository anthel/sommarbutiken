import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import Carousel from '../components/Carousel';

export default function HomeScreen() {
  return (
    <div>
      
      

      <div className="container-carousel">
      <h2>Senast inkommet</h2>
        <Carousel className="carousel"/>
      </div>
      

    </div>
  )
}
