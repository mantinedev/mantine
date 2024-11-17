import { CodeDemo, CodeDemoProps } from '../CodeDemo/CodeDemo';
import { ConfiguratorDemo, ConfiguratorDemoProps } from '../ConfiguratorDemo/ConfiguratorDemo';
import { StylesApiDemo, StylesApiDemoProps } from '../StylesApiDemo/StylesApiDemo';

interface DemoComponent {
  component: React.FC<any>;
}

export type MantineDemo =
  | ({ type: 'code' } & DemoComponent & CodeDemoProps)
  | ({ type: 'configurator' } & DemoComponent & ConfiguratorDemoProps)
  | ({ type: 'styles-api' } & DemoComponent & StylesApiDemoProps);

interface DemoProps {
  data: MantineDemo;
  demoProps?: {
    defaultExpanded?: boolean;
    maxCollapsedHeight?: number;
  };
}

export function Demo({ data, demoProps }: DemoProps) {
  switch (data.type) {
    case 'code':
      return (
        <CodeDemo {...data} {...demoProps}>
          <data.component />
        </CodeDemo>
      );
    case 'configurator':
      return (
        <ConfiguratorDemo {...data} {...demoProps}>
          <data.component />
        </ConfiguratorDemo>
      );
    case 'styles-api':
      return (
        <StylesApiDemo {...data} {...demoProps}>
          <data.component />
        </StylesApiDemo>
      );
    default:
      return null;
  }
}
