import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-start justify-between px-6 pt-5 pb-3 flex-none">
      <Link href="/">
        <Image src="/aita.svg" alt="Aita Design Studio" width={69} height={29} priority />
      </Link>
      <a
        href="https://wa.me/5555999053835"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] tracking-widest uppercase hover:opacity-40 transition-opacity mt-0.5"
      >
        → Entrar em Contato
      </a>
    </header>
  );
}
