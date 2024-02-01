import { RefObject } from 'react';
// eslint-disable-next-line import/no-cycle
import { DisabledEventHandler } from './EventHandlers/DisabledEventHandler';
import { FocusManagerEventHandler } from './EventHandlers/FocusManagerEventHandler';
import { HorizontalListEventHandler } from './EventHandlers/HorizontalListEventHandler';
import { LayoutGridEventHandler } from './EventHandlers/LayoutGridEventHandler';
import { VerticalListEventHandler } from './EventHandlers/VerticalListEventHandler';
import { FocusObject, FocusOptions } from './FocusManager.types';

const navigableSelector = 'a,button,input,textarea,select,details,[tabindex]';

export class FocusManager {
  private ref: RefObject<HTMLElement>;
  private _descendants: NodeListOf<HTMLElement> | undefined = undefined;

  protected _focused: FocusObject = { element: undefined, index: -1, row: 0, col: 0 };

  protected _lastDescendantIndex: number = 0;
  protected _focusableDecendantCount: number = 0;

  protected _area = { cols: 0, rows: 0 };
  protected _options: FocusOptions;
  protected _navigableChildRole: string;
  protected _eventHandler: FocusManagerEventHandler | undefined;

  get area() {
    return this._area;
  }
  get options() {
    return this._options;
  }

  get focused() {
    return this._focused;
  }

  get lastDescendantIndex() {
    return this._lastDescendantIndex;
  }

  get descendants() {
    return this._descendants;
  }

  get descendantCount() {
    return this._descendants?.length ?? 0;
  }
  get focusableDecendantCount() {
    return this._focusableDecendantCount;
  }

  get eventHandler() {
    return this._eventHandler;
  }

  constructor(ref: RefObject<HTMLElement>, navigableChildRole: string, options: FocusOptions) {
    this.ref = ref;
    this._navigableChildRole = navigableChildRole;

    this._options = {
      loop: true,
      moveToNextRow: true,
      moveToNextColumn: true,
      ...options,
    };
  }

  init() {
    if (this.ref.current) {
      this.ref.current.tabIndex = -1;

      this.ref.current.querySelectorAll(navigableSelector).forEach((el) => {
        el.setAttribute('tabindex', '-1');
      });

      this._descendants = this.ref.current.querySelectorAll(`[role='${this._navigableChildRole}']`);

      if (this._descendants.length > 0) {
        this._lastDescendantIndex = this._descendants.length - 1;

        this._focusableDecendantCount = 0;
        this._descendants.forEach((descendant) => {
          if (this.isFocusableElement(descendant)) this._focusableDecendantCount += 1;
        });

        this.calculateArea();
        this.setBehaviour();
        this.setEventHandlers();
      }
    }
  }

  private calculateArea() {
    if (this._descendants && this._descendants.length > 0) {
      const refRect = this._descendants[0].getBoundingClientRect();
      const refRectTop = Math.floor(refRect.top + (refRect.bottom - refRect.top) / 2);
      let refRectLeft = Math.floor(refRect.left + (refRect.right - refRect.left) / 2);

      this._area = { cols: 1, rows: 1 };
      for (let index = 1; index < this._descendants.length; index += 1) {
        const rect = this._descendants[index].getBoundingClientRect();
        const rectTop = Math.floor(rect.top + (rect.bottom - rect.top) / 2);
        const rectLeft = Math.floor(rect.left + (rect.right - rect.left) / 2);

        if (rectTop === refRectTop && rectLeft !== refRectLeft) {
          this._area.cols += 1;
          refRectLeft = rectLeft;
        } else if (rectTop !== refRectTop) break;
      }
      this._area.rows = Math.ceil(this._descendants.length / this._area.cols);
    }
  }

  private setBehaviour() {
    if (this._options.behaviour === undefined) {
      switch (this._navigableChildRole) {
        case 'option':
          this._options.behaviour = this._area.cols > 1 ? 'HorizontalList' : 'VerticalList';
          break;
        case 'gridcell':
          this._options.behaviour = 'LayoutGrid';
          break;
        case 'row':
          this._options.behaviour = 'DataGrid';
          break;
        case 'treeitem':
          this._options.behaviour = 'Tree';
          break;
        default:
          this._options.behaviour =
            this._area.rows > 1 && this._area.cols > 1
              ? 'LayoutGrid'
              : this._area.rows === 1 && this._area.cols > 1
                ? 'HorizontalList'
                : 'VerticalList';
          break;
      }
    }
  }

  private setEventHandlers() {
    if (this._descendants && !this._descendants[this._focused.index]) {
      const firstFocusable = this.findFirstFocusable();
      if (firstFocusable) {
        this._focused = firstFocusable;
        this._descendants[this._focused.index].tabIndex = 0;

        if (this._options.behaviour === 'LayoutGrid') {
          this._eventHandler = new LayoutGridEventHandler(this);
        } else if (this._options.behaviour === 'HorizontalList') {
          this._eventHandler = new HorizontalListEventHandler(this);
        } else {
          this._eventHandler = new VerticalListEventHandler(this);
        }
      } else {
        if (this.ref.current) this.ref.current.tabIndex = 0;
        this._eventHandler = new DisabledEventHandler(this);
      }
    }
  }

  isFocusableElement(element?: HTMLElement) {
    if (!element) return false;
    return element.ariaDisabled !== 'true';
  }

  isFocusableIndex(index: number) {
    return this.isFocusableElement(this._descendants?.[index]);
  }

  getFocusObject(index: number) {
    return {
      index,
      element: this._descendants?.[index],
      row: 1 + Math.floor(index / this._area.cols),
      col: 1 + (index % this._area.cols),
    };
  }

  findFirstFocusable() {
    if (this._descendants) {
      for (let i = 0; i < this._descendants.length; i += 1) {
        if (this.isFocusableIndex(i)) {
          return this.getFocusObject(i);
        }
      }
    }

    return undefined;
  }

  focus(index: number) {
    if (this._descendants && this._focused.index > -1 && this.isFocusableIndex(index)) {
      this._descendants[this._focused.index].tabIndex = -1;

      this._descendants[index].tabIndex = 0;
      this._descendants[index].focus();

      this._focused = this.getFocusObject(index);
    }
  }

  getItemIndex(el: EventTarget) {
    if (!el) return;

    if (this._descendants) {
      for (let i = 0; i <= this._lastDescendantIndex; i += 1) {
        if (this._descendants[i] === el) {
          // eslint-disable-next-line consistent-return
          return i;
        }
      }
    }
  }
}
