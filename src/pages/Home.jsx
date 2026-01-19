import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-28">
        {/* Ambient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Abhilash
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 text-neutral-400 max-w-2xl text-lg"
        >
          A software engineer who enjoys building systems that work in the real
          world — reliable, scalable, and thoughtfully designed.
        </motion.p>
      </section>

      {/* ================= PERSONAL QUOTE ================= */}
      <section className="px-6 py-24 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl italic text-neutral-300"
        >
          “I believe technology should feel calm, intuitive, and human —
          something that quietly supports life instead of complicating it.”
        </motion.blockquote>

        <p className="mt-4 text-sm text-neutral-500">
          — Personal philosophy
        </p>
      </section>

      {/* ================= PROFESSIONAL QUOTE ================= */}
      <section className="px-6 py-24 text-center bg-white/5 backdrop-blur">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl italic text-neutral-200"
        >
          “Engineering resilient, scalable systems across cloud, data, and
          infrastructure — with a systems-first mindset and production ownership.”
        </motion.blockquote>

        <p className="mt-4 text-sm text-neutral-500">
          — Professional approach
        </p>
      </section>

      {/* ================= PERSONAL + PROFESSIONAL SPLIT ================= */}
      <section className="px-6 py-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Personal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur"
        >
          <h3 className="text-lg font-medium mb-4">
            Beyond the keyboard
          </h3>
          <p className="text-neutral-400 leading-relaxed">
            Outside of work, I enjoy cooking, singing, and spending time learning
            things that have nothing to do with code. I value balance, clarity,
            and long-term thinking — in life as much as in engineering.
          </p>
        </motion.div>

        {/* Professional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur"
        >
          <h3 className="text-lg font-medium mb-4">
            At work
          </h3>
          <p className="text-neutral-400 leading-relaxed">
            I work across DevOps, SRE, data platforms, and cloud infrastructure,
            focusing on systems that are observable, maintainable, and built to
            scale under real-world constraints.
          </p>
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 pb-40 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Personal values. Professional execution.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-neutral-400 mb-10"
        >
          Open to meaningful conversations, collaborations, and opportunities.
        </motion.p>

        <Link
          to="/contact"
          className="inline-block px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-sm font-medium hover:scale-105 transition"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}

