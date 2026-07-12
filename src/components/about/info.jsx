import React from 'react'

const stats = [
    { icon: "bx bx-award", label: "Experience", value: "2.6+ Years" },
    { icon: "bx bx-briefcase-alt", label: "Completed", value: "25+ Projects" },
    { icon: "bx bx-support", label: "Support", value: "Online 24/7" },
];

const Info = () => {
    return (
        <div className="grid grid-cols-3 gap-3 mb-8 max-[576px]:gap-2 max-[350px]:grid-cols-2">
            {stats.map(({ icon, label, value }) => (
                <div key={label} className="card rounded-xl px-3 py-4 text-center hoverable max-[992px]:px-2 max-[992px]:py-3">
                    <span className="mx-auto w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <i className={`${icon} text-base text-primary`}></i>
                    </span>
                    <h3 className="text-sm font-medium">{label}</h3>
                    <span className="text-[0.625rem] text-muted-foreground">{value}</span>
                </div>
            ))}
        </div>
    )
}

export default Info
