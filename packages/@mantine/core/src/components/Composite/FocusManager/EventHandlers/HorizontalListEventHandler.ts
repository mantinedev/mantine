import { KeyboardEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { FocusManagerEventHandler } from './FocusManagerEventHandler';

export class HorizontalListEventHandler extends FocusManagerEventHandler {
  goLeft(from: number) {
    let nextIndex = from;
    do {
      if (nextIndex > 0) {
        nextIndex -= 1;
      } else if (this._focusManager.options.loop) {
        nextIndex = this._focusManager.lastDescendantIndex;
      }
    } while (from !== nextIndex && !this._focusManager.isFocusableIndex(nextIndex));

    return nextIndex;
  }

  goRight(from: number) {
    let nextIndex = from;
    do {
      if (nextIndex < this._focusManager.lastDescendantIndex) {
        nextIndex += 1;
      } else if (this._focusManager.options.loop) {
        nextIndex = 0;
      }
    } while (from !== nextIndex && !this._focusManager.isFocusableIndex(nextIndex));

    return nextIndex;
  }

  goFirst() {
    return this._focusManager.isFocusableIndex(0) ? 0 : this.goRight(0);
  }

  goLast() {
    return this._focusManager.isFocusableIndex(this._focusManager.lastDescendantIndex)
      ? this._focusManager.lastDescendantIndex
      : this.goLeft(this._focusManager.lastDescendantIndex);
  }

  keyboardEventHandler(event: KeyboardEvent<HTMLElement>) {
    let nextIndex = this._focusManager.focused.index;

    if (event.key === 'ArrowLeft') {
      nextIndex = this.goLeft(nextIndex);
    } else if (event.key === 'ArrowRight') {
      nextIndex = this.goRight(nextIndex);
    } else if (event.key === 'Home') {
      nextIndex = this.goFirst();
    } else if (event.key === 'End') {
      nextIndex = this.goLast();
    }

    if (this._focusManager.focused.index !== nextIndex) {
      event.preventDefault();
      this._focusManager.focus(nextIndex);
    }
  }
}
