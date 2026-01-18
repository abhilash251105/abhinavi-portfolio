// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <main className="bg-neutral-950 text-white overflow-hidden">

//       {/* ================= NAVBAR ================= */}
//       <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
//         <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
//           <div className="text-xl font-semibold tracking-tight">
//             Abhinavi
//           </div>

//           <div className="hidden md:flex gap-8 text-sm text-gray-300">
//             {["About", "Experience", "Projects", "Contact"].map(item => (
//               <Link
//                 key={item}
//                 to={`/${item.toLowerCase()}`}
//                 className="relative group"
//               >
//                 {item}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
//               </Link>
//             ))}
//           </div>

//           <Link
//             to="/contact"
//             className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition"
//           >
//             Get in touch
//           </Link>
//         </nav>
//       </header>

//       {/* ================= HERO ================= */}
//       <section className="min-h-screen flex items-center pt-32 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="max-w-6xl mx-auto px-8 text-center"
//         >
//           <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
//             Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">reliable</span><br />
//             cloud systems.
//           </h1>

//           <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
//             Software Engineer focused on DevOps, SRE, Cloud Infrastructure,
//             and production-grade systems.
//           </p>

//           <div className="mt-10 flex justify-center gap-4">
//             <Link
//               to="/projects"
//               className="px-8 py-4 rounded-full bg-white text-black font-medium hover:shadow-xl hover:scale-105 transition"
//             >
//               View Projects
//             </Link>

//             <Link
//               to="/experience"
//               className="px-8 py-4 rounded-full border border-white/30 hover:border-white transition"
//             >
//               Experience
//             </Link>
//           </div>
//         </motion.div>

//         {/* Background gradient */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-900 via-black to-neutral-950" />
//       </section>

//       {/* ================= TRUST ================= */}
//       <section className="py-24">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="max-w-6xl mx-auto px-8 text-center"
//         >
//           <p className="text-gray-400 mb-10">
//             Trusted by teams working on mission-critical systems
//           </p>

//           <div className="flex flex-wrap justify-center gap-10 text-gray-500 text-lg">
//             <span className="hover:text-white transition">AWS</span>
//             <span className="hover:text-white transition">KFintech</span>
//             <span className="hover:text-white transition">Data Platforms</span>
//             <span className="hover:text-white transition">Enterprise Systems</span>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="py-24 bg-neutral-900/40">
//         <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Cloud & DevOps",
//               desc: "AWS, CI/CD, automation, cost-aware infrastructure design."
//             },
//             {
//               title: "SRE & Monitoring",
//               desc: "Production monitoring, alerting, reliability, and incident response."
//             },
//             {
//               title: "Data Engineering",
//               desc: "ETL pipelines, Glue, EMR, SQL, and large-scale processing."
//             }
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15 }}
//               className="rounded-2xl p-8 backdrop-blur bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-xl transition"
//             >
//               <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//               <p className="text-gray-400">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-32">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-5xl mx-auto px-8 text-center"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Let’s build something<br />that scales.
//           </h2>

//           <p className="text-gray-400 mb-10">
//             Open to DevOps, SRE, and Cloud engineering roles.
//           </p>

//           <Link
//             to="/contact"
//             className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-white to-gray-300 text-black font-medium hover:scale-105 transition"
//           >
//             Start a conversation
//           </Link>
//         </motion.div>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} Abhinavi • Built with precision
//       </footer>

//     </main>
//   );
// }
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

/* ================= FLOATING SHAPES ================= */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-3xl"
      />
    </div>
  );
}

/* ================= MAGNETIC BUTTON ================= */
function MagneticButton({ children, to, primary }) {
  const ref = useRef(null);

  function move(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }

  function reset() {
    ref.current.style.transform = "translate(0,0)";
  }

  return (
    <Link to={to}>
      <motion.button
        ref={ref}
        onMouseMove={move}
        onMouseLeave={reset}
        whileHover={{ scale: 1.05 }}
        className={`px-8 py-4 rounded-full font-medium transition ${
          primary
            ? "bg-white text-black hover:shadow-xl"
            : "border border-white/30 hover:border-white"
        }`}
      >
        {children}
      </motion.button>
    </Link>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const data = [
    {
      text: "Abhilash brings ownership and clarity to complex production systems.",
      name: "Senior Engineer",
      role: "Cloud Platform"
    },
    {
      text: "Strong DevOps mindset with real-world AWS and monitoring experience.",
      name: "Tech Lead",
      role: "Infrastructure"
    },
    {
      text: "Reliable engineer who understands scale, cost, and stability.",
      name: "Manager",
      role: "Data Systems"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto p-8 rounded-2xl backdrop-blur bg-white/5 border border-white/10 text-center"
    >
      <p className="text-gray-300 mb-6 text-lg">“{data[index].text}”</p>
      <div className="text-sm text-gray-400">
        <strong className="text-white">{data[index].name}</strong> ·{" "}
        {data[index].role}
      </div>
    </motion.div>
  );
}

/* ================= HOME PAGE ================= */
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-neutral-950 text-white overflow-hidden"
    >
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center pt-32">
        <FloatingShapes />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-8 text-center relative z-10"
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              reliable
            </span>
            <br />
            cloud systems.
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Software Engineer focused on DevOps, SRE, Cloud Infrastructure,
            and production-grade systems.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <MagneticButton to="/projects" primary>
              View Projects
            </MagneticButton>
            <MagneticButton to="/experience">
              Experience
            </MagneticButton>
          </div>
        </motion.div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-10">
            Experience with mission-critical systems
          </p>
          <div className="flex justify-center gap-12 text-gray-500 text-lg">
            <span className="hover:text-white transition">AWS</span>
            <span className="hover:text-white transition">KFintech</span>
            <span className="hover:text-white transition">DevOps</span>
            <span className="hover:text-white transition">SRE</span>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-neutral-900/40">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          {[
            ["Cloud & DevOps", "AWS, CI/CD, automation, cost-aware infra"],
            ["SRE & Monitoring", "Alerts, dashboards, reliability engineering"],
            ["Data Platforms", "ETL pipelines, Glue, EMR, SQL"]
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl p-8 backdrop-blur bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 bg-neutral-950">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What People Say
        </h2>
        <Testimonials />
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-neutral-900 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s build something that scales.
        </h2>
        <p className="text-gray-400 mb-10">
          Open to DevOps, SRE, and Cloud engineering roles.
        </p>
        <MagneticButton to="/contact" primary>
          Start a conversation
        </MagneticButton>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Abhinavi · Crafted with precision
      </footer>
    </motion.main>
  );
}
