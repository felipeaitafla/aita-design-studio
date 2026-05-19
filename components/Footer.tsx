export default function Footer() {
  const links = [
    { label: "Instagram", href: "https://instagram.com/aitadesignstudio" },
    { label: "Behance", href: "https://behance.net/aitadesign" },
    { label: "LinkedIn", href: "https://linkedin.com/company/aitadesign" },
  ];

  return (
    <footer className="flex items-center justify-between px-6 py-4 flex-none">
      <nav className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase hover:opacity-40 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="text-[10px] tracking-wide text-neutral-500">© 2025</p>
    </footer>
  );
}
