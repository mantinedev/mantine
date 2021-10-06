import React from 'react';
import { Table, Title, Text } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { lowerFirst } from '@mantine/hooks';
import * as CORE_STYLES_API from '@mantine/core/src/styles.api';
import * as PRISM_STYLES_API from '@mantine/prism/src/styles.api';
import * as DATES_STYLES_API from '@mantine/dates/src/styles.api';
import * as RTE_STYLES_API from '@mantine/rte/src/styles.api';
import { generateStylesCode, generateClassNamesCode } from '../generate-styles-code';
import useStyles from './StylesApiItem.styles';

const STYLES_API = {
  ...CORE_STYLES_API,
  ...PRISM_STYLES_API,
  ...DATES_STYLES_API,
  ...RTE_STYLES_API,
};

interface StylesApiItemProps {
  component: string;
}

const getSelector = (str: string) =>
  lowerFirst(str).replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

export function StylesApiItem({ component }: StylesApiItemProps) {
  const { classes } = useStyles();
  const COMPONENT_STYLES = STYLES_API[component];

  if (!COMPONENT_STYLES || typeof COMPONENT_STYLES !== 'object') {
    return null;
  }

  const CLASS_NAMES = Object.keys(COMPONENT_STYLES);
  const rows = CLASS_NAMES.map((name) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{`.mantine-${getSelector(component)}-${name}`}</td>
      <td>{COMPONENT_STYLES[name]}</td>
    </tr>
  ));

  return (
    <>
      <Title order={3} className={classes.title} style={{ marginTop: 45 }}>
        {component} styles API
      </Title>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Static selector</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <div className={classes.codeSections}>
        <div className={classes.codeSection}>
          <Text weight={500} className={classes.title}>
            Inline styles
          </Text>

          <Prism language="tsx">{generateStylesCode(CLASS_NAMES, component)}</Prism>
        </div>

        <div className={classes.codeSection}>
          <Text weight={500} className={classes.title}>
            classNames
          </Text>

          <Prism language="tsx">{generateClassNamesCode(CLASS_NAMES, component)}</Prism>
        </div>
      </div>
    </>
  );
}
