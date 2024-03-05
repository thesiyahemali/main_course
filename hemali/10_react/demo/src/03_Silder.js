import React from 'react'
import logo1 from './logo1.png'
import logo2 from './logo2.jpg'
import logo3 from './logo3.jpg'



const Silder = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo1} height={'300px'} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo2}  height={'300px'} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo3}  height={'300px'} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Silder
