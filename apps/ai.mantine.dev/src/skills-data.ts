export type SkillId =
  | 'mantine-form'
  | 'mantine-combobox'
  | 'mantine-custom-components'
  | 'mantine-ui';

export interface SkillData {
  /** Skill folder name in the skills repository, used in the url */
  id: SkillId;

  /** Skill name displayed on the page */
  name: string;

  /** One-sentence description from the skill frontmatter */
  description: string;

  /** Command to install the skill */
  installCommand: string;
}

function getInstallCommand(id: SkillId) {
  return `npx skills add https://github.com/mantinedev/skills --skill ${id}`;
}

export const SKILLS: SkillData[] = [
  {
    id: 'mantine-form',
    name: 'mantine-form',
    description: 'Build forms using @mantine/form.',
    installCommand: getInstallCommand('mantine-form'),
  },
  {
    id: 'mantine-combobox',
    name: 'mantine-combobox',
    description:
      "Build custom dropdown, select, autocomplete and multiselect components using Mantine's Combobox primitives.",
    installCommand: getInstallCommand('mantine-combobox'),
  },
  {
    id: 'mantine-custom-components',
    name: 'mantine-custom-components',
    description:
      "Build custom components that integrate with Mantine's theming, Styles API and core features.",
    installCommand: getInstallCommand('mantine-custom-components'),
  },
  {
    id: 'mantine-ui',
    name: 'mantine-ui',
    description: 'Visual and component decisions for interfaces built with Mantine.',
    installCommand: getInstallCommand('mantine-ui'),
  },
];

export function getSkill(id: string): SkillData | undefined {
  return SKILLS.find((skill) => skill.id === id);
}
