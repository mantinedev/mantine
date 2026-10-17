export interface SkillExampleCode {
  fileName: string;
  language: 'tsx' | 'css';
  code: string;
}

export interface SkillExample {
  /** Example folder name in kebab-case, used as the heading anchor */
  id: string;

  /** Heading displayed above the prompt */
  title: string;

  /** Prompt that was given to the agent */
  prompt: string;

  /** Component produced by the agent */
  component: React.FC;

  /** Generated code.json contents */
  code: SkillExampleCode[];
}
