import { useDidUpdate, useDisclosure } from '@mantine/hooks';
import React, { useRef, useState } from 'react';
import { useSpotlightEvents } from './events';
import { SpotlightContext } from './Spotlight.context';
import { InnerSpotlightProps, Spotlight } from './Spotlight/Spotlight';
import type { SpotlightAction } from './types';
import { useActionsState } from './use-actions-state/use-actions-state';
import { useSpotlightShortcuts } from './use-spotlight-shortcuts/use-spotlight-shortcuts';

export interface SpotlightProviderProps extends InnerSpotlightProps {
  /** Actions list */
  actions: SpotlightAction[] | ((query: string) => SpotlightAction[]);

  /** Your application */
  children?: React.ReactNode;

  /** Called when spotlight opens */
  onSpotlightOpen?(): void;

  /** Called when spotlight closes */
  onSpotlightClose?(): void;

  /** Called when user enters text in search input */
  onQueryChange?(query: string): void;

  /** Keyboard shortcut or list of shortcuts to trigger spotlight */
  shortcut?: string | string[] | null;

  /** Should search be cleared when spotlight closes */
  cleanQueryOnClose?: boolean;

  /** Spotlight will not render if disabled is set to true */
  disabled?: boolean;

  /** Tags to ignore shortcut hotkeys on. */
  tagsToIgnore?: string[];

  /** Whether shortcuts should trigger based on contentEditable. */
  triggerOnContentEditable?: boolean;
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
  disabled = false,
  tagsToIgnore = ['INPUT', 'TEXTAREA', 'SELECT'],
  triggerOnContentEditable = false,
  ...others
}: SpotlightProviderProps) {
  const timeoutRef = useRef<number>(-1);
  const [query, setQuery] = useState('');
  const [actions, { registerActions, updateActions, removeActions, triggerAction }] =
    useActionsState(initialActions, query);

  useDidUpdate(() => {
    updateActions(initialActions);
  }, [initialActions]);

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

  const ctx = {
    openSpotlight: open,
    closeSpotlight: close,
    toggleSpotlight: toggle,
    registerActions,
    removeActions,
    triggerAction,
    opened,
    actions,
    query,
  };

  useSpotlightShortcuts(shortcut, open, tagsToIgnore, triggerOnContentEditable);
  useSpotlightEvents({ open, close, toggle, registerActions, removeActions, triggerAction });

  return (
    <SpotlightContext.Provider value={ctx}>
      {!disabled && (
        <Spotlight
          actions={actions}
          onClose={close}
          opened={opened}
          query={query}
          onQueryChange={handleQueryChange}
          transitionDuration={transitionDuration}
          {...others}
        />
      )}
      {children}
    </SpotlightContext.Provider>
  );
}

SpotlightProvider.displayName = '@mantine/spotlight/SpotlightProvider';
