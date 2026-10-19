'use client';

import { ExampleDemo } from '@/components/ExampleDemo';
import { ExamplesEmpty } from '@/components/ExampleDemo/ExamplesEmpty';
import { ExamplesShell } from '@/components/ExamplesShell';
import { EXAMPLES } from '@/examples';
import type { SkillData } from '@/skills-data';

interface ExamplesPageProps {
  skill: SkillData;

  /** Example to display, the first example of the skill when omitted */
  exampleId?: string;
}

export function ExamplesPage({ skill, exampleId }: ExamplesPageProps) {
  const examples = EXAMPLES[skill.id];
  const example = exampleId ? examples.find((item) => item.id === exampleId) : examples[0];

  return (
    <ExamplesShell activeSkill={skill.id} activeExample={example?.id}>
      {example ? <ExampleDemo skill={skill} example={example} /> : <ExamplesEmpty skill={skill} />}
    </ExamplesShell>
  );
}
