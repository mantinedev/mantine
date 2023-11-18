import React from 'react';
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
  const { component: Component } = data;
  switch (data.type) {
    case 'code':
      return (
        <CodeDemo {...data}>
          <Component />
        </CodeDemo>
      );
    case 'configurator':
      return (
        <ConfiguratorDemo {...data}>
          <Component />
        </ConfiguratorDemo>
      );
    case 'styles-api':
      return (
        <StylesApiDemo {...data}>
          <Component />
        </StylesApiDemo>
      );
    default:
      return null;
  }
}
