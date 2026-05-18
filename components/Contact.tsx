import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="border border-border dark:border-border-dark rounded-3xl p-10 md:p-16 bg-surface dark:bg-card-dark text-center relative overflow-hidden">
        {/* Decorative accent ring */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-accent/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-accent/10 pointer-events-none" />

        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          05 / Contact
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-muted max-w-md mx-auto leading-relaxed mb-10">
          Open to junior front-end roles, freelance projects, and collaborations
          — especially in healthcare, security, or accessibility-focused products.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="inline-block bg-accent text-ink font-bold px-8 py-4 rounded-full text-base hover:bg-accent/90 transition-colors duration-200 mb-8"
        >
          {contact.email}
        </a>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-muted">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
          >
            GitHub ↗
          </a>
          <span>{contact.phone}</span>
          <span>{contact.location}</span>
        </div>
      </div>
    </section>
  );
}
