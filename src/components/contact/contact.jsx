import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL = "ashwinb708@gmail.com";

const FORM_FIELDS = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Insert your name",
    name: "name",
    required: true,
  },
  {
    id: "email",
    label: "Mail",
    type: "email",
    placeholder: "Insert your email",
    name: "email",
    required: true,
  },
  {
    id: "project",
    label: "Project",
    type: "text",
    placeholder: "Insert your project name",
    name: "project",
    required: true,
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcc542a",
        "template_5ua1jq8",
        form.current,
        "31shbCBN-bn8FDgj7",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section className="section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="container grid grid-cols-2 gap-x-12 max-[992px]:grid-cols-1 max-[992px]:gap-y-12 max-[768px]:gap-x-0">
        <div className="flex flex-col">
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <i className="bx bxs-envelope text-4xl text-primary"></i>
            </div>

            <h4 className="text-xl font-semibold mb-3">Have an idea?</h4>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              I'm currently open to freelance work. Feel free to reach out.
            </p>

            <div className="px-5 py-3.5 bg-secondary rounded-full text-sm font-medium text-foreground mb-6 break-words max-w-full">
              {CONTACT_EMAIL}
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="button hoverable"
            >
              <span className="button__text">Email Me</span>
              <i className="bx bx-send button__icon text-lg"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Send a message</h3>

          <form ref={form} onSubmit={sendEmail} className="grid gap-5">
            {FORM_FIELDS.map(
              ({ id, label, type, placeholder, name, required }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium mb-2 ml-1.5"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="contact__form-input"
                    required={required}
                  />
                </div>
              ),
            )}

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 ml-1.5"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Write your message"
                className="contact__form-input"
                required
              ></textarea>
            </div>

            <button className="button w-fit mt-2 hoverable">
              <span className="button__text">Send Message</span>
              <i className="bx bx-mail-send button__icon text-lg"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
