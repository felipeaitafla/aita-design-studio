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
    <div ref={wrapperRef} className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide min-h-0">
      <div
        ref={contentRef}
        className="inline-flex h-full gap-3"
        style={{ paddingLeft: sidePadding, paddingRight: "24px" }}
      >
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="flex-none flex flex-col group"
            style={{ aspectRatio: "920/460" }}
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
