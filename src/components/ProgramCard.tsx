import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/content/programs";

/** Program tile for the Programs grid and related-program lists. */
export default function ProgramCard({ program, index }: { program: Program; index?: number }) {
  return (
    <Link href={program.route} className="program-card">
      <div className="program-card-media">
        <Image
          src={program.image}
          alt={program.imageAlt}
          width={640}
          height={420}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {typeof index === "number" && (
          <span className="program-card-no">{String(index + 1).padStart(2, "0")}</span>
        )}
      </div>
      <div className="program-card-body">
        <h3 className="program-card-title">{program.name}</h3>
        <p className="program-card-excerpt">{program.excerpt}</p>
        <span className="program-card-meta">{program.duration}</span>
        <span className="program-card-link">View program →</span>
      </div>
    </Link>
  );
}
