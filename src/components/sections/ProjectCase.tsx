"use client";

import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";
import { useT } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

interface ProjectCaseProps {
  project: Project;
  /** alterna o lado da imagem nos layouts split */
  flip?: boolean;
  index: number;
}

function CaseFacts({ project }: { project: ProjectCaseProps["project"] }) {
  const t = useT();
  const copy = t.work.projects[project.dictKey];
  const facts = [
    { label: t.work.labels.problem, text: copy.problem },
    { label: t.work.labels.solution, text: copy.solution },
    { label: t.work.labels.build, text: copy.build },
  ];

  return (
    <dl className="grid gap-6 border-t-2 border-(--color-border) pt-6 md:grid-cols-3">
      {facts.map((fact) => (
        <div key={fact.label} className="space-y-2">
          <dt className="label-mono text-(--color-ink-muted)">{fact.label}</dt>
          <FadeSwap
            as="dd"
            text={fact.text}
            className="text-sm leading-relaxed"
          />
        </div>
      ))}
    </dl>
  );
}

function CaseTech({ project }: { project: ProjectCaseProps["project"] }) {
  const t = useT();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="label-mono text-(--color-ink-muted)">
        {t.work.labels.tech}
      </span>
      {project.tech.map((tech) => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </div>
  );
}

function CaseHeader({ project }: { project: ProjectCaseProps["project"] }) {
  const t = useT();
  const copy = t.work.projects[project.dictKey];

  return (
    <div className="space-y-5">
      <div className="label-mono flex flex-wrap items-center gap-x-4 gap-y-2 text-(--color-ink-muted)">
        <span className="text-(--color-ink)">{project.index}</span>
        <span>/</span>
        <span>{copy.category}</span>
        <span className="border border-(--color-border) bg-(--color-accent) px-2 py-0.5 font-semibold text-(--color-ink)">
          {t.work.status[project.status]}
        </span>
      </div>

      {copy.name && (
        <p className="label-mono font-semibold tracking-[0.2em]">{copy.name}</p>
      )}

      <DisplayHeading
        lines={copy.headlineLines}
        as="h3"
        size="lg"
        mode={project.layout === "full" ? "lines" : "flow"}
      />

      <FadeSwap
        text={copy.description}
        className="max-w-xl text-base leading-relaxed text-(--color-ink-muted)"
      />

      {project.status === "demo" && (
        <FadeSwap
          text={t.work.demoDisclaimer}
          className="label-mono max-w-xl normal-case tracking-normal text-(--color-ink-faint)"
        />
      )}
    </div>
  );
}

/** Mini-case: apresentado pelo problema, nunca pela tecnologia. */
export function ProjectCase({
  project,
  flip = false,
  index,
}: ProjectCaseProps) {
  const t = useT();
  const copy = t.work.projects[project.dictKey];

  const frame = (
    <DeviceFrame
      kind={project.imageAspect === "tall" ? "phone" : "browser"}
      src={project.image}
      alt={copy.imageAlt}
      placeholderLabel={t.work.imagePlaceholder}
    />
  );

  if (project.layout === "full") {
    return (
      <Reveal>
        <article
          className={`space-y-8 py-14 ${index === 0 ? "first:pt-0" : ""} md:py-20`}
        >
          <CaseHeader project={project} />
          {frame}
          <CaseFacts project={project} />
          <CaseTech project={project} />
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <article className="space-y-8 py-14 md:py-20">
        <div className={cn("grid items-start gap-8 md:grid-cols-2 md:gap-12")}>
          <div className={cn(flip && "md:order-2")}>
            <CaseHeader project={project} />
          </div>
          <div className={cn(flip && "md:order-1")}>{frame}</div>
        </div>
        <CaseFacts project={project} />
        <CaseTech project={project} />
      </article>
    </Reveal>
  );
}
