import React from 'react';
import "./services.css";

const Services = () => {
    return (
        <section className="services section" id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className='services__title'>Product <br /> Designer</h3>
                    </div>

                    <span className='services__button'>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-items services__modal-close"></i>

                            <h3 className="services__modal-title">Product esigner</h3>
                            <p className="services__modal-description">Services with more than 3 years of experience. Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>I develop the user interface.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>Web page development.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>I create ux element interactions.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>I position you company brand.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>Design and mockups of products for companies.</p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className='services__title'>UI / UX <br />Designer</h3>
                    </div>

                    <span className='services__button'>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-items services__modal-close"></i>

                            <h3 className="services__modal-title">UI / UX Designer</h3>
                            <p className="services__modal-description">Services with more than 3 years of experience. Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>I develop the user interface.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>Web page development.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>I create ux element interactions.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>I position you company brand.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>Design and mockups of products for companies.</p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className='services__title'>Visual <br /> Designer</h3>
                    </div>

                    <span className='services__button'>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-items services__modal-close"></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Services with more than 3 years of experience. Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>I develop the user interface.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>Web page development.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>I create ux element interactions.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>I position you company brand.</p>
                                    </i>

                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className='services__moal-info'>Design and mockups of products for companies.</p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
