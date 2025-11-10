"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function RecommendationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const x = useMotionValue(0);

  const recommendations = [
    {
      name: "Saham Hendinejad",
      role: "Chief Executive Officer",
      company: "QUBY",
      text: `I am delighted to recommend Morteza Alipour, a standout member of our team at Quby, where I have had the pleasure of managing his contributions as a frontend developer.
    Morteza's technical prowess shines prominently in React Js, showcasing his mastery in front-end development with HTML and CSS frameworks. His adept use of Figma has significantly enhanced the visual aspects of our projects, demonstrating a meticulous attention to detail in UI/UX design.
    A notable strength lies in Morteza's ability to handle multiple concurrent projects with precision, underscoring his organizational skills and commitment to delivering high-quality results within deadlines. His positive attitude and collaborative nature have fostered a vibrant work environment.`,
    },
    {
      name: "Pouya Mansouri",
      role: "Chief Executive Officer",
      company: "MEHBANG",
      text: `Morteza is one of our Front-end developers who has been collaborating with us for approximately 4 years. He is a hardworking and dedicated individual, giving his all to ensure the success of every project he undertakes. Morteza is known for his perseverance, and you can be confident that he puts in every effort to achieve the desired results.
    Furthermore, he possesses a remarkable ability to quickly grasp and learn new technologies. We have witnessed his significant progress and growth in skills during his time with us.`,
    },
    {
      name: "Maziar Karimi",
      role: "Backend Developer",
      company: "MediaMarktSaturn",
      text: `Morteza and I have known each other for about 13-14 years!
      Always been among my best friends, makes me see him as one of the best human beings who will always help you reach your goals!
      From the professional side of view, we worked on several projects together in Nilasoft company and also with our projects together.
      We always found it easy to work together, as I was always like the Backend side developer and Morteza as the Front end side of the same project, it was always easy to work with him and transfer knowledge and information.`,
    },
  ];

  useEffect(() => {
    const calculateCardWidth = () => {
      const width = window.innerWidth;
      const padding = width >= 1024 ? 64 : width >= 768 ? 48 : 32;

      if (width >= 1280) {
        // xl screens - show more of next card
        setCardWidth(width * 0.45);
      } else if (width >= 1024) {
        // lg screens
        setCardWidth(width * 0.55);
      } else if (width >= 768) {
        // md screens
        setCardWidth(width * 0.75);
      } else if (width >= 640) {
        // sm screens
        setCardWidth(width * 0.85);
      } else {
        // mobile
        setCardWidth(width * 0.9);
      }
    };

    calculateCardWidth();
    window.addEventListener("resize", calculateCardWidth);
    return () => window.removeEventListener("resize", calculateCardWidth);
  }, []);

  useEffect(() => {
    const controls = animate(x, -currentIndex * (cardWidth + 24), {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
    return controls.stop;
  }, [currentIndex, cardWidth, x]);

  const nextSlide = () => {
    if (currentIndex < recommendations.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="recommendations"
      className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex items-baseline gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <span className="text-white/40 text-xs sm:text-sm md:text-base font-mono">
              04
            </span>
            <h2 className="text-white uppercase tracking-wide text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              RECOMMENDATIONS
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous recommendation"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === recommendations.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next recommendation"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Swiper Container */}
          <div className="overflow-hidden">
            <div className="relative">
              <motion.div
                className="flex gap-4 sm:gap-5 md:gap-6"
                style={{ x }}
                drag="x"
                dragConstraints={{
                  left: -(recommendations.length - 1) * (cardWidth + 24),
                  right: 0,
                }}
                dragElastic={0.1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipeThreshold = 50;
                  if (
                    offset.x < -swipeThreshold &&
                    currentIndex < recommendations.length - 1
                  ) {
                    setCurrentIndex(currentIndex + 1);
                  } else if (offset.x > swipeThreshold && currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                  }
                }}
              >
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    className="border border-white/10 rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col bg-black/10 backdrop-blur-sm hover:border-white/20 transition-colors"
                    style={{
                      minWidth: cardWidth || "90vw",
                      maxWidth: cardWidth || "90vw",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Quote className="text-accent w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-3 sm:mb-4 md:mb-6 shrink-0" />

                    <div className="grow mb-4 sm:mb-5 md:mb-6 lg:mb-8 overflow-y-auto max-h-[200px] sm:max-h-[220px] md:max-h-[260px] lg:max-h-[300px] pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                      <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {rec.text}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-3 sm:pt-4 md:pt-5 lg:pt-6 mt-auto">
                      <h4 className="text-white uppercase tracking-wide mb-1 text-xs sm:text-sm md:text-base font-semibold">
                        {rec.name}
                      </h4>
                      <p className="text-white/40 text-xs sm:text-sm">
                        {rec.role} · {rec.company}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 sm:w-10 md:w-12 bg-accent"
                      : "w-6 sm:w-7 md:w-8 bg-white/20 group-hover:bg-white/40"
                  }`}
                  whileHover={{ scale: 1.1 }}
                />
              </button>
            ))}
          </div>

          {/* Mobile Navigation Hint */}
          <div className="md:hidden text-center mt-4">
            <p className="text-white/30 text-xs">← Swipe to navigate →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
