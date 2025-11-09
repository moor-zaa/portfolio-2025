"use client";

import { motion } from "motion/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_az7h3ys",
        "template_ybq3hmx",
        {
          to_name: "Morteza",
          from_name: formData.email,
          to_email: "mori.alipour95@gmail.com",
          message: formData.message,
        },
        "D6FYRgEZOeq8lf0-Y"
      )
      .then(() => {
        setLoading(false);
        toast("Thank you. I will get back to you as soon as possible.", {
          theme: "dark",
          type: "success",
        });
        setFormData(initialForm);
      })
      .catch(() => {
        setLoading(false);
        toast("Sorry. Something went wrong!", { theme: "dark", type: "error" });
      });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8"
    >
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex items-baseline gap-4 md:gap-8 mb-6 md:mb-8">
            <span className="text-white/40 text-sm md:text-base">05</span>
            <h2 className="text-white uppercase tracking-wide text-sm md:text-5xl font-bold">
              CONTACT
            </h2>
          </div>
          <p className="text-white/60 text-xs md:text-sm max-w-2xl">
            Have a project in mind? Let's discuss how we can bring your vision
            to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-6 md:space-y-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block text-white/60 text-xs md:text-sm mb-2 md:mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-white/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs md:text-sm mb-2 md:mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-white/60 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-white/60 text-xs md:text-sm mb-2 md:mb-3">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-white/60 transition-colors"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs md:text-sm mb-2 md:mb-3">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-white/60 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="pt-6 md:pt-8">
              <button
                onClick={handleSubmit}
                className="w-full md:w-auto px-10 md:px-12 py-3 md:py-4 bg-accent text-white text-sm md:text-base hover:bg-accent/90 transition-colors uppercase tracking-wider"
              >
                {loading ? "Sending ..." : "Send Message"}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 lg:mt-32 pt-8 md:pt-12 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 lg:gap-8">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/morialipour/"
                className="text-white/60 hover:text-white text-xs md:text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/moor-zaa"
                target="_blank"
                className="text-white/60 hover:text-white text-xs md:text-sm transition-colors"
              >
                GitHub
              </a>
              <a
                href="tel:+989910511071"
                className="text-white/60 hover:text-white text-xs md:text-sm transition-colors"
              >
                Phone
              </a>
              <a
                href="mailto:mori.alipour95@gmail.com"
                className="text-white/60 hover:text-white text-xs md:text-sm transition-colors"
              >
                Gmail
              </a>
            </div>
            <p className="text-white/40 text-xs md:text-sm">
              © 2025 All rights reserved
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
