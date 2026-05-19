import Link from "next/link";

const projects = [
  {
    slug: "tutz-phone",
    name: "Tutz Phone",
    category: "Landing Page",
    year: "2024",
  },
  {
    slug: "fernando-cavalheiro",
    name: "Fernando Cavalheiro",
    category: "Website",
    year: "2024",
  },
  {
    slug: "studio-branca",
    name: "Studio Branca",
    category: "Identidade Visual",
    year: "2024",
  },
  {
    slug: "arquitetura-noa",
    name: "Arquitetura Noã",
    category: "Website",
    year: "2023",
  },
];

export default function Home() {
  return (
    <>
      <div className="px-6 pb-4">
        <h1 className="text-[22px] font-medium leading-snug">
          Estúdio de design digital.
          <br />
          Sites para marcas com identidade.
        </h1>
      </div>

      <div className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex h-full pl-6">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="flex-none flex flex-col group"
              style={{
                width: "55vw",
                marginRight: index < projects.length - 1 ? "1px" : "0",
              }}
            >
              <div className="flex-1 bg-neutral-200 group-hover:bg-neutral-300 transition-colors duration-300" />
              <div className="flex items-center justify-between py-3 pr-1">
                <span className="text-[11px] tracking-wide uppercase font-normal">
                  {project.name}
                </span>
                <span className="text-[11px] tracking-wide uppercase text-neutral-400">
                  {project.category} / {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
