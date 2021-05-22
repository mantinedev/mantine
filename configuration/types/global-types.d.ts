type MantineDemoControlType = 'boolean' | 'color' | 'select' | 'string' | 'size' | 'number';

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

interface MantineDemo {
  type: 'configurator' | 'demo';
  component: React.FC;
  code?: string;
  demoProps?: {
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
  };
  configurator?: MantineDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean;
    includeCode?: boolean;
  };
  codeTemplate?(props: string, children?: string): string;
}
