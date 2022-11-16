import React, { PropsWithChildren, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { render, renderHook, screen } from '@testing-library/react';

import { ContextDrawerProps } from '../context';
import { DrawersProvider } from '../DrawersProvider';

import { useDrawers } from './use-drawers';

describe('@mantine/drawers/use-drawers', () => {
  it('returns context value of DrawersProvider', () => {
    const wrapper = ({ children }: PropsWithChildren<unknown>) => (
      <MantineProvider>
        <DrawersProvider>{children}</DrawersProvider>
      </MantineProvider>
    );

    const utils = renderHook(() => useDrawers(), { wrapper });
    const { current } = utils.result;

    expect(current.closeAll).toBeDefined();
    expect(current.closeDrawer).toBeDefined();
    expect(current.drawers).toBeDefined();
    expect(current.openConfirmDrawer).toBeDefined();
    expect(current.openContextDrawer).toBeDefined();
    expect(current.openDrawer).toBeDefined();
  });

  it('correctly passes innerProps to a context drawer', () => {
    const ContextDrawer = ({ innerProps }: ContextDrawerProps<{ text: string }>) => (
      <div>{innerProps.text}</div>
    );

    const wrapper = ({ children }) => (
      <MantineProvider>
        <DrawersProvider drawers={{ contextTest: ContextDrawer }}>{children}</DrawersProvider>
      </MantineProvider>
    );

    const testContent = 'context-drawer-test-content';
    const Component = () => {
      const drawers = useDrawers();

      useEffect(() => {
        drawers.openContextDrawer('contextTest', {
          innerProps: { text: testContent },
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('correctly renders a confirm drawer with labels from the provider', () => {
    const wrapper = ({ children }) => (
      <MantineProvider>
        <DrawersProvider labels={{ cancel: 'ProviderCancel', confirm: 'ProviderConfirm' }}>
          {children}
        </DrawersProvider>
      </MantineProvider>
    );

    const Component = () => {
      const drawers = useDrawers();

      useEffect(() => {
        drawers.openConfirmDrawer({});
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText('ProviderCancel')).toBeInTheDocument();
    expect(screen.getByText('ProviderConfirm')).toBeInTheDocument();
  });

  it('correctly renders a confirm drawer with overwritten provider labels', () => {
    const wrapper = ({ children }) => (
      <MantineProvider>
        <DrawersProvider labels={{ cancel: 'ProviderCancel', confirm: 'ProviderConfirm' }}>
          {children}
        </DrawersProvider>
      </MantineProvider>
    );

    const Component = () => {
      const drawers = useDrawers();

      useEffect(() => {
        drawers.openConfirmDrawer({
          labels: { confirm: 'Confirm', cancel: 'Cancel' },
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('correctly renders a confirm drawer with labels as HTMLElement', async () => {
    const wrapper = ({ children }) => (
      <MantineProvider>
        <DrawersProvider>{children}</DrawersProvider>
      </MantineProvider>
    );

    const Component = () => {
      const drawers = useDrawers();

      useEffect(() => {
        drawers.openConfirmDrawer({
          labels: {
            confirm: <span>Confirm</span>,
            cancel: <span>Cancel</span>,
          },
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });

    expect(screen.getByText('Confirm')).toContainHTML('span');
    expect(screen.getByText('Cancel')).toContainHTML('span');
  });

  it('correctly renders a regular drawer with children and a title', () => {
    const wrapper = ({ children }) => (
      <MantineProvider>
        <DrawersProvider>{children}</DrawersProvider>
      </MantineProvider>
    );

    const Component = () => {
      const drawers = useDrawers();

      useEffect(() => {
        drawers.openDrawer({
          title: 'Test title',
          children: <h1>Children</h1>,
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
