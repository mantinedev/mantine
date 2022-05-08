import { useEffect } from 'react';
import type { SpotlightContextValue } from './Spotlight.context';
import type { SpotlightAction } from './types';

type ValueOf<T> = T[keyof T];

export const SPOTLIGHT_EVENTS = {
  open: 'mantine:open-spotlight',
  close: 'mantine:close-spotlight',
  toggle: 'mantine:toggle-spotlight',
  triggerAction: 'mantine:trigger-spotlight-action',
  registerActions: 'mantine:register-spotlight-actions',
  removeActions: 'mantine:remove-spotlight-actions',
} as const;

function createEvent(type: ValueOf<typeof SPOTLIGHT_EVENTS>, detail?: any) {
  return new CustomEvent(type, { detail });
}

export function openSpotlight() {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.open));
}

export function closeSpotlight() {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.close));
}

export function toggleSpotlight() {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.toggle));
}

export function triggerSpotlightAction(actionId: string) {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.triggerAction, actionId));
}

export function registerSpotlightActions(actions: SpotlightAction[]) {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.registerActions, actions));
}

export function removeSpotlightActions(actionsIds: string[]) {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.removeActions, actionsIds));
}

export function useSpotlightEvents(ctx: SpotlightContextValue) {
  const events = {
    registerActions: (event: any) => ctx.registerActions(event.detail),
    removeActions: (event: any) => ctx.removeActions(event.detail),
    triggerAction: (event: any) => ctx.triggerAction(event.detail),
    open: ctx.openSpotlight,
    close: ctx.closeSpotlight,
    toggle: ctx.toggleSpotlight,
  };

  useEffect(() => {
    Object.keys(events).forEach((event) => {
      window.addEventListener(SPOTLIGHT_EVENTS[event], events[event]);
    });

    return () => {
      Object.keys(events).forEach((event) => {
        window.removeEventListener(SPOTLIGHT_EVENTS[event], events[event]);
      });
    };
  }, []);
}
