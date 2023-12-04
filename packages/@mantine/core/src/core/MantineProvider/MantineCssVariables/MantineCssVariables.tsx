import React from 'react';
import { useMantineStyleNonce, useMantineCssVariablesResolver } from '../Mantine.context';
import { useMantineTheme } from '../MantineThemeProvider';
import { convertCssVariables } from '../convert-css-variables/convert-css-variables';
import { getMergedVariables } from './get-merged-variables';
import { removeDefaultVariables } from './remove-default-variables';

interface MantineCssVariablesProps {
  cssVariablesSelector: string;
}

function getColorSchemeCssVariables(selector: string) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}

export function MantineCssVariables({ cssVariablesSelector }: MantineCssVariablesProps) {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const mergedVariables = getMergedVariables({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ':root';
  const cleanedVariables = shouldCleanVariables
    ? removeDefaultVariables(mergedVariables)
    : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);

  if (css) {
    return (
      <style
        data-mantine-styles
        nonce={nonce?.()}
        dangerouslySetInnerHTML={{
          __html: `${css}${
            shouldCleanVariables ? '' : getColorSchemeCssVariables(cssVariablesSelector)
          }`,
        }}
      />
    );
  }

  return null;
}

MantineCssVariables.displayName = '@mantine/CssVariables';
