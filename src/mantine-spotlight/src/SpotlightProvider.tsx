import React, { useState, useRef } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useActionsState } from './use-actions-state/use-actions-state';
import { useSpotlightShortcuts } from './use-spotlight-shortcuts/use-spotlight-shortcuts';
import { Spotlight, InnerSpotlightProps } from './Spotlight/Spotlight';
import type { SpotlightAction } from './types';
import { SpotlightContext } from './Spotlight.context';

export interface SpotlightProviderProps extends InnerSpotlightProps {
  actions: SpotlightAction[] | ((query: string) => SpotlightAction[]);
  children?: React.ReactNode;
  onSpotlightOpen?(): void;
  onSpotlightClose?(): void;
  onQueryChange?(query: string): void;
  shortcut?: string | string[] | null;
  cleanQueryOnClose?: boolean;
}

export function SpotlightProvider({
  actions: initialActions,
  children,
  shortcut = 'mod + K',
  onSpotlightClose,
  onSpotlightOpen,
  onQueryChange,
  cleanQueryOnClose = true,
  transitionDuration = 150,
  ...others
}: SpotlightProviderProps) {
  const timeoutRef = useRef<number>(-1);
  const [query, setQuery] = useState('');
  const [actions, { registerActions, removeActions, triggerAction }] = useActionsState(
    initialActions,
    query
  );

  const handleQueryChange = (value: string) => {
    setQuery(value);
    onQueryChange?.(value);
  };

  const [opened, { open, close, toggle }] = useDisclosure(false, {
    onClose: () => {
      onSpotlightClose?.();
      if (cleanQueryOnClose) {
        timeoutRef.current = window.setTimeout(() => {
          handleQueryChange('');
        }, transitionDuration);
      }
    },
    onOpen: () => {
      onSpotlightOpen?.();
      window.clearTimeout(timeoutRef.current);
    },
  });

  useSpotlightShortcuts(shortcut, open);

  return (
    <SpotlightContext.Provider
      value={{
        openSpotlight: open,
        closeSpotlight: close,
        toggleSpotlight: toggle,
        registerActions,
        removeActions,
        triggerAction,
        opened,
        actions,
        query,
      }}
    >
      <Spotlight
        actions={actions}
        onClose={close}
        opened={opened}
        query={query}
        onQueryChange={handleQueryChange}
        {...others}
      />
      {children}
    </SpotlightContext.Provider>
  );
}

SpotlightProvider.displayName = '@mantine/spotlight/SpotlightProvider';
