import React from 'react'
import { motion } from "framer-motion";
import {HeartHandshake, ArrowRight} from "lucide-react"

const Donation = () => {
  return (
<section
          id="donate"
          className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-4xl border border-slate-200 bg-linear-to-br from-blue-600 via-blue-700 to-slate-900 p-8 text-white shadow-xl lg:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                  Donation CTA
                </p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Your kindness can transform a child’s tomorrow.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
                  Make a direct impact through food support, educational
                  resources, and community programs that restore dignity and
                  opportunity.
                </p>
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-orange-500 p-3 text-white">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Give today</p>
                    <p className="text-sm text-blue-50">
                      Every contribution helps us reach more families.
                    </p>
                  </div>
                </div>
                <a
                  href="#home"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Donate Now <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
  )
}

export default Donation