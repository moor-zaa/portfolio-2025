"use client";

import { motion } from "motion/react";
import { ArrowDown, Download, Linkedin, Mail, Github } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          rotate: 45,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        className="absolute top-1/4 right-1/4 w-64 h-64 border border-accent/20 pointer-events-none hidden lg:block"
      />

      <motion.div
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 30 }}
        className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent/5 pointer-events-none hidden lg:block"
      />


      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.4 }}
        className="absolute top-0 right-1/4 w-px h-1/2 bg-accent/30 origin-top hidden lg:block"
      />

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 flex items-center gap-4"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-accent"
          />
          <p className="text-white/60 text-sm uppercase tracking-widest">
            Front-End Developer
          </p>
        </motion.div>

        <div className="relative">
          {/* Main title with enhanced effects */}
          <div className="relative font-extrabold">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-white uppercase mb-0 leading-none relative z-10 text-[clamp(4rem,12vw,7.5rem)]"
            >
              MORI
            </motion.h1>

            {/* Shadow text effect */}
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 0.06, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-4 left-4 text-white uppercase leading-none pointer-events-none text-[clamp(4rem,12vw,7.5rem)]"
            >
              MORI
            </motion.h1>
          </div>

          <div className="relative font-extrabold">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="uppercase leading-none relative z-10 text-[clamp(4rem,12vw,7.5rem)] text-white/70"
            >
              ALIPOUR
            </motion.h1>

            {/* Accent overlay on outlined text */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.8 }}
              className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 origin-left pointer-events-none"
            />
          </div>

          {/* Animated dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute -right-20 top-1/3 hidden lg:flex gap-3"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2 + i * 0.1 }}
                className="w-2 h-2 bg-accent"
              />
            ))}
          </motion.div>
        </div>

        {/* Tagline with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16 max-w-md"
        >
          <p className="text-white/40 text-sm leading-relaxed">
            Crafting exceptional digital experiences through clean code and
            creative vision. Specialized in modern web technologies and
            innovative UI solutions.
          </p>
        </motion.div>

        {/* CTA Buttons and Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-12 flex flex-wrap gap-6 items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex items-center gap-3 text-white uppercase text-sm tracking-wider"
          >
            <span className="w-12 h-px bg-accent group-hover:w-16 transition-all duration-300" />
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex items-center gap-3 text-white/60 hover:text-white uppercase text-sm tracking-wider transition-colors"
          >
            <span className="w-12 h-px bg-white/20 group-hover:w-16 transition-all duration-300" />
            Get in Touch
          </motion.a>

          <motion.a
            href="/pdf/Mori_Alipour_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-accent hover:bg-accent px-6 py-3 flex items-center gap-3 text-white uppercase text-sm tracking-wider transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mt-8 flex items-center gap-6"
        >
          <span className="text-white/40 text-xs uppercase tracking-widest">
            Connect
          </span>
          <div className="flex gap-4">
            <motion.a
              href="https://www.linkedin.com/in/morialipour/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 border border-white/20 hover:border-accent flex items-center justify-center transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-white/60 group-hover:text-accent transition-colors" />
            </motion.a>
            <motion.a
              href="https://github.com/moor-zaa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 border border-white/20 hover:border-accent flex items-center justify-center transition-colors group"
            >
              <Github className="w-4 h-4 text-white/60 group-hover:text-accent transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:mori.alipour95@gmail.com"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 border border-white/20 hover:border-accent flex items-center justify-center transition-colors group"
            >
              <Mail className="w-4 h-4 text-white/60 group-hover:text-accent transition-colors" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute right-8 lg:right-12 bottom-20 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span
            className="text-white/40 text-xs tracking-wider uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
