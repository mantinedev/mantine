import { useState } from 'react';
import { useComboboxContext } from '../Combobox.context';

interface UseComboboxTargetPropsInput {
  targetType: 'input' | 'button' | undefined;
  withAriaAttributes: boolean | undefined;
  withKeyboardNavigation: boolean | undefined;
  withExpandedAttribute: boolean | undefined;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onClick: React.MouseEventHandler<HTMLInputElement> | undefined;
  autoComplete: string | undefined;
}

export function useComboboxTargetProps({
  onKeyDown,
  onClick,
  withKeyboardNavigation,
  withAriaAttributes,
  withExpandedAttribute,
  targetType,
  autoComplete,
}: UseComboboxTargetPropsInput) {
  const ctx = useComboboxContext();
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

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
          setSelectedOptionId(ctx.store.selectActiveOption());
          ctx.store.updateSelectedOptionIndex('selected', { scrollIntoView: true });
        } else {
          setSelectedOptionId(ctx.store.selectNextOption());
        }
      }

      if (event.nativeEvent.code === 'ArrowUp') {
        event.preventDefault();

        if (!ctx.store.dropdownOpened) {
          ctx.store.openDropdown('keyboard');
          setSelectedOptionId(ctx.store.selectActiveOption());
          ctx.store.updateSelectedOptionIndex('selected', { scrollIntoView: true });
        } else {
          setSelectedOptionId(ctx.store.selectPreviousOption());
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

      if (event.nativeEvent.code === 'Space') {
        if (targetType === 'button') {
          event.preventDefault();
          ctx.store.toggleDropdown('keyboard');
        }
      }
    }
  };

  const ariaAttributes = withAriaAttributes
    ? {
        ...(withExpandedAttribute ? { role: 'combobox' as const } : {}),
        'aria-haspopup': 'listbox' as const,
        'aria-expanded': withExpandedAttribute
          ? !!(ctx.store.listId && ctx.store.dropdownOpened)
          : undefined,
        'aria-controls':
          ctx.store.dropdownOpened && ctx.store.listId ? ctx.store.listId : undefined,
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
