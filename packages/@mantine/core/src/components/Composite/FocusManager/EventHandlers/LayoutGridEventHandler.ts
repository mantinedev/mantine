import { KeyboardEvent } from 'react';
import type { FocusOptions } from '../FocusManager.types';
// eslint-disable-next-line import/no-cycle
import { FocusManagerEventHandler } from './FocusManagerEventHandler';

export class LayoutGridEventHandler extends FocusManagerEventHandler {
  goUp(from: number) {
    let nextIndex = from;
    const { cols } = this._focusManager.area;
    const lastRowSize = 1 + (this._focusManager.lastDescendantIndex % cols);
    const { moveToNextColumn, loop } = this._focusManager.options;
    do {
      const _focused = this._focusManager.getFocusObject(nextIndex);
      // Moves focus one cell up.
      let _nextIndex = nextIndex - cols;
      if (_nextIndex >= 0) nextIndex = _nextIndex;
      // Optionally, if focus is on the top cell in the column,
      // focus may move to the bottom cell in the previous column.
      else {
        const maxRow = Math.floor(this._focusManager.lastDescendantIndex / cols);
        if (moveToNextColumn) {
          const nextCol = _focused.col - 1;
          const nextRow = maxRow + _focused.row - (nextCol > lastRowSize ? 1 : 0);
          _nextIndex = (nextRow - 1) * cols + (nextCol - 1);

          // If focus is on the first cell in the grid, focus does not move.
          if (_nextIndex >= 0 && _focused.col > 1) {
            nextIndex = _nextIndex;
          } else if (loop) {
            nextIndex = this._focusManager.lastDescendantIndex - (lastRowSize % cols);
          }
        } else if (loop) {
          const nextRow = maxRow - (_focused.col > lastRowSize ? 1 : 0);
          _nextIndex = nextRow * cols + (_focused.col - 1);
          nextIndex = _nextIndex;
        }
      }
    } while (from !== nextIndex && !this._focusManager.isFocusableIndex(nextIndex));

    return nextIndex;
  }

  goDown(from: number) {
    let nextIndex = from;
    const { cols } = this._focusManager.area;
    const { moveToNextColumn, loop } = this._focusManager.options;
    do {
      const _focused = this._focusManager.getFocusObject(nextIndex);
      // Moves focus one cell down.
      let _nextIndex = nextIndex + cols;
      if (_nextIndex <= this._focusManager.lastDescendantIndex) nextIndex = _nextIndex;
      // Optionally, if focus is on the bottom cell in the column,
      // focus may move to the top cell in the following column.
      else if (moveToNextColumn) {
        const nextCol = _focused.col + 1;
        const nextRow = 1;
        _nextIndex = (nextRow - 1) * cols + (nextCol - 1);
        // If focus is on the last cell in the grid, focus does not move.
        if (_nextIndex <= this._focusManager.lastDescendantIndex && _focused.col < cols) {
          nextIndex = _nextIndex;
        } else if (loop) nextIndex = 0;
      } else if (loop) nextIndex = _focused.col - 1;
    } while (from !== nextIndex && !this._focusManager.isFocusableIndex(nextIndex));

    return nextIndex;
  }

  goRight(from: number, options?: Partial<FocusOptions>) {
    let nextIndex = from;

    const { cols, rows } = this._focusManager.area;
    const lastRowSize = 1 + (this._focusManager.lastDescendantIndex % cols);
    const { moveToNextRow, loop } = { ...this._focusManager.options, ...options };

    do {
      const _focused = this._focusManager.getFocusObject(nextIndex);
      // Moves focus one cell to the right until finding a focusable cell.
      // Optionally, if focus is on the right-most cell in the row,
      // focus may move to the first cell in the following row.
      // If focus is on the last cell in the grid, focus does not move.
      const _nextIndex = nextIndex + 1;
      if (
        _nextIndex <= this._focusManager.lastDescendantIndex &&
        (moveToNextRow || _nextIndex % cols !== 0)
      ) {
        nextIndex = _nextIndex;
      } else if (loop) {
        nextIndex = moveToNextRow
          ? 0
          : _focused.row !== rows
            ? nextIndex + 1 - cols
            : nextIndex + 1 - lastRowSize;
      }
    } while (from !== nextIndex && !this._focusManager.isFocusableIndex(nextIndex));

    return nextIndex;
  }

