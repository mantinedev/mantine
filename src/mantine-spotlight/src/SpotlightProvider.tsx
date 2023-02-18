import React, { useRef } from 'react';
import { useDisclosure, useUncontrolled } from '@mantine/hooks';
import { useSpotlightEvents } from './events';
import { SpotlightContext } from './Spotlight.context';
import { InnerSpotlightProps, Spotlight } from './Spotlight/Spotlight';
import type { SpotlightAction } from './types';
import { useActionsState } from './use-actions-state/use-actions-state';
import { useSpotlightShortcuts } from './use-spotlight-shortcuts/use-spotlight-shortcuts';

export interface SpotlightProviderProps extends InnerSpotlightProps {
  /** Actions list */
  actions: SpotlightAction[];

  /** Called when actions change (registered or removed) */
  onActionsChange?(actions: SpotlightAction[]): void;

  /** Controlled search query */
  query?: string;

  /** Called when user enters text in search input */
  onQueryChange?(query: string): void;

  /** Your application */
  children?: React.ReactNode;

  /** Called when spotlight opens */
  onSpotlightOpen?(): void;

  /** Called when spotlight closes */
  onSpotlightClose?(): void;

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
  actions,
  children,
  shortcut = 'mod + K',
  query,
  onSpotlightClose,
  onSpotlightOpen,
  onQueryChange,
  onActionsChange,
  cleanQueryOnClose = true,
  transitionProps = { duration: 150 },
  disabled = false,
  tagsToIgnore = ['INPUT', 'TEXTAREA', 'SELECT'],
  triggerOnContentEditable = false,
  ...others
}: SpotlightProviderProps) {
  const timeoutRef = useRef<number>(-1);

  const [_query, setQuery] = useUncontrolled({
    value: query,
    defaultValue: '',
    finalValue: '',
    onChange: onQueryChange,
  });

  const [_actions, { registerActions, removeActions, triggerAction }] = useActionsState({
    actions,
    onActionsChange,
  });

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
        }, transitionProps.duration || 150);
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
    actions: _actions,
    query: _query,
  };

  useSpotlightShortcuts(shortcut, open, tagsToIgnore, triggerOnContentEditable);
  useSpotlightEvents({ open, close, toggle, registerActions, removeActions, triggerAction });

  return (
    <SpotlightContext.Provider value={ctx}>
      {!disabled && (
        <Spotlight
          actions={_actions}
          onClose={close}
          opened={opened}
          query={_query}
          onQueryChange={handleQueryChange}
          transitionProps={transitionProps}
          {...others}
        />
      )}
      {children}
    </SpotlightContext.Provider>
  );
}

SpotlightProvider.displayName = '@mantine/spotlight/SpotlightProvider';
