import React from 'react';
import { Code, DEFAULT_THEME, defaultCssVariablesResolver, keys } from '@mantine/core';
import { MdxDataTable, MdxTitle } from '../MdxProvider';
import { CssVariableColorSwatch } from './CssVariableColorSwatch/CssVariableColorSwatch';

export function CssVariablesList() {
  const resolvedVariables = defaultCssVariablesResolver(DEFAULT_THEME);
  const variables = keys(resolvedVariables.variables).map((key) => [
    <Code style={{ whiteSpace: 'nowrap' }}>{key}</Code>,
    resolvedVariables.variables[key],
    <CssVariableColorSwatch variable={resolvedVariables.variables[key]} />,
  ]);

  const lightVariables = keys(resolvedVariables.light).map((key) => [
    <Code style={{ whiteSpace: 'nowrap' }}>{key}</Code>,
    resolvedVariables.light[key],
    <CssVariableColorSwatch variable={resolvedVariables.light[key]} />,
  ]);

  const darkVariables = keys(resolvedVariables.dark).map((key) => [
    <Code style={{ whiteSpace: 'nowrap' }}>{key}</Code>,
    resolvedVariables.dark[key],
    <CssVariableColorSwatch variable={resolvedVariables.dark[key]} />,
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
