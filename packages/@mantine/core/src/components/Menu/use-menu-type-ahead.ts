import { useEffect, useRef } from 'react';

const RESET_DELAY = 500;

interface UseMenuTypeAheadOptions {
  enabled: boolean;
  opened: boolean;
  getDropdown: () => HTMLElement | null;
}

interface TypeAheadState {
  buffer: string;
  timeoutId: number | null;
}

function getItemText(item: HTMLElement): string {
  const label = item.querySelector<HTMLElement>('[data-menu-item-label]');
  return ((label ?? item).textContent ?? '').trim().toLowerCase();
}

function isRepeatedChar(buffer: string): boolean {
  return buffer.length > 1 && buffer.split('').every((char) => char === buffer[0]);
}

export function useMenuTypeAhead({ enabled, opened, getDropdown }: UseMenuTypeAheadOptions) {
  const stateRef = useRef<TypeAheadState>({ buffer: '', timeoutId: null });

  useEffect(() => {
    if (opened && enabled) {
      return;
    }
    const state = stateRef.current;
    if (state.timeoutId !== null) {
      window.clearTimeout(state.timeoutId);
      state.timeoutId = null;
    }
    state.buffer = '';
  }, [opened, enabled]);

  useEffect(
    () => () => {
      const { timeoutId } = stateRef.current;
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    },
    []
  );

  return (event: React.KeyboardEvent<HTMLElement>) => {
    if (!enabled || event.defaultPrevented) {
      return;
    }
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (event.key.length !== 1 || event.key === ' ') {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (
      target &&
      (target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable)
    ) {
      return;
    }

    const dropdown = getDropdown();
    if (!dropdown) {
      return;
    }

    const items = Array.from(
      dropdown.querySelectorAll<HTMLElement>('[data-menu-item]:not([data-disabled])')
    ).filter((item) => item.closest('[data-menu-dropdown]') === dropdown);

    if (items.length === 0) {
      return;
    }

    const state = stateRef.current;
    state.buffer = (state.buffer + event.key).toLowerCase();

    if (state.timeoutId !== null) {
      window.clearTimeout(state.timeoutId);
    }
    state.timeoutId = window.setTimeout(() => {
      state.buffer = '';
      state.timeoutId = null;
    }, RESET_DELAY);

    const activeElement = document.activeElement as HTMLElement | null;
    const currentIndex = activeElement ? items.indexOf(activeElement) : -1;

    let match: HTMLElement | null = null;

    if (state.buffer.length === 1 || isRepeatedChar(state.buffer)) {
      const char = state.buffer[0]!;
      const startIndex = currentIndex + 1;
      for (let i = 0; i < items.length; i += 1) {
        const idx = (startIndex + i) % items.length;
        if (getItemText(items[idx]!).startsWith(char)) {
          match = items[idx]!;
          break;
        }
      }
    } else {
      for (let i = 0; i < items.length; i += 1) {
        if (getItemText(items[i]!).startsWith(state.buffer)) {
          match = items[i]!;
          break;
        }
      }
    }

    if (match) {
      event.preventDefault();
      match.focus();
    }
  };
}
