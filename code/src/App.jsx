import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import campaigns from "./data/campaigns";
import galleryItems from "./data/galleryItems";
import navLinks from "./data/navLInks";
import stats from "./data/stats";
import steps from "./data/steps";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Coffee,
  BookOpen,
  Compass,
  HeartHandshake,
  House,
  Menu,
  Moon,
  Newspaper,
  Palette,
  Phone,
  Sparkles,
  Star,
  Sun,
  Trees,
  Trophy,
  Users,
  X,
} from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MIssion_Vision from "./components/MIssion_Vision";
import Statistics from "./components/Statistics";
import Campaigns from "./components/Campaigns";
import Stories from "./components/Stories";
import Volunteers from "./components/Volunteers";
import Certificates from "./components/Certificates";
import Gallery from "./components/Gallery";
import Testamonials from "./components/Testimonials";
import Donation from "./components/Donation";
import Footer from "./components/Footer";
import Newsletters from "./components/Newsletters";
import Contact from "./components/Contact";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countedStats, setCountedStats] = useState(stats.map(() => 0));
  const [hasLoaded, setHasLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("naye-pankh-theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }

    const timer = window.setTimeout(() => setHasLoaded(true), 650);
    const duration = 1400;
    const startTime = Date.now();
    const targetValues = stats.map((stat) => stat.value);

    const tick = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCountedStats(targetValues.map((value) => Math.round(value * eased)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem(
      "naye-pankh-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  const formatStatValue = (value, display) => {
    if (value === 0) return "0";
    if (display) return display;
    return value.toLocaleString();
  };

  if (!hasLoaded) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="h-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="h-5 w-32 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="h-12 w-4/5 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="h-6 w-full animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="h-6 w-2/3 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
            </div>
            <div className="h-115 animate-pulse rounded-4xl bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell min-h-screen transition-colors selection:bg-orange-200">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <AnimatePresence>
        <AnimatePresence
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </AnimatePresence>
      <main id="home">
        <Hero countedStats={countedStats} formatStatValue={formatStatValue} />
        <About />
        <MIssion_Vision />
        <Statistics
          formatStatValue={formatStatValue}
          countedStats={countedStats}
        />
        <Campaigns />
        <Stories />
        <Volunteers />
        <Certificates />
        <Gallery />
        <Testamonials />
        <Donation />
        <Newsletters />
        <Contact />
      </main>
      <Footer />

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: hasLoaded ? 1 : 0, scale: hasLoaded ? 1 : 0.8 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg shadow-blue-600/20"
        aria-label="Back to top"
      >
        <ArrowRight className="-rotate-90" size={18} />
      </motion.button>
    </div>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="m12 8 1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    </svg>
  );
}

export default App;
