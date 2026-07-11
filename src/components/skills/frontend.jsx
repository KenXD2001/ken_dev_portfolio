import React from 'react'

const dataRow = (name, level) => (
    <div className="flex gap-2">
        <i className="bx bx-badge-check text-base text-foreground"></i>
        <div>
            <h3 className="text-base font-medium leading-[18px] max-[350px]:text-sm">{name}</h3>
            <span className="text-[0.625rem]">{level}</span>
        </div>
    </div>
);

const Frontend = () => {
    return (
        <div className="bg-card border border-border px-12 py-8 rounded-[1.75rem] shadow-[0_24px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_65px_rgba(0,0,0,0.1)] hover:border-border max-[576px]:px-6">
            <h3 className="text-base font-medium text-center mb-6">Frontend developer</h3>

            <div className="flex justify-center gap-x-10 max-[350px]:gap-x-5">
                <div className="grid items-start gap-4">
                    {dataRow("HTML", "Intermediate")}
                    {dataRow("CSS", "Intermediate")}
                    {dataRow("JavaScript", "Intermediate")}
                </div>

                <div className="grid items-start gap-4">
                    {dataRow("Bootstrap", "Basic")}
                    {dataRow("Git", "Basic")}
                    {dataRow("React", "Basic")}
                </div>
            </div>
        </div>
    )
}

export default Frontend
