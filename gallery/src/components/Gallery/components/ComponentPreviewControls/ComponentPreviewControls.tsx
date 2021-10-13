import React from 'react';
import { Affix } from '@mantine/core';
import { CanvasHeader, CanvasHeaderProps } from '../ComponentCanvas/CanvasHeader/CanvasHeader';

export function ComponentPreviewControls(props: CanvasHeaderProps) {
  return (
    <Affix position={{ bottom: 0, left: 0, right: 0 }} zIndex={1}>
      <CanvasHeader {...props} excludeExternal style={{ borderBottom: 0 }} />
    </Affix>
  );
}
