import { Key, KeyboardEvent, MouseEvent } from 'react';
import { DisabledEventHandler } from '../FocusManager/EventHandlers/DisabledEventHandler';
import { FocusManager } from '../FocusManager/FocusManager';

export interface SelectionOptions {
  multiple: boolean;
  // Only applys to single-select widgets
  followFocus?: boolean;
  trackSelectioMode?: boolean;
}

type OnChangeCallbackFn = (selections: Key[]) => void;

export interface SelectionState {
  initialSelections?: Key[];
  onSelectionChange: OnChangeCallbackFn;
}

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export class SelectionManager {
  protected _focusManager: FocusManager;
  protected _selectedKeys: Set<Key>;
  protected _options: SelectionOptions;
  protected _lastSelectionIndex?: number;
  protected _allSelected: boolean = false;
  protected _onChange: OnChangeCallbackFn;

  constructor(focusManager: FocusManager, state: SelectionState, options: SelectionOptions) {
    this._focusManager = focusManager;
    this._onChange = state.onSelectionChange;

    this._options = {
      followFocus: false,
      trackSelectioMode: false,
      ...options,
    };

    if (state.initialSelections) {
      this._selectedKeys = new Set(
        this._options.multiple ? [...state.initialSelections] : [state.initialSelections[0]]
      );
    } else this._selectedKeys = new Set([]);
  }

  get selectedKeys() {
    return this._selectedKeys;
  }

  get multiple() {
    return this._options.multiple ?? false;
  }

  get allSelected() {
    return this._allSelected;
  }

  setSelections(selections: Key[]) {
    this._selectedKeys = new Set([...selections]);
    this._allSelected = this._focusManager.focusableDecendantCount === this._selectedKeys.size;
    this._lastSelectionIndex = this._focusManager.focused.index;
  }

  getElementKey(index?: number) {
    const element =
      index !== undefined
        ? this._focusManager.descendants?.[index]
        : this._focusManager.focused.element;

    const _key = element?.dataset.itemKey;

    if (_key === undefined) throw new Error('Undefined item key.');

    return JSON.parse(_key) as Key;
  }

  toggleSelection() {
    const key = this.getElementKey();
    if (key) {
      if (!this._options.multiple) {
        this._selectedKeys = new Set([key]);
        this._lastSelectionIndex = this._focusManager.focused.index;
      } else if (this._selectedKeys.has(key)) {
        this._selectedKeys.delete(key);
        this._lastSelectionIndex = undefined;
      } else {
        this._selectedKeys.add(key);
        this._lastSelectionIndex = this._focusManager.focused.index;
      }

      this._allSelected = this._focusManager.focusableDecendantCount === this._selectedKeys.size;
      this._onChange([...this._selectedKeys]);
    }
  }

  selectRange(from?: number) {
    if (!this._options.multiple) {
      this._selectedKeys = new Set([this.getElementKey()]);
    } else {
      const _fromIndex = from ?? this._lastSelectionIndex ?? this._focusManager.focused.index;
      const selectionRange = range(
        Math.min(_fromIndex, this._focusManager.focused.index),
        Math.max(_fromIndex, this._focusManager.focused.index),
        1
      ).filter((index) => this._focusManager.isFocusableIndex(index));

      this._selectedKeys = new Set([
        ...this._selectedKeys,
        ...selectionRange.map((index) => this.getElementKey(index)),
      ]);
    }

    this._lastSelectionIndex = this._focusManager.focused.index;
    this._allSelected = this._focusManager.focusableDecendantCount === this._selectedKeys.size;

    this._onChange([...this._selectedKeys]);
  }

  toggleAll() {
    if (this._options.multiple) {
      if (!this._allSelected) {
        this._allSelected = true;
        this._lastSelectionIndex = this._focusManager.lastDescendantIndex;
        const selectionRange = range(0, this._lastSelectionIndex, 1).filter((index) =>
          this._focusManager.isFocusableIndex(index)
        );
        this._selectedKeys = new Set(selectionRange.map((index) => this.getElementKey(index)));
      } else {
        this._allSelected = false;
        this._lastSelectionIndex = undefined;
        this._selectedKeys = new Set();
      }
    }

    this._onChange([...this._selectedKeys]);
  }

  keyboardEventHandler(event: KeyboardEvent<HTMLElement>) {
    if (!(this._focusManager.eventHandler instanceof DisabledEventHandler)) {
      const prevFocusedIndex = this._focusManager.focused.index;
      this._focusManager.eventHandler?.keyboardEventHandler(event);

      if (event.key === ' ') {
        event.preventDefault();
        // Changes the selection state of the focused option.
        if (!event.shiftKey) {
          this.toggleSelection();
        } else {
          // Shift + Space: Selects contiguous items from **the most recently selected item** to the focused item.
          this.selectRange();
        }
      } else if (event.key.toLowerCase() === 'a' && event.ctrlKey) {
        event.preventDefault();
        // Selects all options in the list.
        // If, all options are selected, it may also unselect all options.
        this.toggleAll();
      }

      if (prevFocusedIndex !== this._focusManager.focused.index) {
        if (!this._options.multiple && this._options.followFocus === true) {
          this.toggleSelection();
        }

        // All focus movements with `Shift` modifier
        // select the previously focused item and all items up to the new focused item.
        if (event.shiftKey) {
          this.selectRange(prevFocusedIndex);
        }
      }
    }
  }

  mouseEventHandler(event: MouseEvent<HTMLElement>) {
    if (!(this._focusManager.eventHandler instanceof DisabledEventHandler)) {
      this._focusManager.eventHandler?.mouseEventHandler(event);
      if (this._options.multiple && event.shiftKey) {
        this.selectRange();
      } else {
        this.toggleSelection();
      }
    }
  }
}
