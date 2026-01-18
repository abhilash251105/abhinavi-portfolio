import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl"
        >
          Building{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            reliable cloud systems
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mt-6 text-neutral-400 max-w-2xl"
        >
          Software Engineer focused on DevOps, SRE, Cloud Infrastructure,
          and production-grade systems that scale.
        </motion.p>
      </section>

      {/* MULTI-DOMAIN EXPERTISE */}
      <section className="relative px-6 pb-32 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
          Multi-domain engineering expertise
        </p>

        <blockquote className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed italic">
          “Engineering resilient, scalable systems across Cloud Platforms,
          Data Engineering, DevOps, SRE, Databases, AI/ML, and Networking —
          with a systems-first mindset that bridges infrastructure, data,
          and intelligence.”
        </blockquote>

        <p className="mt-4 text-sm text-neutral-500">
          End-to-end ownership across modern production systems.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section className="relative px-6 pb-32 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            title: "Cloud & DevOps",
            desc: "AWS, CI/CD pipelines, automation, and cost-aware infrastructure.",
          },
          {
            title: "SRE & Reliability",
            desc: "Monitoring, alerting, SLIs/SLOs, and production resilience.",
          },
          {
            title: "Data Platforms",
            desc: "ETL pipelines, Glue, EMR, SQL, and scalable data systems.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-medium mb-2">{item.title}</h3>
            <p className="text-sm text-neutral-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* TESTIMONIAL */}
      <section className="relative px-6 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur"
        >
          <p className="text-neutral-300 italic">
            “Strong DevOps mindset with real-world AWS and monitoring experience.
            Delivers reliable systems under pressure.”
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            — Tech Lead, Infrastructure
          </p>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 pb-40 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Let’s build something that scales.
        </h2>
        <p className="text-neutral-400 mb-8">
          Open to DevOps, SRE, and Cloud engineering roles.
        </p>

        <Link
          to="/contact"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-sm font-medium hover:scale-105 transition"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
