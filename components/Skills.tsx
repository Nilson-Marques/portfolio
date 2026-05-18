"use client";

import { useState } from "react";
import { skills } from "@/lib/data";
import type { Skill } from "@/lib/types";

type Category = Skill["category"] | "all";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "security", label: "Security" },
  { key: "tools", label: "Tools" },
  { key: "learning", label: "Learning" },
];

const categoryColor: Record<Skill["category"], string> = {
  frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  backend: "bg-green-500/10 text-green-400 border-green-500/20",
  security: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  tools: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  learning: "bg-accent/10 text-accent border-accent/20",
};

function SkillCard({ skill }: { skill: Skill }) {
  const bars = Array.from({ length: 5 });
  return (
    <div className="group border border-border dark:border-border-dark rounded-xl p-4 hover:border-accent transition-all duration-300 bg-surface dark:bg-card-dark">
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl font-mono">{skill.icon}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full border ${categoryColor[skill.category]}`}
        >
          {skill.category}
        </span>
      </div>
      <div className="font-semibold text-sm mb-3">{skill.name}</div>
      {/* Level bar */}
      <div className="flex gap-1">
        {bars.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              i < skill.level
                ? "bg-accent"
                : "bg-border dark:bg-border-dark"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          02 / Skills
        </span>
        <h2 className="text-4xl font-bold mt-2">Technical stack</h2>
        <p className="text-muted mt-3 max-w-md">
          Frontend-first with backend knowledge and a genuine security layer —
          built through certifications and an ongoing MSc.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              active === c.key
                ? "bg-accent text-ink border-accent"
                : "border-border dark:border-border-dark text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
