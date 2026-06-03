import type { Metadata } from "next";
import TutorialClient from "./TutorialClient";

export const metadata: Metadata = {
  title: "Como Publicar no Blog — Guia Sanity",
  robots: { index: false, follow: false },
};

export default function TutorialPage() {
  return <TutorialClient />;
}
