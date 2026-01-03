import { convertCssVariables } from '../convert-css-variables/convert-css-variables';
import { useMantineCssVariablesResolver, useMantineStyleNonce } from '../Mantine.context';
import { useMantineTheme } from '../MantineThemeProvider';
import { getMergedVariables } from './get-merged-variables';
import { removeDefaultVariables } from './remove-default-variables';

interface MantineCssVariablesProps {
  cssVariablesSelector?: string;
  deduplicateCssVariables: boolean;
}

function getColorSchemeCssVariables(selectorOverride?: string) {
  return convertCssVariables(
    {
      variables: {},
      dark: { '--mantine-color-scheme': 'dark' },
      light: { '--mantine-color-scheme': 'light' },
    },
    selectorOverride
  );
}

export function MantineCssVariables({
  cssVariablesSelector,
  deduplicateCssVariables,
}: MantineCssVariablesProps) {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const mergedVariables = getMergedVariables({ theme, generator });
  const shouldCleanVariables =
    (cssVariablesSelector === undefined ||
      cssVariablesSelector === ':root' ||
      cssVariablesSelector === ':host') &&
    deduplicateCssVariables;
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
