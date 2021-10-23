import React from 'react';
import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStylesApi,
} from '@mantine/tests';
import { AppShell } from './AppShell';
import { AppShell as AppShellStylesAPi } from './styles.api';

const defaultProps = { children: 'test' };

describe('@mantine/core/AppShell', () => {
  itRendersChildren(AppShell, defaultProps);
  itSupportsClassName(AppShell, defaultProps);
  itSupportsStyle(AppShell, defaultProps);
  itSupportsOthers(AppShell, defaultProps);
  itSupportsRef(AppShell, defaultProps, HTMLDivElement);
  itSupportsStylesApi(AppShell, defaultProps, Object.keys(AppShellStylesAPi), 'AppShell');

  it('has correct displayName', () => {
    expect(AppShell.displayName).toEqual('@mantine/core/AppShell');
  });
});
