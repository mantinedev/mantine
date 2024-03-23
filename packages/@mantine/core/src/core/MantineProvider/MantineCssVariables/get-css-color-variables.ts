import { alpha, getPrimaryShade } from '../color-functions';
import { MantineColor, MantineTheme } from '../theme.types';

interface GetColorVariablesInput {
  theme: MantineTheme;
  color: MantineColor;
  colorScheme: 'light' | 'dark';
  withColorValues?: boolean;
}

export function getCSSColorVariables({
  theme,
  color,
  colorScheme,
  withColorValues = true,
}: GetColorVariablesInput) {
  if (!theme.colors[color]) {
    return {};
  }

  if (colorScheme === 'light') {
    const primaryShade = getPrimaryShade(theme, 'light');

    const dynamicVariables = {
      [`--mantine-color-${color}-text`]: `var(--mantine-color-${color}-filled)`,
      [`--mantine-color-${color}-filled`]: `var(--mantine-color-${color}-${primaryShade})`,
      [`--mantine-color-${color}-filled-hover`]: `var(--mantine-color-${color}-${
        primaryShade === 9 ? 8 : primaryShade + 1
      })`,
      [`--mantine-color-${color}-light`]: alpha(theme.colors[color][primaryShade], 0.1),
      [`--mantine-color-${color}-light-hover`]: alpha(theme.colors[color][primaryShade], 0.12),
      [`--mantine-color-${color}-light-color`]: `var(--mantine-color-${color}-${primaryShade})`,
      [`--mantine-color-${color}-outline`]: `var(--mantine-color-${color}-${primaryShade})`,
      [`--mantine-color-${color}-outline-hover`]: alpha(theme.colors[color][primaryShade], 0.05),
    };

    if (!withColorValues) {
      return dynamicVariables;
    }

    return {
      [`--mantine-color-${color}-0`]: theme.colors[color][0],
      [`--mantine-color-${color}-1`]: theme.colors[color][1],
      [`--mantine-color-${color}-2`]: theme.colors[color][2],
      [`--mantine-color-${color}-3`]: theme.colors[color][3],
      [`--mantine-color-${color}-4`]: theme.colors[color][4],
      [`--mantine-color-${color}-5`]: theme.colors[color][5],
      [`--mantine-color-${color}-6`]: theme.colors[color][6],
      [`--mantine-color-${color}-7`]: theme.colors[color][7],
      [`--mantine-color-${color}-8`]: theme.colors[color][8],
      [`--mantine-color-${color}-9`]: theme.colors[color][9],
      ...dynamicVariables,
    };
  }

  const primaryShade = getPrimaryShade(theme, 'dark');
  const dynamicVariables = {
    [`--mantine-color-${color}-text`]: `var(--mantine-color-${color}-4)`,
    [`--mantine-color-${color}-filled`]: `var(--mantine-color-${color}-${primaryShade})`,
    [`--mantine-color-${color}-filled-hover`]: `var(--mantine-color-${color}-${
      primaryShade === 9 ? 8 : primaryShade + 1
    })`,
    [`--mantine-color-${color}-light`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.15
    ),
    [`--mantine-color-${color}-light-hover`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.2
    ),
    [`--mantine-color-${color}-light-color`]: `var(--mantine-color-${color}-${Math.max(primaryShade - 5, 0)})`,
    [`--mantine-color-${color}-outline`]: `var(--mantine-color-${color}-${Math.max(primaryShade - 4, 0)})`,
    [`--mantine-color-${color}-outline-hover`]: alpha(
      theme.colors[color][Math.max(primaryShade - 4, 0)],
      0.05
    ),
  };

  if (!withColorValues) {
    return dynamicVariables;
  }

  return {
    [`--mantine-color-${color}-0`]: theme.colors[color][0],
    [`--mantine-color-${color}-1`]: theme.colors[color][1],
    [`--mantine-color-${color}-2`]: theme.colors[color][2],
    [`--mantine-color-${color}-3`]: theme.colors[color][3],
    [`--mantine-color-${color}-4`]: theme.colors[color][4],
    [`--mantine-color-${color}-5`]: theme.colors[color][5],
    [`--mantine-color-${color}-6`]: theme.colors[color][6],
    [`--mantine-color-${color}-7`]: theme.colors[color][7],
    [`--mantine-color-${color}-8`]: theme.colors[color][8],
    [`--mantine-color-${color}-9`]: theme.colors[color][9],
    ...dynamicVariables,
  };
}
