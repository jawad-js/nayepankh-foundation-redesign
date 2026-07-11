import React from "react";
import {Trees, TargetIcon, Sparkles, Trophy} from "lucide-react"
import { motion } from "framer-motion";

const MIssion_Vision = () => {
  return (
    <section
      id="impact"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-4xl border border-slate-200 bg-linear-to-br from-blue-600 to-blue-800 p-8 text-white shadow-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
            Mission & Vision
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            We work toward a future where no child is left behind.
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-50">
            Our mission is to uplift communities through compassion-led action,
            while our vision is to build inclusive neighborhoods where learning,
            dignity, and opportunity are accessible to all.
          </p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              label: "Vision",
              text: "Create brighter futures through access, awareness, and care.",
              icon: Trees,
            },
            {
              label: "Mission",
              text: "Deliver aid, education support, and volunteer service with integrity.",
              icon: TargetIcon,
            },
            {
              label: "Values",
              text: "Empathy, accountability, transparency, and community trust.",
              icon: Sparkles,
            },
            {
              label: "Approach",
              text: "Local action with measurable outcomes and long-term impact.",
              icon: Trophy,
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-orange-50 p-3 text-orange-500">
                <item.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MIssion_Vision;
