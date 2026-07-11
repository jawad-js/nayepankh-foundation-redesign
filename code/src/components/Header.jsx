import { useState } from "react";
import navLinks from "../data/navLInks";
import { HeartHandshake, Moon, Menu, Sun, X } from "lucide-react";
import Logo from "../assets/logo.png";

const Header = ({
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-orange-500 text-white shadow-lg">
            <img src={Logo} alt="NayePankh Foundation Image" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase">
              NayePankh
            </p>
            <p className="text-xs text-slate-500">Foundation</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setDarkMode((value) => !value)}
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#volunteer"
            className="rounded-full border border-slate-200 px-2 py-1 lg:px-4 lg:py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
          >
            Become a Volunteer
          </a>
          <a
            href="#donate"
            className="rounded-full bg-blue-600 px-2 py-1 lg:px-4 lg:py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Donate Now
          </a>
        </div>

        <button
          className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200 "
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <nav className="flex flex-col text-center  gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-200"
              >
                {link}
              </a>
            ))}

            <a href="#volunteer" className="rounded-lg border p-2 text-center">
              Become a Volunteer
            </a>

            <a
              href="#donate"
              className="rounded-lg bg-blue-600 p-2 text-center text-white"
            >
              Donate Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
