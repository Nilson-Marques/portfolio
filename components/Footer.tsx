export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark px-6 py-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      <span className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} Nilson Marques do Nascimento
      </span>
      <span className="font-mono text-xs text-muted">
        Built with Next.js · TypeScript · Tailwind
      </span>
    </footer>
  );
}
