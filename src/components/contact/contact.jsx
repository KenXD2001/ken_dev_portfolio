import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_zcc542a',
                'template_5ua1jq8',
                form.current,
                '31shbCBN-bn8FDgj7'
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    e.target.reset();
                },
                () => {
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    const contactInfo = [
        { icon: "bx bx-phone", label: "Call Me", value: "+919667340652" },
        { icon: "bx bx-envelope", label: "Email", value: "ashwinbhardwaj000@gmail.com" },
        { icon: "bx bx-map", label: "Location", value: "Bangalore" },
    ];

    return (
        <section className="section" id='contact'>
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="container grid grid-cols-[repeat(2,minmax(320px,1fr))] gap-x-8 gap-y-20 pt-4 max-[992px]:grid-cols-1 max-[992px]:gap-y-10">
                <div className="max-[992px]:order-1">
                    <h3 className="text-xl font-medium mb-4">Talk to me</h3>

                    <div className="grid gap-6">
                        {contactInfo.map(({ icon, label, value }, idx) => (
                            <div key={idx} className="bg-card border border-border px-8 py-6 rounded-[1.75rem] text-center shadow-[0_24px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_65px_rgba(0,0,0,0.1)] hover:border-border max-[576px]:px-5 max-[576px]:py-5">
                                <i className={`${icon} block text-2xl mb-2 text-foreground`}></i>
                                <h3 className="text-sm font-medium mb-1">{label}</h3>
                                <span className="text-sm text-muted-foreground">{value}</span>
                                <a href={`${label === "Call Me" ? `tel:${value}` : `mailto:${value}`}`} className="text-xs text-foreground inline-flex items-center gap-1 mt-1 hover:underline">
                                    Write me{" "}
                                    <i className="bx bx-right-arrow-alt text-sm"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-[992px]:order-0">
                    <h3 className="text-xl font-medium mb-4">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="grid gap-8">
                        <div className="relative mb-2">
                            <label htmlFor="name" className="block text-sm mb-1 ml-1.5">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Insert your name"
                                className="contact__form-input"
                                required
                            />
                        </div>

                        <div className="relative mb-2">
                            <label htmlFor="email" className="block text-sm mb-1 ml-1.5">Mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Insert your email"
                                className="contact__form-input"
                                required
                            />
                        </div>

                        <div className="relative mb-2">
                            <label htmlFor="project" className="block text-sm mb-1 ml-1.5">Project</label>
                            <input
                                type="text"
                                name="project"
                                id="project"
                                placeholder="Insert your project name"
                                className="contact__form-input"
                                required
                            />
                        </div>

                        <div className="relative mb-2">
                            <label htmlFor="message" className="block text-sm mb-1 ml-1.5">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder="Write your project"
                                className="contact__form-input"
                                required
                            ></textarea>
                        </div>

                        <button className="button button--flex w-fit">
                            <span className="button__text">Send Message</span>
                            <i className="uil uil-message button__icon text-lg"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
