import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="container">
                <div className="flex flex-col items-center">
                    <a href="#home" className="font-['Pacifico'] text-xl font-bold text-foreground">Ken@Dev.in</a>
                    <span className="text-sm text-muted-foreground my-4">Frontend Developer</span>

                    <ul className="flex gap-6 mb-4 max-[768px]:gap-5">
                        <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                        <li><a href="#skill" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
                        <li><a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
                    </ul>

                    <div className="flex gap-3">
                        <a href="https://www.instagram.com/ashwinbhardwaj2613/" className="w-10 h-10 rounded-lg bg-background text-foreground border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" target="_blank" rel="noreferrer">
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ashwin-bhardwaj-0480a925a" className="w-10 h-10 rounded-lg bg-background text-foreground border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" target="_blank" rel="noreferrer">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a href="https://github.com/KenXD2001" className="w-10 h-10 rounded-lg bg-background text-foreground border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" target="_blank" rel="noreferrer">
                            <i className="bx bxl-github"></i>
                        </a>
                    </div>

                    <p className="text-[0.625rem] text-muted-foreground mt-8">&copy; KenDev. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
