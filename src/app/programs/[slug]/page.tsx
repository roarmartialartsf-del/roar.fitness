import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { disciplines, getProgram } from "@/content/programs";
import { buildMetadata } from "@/lib/seo";
import ProgramDetail from "@/components/ProgramDetail";

export function generateStaticParams() {
  return disciplines.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const program = getProgram(params.slug);
  if (!program || !program.isDiscipline) return {};
  return buildMetadata({
    title: program.title,
    description: program.metaDescription,
    path: program.route,
    image: program.image,
  });
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = getProgram(params.slug);
  if (!program || !program.isDiscipline) notFound();
  return (
    <ProgramDetail
      program={program}
      crumbs={[
        { label: "Programs", href: "/programs" },
        { label: program.name, href: program.route },
      ]}
    />
  );
}
