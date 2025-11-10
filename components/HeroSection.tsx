"use client";

import { motion } from "motion/react";
import { ArrowDown, Download, Linkedin, Mail, Github } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Three.js 3D Dev Model
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(600, 600);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 8;

    // Create a more complex 3D structure
    const group = new THREE.Group();

    // Main geometric structure - Icosahedron with wireframe
    const mainGeometry = new THREE.IcosahedronGeometry(2, 0);
    const mainMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const mainMesh = new THREE.Mesh(mainGeometry, mainMaterial);
    group.add(mainMesh);

    // Add orbiting spheres
    const sphereGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x6ee7b7,
    });

    const orbitingSpheres: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        Math.cos((i * Math.PI) / 2) * 3,
        Math.sin((i * Math.PI) / 2) * 3,
        0
      );
      orbitingSpheres.push(sphere);
      group.add(sphere);
    }

    // Add floating code symbols
    const createCodeSymbol = (text: string, position: THREE.Vector3) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      canvas.width = 128;
      canvas.height = 128;

      ctx.fillStyle = "#10b981";
      ctx.font = "bold 80px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.7,
      });

      const sprite = new THREE.Sprite(material);
      sprite.scale.set(0.8, 0.8, 1);
      sprite.position.copy(position);
      return sprite;
    };

    const symbols = ["<", ">", "{", "}", "[", "]"];
    const codeSprites: THREE.Sprite[] = [];
    symbols.forEach((symbol, i) => {
      const angle = (i / symbols.length) * Math.PI * 2;
      const radius = 4;
      const sprite = createCodeSymbol(
        symbol,
        new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 2
        )
      );
      if (sprite) {
        codeSprites.push(sprite);
        scene.add(sprite);
      }
    });

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    scene.add(group);

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Rotate main group
      group.rotation.y += 0.003;
      group.rotation.x = Math.sin(time * 0.3) * 0.1;

      // Animate main mesh
      mainMesh.rotation.x += 0.005;
      mainMesh.rotation.y += 0.005;

      // Orbit spheres
      orbitingSpheres.forEach((sphere, i) => {
        const angle = time + (i * Math.PI) / 2;
        sphere.position.x = Math.cos(angle) * 3;
        sphere.position.y = Math.sin(angle) * 3;
        sphere.position.z = Math.sin(angle * 2) * 0.5;
      });

      // Animate code sprites
      codeSprites.forEach((sprite, i) => {
        const angle = time * 0.5 + (i / codeSprites.length) * Math.PI * 2;
        const radius = 4 + Math.sin(time + i) * 0.5;
        sprite.position.x = Math.cos(angle) * radius;
        sprite.position.y = Math.sin(angle) * radius;
        sprite.material.opacity = 0.5 + Math.sin(time * 2 + i) * 0.2;
      });

      // Mouse interaction
      group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.05;
      group.rotation.x += (-mouseY * 0.3 - group.rotation.x) * 0.05;

      // Rotate particles
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const size = Math.min(window.innerWidth * 0.4, 600);
      renderer.setSize(size, size);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mainGeometry.dispose();
      sphereGeometry.dispose();
      particlesGeometry.dispose();
      mainMaterial.dispose();
      sphereMaterial.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  // Developer symbols to float around
  const devSymbols = [
    { symbol: "</>", x: "45%", y: "20%", rotation: -15, delay: 0 },
    { symbol: "{}", x: "85%", y: "25%", rotation: 25, delay: 0.5 },
    { symbol: "#", x: "60%", y: "70%", rotation: 10, delay: 1 },
    { symbol: "<>", x: "90%", y: "65%", rotation: -20, delay: 1.5 },
    { symbol: "[]", x: "75%", y: "45%", rotation: 15, delay: 0.8 },
    { symbol: "()", x: "80%", y: "80%", rotation: -10, delay: 1.2 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 py-20">
      {/* Gradient background with green accent */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-emerald-950/30" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

      {/* Fade bottom gradient */}
      <div className="absolute bg-linear-to-b from-transparent via-transparent to-background bottom-0 w-full h-24" />

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* 3D Dev Model - Right Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
        style={{ width: "50%", maxWidth: "700px", perspective: "1000px" }}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </motion.div>

      {/* Floating dev symbols */}
      {devSymbols.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: 1,
            rotate: item.rotation,
            x: mousePosition.x * (index % 2 === 0 ? 0.5 : -0.5),
            y: mousePosition.y * (index % 2 === 0 ? 0.5 : -0.5),
          }}
          transition={{
            opacity: {
              duration: 4,
              repeat: Infinity,
              delay: item.delay,
            },
            scale: { duration: 0.8, delay: item.delay },
            x: { type: "spring", stiffness: 30 },
            y: { type: "spring", stiffness: 30 },
          }}
          className="absolute pointer-events-none hidden lg:block text-emerald-500/20 font-mono"
          style={{
            left: item.x,
            top: item.y,
            fontSize: `${60 + index * 10}px`,
            fontWeight: 700,
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 30 }}
        className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-emerald-500/5 pointer-events-none hidden lg:block"
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
            className="h-px bg-emerald-500"
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
          </div>

          <div className="relative font-extrabold">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="uppercase leading-none relative z-10 text-[clamp(4rem,12vw,7.5rem)] text-white/70"
            >
              ALIPOUR.
            </motion.h1>
          </div>
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
            <span className="w-12 h-px bg-emerald-500 group-hover:w-16 transition-all duration-300" />
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
            className="border border-emerald-500 hover:bg-emerald-500 px-6 py-3 flex items-center gap-3 text-white uppercase text-sm tracking-wider transition-colors"
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
              className="w-10 h-10 border border-white/20 hover:border-emerald-500 flex items-center justify-center transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-white/60 group-hover:text-emerald-500 transition-colors" />
            </motion.a>
            <motion.a
              href="https://github.com/moor-zaa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 border border-white/20 hover:border-emerald-500 flex items-center justify-center transition-colors group"
            >
              <Github className="w-4 h-4 text-white/60 group-hover:text-emerald-500 transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:mori.alipour95@gmail.com"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 border border-white/20 hover:border-emerald-500 flex items-center justify-center transition-colors group"
            >
              <Mail className="w-4 h-4 text-white/60 group-hover:text-emerald-500 transition-colors" />
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
        <Link href={"#projects"}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3"
          >
            <ArrowDown className="w-16 h-16 text-emerald-500" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
