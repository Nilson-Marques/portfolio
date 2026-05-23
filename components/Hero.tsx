"use client";

import { useEffect, useState } from "react";
import { contact } from "@/lib/data";

const roles = [
  "Front-end Developer",
  "React & Next.js Builder",
  "Security-aware Dev",
  "TypeScript Learner",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center pt-16 px-6 max-w-5xl mx-auto"
    >
      {/* Profile Photo Space */}
      <div className="absolute top-32 right-6 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 hidden md:flex items-center justify-center opacity-0-start animate-fade-in animate-delay-500">
        <div className="relative w-full h-full">
          {/* Decorative backgrounds */}
          <div className="absolute inset-0 bg-accent/10 rounded-[2rem] rotate-6 border border-accent/20" />
          <div className="absolute inset-0 bg-accent/5 rounded-[2rem] -rotate-3 border border-accent/10" />
          
          {/* Main Photo Container */}
          <div className="absolute inset-0 bg-paper dark:bg-ink rounded-[2rem] border border-border dark:border-border-dark overflow-hidden flex flex-col items-center justify-center text-muted font-mono p-4 text-center">
            <div className="w-12 h-12 mb-4 rounded-full border border-dashed border-muted flex items-center justify-center text-lg">
              ?
            </div>
            <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Photo Placeholder</span>
            <span className="text-[9px] leading-tight">Add your image to<br/>/public/profile.jpg</span>
          </div>
        </div>
      </div>

      {/* Status badge */}
      <div className="opacity-0-start animate-fade-in animate-delay-100 mb-10">
        <span className="inline-flex items-center gap-2 text-xs font-mono border border-border dark:border-border-dark rounded-full px-4 py-1.5 text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
          Based in Malta · Open to opportunities
        </span>
      </div>

      {/* Name */}
      <h1 className="opacity-0-start animate-fade-up animate-delay-200 text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">
        Nilson
        <br />
        <span className="text-muted">Marques</span>
      </h1>

      {/* Typewriter role */}
      <div className="opacity-0-start animate-fade-up animate-delay-300 h-12 flex items-center mb-8">
        <span className="text-xl md:text-2xl font-mono text-accent">
          {displayed}
          <span className="animate-blink">|</span>
        </span>
      </div>

      {/* Summary */}
      <p className="opacity-0-start animate-fade-up animate-delay-400 max-w-xl text-muted leading-relaxed text-lg mb-10">
        Building functional, accessible web applications with a{" "}
        <span className="text-ink dark:text-paper font-medium">security-first mindset</span>
        . Combining React & Next.js expertise with an MSc in Cybersecurity —{" "}
        <em>not just a developer who heard of security.</em>
      </p>

      {/* CTAs */}
      <div className="opacity-0-start animate-fade-up animate-delay-500 flex flex-wrap gap-4 mb-16">
        <a
          href="#projects"
          className="bg-accent text-ink font-semibold px-6 py-3 rounded-full text-sm hover:bg-accent/90 transition-colors duration-200"
        >
          View Projects
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="border border-border dark:border-border-dark text-sm font-medium px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
        >
          Get in touch
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono text-muted hover:text-ink dark:hover:text-paper transition-colors duration-200 flex items-center gap-2 px-2 py-3"
        >
          github.com/Nilson-Marques ↗
        </a>
      </div>

      {/* Stats row */}
      <div className="opacity-0-start animate-fade-up animate-delay-500 grid grid-cols-3 gap-6 border-t border-border dark:border-border-dark pt-10 max-w-md">
        {[
          { value: "4+", label: "Cisco certs" },
          { value: "BSc+MSc", label: "Degrees" },
          { value: "2", label: "Live projects" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold text-accent">{s.value}</div>
            <div className="text-xs text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
