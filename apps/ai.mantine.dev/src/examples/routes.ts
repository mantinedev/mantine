import fs from 'node:fs';
import path from 'node:path';
import { SKILLS, type SkillId } from '@/skills-data';

export interface ExampleRoute {
  skill: SkillId;
  example: string;
}

const EXAMPLES_DIR = path.join(process.cwd(), 'src/examples');

/** Converts an example folder name to its route segment: `JobApplicationForm` -> `job-application-form` */
export function toExampleId(folderName: string) {
  return folderName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

export function toExampleTitle(exampleId: string) {
  const words = exampleId.split('-');
  return `${words[0].charAt(0).toUpperCase()}${words[0].slice(1)} ${words.slice(1).join(' ')}`;
}

export function getExampleFolders(skill: SkillId) {
  const skillDir = path.join(EXAMPLES_DIR, skill);
  return fs
    .readdirSync(skillDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

export function getExampleRoutes(): ExampleRoute[] {
  return SKILLS.flatMap((skill) =>
    getExampleFolders(skill.id).map((folder) => ({ skill: skill.id, example: toExampleId(folder) }))
  );
}
