import React from "react";
import {BookOpen, Coffee, Compass, Users} from "lucide-react"
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-8 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            About NayePankh
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            A student-led movement rooted in service and dignity.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We believe every underprivileged child deserves equal opportunity,
            nourishment, and encouragement. Our work spans education support,
            food relief, awareness campaigns, and volunteer programs to
            strengthen communities.
          </p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Education",
              text: "Scholarship help, school supplies, and mentorship.",
              icon: BookOpen,
            },
            {
              title: "Food Relief",
              text: "Prepared meal drives and pantry support.",
              icon: Coffee,
            },
            {
              title: "Awareness",
              text: "Health and social awareness campaigns.",
              icon: Compass,
            },
            {
              title: "Volunteerism",
              text: "Neighborhood outreach and community-building.",
              icon: Users,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="mb-3 inline-flex rounded-xl bg-white p-2 text-blue-600 shadow-sm">
                <item.icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
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

export default About;
