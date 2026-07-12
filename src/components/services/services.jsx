import React, { useState, useEffect } from 'react'

const services = [
    {
        id: 1,
        icon: "bx bx-code-alt",
        title: "Software Development",
        subtitle: "Custom software solutions built with modern architectures.",
        modal: [
            "I design and develop custom software tailored to your business needs.",
            "I build scalable, maintainable applications using modern frameworks.",
            "I integrate third-party services and APIs for extended functionality.",
            "I follow clean code principles and CI/CD best practices.",
            "I deliver well-documented, production-ready software.",
        ]
    },
    {
        id: 2,
        icon: "bx bx-window-alt",
        title: "Web Apps Development",
        subtitle: "Responsive, performant web applications from concept to deploy.",
        modal: [
            "I build full-stack web applications using React, Next.js, and Node.js.",
            "I design responsive UIs that work seamlessly across all devices.",
            "I implement RESTful and FAST APIs for efficient data flow.",
            "I optimize for performance, SEO, and accessibility.",
            "I deploy and manage applications on cloud infrastructure.",
        ]
    },
    {
        id: 3,
        icon: "bx bx-mobile-alt",
        title: "Mobile Apps Development",
        subtitle: "Cross-platform and native mobile experiences.",
        modal: [
            "I develop cross-platform mobile apps using modern frameworks.",
            "I build native Android applications with robust architectures.",
            "I integrate push notifications, offline support, and real-time sync.",
            "I connect mobile apps to backend APIs and cloud services.",
            "I ensure smooth UI/UX with platform-specific design guidelines.",
        ]
    },
    {
        id: 4,
        icon: "bx bx-layout",
        title: "Frontend",
        subtitle: "Pixel-perfect UI development with modern tools.",
        modal: [
            "I develop interactive UIs with React, Next.js, and TypeScript.",
            "I implement responsive designs with Tailwind CSS and CSS-in-JS.",
            "I optimize frontend performance with code splitting and lazy loading.",
            "I integrate state management and data fetching patterns.",
            "I ensure cross-browser compatibility and accessibility.",
        ]
    },
    {
        id: 5,
        icon: "bx bx-server",
        title: "Backend",
        subtitle: "Robust server-side logic and API development.",
        modal: [
            "I build RESTful APIs with Node.js, Express, and Nest.js.",
            "I design database schemas for PostgreSQL and MongoDB.",
            "I implement authentication, authorization, and data validation.",
            "I write unit and integration tests for backend reliability.",
            "I optimize query performance and server-side caching.",
        ]
    },
    {
        id: 6,
        icon: "bx bx-wrench",
        title: "Maintenance",
        subtitle: "Ongoing support, updates, and performance tuning.",
        modal: [
            "I provide ongoing maintenance and bug fixes for existing apps.",
            "I perform code refactoring and performance optimization.",
            "I update dependencies and ensure security best practices.",
            "I monitor application health and troubleshoot issues.",
            "I implement feature enhancements and improvements.",
        ]
    },
    {
        id: 7,
        icon: "bx bx-palette",
        title: "UI/UX Designing",
        subtitle: "User-centered design for intuitive digital experiences.",
        modal: [
            "I design user interfaces with a focus on usability and aesthetics.",
            "I create wireframes, prototypes, and design mockups.",
            "I conduct user research to inform design decisions.",
            "I design for accessibility, inclusivity, and mobile-first.",
            "I deliver design systems and component libraries.",
        ]
    },
    {
        id: 8,
        icon: "bx bx-devices",
        title: "Native App Development",
        subtitle: "High-performance native applications for Android.",
        modal: [
            "I build native Android apps with Java and Kotlin.",
            "I implement Material Design for intuitive user interfaces.",
            "I integrate Firebase for real-time data and authentication.",
            "I optimize app performance and battery usage.",
            "I publish and manage apps on Google Play Store.",
        ]
    },
];

const ServicesModal = ({ service, onClose }) => {
    useEffect(() => {
        if (!service) return;
        const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [service, onClose]);

    if (!service) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
                className="relative w-full max-w-lg bg-card rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground/60 hover:bg-primary/10 hover:text-primary transition-all"
                    aria-label="Close modal"
                >
                    <i className="bx bx-x text-lg"></i>
                </button>

                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <i className={`${service.icon} text-2xl text-primary`}></i>
                </div>

                <h3 className="text-xl font-semibold mb-6">{service.title}</h3>

                <ul className="grid gap-4">
                    {service.modal.map((item, index) => (
                        <li key={index} className="flex gap-3 items-start">
                            <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                                <i className="bx bx-check text-xs text-primary"></i>
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    return (
        <section className="section" id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="container grid grid-cols-[repeat(3,minmax(220px,1fr))] gap-6 justify-center max-[992px]:grid-cols-[repeat(2,minmax(220px,1fr))] max-[576px]:grid-cols-1">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group relative card px-6 py-10 text-center overflow-hidden"
                    >
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />

                        <div className="relative mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                            <i className={`${service.icon} text-2xl text-primary`}></i>
                        </div>

                        <h3 className="relative text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="relative text-sm text-muted-foreground leading-relaxed">{service.subtitle}</p>

                        <button
                            onClick={() => setActiveService(service)}
                            className="relative inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-primary hover:gap-2 transition-all"
                        >
                            View More
                            <i className="bx bx-arrow-right text-base"></i>
                        </button>
                    </div>
                ))}
            </div>

            <ServicesModal service={activeService} onClose={() => setActiveService(null)} />
        </section>
    )
}

export default Services
