"use client";

import { motion } from "motion/react";
import { useState } from "react";

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projects = [
    {
      title: "A-eyes",
      subtitle: "React · AI · Tailwind · Typescript · 2024",
      image1: "/images/a-eyes1.jpg",
      image2: "/images/a-eyes2.jpg",
      image3: "/images/a-eyes3.jpg",
      image4: "/images/a-eyes4.jpg",
    },
    {
      title: "Dextrading",
      subtitle: "Next.js · Typescript · Tradingview · Thanstack · 2025",
      image: "/images/dextrading.jpg",
    },
    {
      title: "Quby Webapp",
      subtitle: "React · CSS · Javascript · React-Query · 2022",
      image1: "/images/quby1.jpg",
      image2: "/images/quby2.jpg",
      image3: "/images/quby3.jpg",
      image4: "/images/quby4.jpg",
    },
    {
      title: "bencherz",
      subtitle: "React · Zustand · 2020",
      image: "/images/bencherz.png",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex items-baseline gap-4 md:gap-8">
            <span className="text-white/40 text-sm md:text-base">01</span>
            <h2 className="text-white uppercase tracking-wide text-sm md:text-5xl font-bold">PROJECTS</h2>
          </div>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40 lg:gap-64">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {index % 2 === 0 ? (
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center">
                  {/* Project info - Top on mobile, Right on desktop */}
                  <div className="order-1 lg:order-2 lg:pl-8">
                    <h3
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 md:mb-4 uppercase tracking-tight"
                      style={{
                        WebkitTextStroke: "1px white",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs md:text-sm">{project.subtitle}</p>
                  </div>

                  {/* Sliced images - Bottom on mobile, Left on desktop */}
                  <div className="order-2 lg:order-1 col-span-1 lg:col-span-2 relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
                    <div className="absolute inset-0 flex gap-2 md:gap-4 justify-end">
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: -20, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="w-1/4 h-full overflow-hidden cursor-pointer"
                      >
                        <motion.div
                          animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full"
                        >
                          <img
                            src={project.image1}
                            className="w-full h-full object-contain"
                            alt=""
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        initial={{ y: 70, opacity: 0 }}
                        whileInView={{ y: 20, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -15, scale: 1.05 }}
                        className="w-1/4 h-full overflow-hidden cursor-pointer"
                      >
                        <motion.div
                          animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full"
                        >
                          <img
                            src={project.image2}
                            className="w-full h-full object-contain"
                            alt=""
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: -20, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.05 }}
                        className="w-1/4 h-full overflow-hidden cursor-pointer"
                      >
                        <motion.div
                          animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full"
                        >
                          <img
                            src={project.image3}
                            className="w-full h-full object-contain"
                            alt=""
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 20, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -12, scale: 1.05 }}
                        className="w-1/4 h-full overflow-hidden cursor-pointer"
                      >
                        <motion.div
                          animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full"
                        >
                          <img
                            src={project.image4}
                            className="w-full h-full object-contain"
                            alt=""
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center">
                  {/* Project info - Top on mobile, Left on desktop */}
                  <div className="order-1 lg:order-1">
                    <h3
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 md:mb-4 uppercase tracking-tight"
                      style={{
                        WebkitTextStroke: "1px white",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs md:text-sm">{project.subtitle}</p>
                  </div>

                  {/* Image - Bottom on mobile, Right on desktop */}
                  <motion.div
                    className="order-2 lg:order-2 col-span-1 lg:col-span-2 relative overflow-hidden cursor-pointer w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex justify-center lg:justify-end"
                    >
                      <img
                        src={project.image}
                        className="w-full md:max-w-xl lg:max-w-2xl object-cover"
                        alt=""
                      />
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}