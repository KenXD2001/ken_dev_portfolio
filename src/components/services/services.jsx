import React, { useState } from 'react'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const services = [
        {
            id: 1,
            icon: "uil uil-brackets-curly",
            title: "Frontend Developer",
            subtitle: "Let's connect and craft something amazing together!",
            modal: [
                "I develop high-quality custom web pages and applications that align with your brand and user needs.",
                "I create web pages that are optimized for performance and speed, ensuring a seamless user experience.",
                "I design and implement intuitive user interfaces that are easy to navigate and visually appealing.",
                "I ensure that my web pages are responsive and accessible across all devices and platforms.",
                "I implement emailJS to enable seamless communication and automate workflows.",
            ]
        },
        {
            id: 2,
            icon: "uil uil-arrow",
            title: "UI/UX Designer",
            subtitle: "Let's connect and craft something amazing together!",
            modal: [
                "I design user-centered interfaces that prioritize usability and accessibility.",
                "I create wireframes, prototypes, and mockups to visualize and test design concepts.",
                "I employ design thinking and user research to inform my design decisions.",
                "I optimize designs for mobile-first and responsive experiences.",
                "I design for accessibility and inclusivity, ensuring that your product is usable by all.",
            ]
        },
        {
            id: 3,
            icon: "uil uil-edit-alt",
            title: "Native App Developer",
            subtitle: "Let's connect and craft something amazing together!",
            modal: [
                "I develop high-performance native apps for Android using Java.",
                "I design and implement intuitive user interfaces with Material Design.",
                "I integrate RESTful APIs to connect apps to backend services.",
                "I implement Firebase for real-time data, authentication, and cloud storage.",
                "I use Android Jetpack components for robust, modern architecture.",
            ]
        },
    ];

    return (
        <section className="section" id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="container grid grid-cols-[repeat(3,minmax(220px,1fr))] gap-x-8 gap-y-20 justify-center max-[992px]:grid-cols-[repeat(2,minmax(220px,1fr))] max-[576px]:grid-cols-1 max-[576px]:gap-y-12">

                {services.map((service) => (
                    <div key={service.id} className="bg-card border border-border px-8 py-14 rounded-[1.75rem] text-center shadow-[0_24px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_65px_rgba(0,0,0,0.1)] hover:border-border max-[576px]:px-6 max-[576px]:py-10">
                        <i className={`${service.icon} block text-[3.2rem] mb-4`} style={{ color: "var(--foreground)" }}></i>
                        <h3 className="text-lg font-medium mb-3">{service.title}</h3>
                        <span className="text-[13px] block text-muted-foreground">{service.subtitle}</span>

                        <span className="button--flex mt-5 cursor-pointer text-[0.83rem] text-primary decoration-dashed hover:underline active:shadow-none" onClick={() => toggleTab(service.id)}>
                            View More{" "}
                            <i className="uil uil-arrow-right text-lg ml-1"></i>
                        </span>

                        <div className={`fixed w-full h-full bg-black/50 top-0 left-0 z-[200] flex justify-center items-center transition-all duration-300 ${toggleState === service.id ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"}`}>
                            <div className="w-[500px] bg-card px-12 py-10 rounded-[1.5rem] relative shadow-[0_4px_30px_rgba(0,0,0,0.15)] max-[576px]:w-[calc(100%-2rem)] max-[576px]:px-6 max-[576px]:py-12">
                                <i className="uil uil-times absolute text-2xl text-primary top-4 right-4 cursor-pointer hover:text-primary/80 hover:scale-110 transition-all" onClick={() => toggleTab(0)}></i>

                                <h3 className="text-lg font-medium mb-6">{service.title}</h3>

                                <ul className="grid gap-6">
                                    {service.modal.map((item, index) => (
                                        <li key={index} className="flex gap-2 items-start">
                                            <i className="uil uil-check-circle text-foreground mt-[2px]"></i>
                                            <p className="text-sm">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
