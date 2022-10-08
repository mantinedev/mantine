import React from 'react';
import { render } from '@testing-library/react';
import { Portal } from './Portal';

describe('@mantine/core/Portal', () => {
  it('renders content inside portal', () => {
    render(<Portal className="test-portal">test-portal</Portal>);
    const portal = document.querySelector('.test-portal');
    expect(portal.textContent).toBe('test-portal');
  });

  it('renders portal inside given target element', () => {
    const element = document.createElement('div');
    render(
      <Portal className="test-portal" target={element}>
        test-portal
      </Portal>
    );
    expect(element.querySelector('.test-portal').textContent).toBe('test-portal');
    expect(document.querySelectorAll('.test-portal')).toHaveLength(0);
  });

  it('supports rendering multiple portal without target', () => {
    render(<Portal className="test-portal">test-portal-1</Portal>);
    render(<Portal className="test-portal">test-portal-2</Portal>);
    render(<Portal className="test-portal">test-portal-3</Portal>);
    expect(document.querySelectorAll('.test-portal')).toHaveLength(3);
  });

  it('supports rendering multiple portal with target', () => {
    const element = document.createElement('div');
    render(
      <Portal className="test-portal" target={element}>
        test-portal-1
      </Portal>
    );
    render(
      <Portal className="test-portal" target={element}>
        test-portal-2
      </Portal>
    );
    render(
      <Portal className="test-portal" target={element}>
        test-portal-3
      </Portal>
    );

    expect(element.querySelectorAll('.test-portal')).toHaveLength(3);
    expect(document.querySelectorAll('.test-portal')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Portal.displayName).toStrictEqual('@mantine/core/Portal');
  });
});
