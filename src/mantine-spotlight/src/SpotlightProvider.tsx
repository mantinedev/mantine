import React, { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { useActionsState } from './use-actions-state/use-actions-state';
import type { SpotlightAction } from './types';
import { SpotlightContext } from './Spotlight.context';

export interface SpotlightProviderProps {
  actions: SpotlightAction[];
  children: React.ReactNode;
  onSpotlightOpen?(): void;
  onSpotlightClose?(): void;
  shortcut?: string | string[];
}

export interface SpotlightContextProps {
  /** Opens spotlight */
  openSpotlight(): void;

  /** Closes spotlight */
  closeSpotlight(): void;

  /** Toggles spotlight opened state */
  toggleSpotlight(): void;

  /** Triggers action with given id */
  triggerAction(actionId: string): void;

  /** Registers additional actions */
  registerActions(action: SpotlightAction[]): void;

  /** Removes actions with given ids */
  removeActions(actionIds: string[]): void;

  /** Current opened state */
  opened: boolean;

  /** List of registered actions */
  actions: SpotlightAction[];
}

export function SpotlightProvider({
  actions: initialActions,
  children,
  shortcut = 'mod + K',
  onSpotlightClose,
  onSpotlightOpen,
}: SpotlightProviderProps) {
  const [actions, { registerActions, removeActions, triggerAction }] =
    useActionsState(initialActions);

  const [opened, setOpened] = useState(false);
  const openSpotlight = () => {
    setOpened(true);
    onSpotlightOpen?.();
  };

  const closeSpotlight = () => {
    setOpened(true);
    onSpotlightClose?.();
  };

  const toggleSpotlight = () => {
    opened ? closeSpotlight() : openSpotlight();
  };

  useHotkeys(
    typeof shortcut === 'string'
      ? [[shortcut, toggleSpotlight]]
      : shortcut.map((item) => [item, toggleSpotlight])
  );

  return (
    <SpotlightContext.Provider
      value={{
        openSpotlight,
        closeSpotlight,
        toggleSpotlight,
        registerActions,
        removeActions,
        triggerAction,
        opened,
        actions,
      }}
    >
      {children}
    </SpotlightContext.Provider>
  );
}
