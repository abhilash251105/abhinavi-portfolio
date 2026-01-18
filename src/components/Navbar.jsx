import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(new Date());

  /* Blur on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Live date & time */
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT: LOGO */}
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Abhinavi<span className="text-indigo-400">.</span>
          </Link>

          {/* ================= CENTER MESSAGE ================= */}
          
          <div className="hidden md:block text-xs text-neutral-400 italic tracking-wide">
            🚧 Site under development
          </div>
         
          {/* ================================================== */}

          {/* RIGHT: TIME + HAMBURGER */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:block text-xs text-neutral-400 text-right leading-tight">
              <div>
                {time.toLocaleDateString(undefined, {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </div>
              <div className="font-mono">
                {time.toLocaleTimeString()}
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="text-xl text-white hover:text-indigo-400 transition"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HAMBURGER MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute top-0 right-0 h-full w-72 bg-neutral-950 border-l border-white/10 p-6"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-semibold">Navigation</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-neutral-400 hover:text-white transition"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {menuLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-sm transition
                      ${
                        pathname === link.path
                          ? "text-white"
                          : "text-neutral-400 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
