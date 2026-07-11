import React from "react";
import stats from "../data/stats";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Users, BadgeCheck } from "lucide-react";
import HeroImg from "../assets/hero-img.png"

const Hero = ({ countedStats, formatStatValue }) => {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          <Sparkles size={16} /> Student-led compassion in action
        </div>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight  text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
          Hope, education, and nourishment for every child we reach.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          NayePankh Foundation creates lasting impact through education support,
          food distribution, awareness programs, and volunteer-led community
          care.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#donate"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Support a Cause <ArrowRight size={18} />
          </a>
          <a
            href="#volunteer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
          >
            Become a Volunteer <Users size={18} />
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                {formatStatValue(countedStats[index], stat.display)}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute inset-0 -rotate-3 rounded-4xl bg-linear-to-br from-blue-600/20 to-orange-500/20 blur-3xl" />
        <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/80">
          <img
            src={HeroImg}
            alt="Volunteers supporting children and community outreach"
            className="h-115 w-full rounded-[1.4rem] object-cover"
          />
          <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/40 bg-white/90 p-4 backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Community-led impact
                </p>
                <p className="text-sm text-slate-500">
                  Every donation helps us reach more families with care.
                </p>
              </div>
              <div className="rounded-full bg-orange-500 p-3 text-white">
                <BadgeCheck size={18} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
