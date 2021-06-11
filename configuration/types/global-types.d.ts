type MantineDemoControlType =
  | 'boolean'
  | 'color'
  | 'select'
  | 'string'
  | 'size'
  | 'number'
  | 'segmented';

interface MantineDemoControlProps {
  type: MantineDemoControlType;
  name: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

interface MantineDemoBase {
  component?: React.FC;
  wrapper?: React.FC;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
}

interface MantineCodeDemo extends MantineDemoBase {
  type: 'demo';
  demoProps?: {
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
  };
}

interface MantineConfiguratorDemo extends MantineDemoBase {
  type: 'configurator';
  codeTemplate(props: string, children?: string): string;
  configurator?: MantineDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean;
    includeCode?: boolean;
  };
}

type MantineDemo = MantineCodeDemo | MantineConfiguratorDemo;

type MantineClasses<T extends (...args: any) => any> = Record<keyof ReturnType<T>, string>;

interface Frontmatter {
  title: string;
  description?: string;
  props: string[];
  import: string;
  docs: string;
  source: string;
  package: string;
  bundleSize: string;
  installation: string;
  pageTitle: string;
  license: string;
  styles: string[];
  group: string;
  order: number;
  slug: string;
  category: string;
}

interface MdxPage {
  headings: {
    depth: number;
    value: string;
  }[];

  body: string;

  frontmatter: Frontmatter;
}
