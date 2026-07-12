import React, { useState } from 'react'

const qualificationData = {
    education: [
        { year: "2023-2024", title: "Full-Stack Web Development", subtitle: "EdYoda Digital University, Bangalore" },
        { year: "2023", title: "Bachelor of Arts-Economics", subtitle: "University of Delhi, Delhi" },
        { year: "2020", title: "Higher Secondary School - CBSE", subtitle: "C B S E, Ajmer" },
    ],
    experience: [
        { year: "2024-Present", title: "Frontend Developer", subtitle: "Websutotra Consulting Pvt. Ltd., Bangalore" },
        { year: "2023-2024", title: "Web Developer Intern", subtitle: "Websutotra Consulting Pvt. Ltd., Bangalore" },
    ]
};

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const activeData = toggleState === 1 ? qualificationData.education : qualificationData.experience;

    return (
        <section className="section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="container">
                <div className="flex justify-center mb-14">
                    <div className="flex bg-card border border-border rounded-full p-1 gap-1">
                        {[{ id: 1, label: "Education", icon: "bx bxs-graduation" }, { id: 2, label: "Experience", icon: "bx bxs-briefcase-alt-2" }].map(({ id, label, icon }) => (
                            <button
                                key={id}
                                className={`hoverable flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${toggleState === id
                                    ? "bg-primary text-primary-foreground shadow-sm pop"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                                onClick={() => setToggleState(id)}
                            >
                                <i className={`${icon} text-base`}></i>
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div key={toggleState} className="relative mx-auto max-w-[700px]">
                    <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/15 to-transparent rounded-full"></div>

                    {activeData.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className="relative pb-14 last:pb-0 animate-in slide-up-fade" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="absolute left-[11px] md:left-1/2 top-5 z-10 w-[9px] h-[9px] bg-primary rounded-full -translate-x-1/2" style={{ boxShadow: '0 0 0 4px color-mix(in oklch, var(--primary) 20%, transparent), 0 0 0 2px var(--background)' }}></div>

                                <div className={`pl-9 pr-4 md:pl-0 md:pr-0 md:w-1/2 ${isEven ? "md:ml-0 md:mr-auto md:text-right md:pr-10" : "md:ml-auto md:mr-0 md:text-left md:pl-10"}`}>
                                    <span className="text-[0.6rem] font-semibold tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full inline-block mb-2.5">{item.year}</span>
                                    <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
                                    <span className="text-sm text-muted-foreground leading-relaxed block mt-0.5">{item.subtitle}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Qualification
