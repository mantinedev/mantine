import { render, tests } from '@mantine-tests/core';
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

  it('syncs its className to the generated Portal node', () => {
    render(<Portal className="test-portal">test-portal</Portal>);
    const portal = document.querySelector('[data-portal]')!;
    expect(portal.classList).toContain('test-portal');
  });

  it('does not crash when className is empty or contains extra spaces', () => {
    render(<Portal className="">empty-className</Portal>);
    render(<Portal className="hello  world">className-with-spaces</Portal>);
    expect(document.querySelectorAll('[data-portal]')).toHaveLength(2);
  });
});
