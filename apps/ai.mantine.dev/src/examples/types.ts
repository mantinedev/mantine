import type { Filler } from './fill-utils';

export interface SkillExampleCode {
  fileName: string;
  language: 'tsx' | 'css';
  code: string;
}

export interface SkillExample {
  /** Example folder name in kebab-case, used as the url segment */
  id: string;

  /** Name displayed in the navbar and on the page */
  title: string;

  /** One line displayed under the name in the navbar, used in search */
  description: string;

  /** Prompt that was given to the agent, paragraphs separated by blank lines, `- ` starts a list item */
  prompt: string;

  /** Component produced by the agent, loaded with `next/dynamic` so that only its own page downloads it */
  component: React.ComponentType;

  /** Loads the generated code.json, only the page of the example downloads it */
  loadCode: () => Promise<{ default: unknown }>;

  /** Demo takes the full width of the page instead of the 800px column */
  fullWidth?: boolean;

  /** Fills the visible inputs with sample values, triggered with mod+shift+E on the site, not part of the example code */
  fill?: (filler: Filler) => Promise<void>;
}
