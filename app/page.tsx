import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import HomeScroller from "@/components/HomeScroller";
import type { ProjectCard } from "@/sanity/lib/types";
import { hardcodedCards } from "@/lib/hardcodedProjects";

const sidePadding = "24px";

export default async function Home() {
  const { data } = await sanityFetch({ query: PROJECTS_QUERY });
  const projects = [...hardcodedCards, ...((data as ProjectCard[]) ?? [])];

  return (
    <div className="flex-1 flex flex-col md:justify-center min-w-0">
      <div className="flex flex-col md:h-[63%] pt-[3vh] md:pt-0">

        <div style={{ paddingLeft: sidePadding }} className="flex-none pb-[2vh]">
          <h1 style={{ fontSize: "clamp(16px, 3.5vh, 42px)", lineHeight: "110%", letterSpacing: "-0.02em" }}>
            <span className="font-bold">Estúdio de design digital.</span>
            <br />
            <span className="font-normal">Sites para marcas com identidade.</span>
          </h1>
        </div>

        <HomeScroller projects={projects} />

      </div>
    </div>
  );
}
