import React from 'react';
import './css/Footer.scss';

function Footer() {
  return (
    <div>
      <div className='footer-container'>
        <div className="social-icons">
          <a href="https://facebook.com"><i className='bx bxl-facebook'></i></a>
          <a href="https://www.instagram.com/web.devofficial/"><i className='bx bxl-instagram'></i></a>
          <a href="https://twitter.com/mohan_prasoon"><i className='bx bxl-twitter'></i></a>
        </div>
        <div className="footer-nav">
          <a href="/home">Home</a>
          <a href="/checkout">Checkout</a>
        </div>
        <div className="info">
          <a href="/contact">CONTACT</a>
          <a href="/blog">BLOG</a>
          <a href="/catering">CATERING</a>
          <a href="/delivery">DELIVERY</a>
        </div>
      </div>
      <div className="copyright">
        <i className='bx bx-copyright'></i>
        <p>Athul Das</p>
      </div>
    </div>
  );
}

export default Footer;
