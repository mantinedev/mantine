import { useEffect, useRef, useSyncExternalStore } from 'react';
import { findElementsBySelector, getRootElement } from '../../../core/utils';
import { useComboboxContext } from '../Combobox.context';
import { ComboboxStore } from '../use-combobox/use-combobox';
import { isVirtualizedComboboxStore } from '../use-combobox/use-virtualized-combobox';

const TYPEAHEAD_TIMEOUT = 500;
const LEADING_NON_ALPHANUMERIC = /^[^\p{L}\p{N}]+/u;

function selectOptionByText(store: ComboboxStore, text: string) {
  if (isVirtualizedComboboxStore(store)) {
    return;
  }

  const root = getRootElement(store.targetRef.current);
  const items = findElementsBySelector<HTMLDivElement>(
    `#${store.getListId()} [data-combobox-option]`,
    root
  );

  if (items.length === 0) {
    return;
  }

  const query = text.toLowerCase();
  const isRepeatedChar = query.split('').every((char) => char === query[0]);
  const search = isRepeatedChar ? query[0] : query;
  const currentIndex = store.getSelectedOptionIndex();
  const startIndex = isRepeatedChar ? currentIndex + 1 : Math.max(currentIndex, 0);

  for (let i = 0; i < items.length; i += 1) {
    const index = (startIndex + i) % items.length;
    const item = items[index];
    const itemText = (item.textContent || '').trim().toLowerCase();
    const strippedText = itemText.replace(LEADING_NON_ALPHANUMERIC, '');

    if (
      !item.hasAttribute('data-combobox-disabled') &&
      (itemText.startsWith(search) || strippedText.startsWith(search))
    ) {
      store.selectOption(index);
      return;
    }
  }
}

function isPrintableKey(event: React.KeyboardEvent) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey;
}

interface UseComboboxTargetPropsInput {
  targetType: 'input' | 'button' | undefined;
  withAriaAttributes: boolean | undefined;
  withKeyboardNavigation: boolean | undefined;
  withExpandedAttribute: boolean | undefined;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onClick: React.MouseEventHandler<HTMLInputElement> | undefined;
  autoComplete: string | undefined;
  readOnly?: boolean;
}

export function useComboboxTargetProps({
  onKeyDown,
  onClick,
  withKeyboardNavigation,
  withAriaAttributes,
  withExpandedAttribute,
  targetType,
  autoComplete,
  readOnly,
}: UseComboboxTargetPropsInput) {
  const ctx = useComboboxContext();
  const selectedOptionId = useSyncExternalStore(
    ctx.store.subscribeToSelectedOptionId,
    ctx.store.getSelectedOptionId,
    () => null
  );
  const typeahead = useRef('');
  const typeaheadTimeout = useRef(-1);
  const typeaheadSelectTimeout = useRef(-1);

  useEffect(
    () => () => {
      window.clearTimeout(typeaheadTimeout.current);
      window.clearTimeout(typeaheadSelectTimeout.current);
    },
    []
  );

  const handleTypeahead = (char: string) => {
    window.clearTimeout(typeaheadTimeout.current);
    typeahead.current += char;
    typeaheadTimeout.current = window.setTimeout(() => {
      typeahead.current = '';
    }, TYPEAHEAD_TIMEOUT);

    const text = typeahead.current;

    if (ctx.store.isDropdownOpened()) {
      selectOptionByText(ctx.store, text);
    } else {
      ctx.store.openDropdown('keyboard');
      window.clearTimeout(typeaheadSelectTimeout.current);
      typeaheadSelectTimeout.current = window.setTimeout(
        () => selectOptionByText(ctx.store, text),
        0
      );
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (ctx.readOnly) {
      return;
    }

    if (withKeyboardNavigation) {
      // Ignore during composition in IME
      if (event.nativeEvent.isComposing) {
        return;
      }

      if (event.nativeEvent.code === 'ArrowDown') {
        event.preventDefault();

        if (!ctx.store.dropdownOpened) {
          ctx.store.openDropdown('keyboard');
          ctx.store.selectActiveOption();
          ctx.store.updateSelectedOptionIndex('selected', { scrollIntoView: true });
        } else {
          ctx.store.selectNextOption();
        }
      }

      if (event.nativeEvent.code === 'ArrowUp') {
        event.preventDefault();

        if (!ctx.store.dropdownOpened) {
          ctx.store.openDropdown('keyboard');
          ctx.store.selectActiveOption();
          ctx.store.updateSelectedOptionIndex('selected', { scrollIntoView: true });
        } else {
          ctx.store.selectPreviousOption();
        }
      }

      if (event.nativeEvent.code === 'Enter' || event.nativeEvent.code === 'NumpadEnter') {
        // This is a workaround for handling differences in behavior of isComposing property in Safari
        // See: https://dninomiya.github.io/form-guide/stop-enter-submit
        // oxlint-disable-next-line typescript/no-deprecated
        if (event.nativeEvent.keyCode === 229) {
          return;
        }

        const selectedOptionIndex = ctx.store.getSelectedOptionIndex();

        if (ctx.store.dropdownOpened && selectedOptionIndex !== -1) {
          event.preventDefault();
          ctx.store.clickSelectedOption();
        } else if (targetType === 'button') {
          event.preventDefault();
          ctx.store.openDropdown('keyboard');
        }
      }

      if (event.key === 'Escape') {
        ctx.store.closeDropdown('keyboard');
      }

      if (targetType === 'button' && ctx.store.dropdownOpened) {
        if (event.key === 'Home') {
          event.preventDefault();
          ctx.store.selectFirstOption();
        }

        if (event.key === 'End') {
          event.preventDefault();
          ctx.store.selectLastOption();
        }
      }

      if (event.nativeEvent.code === 'Space' && typeahead.current === '') {
        if (targetType === 'button') {
          event.preventDefault();
          ctx.store.toggleDropdown('keyboard');
        }
      } else if (targetType === 'button' && isPrintableKey(event)) {
        event.preventDefault();
        handleTypeahead(event.key);
      }
    }
  };

  const ariaAttributes = withAriaAttributes
    ? {
        ...(withExpandedAttribute ? { role: 'combobox' as const } : {}),
        'aria-haspopup': 'listbox' as const,
        'aria-expanded': withExpandedAttribute
          ? !!(ctx.listId && ctx.store.dropdownOpened)
          : undefined,
        'aria-controls': ctx.store.dropdownOpened && ctx.listId ? ctx.listId : undefined,
        'aria-autocomplete':
          withExpandedAttribute && targetType === 'input' && !readOnly
            ? ('list' as const)
            : undefined,
        'aria-activedescendant': ctx.store.dropdownOpened
          ? selectedOptionId || undefined
          : undefined,
        autoComplete,
        'data-expanded': ctx.store.dropdownOpened || undefined,
        'data-mantine-stop-propagation': ctx.store.dropdownOpened || undefined,
      }
    : {};

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    // Safari does not give keyboard focus to non-text-input elements (including
    // readOnly inputs rendered as buttons) on click, which prevents onKeyDown
    // from firing. Explicitly focus the target when targetType is 'button'.
    if (targetType === 'button') {
      event.currentTarget.focus();
    }

    onClick?.(event);
  };

  return {
    ...ariaAttributes,
    onKeyDown: handleKeyDown,
    onClick: handleClick,
  };
}
