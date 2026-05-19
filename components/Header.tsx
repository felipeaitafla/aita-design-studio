import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-start justify-between px-6 pt-5 pb-3 flex-none">
      <Link href="/" className="flex items-start gap-2">
        <div className="border border-neutral-900 w-7 h-7 flex items-center justify-center flex-none">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
            <path d="M1.5 11L6.5 2L11.5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.5 7.5H9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="text-[10px] leading-[1.4] uppercase tracking-wider text-neutral-900">
          <div>Aita</div>
          <div>Design</div>
          <div>Studio</div>
        </div>
      </Link>
      <a
        href="mailto:contato@aitadesign.com"
        className="text-[11px] tracking-widest uppercase hover:opacity-40 transition-opacity mt-0.5"
      >
        → Entrar em Contato
      </a>
    </header>
  );
}
