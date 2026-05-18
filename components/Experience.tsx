import { experience, education, certifications } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          04 / Background
        </span>
        <h2 className="text-4xl font-bold mt-2">Experience & education</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: experience + certifications */}
        <div className="space-y-10">
          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono text-muted uppercase tracking-widest mb-5">
              Work experience
            </h3>
            {experience.map((exp) => (
              <div
                key={exp.role}
                className="border-l-2 border-accent pl-5 pb-1"
              >
                <div className="font-bold">{exp.role}</div>
                <div className="text-sm text-accent font-mono mt-0.5">{exp.company}</div>
                <div className="text-xs text-muted mt-1 mb-3">
                  {exp.period} {exp.hours && `· ${exp.hours}`}
                </div>
                <ul className="space-y-2">
                  {exp.points.map((p, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5 shrink-0 text-xs">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono text-muted uppercase tracking-widest mb-5">
              Cisco certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="border border-border dark:border-border-dark rounded-xl p-4 bg-surface dark:bg-card-dark hover:border-accent/50 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-medium text-sm">{cert.title}</div>
                    <span className="text-xs font-mono text-muted shrink-0">{cert.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cert.topics.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded bg-border/50 dark:bg-border-dark text-muted font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: education */}
        <div>
          <h3 className="text-xs font-mono text-muted uppercase tracking-widest mb-5">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="border border-border dark:border-border-dark rounded-xl p-5 bg-surface dark:bg-card-dark hover:border-accent/50 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="font-semibold text-sm leading-snug">{edu.degree}</div>
                  {edu.status === "in-progress" && (
                    <span className="shrink-0 text-xs bg-accent/10 text-accent border border-accent/30 px-2 py-0.5 rounded-full">
                      In progress
                    </span>
                  )}
                </div>
                <div className="text-sm text-muted">{edu.institution}</div>
                <div className="text-xs font-mono text-muted mt-1">
                  {edu.location} · {edu.year}
                </div>
              </div>
            ))}
          </div>

          {/* Security callout */}
          <div className="mt-8 border border-accent/30 bg-accent/5 rounded-2xl p-6">
            <div className="text-accent font-mono text-xs tracking-widest uppercase mb-2">
              Security mindset
            </div>
            <p className="text-sm leading-relaxed">
              Not just a developer who heard of security — actively pursuing
              an MSc in Cybersecurity while shipping production code. Every
              project is built with OWASP principles, GDPR-aware data
              handling, and secure coding practices baked in from the start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
