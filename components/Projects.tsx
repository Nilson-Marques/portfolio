import { projects } from "@/lib/data";

const statusStyle: Record<string, string> = {
  ongoing: "bg-accent/10 text-accent border border-accent/30",
  live: "bg-green-500/10 text-green-400 border border-green-500/30",
  completed: "bg-muted/10 text-muted border border-muted/30",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          03 / Projects
        </span>
        <h2 className="text-4xl font-bold mt-2">What I&apos;ve built</h2>
        <p className="text-muted mt-3 max-w-md">
          Real-world projects in regulated domains — with accessibility,
          security, and clean architecture at the core.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`group border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-accent bg-surface dark:bg-card-dark ${
              project.highlight
                ? "border-accent/40 dark:border-accent/30"
                : "border-border dark:border-border-dark"
            }`}
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
                {project.domain && (
                  <p className="text-xs text-muted font-mono mt-0.5">{project.domain}</p>
                )}
              </div>
              <span
                className={`shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${statusStyle[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-border/50 dark:bg-border-dark/50 rounded-full text-muted font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            {(project.github || project.demo) && (
              <div className="flex gap-4 pt-2 border-t border-border dark:border-border-dark">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200 flex items-center gap-1"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200 flex items-center gap-1"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* More on GitHub */}
      <div className="mt-8 text-center">
        <a
          href="https://github.com/Nilson-Marques"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors duration-200 border border-border dark:border-border-dark hover:border-accent px-6 py-3 rounded-full"
        >
          More on GitHub ↗
        </a>
      </div>
    </section>
  );
}
