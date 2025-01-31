import { Code, ColorSwatch, DEFAULT_THEME, defaultCssVariablesResolver, keys } from '@mantine/core';
import { MdxDataTable, MdxTitle } from '../MdxProvider';

export function ColorPreview({ value }: { value: string }) {
  if (!value || !value.match(/^(var\(--mantine-color[\w-]+\)|#\w+|rgba?\([\w,. ]+\))$/gm)) {
    return null;
  }

  return <ColorSwatch size={20} color={value} />;
}

export function CssVariablesList() {
  const resolvedVariables = defaultCssVariablesResolver(DEFAULT_THEME);
  const variables = keys(resolvedVariables.variables).map((key) => [
    <Code style={{ whiteSpace: 'nowrap' }} key="code">
      {key}
    </Code>,
    resolvedVariables.variables[key],
    <ColorPreview value={resolvedVariables.variables[key]} key="swatch" />,
  ]);

  const lightVariables = keys(resolvedVariables.light).map((key) => [
    <Code style={{ whiteSpace: 'nowrap' }} key="code">
      {key}
    </Code>,
    resolvedVariables.light[key],
    <ColorPreview value={resolvedVariables.light[key]} key="swatch" />,
  ]);

  const darkVariables = keys(resolvedVariables.dark).map((key) => [
    <Code style={{ whiteSpace: 'nowrap' }} key="code">
      {key}
    </Code>,
    resolvedVariables.dark[key],
    <ColorPreview value={resolvedVariables.dark[key]} key="swatch" />,
  ]);

  return (
    <>
      <MdxTitle order={2} id="no-dependency">
        CSS variables not depending on color scheme
      </MdxTitle>
      <MdxDataTable data={variables} />

      <MdxTitle order={2} id="light-only">
        Light color scheme only variables
      </MdxTitle>
      <MdxDataTable data={lightVariables} />

      <MdxTitle order={2} id="dark-only">
        Dark color scheme only variables
      </MdxTitle>
      <MdxDataTable data={darkVariables} />
    </>
  );
}
