import React from "react";
import campaigns from '../data/campaigns'
import {ArrowRight} from "lucide-react";
import { motion } from "framer-motion";

const Campaigns = () => {
  return (
    <section
      id="campaigns"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Ongoing Campaigns
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Programs that meet urgent needs with care.
          </h2>
        </div>
        <a
          href="#donate"
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500"
        >
          Join the next campaign <ArrowRight size={16} />
        </a>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {campaigns.map((campaign, index) => (
          <motion.article
            key={campaign.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="group rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
              <campaign.icon size={20} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              {campaign.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {campaign.description}
            </p>
            <a
              href="#donate"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-500"
            >
              Learn More <ArrowRight size={16} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Campaigns;
