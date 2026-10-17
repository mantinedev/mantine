'use client';

import { CodeHighlight } from '@mantine/code-highlight';
import { Container, Text, Title } from '@mantine/core';
import { ExampleBlock } from '@/components/ExampleBlock';
import { TableOfContents } from '@/components/MdxLayout';
import { EXAMPLES } from '@/examples';
import type { SkillData } from '@/skills-data';
import classes from './SkillPage.module.css';

interface SkillPageProps {
  skill: SkillData;
}

export function SkillPage({ skill }: SkillPageProps) {
  const examples = EXAMPLES[skill.id];

  return (
    <article>
      <header className={classes.header}>
        <Container size="md">
          <Title className={classes.title}>{skill.name}</Title>
          <Text className={classes.description}>{skill.description}</Text>
          <CodeHighlight code={skill.installCommand} language="bash" className={classes.install} />
        </Container>
      </header>

      <Container size="md" className={classes.innerContainer}>
        <div className={classes.inner}>
          <div className={classes.content} id="mdx">
            {examples.length === 0 ? (
              <Text size="sm">Examples for this skill are coming.</Text>
            ) : (
              examples.map((example) => <ExampleBlock key={example.id} example={example} />)
            )}
          </div>
        </div>
        <TableOfContents />
      </Container>
    </article>
  );
}
