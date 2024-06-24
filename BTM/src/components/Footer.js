import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
        <div className='head-footer'>
      <div className="footer-top">
        <div className="footer-logo-section">
        <img src="/images/logo.png" alt="Logo" style={{ width: '20%' }} />
        </div>
      </div>
      </div>

        <div className='footer-end'>
      <div className="footer-content">
        <div className="footer-column">
          <a href="/" className="footer-link">Главная</a>
          <a href="/about" className="footer-link">О нас</a>
          <a href="/advantages" className="footer-link">Преимущества</a>
        </div>
        <div className="footer-column-1">
          <a href="/infrastructure" className="footer-link">Инфраструктура</a>
          <a href="/partners" className="footer-link">Партнеры</a>
          <a href="/contact" className="footer-link">Контакты</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="https://linkedin.com" className="footer-social-link"><img src="/images/logo1.png" alt="Logo" style={{ width: '30px'}}  /></a>
          <a href="https://instagram.com" className="footer-social-link"><img src="/images/logo2.png" alt="Logo" style={{ width: '30px' }} /></a>
          <a href="https://facebook.com" className="footer-social-link"><img src="/images/logo3.png" alt="Logo" style={{ width: '30px' }} /></a>
        </div>
        <p className="footer-rights">© all rights reserved 2024</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;