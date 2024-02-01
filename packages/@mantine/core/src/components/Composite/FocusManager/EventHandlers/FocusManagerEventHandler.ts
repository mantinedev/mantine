import { KeyboardEvent, MouseEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { FocusManager } from '../FocusManager';

export abstract class FocusManagerEventHandler {
  protected _focusManager;
  constructor(focusManager: FocusManager) {
    this._focusManager = focusManager;
  }

  abstract keyboardEventHandler(event: KeyboardEvent<HTMLElement>): void;

  mouseEventHandler(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    const current = this._focusManager.getItemIndex(event.currentTarget);

    if (current !== undefined) this._focusManager.focus(current);
  }
}
