import type { SkillId } from '@/skills-data';
import { COMBOBOX_EXAMPLES } from './mantine-combobox';
import { FORM_EXAMPLES } from './mantine-form';
import { SCHEDULE_EXAMPLES } from './mantine-schedule';
import { UI_EXAMPLES } from './mantine-ui';
import type { SkillExample } from './types';

export type { SkillExample, SkillExampleCode } from './types';

export const EXAMPLES: Record<SkillId, SkillExample[]> = {
  'mantine-form': FORM_EXAMPLES,
  'mantine-combobox': COMBOBOX_EXAMPLES,
  'mantine-schedule': SCHEDULE_EXAMPLES,
  'mantine-ui': UI_EXAMPLES,
};
