import React from 'react';
import Works from './works';

const Portfolio = () => {
    return (
        <section className="section" id='portfolio'>
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>

            <Works />
        </section>
    )
}

export default Portfolio
