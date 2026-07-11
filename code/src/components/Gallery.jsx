import React from "react";
import galleryItems from "../data/galleryItems"
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Gallery
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Moments of service, connection, and hope.
          </h2>
        </div>
        <p className="max-w-xl text-slate-600">
          A glimpse into our outreach programs, events, and community
          partnerships.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm"
          >
            <img
              src={
                [
                  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
                ][index]
              }
              alt={item}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-5">
              <p className="text-sm font-semibold text-slate-900">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
