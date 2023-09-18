import React from 'react';
import { DEFAULT_THEME } from '@mantine/core';
import { MdxCodeHighlight } from '../MdxProvider';

export function DefaultThemeData() {
  return <MdxCodeHighlight code={JSON.stringify(DEFAULT_THEME, null, 2)} language="json" />;
}
