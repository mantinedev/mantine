import { useState } from 'react';
import { Tuple, DEFAULT_THEME } from '@mantine/core';

type MantineColors = Record<string, Tuple<string, 10>>;

interface UseThemeColors {
  initialValues: MantineColors;
}

let counter = 1;

export function useColorState({ initialValues }: UseThemeColors) {
  const [state, setState] = useState(Object.entries(initialValues));

  const addColor = () =>
    setState((current) => {
      const name = `color-${counter}`;
      counter += 1;
      return [...current, [name, DEFAULT_THEME.colors.blue]];
    });

  const removeColor = (colorName: string) =>
    setState((current) => current.filter((color) => color[0] !== colorName));

  const setColors = (colorIndex: number, hexValue: string) =>
    setState((current) => {
      const clone = [...current];
      clone[colorIndex] = Array(10).fill(hexValue) as any;
      return clone;
    });

  const setColor = (colorIndex: number, valueIndex: number, hexValue: string) =>
    setState((current) => {
      const clone = [...current];
      const clonedColors = [...clone[colorIndex][1]];
      clonedColors[valueIndex] = hexValue;
      clone[colorIndex] = [clone[0], clonedColors] as any;
      return clone;
    });

  return {
    colors: Object.fromEntries(state),
    colorsState: state,
    colorsHandlers: {
      addColor,
      removeColor,
      setColors,
      setColor,
    },
  };
}
