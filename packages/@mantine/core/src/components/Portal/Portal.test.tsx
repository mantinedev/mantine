import { StrictMode } from 'react';
import { act } from '@testing-library/react';
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

  it.each([true, false])(
    'waits for the body before mounting children (reuseTargetNode=%s)',
    async (reuseTargetNode) => {
      const body = document.body;
      const childRender = jest.fn();
      const ref = jest.fn();
      function Child() {
        childRender();
        return <span>deferred-content</span>;
      }

      const { rerender, unmount } = render(null);
      body.remove();

      try {
        rerender(
          <StrictMode>
            <Portal reuseTargetNode={reuseTargetNode} ref={ref}>
              <Child />
            </Portal>
          </StrictMode>
        );
        expect(childRender).not.toHaveBeenCalled();
        expect(ref).not.toHaveBeenCalled();

        await act(async () => {
          document.documentElement.append(body);
        });

        expect(childRender).toHaveBeenCalled();
        expect(ref).toHaveBeenCalledTimes(1);
        expect(ref.mock.calls[0][0].textContent).toContain('deferred-content');
        expect(body.contains(ref.mock.calls[0][0])).toBe(true);
      } finally {
        document.documentElement.append(body);
        unmount();
      }
    }
  );

  it('uses one shared container when multiple waiting portals recover', async () => {
    removeSharedPortalNodes();
    const body = document.body;
    const { rerender, unmount } = render(null);
    body.remove();

    try {
      rerender(
        <>
          <Portal>first-deferred</Portal>
          <Portal>second-deferred</Portal>
        </>
      );
      await act(async () => {
        document.documentElement.append(body);
      });

      const nodes = document.querySelectorAll('[data-mantine-shared-portal-node]');
      expect(nodes).toHaveLength(1);
      expect(nodes[0].textContent).toBe('first-deferredsecond-deferred');
    } finally {
      document.documentElement.append(body);
      unmount();
    }
  });

  it('cancels pending initialization when unmounted', async () => {
    removeSharedPortalNodes();
    const body = document.body;
    const ref = jest.fn();
    const { rerender, unmount } = render(null);
    body.remove();

    try {
      rerender(<Portal ref={ref}>cancelled-content</Portal>);
      unmount();
      await act(async () => {
        document.documentElement.append(body);
      });

      expect(ref).not.toHaveBeenCalled();
      expect(document.querySelector('[data-mantine-shared-portal-node]')).toBeNull();
    } finally {
      document.documentElement.append(body);
      unmount();
    }
  });

  it.each(['element', 'selector'])(
    'renders into an explicit %s target without a body',
    (targetType) => {
      const body = document.body;
      const target = document.createElement('div');
      target.id = 'explicit-portal-target';
      document.documentElement.append(target);
      const { rerender, unmount } = render(null);
      body.remove();

      try {
        rerender(
          <Portal target={targetType === 'element' ? target : '#explicit-portal-target'}>
            explicit-content
          </Portal>
        );
        expect(target.textContent).toBe('explicit-content');
        unmount();
        expect(target.isConnected).toBe(true);
      } finally {
        document.documentElement.append(body);
        unmount();
        target.remove();
      }
    }
  );

  it('cancels waiting when switched to an explicit target', async () => {
    const body = document.body;
    const target = document.createElement('div');
    const ref = jest.fn();
    const { rerender, unmount } = render(null);
    body.remove();

    try {
      rerender(<Portal ref={ref}>waiting-content</Portal>);
      rerender(
        <Portal ref={ref} target={target}>
          explicit-content
        </Portal>
      );
      expect(target.textContent).toBe('explicit-content');
      await act(async () => {
        document.documentElement.append(body);
      });
      expect(ref).toHaveBeenCalledTimes(1);
      expect(ref).toHaveBeenCalledWith(target);
    } finally {
      document.documentElement.append(body);
      unmount();
    }
  });

  it.each(['missing', 'replaced', 'reparented'])(
    'removes its owned container when the body is %s',
    (scenario) => {
      const body = document.body;
      const replacement = document.createElement('body');
      const { unmount } = render(<Portal reuseTargetNode={false}>owned-content</Portal>);
      const node = document.querySelector('[data-portal]:not([data-mantine-shared-portal-node])')!;

      if (scenario === 'reparented') {
        replacement.append(node);
      } else {
        body.remove();
        if (scenario === 'replaced') {
          document.documentElement.append(replacement);
        }
      }

      try {
        unmount();
        expect(node.parentNode).toBeNull();
      } finally {
        replacement.remove();
        document.documentElement.append(body);
        unmount();
      }
    }
  );
});
