import type { SkillId } from '@/skills-data';
import { COMBOBOX_EXAMPLES } from './mantine-combobox';
import { CUSTOM_COMPONENTS_EXAMPLES } from './mantine-custom-components';
import { FORM_EXAMPLES } from './mantine-form';
import type { SkillExample } from './types';

export type { SkillExample, SkillExampleCode } from './types';

export const EXAMPLES: Record<SkillId, SkillExample[]> = {
  'mantine-form': FORM_EXAMPLES,
  'mantine-combobox': COMBOBOX_EXAMPLES,
  'mantine-custom-components': CUSTOM_COMPONENTS_EXAMPLES,
};

export function getExample(skill: SkillId, example: string): SkillExample | undefined {
  return EXAMPLES[skill].find((item) => item.id === example);
}
