import React from 'react';
import { render, tests } from '@mantine/tests';
import { Portal } from './Portal';

describe('@mantine/core/Portal', () => {
  tests.itSupportsRef({
    component: Portal,
    props: { children: 'test' },
    refType: HTMLDivElement,
  });

  it('renders content inside portal', () => {
    render(<Portal>test-portal</Portal>);
    const portal = document.querySelector('[data-portal]')!;
    expect(portal.textContent).toBe('test-portal');
  });

  it('supports rendering multiple portal without target', () => {
    render(<Portal>test-portal-1</Portal>);
    render(<Portal>test-portal-2</Portal>);
    render(<Portal>test-portal-3</Portal>);
    expect(document.querySelectorAll('[data-portal]')).toHaveLength(3);
  });

  it('has correct displayName', () => {
    expect(Portal.displayName).toStrictEqual('@mantine/core/Portal');
  });
});
