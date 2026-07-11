import React from "react";
import steps from "../data/steps"
import { motion } from "framer-motion";
import VolunteersImg from "../assets/volunteers.png"

const Volunteers = () => {
  return (
    <section
      id="volunteer"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Volunteer Process
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            A simple path to meaningful service.
          </h2>
          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm"
        >
          <img
            src={VolunteersImg}
            alt="Volunteer team participating in outreach"
            className="h-72 w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteers;
