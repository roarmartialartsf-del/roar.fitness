import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgram } from "@/content/programs";
import { buildMetadata } from "@/lib/seo";
import ProgramDetail from "@/components/ProgramDetail";

const program = getProgram("home-training");

export const metadata: Metadata = program
  ? buildMetadata({ title: program.title, description: program.metaDescription, path: program.route, image: program.image })
  : {};

export default function HomeTrainingPage() {
  if (!program) notFound();
  return <ProgramDetail program={program} crumbs={[{ label: "Home MMA Training", href: "/home-training" }]} />;
}
