import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Email: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_if4wv9g",   // replace with EmailJS service ID
        "template_6fol3af",  // replace with EmailJS template ID
        form.current,
        "1pJsRLqjE_Hsmghy9"    // replace with EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Try again later.");
        }
      );

    e.currentTarget.reset(); // clear form after sending
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-editorial max-w-xl mx-auto">
        <h2 className="text-display text-foreground mb-6 text-center">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-border bg-background text-foreground"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-border bg-background text-foreground"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded-lg border border-border bg-background text-foreground"
          />
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
