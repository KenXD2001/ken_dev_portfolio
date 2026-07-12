import React from 'react'

const socialLinks = [
    { href: "https://www.instagram.com/ashwinbhardwaj2613/", icon: "bxl-instagram", label: "Instagram" },
    { href: "https://www.linkedin.com/in/ashwin-bhardwaj-0480a925a", icon: "bxl-linkedin", label: "LinkedIn" },
    { href: "https://github.com/KenXD2001", icon: "bxl-github", label: "GitHub" },
];

const navLinks = ["about", "skills", "portfolio"];

const Footer = () => {
    return (
        <footer className="bg-card pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <a href="#home" className="font-['Pacifico'] text-2xl font-bold text-foreground hoverable tracking-tight">Ken@Dev.in</a>
                    <span className="text-sm text-muted-foreground mt-3">Frontend Developer</span>

                    <div className="w-12 h-px bg-border my-7"></div>

                    <ul className="flex gap-8 max-[768px]:gap-6">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link}`}
                                        className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 hoverable after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full capitalize"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="w-12 h-px bg-border my-7"></div>

                    <div className="flex gap-4">
                        {socialLinks.map(({ href, icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                className="w-11 h-11 rounded-xl bg-background text-muted-foreground border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-300 hoverable text-lg"
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                            >
                                <i className={`bx ${icon}`}></i>
                            </a>
                        ))}
                    </div>

                    <p className="text-[0.625rem] text-muted-foreground/60 mt-10 tracking-widest uppercase flex items-center gap-2">
                        <span>&copy; {new Date().getFullYear()} KenDev.</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                        <span>All rights reserved</span>
                    </p>
                </div>

                
            </div>
        </footer>
    )
}

export default Footer
