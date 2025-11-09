"use client";

import { motion } from "motion/react";
import { Quote, ChevronDown } from "lucide-react";
import { useState } from "react";

export function RecommendationsSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const recommendations = [
    {
      name: "Saham Hendinejad",
      role: "Chief Executive Officer",
      company: "QUBY",
      text: `I am delighted to recommend Morteza Alipour, a standout member of our team at Quby, where I have had the pleasure of managing his contributions as a frontend developer.
    Morteza's technical prowess shines prominently in React Js, showcasing his mastery in front-end development with HTML and CSS frameworks. His adept use of Figma has significantly enhanced the visual aspects of our projects, demonstrating a meticulous attention to detail in UI/UX design.
    A notable strength lies in Morteza's ability to handle multiple concurrent projects with precision, underscoring his organizational skills and commitment to delivering high-quality results within deadlines. His positive attitude and collaborative nature have fostered a vibrant work environment.
    Morteza's professional growth is evident in his dynamic approach to acquiring new skills, showcasing a continual commitment to excellence. His adaptability in tackling diverse tasks and technologies has made a considerable impact on our team's success.
    In summary, Morteza Alipour is an exceptional frontend developer with a focus on React Js and front-end development technologies. His skills, coupled with his positive demeanor, make him an invaluable asset to any organization.`,
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
      We always found it easy to work together, as I was always like the Backend side developer and Morteza as the Front end side of the same project, it was always easy to work with him and transfer knowledge and information.
      I would choose him again if I needed front front-end developer for any of my projects!`,
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isLongText = (text: string) => text.length > 300;

  return (
    <section
      id="recommendations"
      className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex items-baseline gap-4 md:gap-8">
            <span className="text-white/40 text-sm md:text-base">04</span>
            <h2 className="text-white uppercase tracking-wide text-sm md:text-5xl font-bold">
              RECOMMENDATIONS
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 auto-rows-fr">
          {recommendations.map((rec, index) => {
            const isExpanded = expandedCards.includes(index);
            const hasLongText = isLongText(rec.text);
            const shouldTruncate = hasLongText && !isExpanded;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative border border-white/10 p-6 md:p-8 lg:p-10 flex flex-col"
              >
                <Quote className="text-accent w-6 h-6 md:w-8 md:h-8 mb-4 md:mb-6 shrink-0" />

                <div className="grow mb-6 md:mb-8 relative">
                  <div
                    className={`text-white/70 text-xs md:text-sm leading-relaxed transition-all duration-500 ${
                      shouldTruncate ? "line-clamp-6 md:line-clamp-8" : ""
                    }`}
                  >
                    {rec.text}
                  </div>

                  {/* Gradient overlay for truncated text */}
                  {shouldTruncate && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-linear-to-t from-black to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Read more/less button */}
                {hasLongText && (
                  <motion.button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-accent text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-6 md:w-8 h-px bg-accent group-hover:w-10 md:group-hover:w-12 transition-all duration-300" />
                    {isExpanded ? "Read Less" : "Read More"}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.div>
                  </motion.button>
                )}

                <div className="border-t border-white/10 pt-4 md:pt-6 mt-auto">
                  <h4 className="text-white uppercase tracking-wide mb-1 text-sm md:text-base">
                    {rec.name}
                  </h4>
                  <p className="text-white/40 text-xs md:text-sm">
                    {rec.role} · {rec.company}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
