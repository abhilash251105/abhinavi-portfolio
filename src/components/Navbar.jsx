import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // update if path differs

export default function Navbar() {
  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">

          {/* LEFT — Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="text-white hover:text-indigo-400 transition"
              aria-label="Open menu"
            >
              <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h20M3 13h20M3 20h20" />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Abhinavi logo"
                className="w-12 h-12 object-contain transition
                           hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.6)]"
              />
              <span className="text-xl font-semibold tracking-tight text-white">
                Abhinavi<span className="text-indigo-400">.</span>
              </span>
            </Link>
          </div>

          {/* CENTER — OPTIONAL MESSAGE */}
          {/*
          <div className="hidden md:flex text-sm text-white/60 italic">
            🚧 Site under development
          </div>
          */}

          {/* RIGHT — Date & Time */}
          <div className="hidden md:flex flex-col items-end text-xs text-white/70 font-mono leading-relaxed">
            <span>
              {time.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "2-digit",
                month: "short",
              })}
            </span>
            <span className="tracking-wide">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </span>
          </div>
        </div>
      </nav>

      {/* SIDE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
          <div className="absolute left-0 top-0 h-full w-72 bg-black border-r border-white/10 p-6">
            <button
              onClick={() => setOpen(false)}
              className="mb-8 text-white/70 hover:text-indigo-400 transition"
            >
              ✕ Close
            </button>

            <ul className="space-y-6 text-lg">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block text-white/80 hover:text-indigo-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* SPACER */}
      <div className="h-20" />
    </>
  );
}
