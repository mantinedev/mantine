import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExamplesPage } from '@/components/ExamplesPage';
import { getSkill, SKILLS } from '@/skills-data';

interface SkillRouteProps {
  params: Promise<{ skill: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SKILLS.map((skill) => ({ skill: skill.id }));
}

export async function generateMetadata({ params }: SkillRouteProps): Promise<Metadata> {
  const { skill: skillId } = await params;
  const skill = getSkill(skillId);

  if (!skill) {
    return {};
  }

  return {
    title: `${skill.name} | Mantine for AI agents`,
    description: skill.description,
  };
}

export default async function SkillRoute({ params }: SkillRouteProps) {
  const { skill: skillId } = await params;
  const skill = getSkill(skillId);

  if (!skill) {
    notFound();
  }

  return <ExamplesPage skill={skill} />;
}
