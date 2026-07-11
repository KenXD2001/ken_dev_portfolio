import React from 'react'

const Social = () => {
    return (
        <div className="flex flex-col gap-4 justify-center">
            <a href="https://www.instagram.com/ashwinbhardwaj2613/" className="text-xl text-foreground hover:text-foreground/80 transition-colors" target="_blank" rel="noreferrer">
                <i className='uil uil-instagram'></i>
            </a>
            <a href="https://www.linkedin.com/in/ashwin-bhardwaj-0480a925a" className="text-xl text-foreground hover:text-foreground/80 transition-colors" target="_blank" rel="noreferrer">
                <i className='uil uil-linkedin'></i>
            </a>
            <a href="https://github.com/KenXD2001" className="text-xl text-foreground hover:text-foreground/80 transition-colors" target="_blank" rel="noreferrer">
                <i className='uil uil-github-alt'></i>
            </a>
        </div>
    )
}

export default Social
