import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useActionsState } from './use-actions-state/use-actions-state';
import { useSpotlightShortcuts } from './use-spotlight-shortcuts/use-spotlight-shortcuts';
import { Spotlight, InnerSpotlightProps } from './Spotlight/Spotlight';
import type { SpotlightAction } from './types';
import { SpotlightContext } from './Spotlight.context';

export interface SpotlightProviderProps extends InnerSpotlightProps {
  actions: SpotlightAction[];
  children: React.ReactNode;
  onSpotlightOpen?(): void;
  onSpotlightClose?(): void;
  onQueryChange?(query: string): void;
  shortcut?: string | string[];
}

export function SpotlightProvider({
  actions: initialActions,
  children,
  shortcut = 'mod + K',
  onSpotlightClose,
  onSpotlightOpen,
  onQueryChange,
  ...others
}: SpotlightProviderProps) {
  const [query, setQuery] = useState('');
  const [actions, { registerActions, removeActions, triggerAction }] =
    useActionsState(initialActions);

  const [opened, { open, close, toggle }] = useDisclosure(true, {
    onClose: onSpotlightClose,
    onOpen: onSpotlightOpen,
  });

  const handleQueryChange = (value: string) => {
    setQuery(value);
    onQueryChange?.(value);
  };

  useSpotlightShortcuts(shortcut, toggle);

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
