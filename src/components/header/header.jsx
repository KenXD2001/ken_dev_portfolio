import React, { useState, useEffect, useCallback } from 'react';

const Header = ({ toggleTheme, theme }) => {
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY >= 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveNav(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!toggle) return;
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setToggle(false);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [toggle]);

    const navItems = [
        { href: "#home", icon: "uil uil-estate", label: "Home" },
        { href: "#about", icon: "uil uil-user", label: "About" },
        { href: "#skill", icon: "uil uil-file-alt", label: "Skills" },
        { href: "#services", icon: "uil uil-briefcase-alt", label: "Services" },
        { href: "#portfolio", icon: "uil uil-scenery", label: "Portfolio" },
        { href: "#contact", icon: "uil uil-message", label: "Contact" },
    ];

    const linkClass = (href) => {
        const base = "flex flex-col items-center text-sm text-foreground font-medium transition-all duration-300 px-[0.9rem] py-[0.55rem] rounded-[0.85rem] relative after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-2 after:h-0.5 after:bg-transparent after:scale-x-0 after:transition-all after:duration-300 max-[400px]:px-2 max-[400px]:py-1.5 max-[400px]:text-xs";
        const active = activeNav === href
            ? "bg-primary text-primary-foreground after:bg-primary-foreground after:scale-x-100"
            : "hover:bg-primary hover:text-primary-foreground hover:after:bg-primary-foreground hover:after:scale-x-100";
        return `${base} ${active}`;
    };

    const handleNavClick = useCallback((href) => (e) => {
        e.preventDefault();
        setActiveNav(href);
        setToggle(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <header className={`w-full fixed top-0 left-0 z-[100] bg-background/40 backdrop-blur-[10px] transition-all duration-300 max-md:bottom-0 max-md:top-auto ${scrolled ? "shadow-[0_2px_4px_-2px_var(--primary)]" : ""}`}>
            <nav className="h-[4.5rem] max-md:h-12 flex justify-between items-center container">
                <a href="#home" onClick={handleNavClick("#home")} className="font-['Pacifico'] font-bold text-lg text-foreground">Ken@Dev.in</a>

                <div className="flex items-center gap-2">
                    <ul className="hidden md:flex md:items-center md:gap-8">
                        {navItems.map(({ href, icon, label }) => (
                            <li key={href}>
                                <a href={href} onClick={handleNavClick(href)} className={linkClass(href)}>
                                    <i className={`${icon} text-lg md:hidden`}></i> {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleTheme}
                        className="relative flex items-center justify-center w-11 h-11 rounded-full border border-border bg-background/60 text-foreground hover:border-primary/40 hover:bg-primary/10 hover:shadow-sm hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        <span className="relative w-5 h-5">
                            <i className={`bx bx-moon absolute inset-0 flex items-center justify-center text-lg transition-all duration-500 ${theme === "light" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"}`}></i>
                            <i className={`bx bx-sun absolute inset-0 flex items-center justify-center text-lg transition-all duration-500 ${theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`}></i>
                        </span>
                    </button>

                    <button
                        className="md:hidden text-sm cursor-pointer border border-border p-2.5 rounded-[0.95rem] bg-background/95 hover:scale-105 transition-all"
                        aria-label="Toggle menu"
                        aria-expanded={toggle}
                        onClick={() => setToggle(!toggle)}
                    >
                        <i className="uil uil-apps text-foreground"></i>
                    </button>
                </div>

                <div
                    className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ${toggle ? "opacity-100 visible z-40" : "opacity-0 invisible -z-10"}`}
                    onClick={() => setToggle(false)}
                />

                <div className={`md:hidden fixed bottom-0 left-0 w-full bg-background px-6 pb-16 pt-8 max-[400px]:px-4 max-[400px]:pb-14 shadow-[0_-8px_24px_-4px_var(--primary)] rounded-t-[1.5rem] transition-all duration-500 ease-out z-50 ${toggle ? "translate-y-0 opacity-100 visible pointer-events-auto" : "translate-y-full opacity-0 invisible pointer-events-none"}`}>
                    <ul className="grid grid-cols-3 gap-6 max-[400px]:gap-4">
                        {navItems.map(({ href, icon, label }) => (
                            <li key={href}>
                                <a href={href} onClick={handleNavClick(href)} className={linkClass(href)}>
                                    <i className={`${icon} text-lg`}></i> {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="absolute right-[1.3rem] bottom-2 text-2xl cursor-pointer text-foreground hover:text-foreground/80 hover:scale-105 transition-all"
                        onClick={() => setToggle(false)}
                        aria-label="Close menu"
                    >
                        <i className="uil uil-times"></i>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
