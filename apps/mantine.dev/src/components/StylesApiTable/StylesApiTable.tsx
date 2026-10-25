import { use, useState } from 'react';
import { Tabs, Title } from '@mantine/core';
import { getComponentName } from '@/components/PropsTable';
import { TableError } from '@/components/TableError';
import { loadStylesApiData } from './load-styles-api-data';
import { ModifiersTable } from './ModifiersTable';
import { SelectorsTable } from './SelectorsTable';
import { VariablesTable } from './VariablesTable';
import classes from './StylesApiTable.module.css';

export type { StylesApiData } from './load-styles-api-data';

export interface StylesApiTableProps {
  component: string;
  componentPrefix: string | undefined;
}

export function StylesApiTable({ component, componentPrefix }: StylesApiTableProps) {
  const [value, setValue] = useState<string | null>('selectors');
  const data = use(loadStylesApiData(component));

  if (!data) {
    return <TableError errorOf="Styles API" />;
  }

  const componentName = getComponentName({ component, componentPrefix });
  const hasVariables = Object.keys(data.vars).length > 0;
  const hasModifiers = Array.isArray(data.modifiers) && data.modifiers.length > 0;

  const title = (
    <Title order={3} className={classes.title}>
      {componentName} Styles API
    </Title>
  );

  if (!hasVariables && !hasModifiers) {
    return (
      <>
        {title}
        <SelectorsTable component={component} data={data} />
      </>
    );
  }

  return (
    <>
      {title}

      <Tabs
        value={value}
        onChange={setValue}
        classNames={{ panel: classes.panel, tab: classes.tab }}
        radius="md"
        variant="pills"
      >
        <Tabs.List data-with-radius>
          <Tabs.Tab value="selectors">Selectors</Tabs.Tab>
          {hasVariables && <Tabs.Tab value="variables">CSS variables</Tabs.Tab>}
          {hasModifiers && <Tabs.Tab value="modifiers">Data attributes</Tabs.Tab>}
        </Tabs.List>

        <Tabs.Panel value="selectors">
          <SelectorsTable component={component} data={data} />
        </Tabs.Panel>

        {hasVariables && (
          <Tabs.Panel value="variables">
            <VariablesTable data={data} />
          </Tabs.Panel>
        )}

        {hasModifiers && (
          <Tabs.Panel value="modifiers">
            <ModifiersTable data={data} />
          </Tabs.Panel>
        )}
      </Tabs>
    </>
  );
}
