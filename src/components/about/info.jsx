import React from 'react'

const Info = () => {
    const boxClass = "bg-card border border-border rounded-xl text-center px-6 py-5 shadow-[0_24px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_55px_rgba(0,0,0,0.1)] hover:border-border max-[992px]:px-2 max-[992px]:py-3";

    return (
        <div className="grid grid-cols-3 gap-2 mb-8 max-[992px]:justify-center max-[576px]:grid-cols-3 max-[350px]:grid-cols-2">
            <div className={boxClass}>
                <i className="bx bx-award text-2xl text-foreground mb-2"></i>
                <h3 className="text-sm font-medium">Experience</h3>
                <span className="text-[0.625rem]">1 Years Working</span>
            </div>

            <div className={boxClass}>
                <i className="bx bx-briefcase-alt text-2xl text-foreground mb-2"></i>
                <h3 className="text-sm font-medium">Completed</h3>
                <span className="text-[0.625rem]">10 + Projects</span>
            </div>

            <div className={boxClass}>
                <i className="bx bx-support text-2xl text-foreground mb-2"></i>
                <h3 className="text-sm font-medium">Support</h3>
                <span className="text-[0.625rem]">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info
