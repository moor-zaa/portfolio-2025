"use client";

import { motion } from "motion/react";

const skills = [
  {
    title: "Next.js, React.js, Vite",
    ex: "Expert",
  },
  {
    title: "TypeScript, JavaScript",
    ex: "Advanced",
  },
  {
    title: "Tailwind, Material UI, Ant Design",
    ex: "Advanced",
  },
  {
    title: "Node.js, Express.js",
    ex: "Proficient",
  },
  {
    title: "MongoDB, SQLite",
    ex: "Proficient",
  },
  {
    title: "Jest, React Testing Library",
    ex: "Proficient",
  },
  {
    title: "GSAP, Electron, Figma",
    ex: "Proficient",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-baseline gap-8">
            <span className="text-white/40">02</span>
            <h2 className="text-white uppercase tracking-wide text-sm md:text-5xl font-bold">ABOUT</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-16"
        >
          <div>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              I'm a full-stack developer with 7+ years of experience building
              modern web applications. I specialize in creating responsive,
              performant solutions using React, Next.js, and Node.js.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              My approach combines clean, maintainable code with thoughtful
              design, ensuring every project delivers exceptional user
              experiences and measurable results.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-6 uppercase tracking-wide">SKILLS</h3>
            <div className="space-y-4">
              {skills.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-between items-center pb-3 border-b border-white/10"
                >
                  <span className="text-white/80">{item.title}</span>
                  <span className="text-white/40 text-sm">{item.ex}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-24 flex flex-wrap w-full justify-between border-t pt-16 gap-12 text-white/30 text-xs uppercase tracking-widest"
        >
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.4 }}
              className="text-white text-2xl mb-1"
            >
              7+
            </motion.div>
            <div>Years Experience</div>
          </div>
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.6 }}
              className="text-white text-2xl mb-1"
            >
              50+
            </motion.div>
            <div>Projects Completed</div>
          </div>
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.8 }}
              className="text-white text-2xl mb-1"
            >
              20+
            </motion.div>
            <div>Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
