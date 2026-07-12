import React, { useState, useEffect } from 'react'

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setShowScroll(window.scrollY >= 560);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <a
            href="#home"
            className={`hoverable fixed right-6 bottom-8 z-[90] w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 max-md:right-5 max-md:bottom-16 ${showScroll ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-4"}`}
        >
            <i className="bx bx-chevron-up"></i>
        </a>
    )
}

export default ScrollUp
