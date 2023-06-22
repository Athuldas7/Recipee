import React from 'react'
import Header from './Header'

function Hero() {
  return (
    <div className='hero'>
      <img src="https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg" alt="Food" />
      <div className="hero-nav">
        <Header />
      </div>
      <div className='hero-content'>
        <h1>It's All About Good Food and Taste</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa explicabo recusandae voluptas temporibus doloremque aliquam itaque amet laboriosam.</p>
      </div>
    </div>
  )
}

export default Hero
