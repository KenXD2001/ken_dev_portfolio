import React from 'react'

const Backend = () => {
    return (
        <div className="bg-card border border-border px-12 py-8 rounded-[1.75rem] shadow-[0_24px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_65px_rgba(0,0,0,0.1)] hover:border-border max-[576px]:px-6">
            <h3 className="text-base font-medium text-center mb-6">Backend Developer</h3>

            <div className="flex justify-center gap-x-10 max-[350px]:gap-x-5">
                <div className="grid items-start gap-4">
                    <div className="flex gap-2">
                        <i className="bx bx-badge-check text-base text-foreground"></i>
                        <div>
                            <h3 className="text-base font-medium leading-[18px] max-[350px]:text-sm">Node Js</h3>
                            <span className="text-[0.625rem]">Basic</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <i className="bx bx-badge-check text-base text-foreground"></i>
                        <div>
                            <h3 className="text-base font-medium leading-[18px] max-[350px]:text-sm">MySQL</h3>
                            <span className="text-[0.625rem]">Basic</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <i className="bx bx-badge-check text-base text-foreground"></i>
                        <div>
                            <h3 className="text-base font-medium leading-[18px] max-[350px]:text-sm">Express Js</h3>
                            <span className="text-[0.625rem]">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="grid items-start gap-4">
                    <div className="flex gap-2">
                        <i className="bx bx-badge-check text-base text-foreground"></i>
                        <div>
                            <h3 className="text-base font-medium leading-[18px] max-[350px]:text-sm">MongoDB</h3>
                            <span className="text-[0.625rem]">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend
