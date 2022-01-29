import React from 'react';
import { Header } from '../../Header/Header';
import { getElementHeight } from './get-element-height';

describe('@mantine/core/AppShell/get-element-height', () => {
  it('extracts correct height as a number value', () => {
    expect(getElementHeight(<Header height={59}>test-header</Header>)).toBe('59px');
  });

  it('extracts correct height as a string value', () => {
    expect(getElementHeight(<Header height="calc(100vh - 56px)">test-header</Header>)).toBe(
      'calc(100vh - 56px)'
    );
  });
});
