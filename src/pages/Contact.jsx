import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Send,
  Facebook,
  MessageCircle,
} from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/abhilash251105/",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/abhilash251105",
  },
  {
    name: "Gmail",
    icon: Mail,
    link: "abhilashtmca2023@gmail.com",
    value: "abhilashtmca2023@gmail.com",
  },
  // {
  //   name: "Instagram",
  //   icon: Instagram,
  //   link: "https://instagram.com/YOUR_USERNAME",
  // },
  // {
  //   name: "Telegram",
  //   icon: Send,
  //   link: "https://t.me/YOUR_USERNAME",
  // },
  // {
  //   name: "Snapchat",
  //   icon: MessageCircle,
  //   link: "https://snapchat.com/add/YOUR_USERNAME",
  // },
  // {
  //   name: "Facebook",
  //   icon: Facebook,
  //   link: "https://facebook.com/YOUR_USERNAME",
  // },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-36 pb-32 px-6">

      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Let’s{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            connect
          </span>
          .
        </h1>

        <p className="text-neutral-400 text-lg">
          Open to collaboration, opportunities, and meaningful conversations.
          Reach out through any platform below.
        </p>
      </motion.section>

      {/* SOCIAL GRID */}
      <section className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {socials.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur 
                       hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition">
                <item.icon className="w-6 h-6 text-indigo-400" />
              </div>

              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-neutral-500">
                  {item.value || "Click to connect"}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </section>

      {/* FOOTER NOTE */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 text-center text-neutral-500 text-sm"
      >
        Prefer email? Drop a message anytime — responses are usually fast.
      </motion.section>
    </main>
  );
}
