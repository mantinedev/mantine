import React from 'react';
import { Breadcrumbs, Text } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Breadcrumbs, Text } from '@mantine/core';

export function BreadcrumbsDemo() {
  const items = [
    { title: 'Mantine', href: 'https://mantine.dev' },
    { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
    { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
  ].map((item, index) => (
    <Text variant="link" component="a" href={item.href} key={index}>
      {item.title}
    </Text>
  ));

  return <Breadcrumbs separator="→">{items}</Breadcrumbs>;
}`;

export function BreadcrumbsBaseDemo() {
  const items = [
    { title: 'Mantine', href: 'https://mantine.dev' },
    { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
    { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
  ].map((item, index) => (
    <Text variant="link" component="a" href={item.href} key={index}>
      {item.title}
    </Text>
  ));

  return (
    <CodeDemo code={code} language="tsx">
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
    </CodeDemo>
  );
}
