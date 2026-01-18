import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const data = [
  {
    name: "Senior Engineer",
    role: "Cloud Platform",
    text: "Abhilash brings clarity, ownership, and reliability to complex systems."
  },
  {
    name: "Tech Lead",
    role: "Data Engineering",
    text: "Strong DevOps mindset with real production experience."
  },
  {
    name: "Manager",
    role: "Infrastructure",
    text: "Consistent performer with deep AWS and monitoring expertise."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-2xl backdrop-blur bg-white/5 border border-white/10 text-center"
      >
        <p className="text-gray-300 mb-6">“{data[index].text}”</p>
        <div className="text-sm text-gray-400">
          <strong className="text-white">{data[index].name}</strong> · {data[index].role}
        </div>
      </motion.div>
    </div>
  );
}
