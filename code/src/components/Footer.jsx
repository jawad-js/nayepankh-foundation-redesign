import React from 'react'
import {HeartHandshake, Palette, Users, Newspaper} from "lucide-react"
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
  <footer className="border-t border-slate-200 bg-slate-950 py-16 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-orange-500 text-white">
                  <img src={Logo} alt="NayePankh Foundation Image" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                    NayePankh
                  </p>
                  <p className="text-sm text-slate-400">Foundation</p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                A student-led NGO committed to education, food relief, awareness
                campaigns, and service for underserved communities.
              </p>
              <div className="mt-6 flex gap-3">
                {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#home"
                    className="rounded-full border border-slate-800 bg-slate-900 p-3 text-slate-300 transition hover:border-orange-400 hover:text-orange-300"
                    aria-label={social}
                  >
                    {social === "Instagram" ? (
                      <Palette size={16} />
                    ) : social === "Facebook" ? (
                      <Users size={16} />
                    ) : (
                      <Newspaper size={16} />
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li>
                  <a href="#about" className="transition hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#impact" className="transition hover:text-white">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#campaigns" className="transition hover:text-white">
                    Campaigns
                  </a>
                </li>
                <li>
                  <a href="#volunteer" className="transition hover:text-white">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li>+91- 8318500748</li>
                <li>contact@nayepankh.com</li>
                <li>Uttar Pradesh, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 NayePankh Foundation. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#home" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#home" className="transition hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer