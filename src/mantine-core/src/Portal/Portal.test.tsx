import React from 'react';
import { mount } from 'enzyme';
import { Portal } from './Portal';

describe('@mantine/core/Portal', () => {
  // Clean up dom as jest does not do this automatically
  afterEach(() => {
    document.getElementsByTagName('body')[0].innerHTML = '';
  });

  it('has correct displayName', () => {
    expect(Portal.displayName).toEqual('@mantine/core/Portal');
  });

  it('renders content inside portal', () => {
    mount(<Portal>test-portal</Portal>);
    const portal = document.querySelector('[data-mantine-portal]');
    expect(portal.textContent).toBe('test-portal');
  });

  it('adds z-index styles from prop', () => {
    mount(<Portal zIndex={1543}>test-portal</Portal>);
    const portal = document.querySelector('[data-mantine-portal]');
    expect(window.getComputedStyle(portal).zIndex).toBe('1543');
  });

  it('renders portal inside given target element', () => {
    const element = document.createElement('div');
    mount(<Portal target={element}>test-portal</Portal>);
    expect(element.querySelector('[data-mantine-portal]').textContent).toBe('test-portal');
    expect(document.querySelectorAll('[data-mantine-portal]')).toHaveLength(0);
  });

  it('supports rendering multiple portal without target', () => {
    mount(<Portal>test-portal-1</Portal>);
    mount(<Portal>test-portal-2</Portal>);
    mount(<Portal>test-portal-3</Portal>);
    expect(document.querySelectorAll('[data-mantine-portal]')).toHaveLength(3);
  });

  it('supports rendering multiple portal with target', () => {
    const element = document.createElement('div');
    mount(<Portal target={element}>test-portal-1</Portal>);
    mount(<Portal target={element}>test-portal-2</Portal>);
    mount(<Portal target={element}>test-portal-3</Portal>);

    expect(element.querySelectorAll('[data-mantine-portal]')).toHaveLength(3);
    expect(document.querySelectorAll('[data-mantine-portal]')).toHaveLength(0);
  });

  it('supports adds given className to root element', () => {
    mount(<Portal className="test-class">test-portal-1</Portal>);
    expect(document.querySelector('[data-mantine-portal]').classList.contains('test-class')).toBe(
      true
    );
  });
});
