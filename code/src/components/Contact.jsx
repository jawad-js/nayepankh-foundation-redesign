import React from "react";
import {Phone, MailIcon, House} from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20"
    >
      <div className="grid gap-8 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Let’s create change together.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Reach out to collaborate, volunteer, or support our mission. We’d
            love to hear from you.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                <Phone size={16} />
              </div>
              <span>+91- 8318500748</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <div className="rounded-full bg-orange-50 p-2 text-orange-500">
                <MailIcon />
              </div>
              <span>contact@nayepankh.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                <House size={16} />
              </div>
              <span>Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {[
              "About Us",
              "Our Impact",
              "Volunteer",
              "Donate",
              "Newsroom",
              "Contact",
            ].map((link) => (
              <a
                key={link}
                href="#home"
                className="rounded-full border border-slate-200 bg-white px-4 py-3 text-center transition hover:border-blue-200 hover:text-blue-600"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
