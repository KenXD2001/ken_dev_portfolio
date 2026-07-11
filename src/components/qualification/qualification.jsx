import React, { useState } from 'react'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => setToggleState(index);

    const timelineData = {
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

    const activeData = toggleState === 1 ? timelineData.education : timelineData.experience;

    return (
        <section className="section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="container">
                <div className="flex justify-center mb-14 max-[576px]:gap-0">
                    <div className={`text-lg font-medium cursor-pointer mx-9 px-6 py-2 rounded-xl transition-all duration-200 max-[576px]:text-sm max-[576px]:mx-4 max-[576px]:px-4 ${toggleState === 1 ? "bg-primary text-primary-foreground" : "hover:bg-primary/10 text-foreground"}`} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap mr-2"></i>Education
                    </div>
                    <div className={`text-lg font-medium cursor-pointer mx-9 px-6 py-2 rounded-xl transition-all duration-200 max-[576px]:text-sm max-[576px]:mx-4 max-[576px]:px-4 ${toggleState === 2 ? "bg-primary text-primary-foreground" : "hover:bg-primary/10 text-foreground"}`} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt mr-2"></i>Experience
                    </div>
                </div>

                <div className="relative mx-auto max-w-[700px]">
                    <div className="absolute left-[14px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-foreground/15"></div>

                    {activeData.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className="relative pb-14 last:pb-0">
                                {/* Dot */}
                                <div className="absolute top-6 left-[14px] md:left-1/2 z-10 w-2.5 h-2.5 bg-primary rounded-full -translate-x-1/2"></div>

                                {/* Content */}
                                <div className={`pl-10 pr-4 md:pl-0 md:pr-0 md:w-1/2 max-[400px]:pl-8 ${isEven ? "md:ml-0 md:mr-auto md:text-right md:pr-10" : "md:ml-auto md:mr-0 md:text-left md:pl-10"}`}>
                                    <span className="text-xs font-semibold tracking-wide uppercase text-primary leading-none block mb-1.5">{item.year}</span>
                                    <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
                                    <span className="text-sm leading-relaxed text-muted-foreground">{item.subtitle}</span>
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
