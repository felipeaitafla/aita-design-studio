import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { PROJECT_QUERY, PROJECT_SLUGS_QUERY } from "@/sanity/lib/queries";
import type { Project } from "@/sanity/lib/types";
import { getHardcodedProject, hardcodedProjects } from "@/lib/hardcodedProjects";

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: PROJECT_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  const sanitySlugs = (data as { slug: string }[]) ?? [];
  return [...hardcodedProjects.map((p) => ({ slug: p.slug })), ...sanitySlugs];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hardcoded = getHardcodedProject(slug);
  if (hardcoded) return { title: `${hardcoded.name} — Aita Design Studio` };
  const { data } = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
    stega: false,
  });
  const project = data as Project | null;
  if (!project) return {};
  return { title: `${project.name} — Aita Design Studio` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let project = getHardcodedProject(slug) ?? null;

  if (!project) {
    const { data } = await sanityFetch({
      query: PROJECT_QUERY,
      params: { slug },
    });
    project = data as Project | null;
  }

  if (!project) notFound();

  return (
    <div className="flex-1 flex flex-col-reverse md:flex-row md:overflow-hidden">

      {/* Left: stacked gallery (+ optional video). The thumbnail is card-only. */}
      <div className="flex flex-col gap-3 md:flex-1 md:overflow-y-auto">
        {project.galleryVideo && (
          <div className="w-full">
            <video
              src={project.galleryVideo}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        )}
        {(project.gallery ?? []).map((image, i) => (
          <div key={image._key ?? i} className="w-full">
            {image.asset && (
              <Image
                src={image.asset.url}
                alt={image.alt || project.name}
                width={image.asset.metadata?.dimensions?.width ?? 1200}
                height={image.asset.metadata?.dimensions?.height ?? 800}
                style={{ width: "100%", height: "auto" }}
                sizes="(min-width: 768px) 65vw, 100vw"
                priority={i === 0 && !project.galleryVideo}
                unoptimized={image.asset.url.endsWith(".gif")}
                placeholder={image.asset.metadata?.lqip ? "blur" : "empty"}
                blurDataURL={image.asset.metadata?.lqip}
              />
            )}
          </div>
        ))}
      </div>

      {/* Right on desktop / top on mobile: info panel */}
      <div
        className="w-full md:w-[clamp(260px,35%,420px)] flex-none flex flex-col justify-between md:overflow-y-auto border-b md:border-b-0 md:border-l border-neutral-100"
        style={{ padding: "clamp(20px, 3vh, 40px) clamp(20px, 3vw, 48px)" }}
      >
        <div>
          {/* Name + segment */}
          <div className="mb-6">
            <h1
              className="font-medium leading-tight"
              style={{ fontSize: "clamp(18px, 2.2vh, 28px)" }}
            >
              {project.name}
            </h1>
            {project.segment && (
              <p
                className="text-neutral-400 font-normal mt-1"
                style={{ fontSize: "clamp(11px, 1.4vh, 15px)" }}
              >
                {project.segment}
              </p>
            )}
            {project.year && (
              <p
                className="text-neutral-400 font-normal"
                style={{ fontSize: "clamp(11px, 1.4vh, 15px)" }}
              >
                {project.year}
              </p>
            )}
          </div>

          {/* Category + description */}
          {(project.category || project.description) && (
            <div className="border-t border-neutral-200 pt-5">
              {project.category && (
                <p
                  className="tracking-widest uppercase text-neutral-400 mb-3"
                  style={{ fontSize: "clamp(8px, 1vh, 11px)" }}
                >
                  {project.category}
                </p>
              )}
              {project.description && (
                <p
                  className="text-neutral-600 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: "clamp(11px, 1.3vh, 14px)" }}
                >
                  {project.description}
                </p>
              )}
            </div>
          )}

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-neutral-400 hover:text-neutral-900 transition-colors tracking-widest uppercase"
              style={{ fontSize: "clamp(8px, 1vh, 11px)" }}
            >
              Visitar site →
            </a>
          )}
        </div>

        {/* Back link at bottom */}
        <div className="mt-8">
          <Link
            href="/"
            className="text-neutral-300 hover:text-neutral-900 transition-colors tracking-widest uppercase"
            style={{ fontSize: "clamp(8px, 1vh, 11px)" }}
          >
            ← Todos os projetos
          </Link>
        </div>
      </div>

    </div>
  );
}
