import { Title } from '@mantine/core';
import * as stylesData from '@docs/styles-api';
import type { Modifier } from '@docs/styles-api';
import { getComponentName } from '@/components/PropsTable';
import { TableError } from '@/components/TableError';
import { ModifiersTable } from './ModifiersTable';
import { SelectorsTable } from './SelectorsTable';
import { VariablesTable } from './VariablesTable';
import classes from './StylesApiTable.module.css';

export interface StylesApiData {
  selectors: Record<string, string>;
  vars: Record<string, Record<string, string>>;
  modifiers: Modifier<string>[];
}

const STYLES_API_DATA: Record<string, StylesApiData> = stylesData as any;

export interface StylesApiTableProps {
  component: string;
  componentPrefix: string | undefined;
}

export function StylesApiTable({ component, componentPrefix }: StylesApiTableProps) {
  const data = STYLES_API_DATA[`${component}StylesApi`];
  if (!data) {
    return <TableError errorOf="Styles API" />;
  }

  const componentName = getComponentName({ component, componentPrefix });

  return (
    <>
      <div className={classes.section}>
        <Title order={2} className={classes.title}>
          {componentName} selectors
        </Title>
        <SelectorsTable component={component} data={data} />
      </div>

      {Object.keys(data.vars).length > 0 && (
        <div className={classes.section}>
          <Title order={2} className={classes.title}>
            {componentName} CSS variables
          </Title>
          <VariablesTable data={data} />
        </div>
      )}

      {Array.isArray(data.modifiers) && data.modifiers.length > 0 && (
        <div className={classes.section}>
          <Title order={2} className={classes.title}>
            {componentName} data attributes
          </Title>
          <ModifiersTable data={data} />
        </div>
      )}
    </>
  );
}
