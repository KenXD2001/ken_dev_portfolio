import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ashwin</h1>

                <ui className="footer__list">
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href='#portfolio' className='footer__link'>Projects</a>
                    </li>

                    <li>
                        <a href='testimonials' className='footer__link'>Services</a>
                    </li>
                </ui>

                <div className='footer__social'>
                    <a href="https://www.facebook.com/ashwin.bhardwaj.5496/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-facebook'></i>
                    </a>

                    <a href="https://www.instagram.com/ashwinbhardwaj2613/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-instagram'></i>
                    </a>

                    <a href="https://www.linkedin.com/in/ashwin-bhardwaj-0480a925a" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-linkedin'></i>
                    </a>
                </div>

                <span className='footer__copy'>&#169; Ken@dev.in. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;
