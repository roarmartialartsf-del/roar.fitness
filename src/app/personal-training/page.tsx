import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgram } from "@/content/programs";
import { buildMetadata } from "@/lib/seo";
import ProgramDetail from "@/components/ProgramDetail";

const program = getProgram("personal-training");

export const metadata: Metadata = program
  ? buildMetadata({ title: program.title, description: program.metaDescription, path: program.route, image: program.image })
  : {};

export default function PersonalTrainingPage() {
  if (!program) notFound();
  return <ProgramDetail program={program} crumbs={[{ label: "Personal Training", href: "/personal-training" }]} />;
}
