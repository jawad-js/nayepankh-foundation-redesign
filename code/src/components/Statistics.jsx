import React from "react";
import stats from "../data/stats"
import { motion } from "framer-motion";

const Statistics = ({formatStatValue, countedStats}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Impact Statistics
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Measured progress, meaningful change.
          </h2>
        </div>
        <p className="max-w-xl text-slate-600">
          Our community programs are designed to create visible, lasting support
          for students, families, and neighborhoods.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-4xl font-semibold text-slate-900 dark:text-white">
              {formatStatValue(countedStats[index], stat.display)}
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
