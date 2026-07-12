import React from 'react'

const ScrollDown = () => {
    return (
        <div className="ml-[9.25rem] max-[992px]:ml-[7.5rem] max-[768px]:hidden">
            <a href="#about" className="inline-flex items-center">
                <svg
                    width="32px"
                    height="32px"
                    className="home__scroll-mouse"
                    viewBox="0 0 247 390"
                    version="1.1"
                    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 1.5 }}
                >
                    <path className="animate-[scroll_2s_ease_infinite]" d="M123.359,79.775l0,72.843" style={{ fill: "none", stroke: "var(--foreground)", strokeWidth: "20px" }}></path>
                    <path d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: "none", stroke: "var(--foreground)", strokeWidth: "20px" }}></path>
                </svg>
                <span className="text-foreground font-medium mr-1 ml-0.5">Scroll Down</span>
                <i className='uil uil-arrow-down text-xl text-foreground'></i>
            </a>
        </div>
    )
}

export default ScrollDown
