import React from 'react';
import CodeDemo from '../CodeDemo/CodeDemo';
import Configurator from '../Configurator/Configurator';

type ConfiguratorProps = React.ComponentProps<typeof Configurator>;
type CodeDemoProps = React.ComponentProps<typeof CodeDemo>;

interface DemoProps {
  toggle?: boolean;
  demoProps?: CodeDemoProps;
  configuratorProps?: Omit<ConfiguratorProps, 'props' | 'codeTemplate' | 'component'>;

  data: {
    type: 'configurator' | 'demo';
    component: React.FC;
    code?: string;
    demoProps?: CodeDemoProps;
    configurator?: ConfiguratorProps['props'];
    configuratorProps?: Omit<ConfiguratorProps, 'props' | 'codeTemplate' | 'component'>;
    codeTemplate?: ConfiguratorProps['codeTemplate'];
  };
}

export default function Demo({ data, demoProps, configuratorProps }: DemoProps) {
  if (data.type === 'demo') {
    return (
      <CodeDemo language="tsx" code={data.code?.trim()} {...data.demoProps} {...demoProps}>
        <data.component />
      </CodeDemo>
    );
  }

  if (data.type === 'configurator') {
    return (
      <Configurator
        component={data.component}
        codeTemplate={data.codeTemplate}
        props={data.configurator}
        {...data.configuratorProps}
        {...configuratorProps}
      />
    );
  }

  return null;
}
