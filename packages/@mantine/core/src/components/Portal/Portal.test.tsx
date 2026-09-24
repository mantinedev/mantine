import { render, tests } from '@mantine-tests/core';
import { Portal } from './Portal';

function removeSharedPortalNodes() {
  document.querySelectorAll('[data-mantine-shared-portal-node]').forEach((node) => node.remove());
}

describe('@mantine/core/Portal', () => {
  tests.itHasExtend({ component: Portal });
  tests.itSupportsRef({ component: Portal, refType: HTMLDivElement, props: { children: 'test' } });

  it('renders content inside portal', () => {
    render(<Portal>test-portal</Portal>);
    const portal = document.querySelector('[data-portal]')!;
    expect(portal.textContent).toBe('test-portal');
  });

  it('supports rendering multiple portal without target', () => {
    render(<Portal reuseTargetNode={false}>test-portal-1</Portal>);
    render(<Portal reuseTargetNode={false}>test-portal-2</Portal>);
    render(<Portal reuseTargetNode={false}>test-portal-3</Portal>);
    expect(
      document.querySelectorAll('[data-portal]:not([data-mantine-shared-portal-node])')
    ).toHaveLength(3);
  });

  it('has correct displayName', () => {
    expect(Portal.displayName).toStrictEqual('@mantine/core/Portal');
  });

  it('syncs its className to the generated Portal node', () => {
    render(
      <Portal className="test-portal" reuseTargetNode={false}>
        test-portal
      </Portal>
    );
    const portal = document.querySelector('[data-portal]:not([data-mantine-shared-portal-node])')!;
    expect(portal.classList).toContain('test-portal');
  });

  it('reuses a single shared portal node for multiple portals by default', () => {
    removeSharedPortalNodes();
    render(<Portal>shared-portal-1</Portal>);
    render(<Portal>shared-portal-2</Portal>);
    const sharedNodes = document.querySelectorAll('[data-mantine-shared-portal-node]');
    expect(sharedNodes).toHaveLength(1);
    expect(sharedNodes[0].textContent).toContain('shared-portal-1');
    expect(sharedNodes[0].textContent).toContain('shared-portal-2');
  });

  it('recreates shared portal node when it is removed from the DOM', () => {
    removeSharedPortalNodes();
    render(<Portal>cached-content</Portal>);
    const firstNode = document.querySelector('[data-mantine-shared-portal-node]')!;
    firstNode.remove();
    render(<Portal>recreated-content</Portal>);
    const secondNode = document.querySelector('[data-mantine-shared-portal-node]')!;
    expect(secondNode).not.toBe(firstNode);
    expect(document.body.contains(secondNode)).toBe(true);
    expect(secondNode.textContent).toBe('recreated-content');
  });

  it('adopts existing shared portal node from the DOM when cache is stale', () => {
    removeSharedPortalNodes();
    const manualNode = document.createElement('div');
    manualNode.setAttribute('data-mantine-shared-portal-node', 'true');
    document.body.appendChild(manualNode);
    render(<Portal>adopted-content</Portal>);
    expect(document.querySelectorAll('[data-mantine-shared-portal-node]')).toHaveLength(1);
    expect(manualNode.textContent).toBe('adopted-content');
  });

  it('does not crash when className is empty or contains extra spaces', () => {
    render(
      <Portal className="" reuseTargetNode={false}>
        empty-className
      </Portal>
    );
    render(
      <Portal className="hello  world" reuseTargetNode={false}>
        className-with-spaces
      </Portal>
    );
    expect(
      document.querySelectorAll('[data-portal]:not([data-mantine-shared-portal-node])')
    ).toHaveLength(2);
  });
});
