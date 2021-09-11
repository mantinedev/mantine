import React from 'react';
import { SheetsRegistry } from 'react-jss';

interface ServerStylesProps {
  registry: SheetsRegistry;
}

export const SERVER_STYLES_ID = 'mantine-server-styles';

export function ServerStyles({ registry }: ServerStylesProps) {
  return <style id={SERVER_STYLES_ID}>{registry.toString()}</style>;
}
