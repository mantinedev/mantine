import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExamplesPage } from '@/components/ExamplesPage';
import { getExampleRoutes, toExampleTitle } from '@/examples/routes';
import { getSkill } from '@/skills-data';

interface ExampleRouteProps {
  params: Promise<{ skill: string; example: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getExampleRoutes();
}

export async function generateMetadata({ params }: ExampleRouteProps): Promise<Metadata> {
  const { skill: skillId, example: exampleId } = await params;
  const skill = getSkill(skillId);

  if (!skill) {
    return {};
  }

  return {
    title: `${toExampleTitle(exampleId)} | ${skill.name} | Mantine for AI agents`,
    description: `${toExampleTitle(exampleId)} built with the ${skill.name} skill`,
  };
}

export default async function ExampleRoute({ params }: ExampleRouteProps) {
  const { skill: skillId, example: exampleId } = await params;
  const skill = getSkill(skillId);

  if (!skill) {
    notFound();
  }

  return <ExamplesPage skill={skill} exampleId={exampleId} />;
}
