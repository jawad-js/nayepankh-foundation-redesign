import React from "react";
import stories from "../data/stories"
import { motion } from "framer-motion";
import {Star} from "lucide-react"

const Stories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-4xl border border-slate-200 bg-slate-900 p-8 text-white shadow-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Success Stories
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Real stories shaped by generosity.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Supporters, volunteers, and donors turn everyday acts of kindness
            into long-term possibilities.
          </p>
        </motion.div>
        <div className="grid gap-4">
          {stories.map((story, index) => (
            <motion.blockquote
              key={story.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-orange-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                “{story.quote}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-slate-500">
                {story.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
