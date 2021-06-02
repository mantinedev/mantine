import React from 'react';
import { Table, Title, Text } from '@mantine/core';
import * as STYLES_API from '@mantine/core/src/styles.api';
import GatsbyLink from '../../MdxProvider/GatsbyLink/GatsbyLink';
import { generateStylesCode, generateClassNamesCode } from './generate-styles-code';
import CodeHighlight from '../../../CodeHighlight/CodeHighlight';

interface StylesApiProps {
  component: string;
}

export function StylesApi({ component }: StylesApiProps) {
  const COMPONENT_STYLES = STYLES_API[component];

  if (!COMPONENT_STYLES || typeof COMPONENT_STYLES !== 'object') {
    return null;
  }

  const rows = Object.keys(COMPONENT_STYLES).map((name) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{COMPONENT_STYLES[name]}</td>
    </tr>
  ));

  return (
    <>
      <Title order={2} style={{ fontWeight: 500, marginBottom: 15 }}>
        Mantine styles API
      </Title>

      <Text style={{ maxWidth: 620 }}>
        Mantine components support styling of individual elements, add your class or inline styles
        to any element inside component. For more information see{' '}
        <GatsbyLink to="/guides/styles/">styles API guide</GatsbyLink>.
      </Text>

      <Title order={2} style={{ fontWeight: 500, marginBottom: 15, marginTop: 30 }}>
        {component} component styles API
      </Title>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <Title order={3} style={{ fontWeight: 500, marginBottom: 15, marginTop: 30 }}>
        Inline {component} styles
      </Title>

      <CodeHighlight
        language="tsx"
        code={generateStylesCode(Object.keys(COMPONENT_STYLES), component)}
      />

      <Title order={3} style={{ fontWeight: 500, marginBottom: 15, marginTop: 30 }}>
        {component} classNames
      </Title>

      <CodeHighlight
        language="tsx"
        code={generateClassNamesCode(Object.keys(COMPONENT_STYLES), component)}
      />
    </>
  );
}
