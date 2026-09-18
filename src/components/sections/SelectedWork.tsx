"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { useT } from "@/i18n/LocaleProvider";
import { Fragment } from "react";
import { ProjectCase } from "./ProjectCase";

export function SelectedWork() {
  const t = useT();

  return (
    <Section id={siteConfig.anchors.work.slice(1)}>
      <Reveal className="space-y-6">
        <Eyebrow>{t.work.eyebrow}</Eyebrow>
        <DisplayHeading lines={t.work.headlineLines} size="xl" />
      </Reveal>

      <div className="mt-14 md:mt-20">
        {projects.map((project, index) => (
          <Fragment key={project.dictKey}>
            {index > 0 && <hr className="border-t-2 border-(--color-border)" />}
            <ProjectCase
              project={project}
              flip={index % 2 === 1}
              index={index}
            />
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
