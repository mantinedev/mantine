import { KeyboardEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { FocusManagerEventHandler } from './FocusManagerEventHandler';

export class VerticalListEventHandler extends FocusManagerEventHandler {
  goUp(from: number) {
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

  goDown(from: number) {
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

  jumpUp(from: number, step: number = 1) {
    let nextIndex = from;
    const _nextIndex = from - step;
    if (_nextIndex >= 0) {
      nextIndex = _nextIndex;
    } else {
      nextIndex = 0;
    }

    return this._focusManager.isFocusableIndex(nextIndex) ? nextIndex : from;
  }

  jumpDown(from: number, step: number = 1) {
    let nextIndex = from;
    const _nextIndex = from + step;
    if (_nextIndex <= this._focusManager.lastDescendantIndex) nextIndex = _nextIndex;
    else nextIndex = this._focusManager.lastDescendantIndex;

    return this._focusManager.isFocusableIndex(nextIndex) ? nextIndex : from;
  }

  goFirst() {
    return this._focusManager.isFocusableIndex(0) ? 0 : this.goDown(0);
  }

  goLast() {
    return this._focusManager.isFocusableIndex(this._focusManager.lastDescendantIndex)
      ? this._focusManager.lastDescendantIndex
      : this.goUp(this._focusManager.lastDescendantIndex);
  }

  keyboardEventHandler(event: KeyboardEvent<HTMLElement>) {
    let nextIndex = this._focusManager.focused.index;

    if (event.key === 'ArrowUp') {
      nextIndex = this.goUp(nextIndex);
    } else if (event.key === 'ArrowDown') {
      nextIndex = this.goDown(nextIndex);
    } else if (event.key === 'PageUp') {
      nextIndex = this.jumpUp(nextIndex, this._focusManager.options.pageSize);
    } else if (event.key === 'PageDown') {
      nextIndex = this.jumpDown(nextIndex, this._focusManager.options.pageSize);
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
