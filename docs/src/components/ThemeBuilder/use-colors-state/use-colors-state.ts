import { useState } from 'react';
import { DEFAULT_THEME, Tuple } from '@mantine/core';

let counter = 1;

export function useColorsState() {
  const [state, setState] = useState(Object.entries(DEFAULT_THEME.colors));

  const addColor = () =>
    setState((current) => {
      const name = `color-${counter}`;
      counter += 1;
      return [...current, [name, DEFAULT_THEME.colors.blue]];
    });

  const removeColor = (colorIndex: number) =>
    setState((current) => current.filter((_color, index) => index !== colorIndex));

  const setColors = (colorIndex: number, hexValue: string) =>
    setState((current) => {
      const clone = [...current];
      clone[colorIndex] = [clone[colorIndex][0], Array(10).fill(hexValue) as Tuple<string, 10>];
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

  const setName = (colorIndex: number, name: string) =>
    setState((current) => {
      const clone = [...current];
      clone[colorIndex] = [name, clone[colorIndex][1]];
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
      setName,
    },
  };
}
