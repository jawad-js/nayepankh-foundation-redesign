import React from "react";
import { Trophy } from "lucide-react";
import certificate1 from "../assets/certificate_1.png";
import certificate2 from "../assets/certificate_2.png";
import certificate3 from "../assets/certificate_3.png";

const certificateCards = [
  {
    title: "80G Certificate",
    subtitle: "Income Tax Commissioner Approval",
    image: certificate1,
    link: certificate1,
  },
  {
    title: "12A Certificate",
    subtitle: "Income Tax Commissioner Registration",
    image: certificate2,
    link: certificate2,
  },
  {
    title: "Society Registration",
    subtitle: "Uttar Pradesh Government Society Act",
    image: certificate3,
    link: certificate3,
  },
];

const Certificates = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Certificates & Recognition
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-50">
              Official documents that prove our legitimacy.
            </h2>
          </div>
         
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {certificateCards.map((certificate) => (
            <a
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-100/90">
                    Click to view
                  </p>
                  
                </div>
              </div>
              <div className="space-y-3 p-6 text-center dark:bg-slate-900">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <Trophy size={24} />
                </div>
                <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {certificate.title}
                </p>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {certificate.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
