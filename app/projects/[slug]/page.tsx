import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "tutz-phone": { name: "Tutz Phone", category: "Landing Page", year: "2024" },
  "fernando-cavalheiro": { name: "Fernando Cavalheiro", category: "Website", year: "2024" },
  "studio-branca": { name: "Studio Branca", category: "Identidade Visual", year: "2024" },
  "arquitetura-noa": { name: "Arquitetura Noã", category: "Website", year: "2023" },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  if (!project) return {};
  return { title: `${project.name} — Aita Design Studio` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) notFound();

  return (
    <>
      <div className="px-6 pb-4">
        <Link
          href="/"
          className="text-[10px] tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          ← Todos os projetos
        </Link>
        <div className="mt-3">
          <p className="text-[10px] tracking-widest uppercase text-neutral-400 mb-1">
            {project.category} / {project.year}
          </p>
          <h1 className="text-[22px] font-medium leading-snug">{project.name}</h1>
        </div>
      </div>

      <div className="flex-1 px-6 pb-6">
        <div className="h-full bg-neutral-200" />
      </div>
    </>
  );
}
