import React, { useState, useEffect } from 'react'

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScroll(window.scrollY >= 560);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <a
            href="#home"
            className={`fixed right-4 bottom-12 z-[90] w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-lg shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 max-md:right-5 max-md:bottom-16 ${showScroll ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-4"}`}
        >
            <i className="uil uil-arrow-up"></i>
        </a>
    )
}

export default ScrollUp
