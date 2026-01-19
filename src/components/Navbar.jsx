import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT — LOGO + BRAND */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Abhinavi logo"
              className="w-10 h-10 object-contain transition
                         group-hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.7)]"
            />

            {/* BRAND TEXT MAGIC */}
            <span
              className="relative text-xl font-semibold tracking-wide
                         bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                         bg-[length:200%_200%] bg-clip-text text-transparent
                         animate-[gradient_8s_ease_infinite]
                         group-hover:tracking-widest
                         transition-all duration-500"
            >
              Abhinavi<span className="text-white/80">.</span>

              {/* UNDERLINE GLOW */}
              <span className="absolute left-0 -bottom-1 w-full h-[2px]
                               bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                               scale-x-0 group-hover:scale-x-100
                               transition-transform origin-left duration-500" />
            </span>
          </Link>

          {/* CENTER — NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition
                   ${isActive ? "text-indigo-400" : "text-white/70 hover:text-white"}`
                }
              >
                {item.name}

                {/* Hover underline */}
                <span
                  className="absolute left-0 -bottom-1 w-full h-[2px]
                             bg-indigo-400 scale-x-0 hover:scale-x-100
                             transition-transform origin-left"
                />
              </NavLink>
            ))}
          </div>

          {/* RIGHT — TIME */}
          <div className="hidden md:flex flex-col items-end text-xs text-white/60 font-mono">
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

      {/* SPACER */}
      <div className="h-20" />
    </>
  );
}
