import React from 'react';
import { SheetsRegistry } from 'react-jss';

interface MantineServerStylesProps {
  registry: SheetsRegistry;
}

export function MantineServerStyles({ registry }: MantineServerStylesProps) {
  return <style id="mantine-ssr-styles">{registry.toString()}</style>;
}
