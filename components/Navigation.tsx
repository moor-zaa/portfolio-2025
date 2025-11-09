"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Recommendations", href: "#recommendations" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-8 bg-black/10 backdrop-blur-3xl"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="w-12 h-12 shrink-0">
          <img src="/images/icon.png" alt="" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-8 flex flex-col gap-4"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
