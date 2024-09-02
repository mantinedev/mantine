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
}

export function Demo({ data }: DemoProps) {
  switch (data.type) {
    case 'code':
      return (
        <CodeDemo {...data}>
          <data.component />
        </CodeDemo>
      );
    case 'configurator':
      return (
        <ConfiguratorDemo {...data}>
          <data.component />
        </ConfiguratorDemo>
      );
    case 'styles-api':
      return (
        <StylesApiDemo {...data}>
          <data.component />
        </StylesApiDemo>
      );
    default:
      return null;
  }
}