  goLeft(from: number, options?: Partial<FocusOptions>) {
    let nextIndex = from;
    const { cols, rows } = this._focusManager.area;
    const lastRowSize = 1 + (this._focusManager.lastDescendantIndex % cols);
    const { moveToNextRow, loop } = { ...this._focusManager.options, ...options };
    do {
      const _focused = this._focusManager.getFocusObject(nextIndex);
      // Moves focus one cell to the left until finding a focusable cell.
      // Optionally, if focus is on the left-most cell in the row,
      // focus may move to the last cell in the previous row.
      // If focus is on the first cell in the grid, focus does not move.
      const _nextIndex = nextIndex - 1;
      if (nextIndex - 1 >= 0 && (moveToNextRow || _nextIndex % cols !== cols - 1)) {
        nextIndex = _nextIndex;
      } else if (loop) {
        nextIndex = moveToNextRow
          ? this._focusManager.lastDescendantIndex
          : _focused.row !== rows
            ? nextIndex + cols - 1
            : nextIndex + lastRowSize - 1;
      }
    } while (from !== nextIndex && !this._focusManager.isFocusableIndex(nextIndex));

    return nextIndex;
  }

  jumpUp(from: number, step: number = 1) {
    let nextIndex = from;
    const { cols } = this._focusManager.area;

    // Moves focus up an author-determined number of rows,
    // If focus is in the first row of the grid, focus does not move.
    const _nextIndex = nextIndex - cols * step;
    if (_nextIndex >= 0) nextIndex = _nextIndex;
    else nextIndex %= cols;

    return this._focusManager.isFocusableIndex(nextIndex) ? nextIndex : from;
  }

  jumpDown(from: number, step: number = 1) {
    let nextIndex = from;
    const { cols } = this._focusManager.area;
    const lastRowSize = 1 + (this._focusManager.lastDescendantIndex % cols);

    const _focused = this._focusManager.getFocusObject(nextIndex);
    // Moves focus down an author-determined number of rows,
    // If focus is in the last row of the grid, focus does not move.
    const _nextIndex = nextIndex + cols * step;
    if (_nextIndex <= this._focusManager.lastDescendantIndex) nextIndex = _nextIndex;
    else {
      const maxRow = Math.floor(this._focusManager.lastDescendantIndex / cols);

      nextIndex = _focused.col + cols * (maxRow - (_focused.col > lastRowSize ? 1 : 0)) - 1;
    }

    return this._focusManager.isFocusableIndex(nextIndex) ? nextIndex : from;
  }

  goFirstInRow() {
    const { cols } = this._focusManager.area;
    const nextCol = 1;
    const nextIndex = (this._focusManager.focused.row - 1) * cols + (nextCol - 1);

    return this._focusManager.isFocusableIndex(nextIndex) ? nextIndex : this.goRight(nextIndex);
  }

  goLastInRow() {
    const { cols } = this._focusManager.area;

    const nextCol = cols;

    const nextIndex = Math.min(
      (this._focusManager.focused.row - 1) * cols + (nextCol - 1),
      this._focusManager.lastDescendantIndex
    );

    return this._focusManager.isFocusableIndex(nextIndex) ? nextIndex : this.goLeft(nextIndex);
  }

  goFirst() {
    return this._focusManager.isFocusableIndex(0) ? 0 : this.goRight(0, { moveToNextRow: true });
  }

  goLast() {
    return this._focusManager.isFocusableIndex(this._focusManager.lastDescendantIndex)
      ? this._focusManager.lastDescendantIndex
      : this.goLeft(this._focusManager.lastDescendantIndex, { moveToNextRow: true });
  }

  keyboardEventHandler(event: KeyboardEvent<HTMLElement>) {
    let nextIndex = this._focusManager.focused.index;

    if (event.key === 'ArrowUp') {
      nextIndex = this.goUp(nextIndex);
    } else if (event.key === 'ArrowDown') {
      nextIndex = this.goDown(nextIndex);
    } else if (event.key === 'ArrowLeft') {
      nextIndex = this.goLeft(nextIndex);
    } else if (event.key === 'ArrowRight') {
      nextIndex = this.goRight(nextIndex);
    } else if (event.key === 'PageUp') {
      nextIndex = this.jumpUp(nextIndex, this._focusManager.options.pageSize);
    } else if (event.key === 'PageDown') {
      nextIndex = this.jumpDown(nextIndex, this._focusManager.options.pageSize);
    } else if (event.key === 'Home') {
      // Moves focus to the first cell in the row that contains focus.
      if (!event.ctrlKey && !event.metaKey) {
        nextIndex = this.goFirstInRow();
      } else {
        // `Control + Home`: Moves focus to the first cell in the first row.
        nextIndex = this.goFirst();
      }
    } else if (event.key === 'End') {
      // Moves focus to the last cell in the row that contains focus
      if (!event.ctrlKey && !event.metaKey) {
        nextIndex = this.goLastInRow();
      } else {
        // Control + End: Moves focus to the last cell in the last row.
        nextIndex = this.goLast();
      }
    }

    if (this._focusManager.focused.index !== nextIndex) {
      event.preventDefault();
      this._focusManager.focus(nextIndex);
    }
  }
}
