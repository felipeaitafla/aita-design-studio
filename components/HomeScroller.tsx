"use client";

import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { urlFor } from "@/sanity/lib/image";
import type { ProjectCard } from "@/sanity/lib/types";

const sidePadding = "24px";

export default function HomeScroller({ projects }: { projects: ProjectCard[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;
    // Horizontal smooth scroll is desktop-only; mobile uses native vertical scroll.
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const lenis = new Lenis({
      wrapper,
      content,
      orientation: "horizontal",
      gestureOrientation: "both",
      smoothWheel: true,
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div ref={wrapperRef} className="md:flex-1 md:overflow-x-auto md:overflow-y-hidden scrollbar-hide md:min-h-0">
      <div
        ref={contentRef}
        className="flex flex-col gap-6 pb-10 md:inline-flex md:flex-row md:h-full md:gap-3 md:pb-0"
        style={{ paddingLeft: sidePadding, paddingRight: "24px" }}
      >
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="group flex flex-col aspect-[920/460] w-full md:w-auto md:h-full md:flex-none"
          >
            <div className="relative flex-1 min-h-0 overflow-hidden bg-neutral-200 group-hover:bg-neutral-300 transition-colors duration-300">
              {project.staticThumb ? (
                <Image
                  src={project.staticThumb}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              ) : project.thumbnail?.asset && (
                <Image
                  src={urlFor(project.thumbnail).width(920).height(460).fit("crop").url()}
                  alt={project.thumbnail.alt || project.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  placeholder={project.thumbnail.asset.metadata?.lqip ? "blur" : "empty"}
                  blurDataURL={project.thumbnail.asset.metadata?.lqip}
                />
              )}
            </div>
            <div
              className="flex items-center justify-between pr-1"
              style={{ paddingTop: "12px", paddingBottom: "12px" }}
            >
              <span
                className="tracking-wide uppercase font-normal"
                style={{ fontSize: "clamp(9px, 1.2vh, 12px)" }}
              >
                {project.name}
              </span>
              <span
                className="tracking-wide uppercase text-neutral-400"
                style={{ fontSize: "clamp(9px, 1.2vh, 12px)" }}
              >
                {project.category}{project.year ? ` / ${project.year}` : ""}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
