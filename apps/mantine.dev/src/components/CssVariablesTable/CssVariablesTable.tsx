import { Code, DEFAULT_THEME, defaultCssVariablesResolver } from '@mantine/core';
import { MdxDataTable } from '../MdxProvider';

interface CssVariablesTableProps {
  variables: string[];
}

export function CssVariablesTable({ variables }: CssVariablesTableProps) {
  const resolvedVariables = defaultCssVariablesResolver(DEFAULT_THEME);

  const data = variables.map((variable) => [
    <Code style={{ whiteSpace: 'nowrap' }} key="code">
      {variable}
    </Code>,
    resolvedVariables.variables[variable as keyof typeof resolvedVariables.variables],
  ]);

  return <MdxDataTable data={data} head={['Variable', 'Default value']} />;
}
