import React from 'react';
import { noop } from '../noop/noop';

interface Options {
  active: boolean;
  onTrigger?(): void;
}

export function closeOnEscape(callback?: () => void, options: Options = { active: true }) {
  if (typeof callback !== 'function' || !options.active) {
    return noop;
  }

  return (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Escape') {
      callback();
      options.onTrigger?.();
    }
  };
}
