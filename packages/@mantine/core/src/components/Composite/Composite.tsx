import React, { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import type { ForwardedRef, Key, KeyboardEventHandler, MouseEventHandler } from 'react';
import { mergeRefs, useDidUpdate, useId } from '@mantine/hooks';
import { Box, createPolymorphicComponent, createSafeContext } from '../../core';
import type { CompositeContextValue, CompositeProps } from './Composite.types';
import type { FocusOptions } from './FocusManager/FocusManager.types';
import { useFocusManager } from './FocusManager/useFocusManager';
import { SelectionOptions } from './SelectionManager/SelectionManager';
import { useSelectionManager } from './SelectionManager/useSelectionManager';

export const [CompositeProvider, useCompositeContext] = createSafeContext<CompositeContextValue>(
  'Composite component was not found in tree'
);

function Composite<T>(props: CompositeProps<T>, ref: ForwardedRef<HTMLDivElement>) {
  const {
    id,
    role,
    navigableChildRole,
    items,
    focusOptions,
    selectionOptions,
    value,
    defaultValue,
    disabledKeys,
    onChange,
    getItemKey = (item: any) => (item.id ?? item.key) as Key,
    renderItem,
    ...rest
  } = props;
  const _id = useId(id);
  const compositeRef = useRef<HTMLElement>(null);

  const _focusOptions: FocusOptions = useMemo(
    () => ({
      pageSize: 5,
      loop: false,
      moveToNextColumn: false,
      moveToNextRow: false,
      ...focusOptions,
    }),
    [focusOptions]
  );

  const _selectionOptions: SelectionOptions = useMemo(
    () => ({
      multiple: false,
      trackSelectioMode: false,
      ...selectionOptions,
    }),
    [selectionOptions]
  );

  const focusManager = useFocusManager(compositeRef, navigableChildRole, _focusOptions, [items]);

  const [selectedKeys, selectionManager] = useSelectionManager(focusManager, _selectionOptions, {
    value,
    defaultValue,
    onChange,
  });

  const [selectionMode, setSelectionMode] = useState<boolean>(
    !!selectedKeys && selectedKeys.length > 0
  );

  useDidUpdate(() => {
    if (
      _selectionOptions.trackSelectioMode &&
      selectionMode !== (!!selectedKeys && selectedKeys.length > 0)
    ) {
      setSelectionMode((prev) => !prev);
    }
  }, [selectedKeys]);

  const rootMouseInteractions: MouseEventHandler<HTMLElement> = useCallback(() => {
    focusManager.focus(focusManager.focused.index);
  }, [focusManager]);

  const rootKeyboardInteractions: KeyboardEventHandler<HTMLElement> = useCallback(
    (event) => {
      selectionManager.keyboardEventHandler(event);
    },
    [selectionManager]
  );

  const itemMouseInteractions: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      if (event.button === 0) selectionManager.mouseEventHandler(event);
    },
    [selectionManager]
  );

  const store = useMemo(
    () => ({ multiple: _selectionOptions.multiple, selectionMode }),
    [_selectionOptions.multiple, selectionMode]
  );

  return (
    <Box
      component="div"
      {...rest}
      ref={mergeRefs(compositeRef, ref)}
      id={_id}
      role={role}
      aria-multiselectable={selectionManager.multiple}
      aria-orientation={
        focusManager.options.behaviour === 'HorizontalList' ? 'horizontal' : undefined
      }
      onKeyDown={rootKeyboardInteractions}
      onClick={rootMouseInteractions}
    >
      <CompositeProvider value={store}>
        {items.map((item, index) => {
          const key = getItemKey(item);
          const selected = selectedKeys.includes(key);
          const disabled = disabledKeys ? disabledKeys.includes(key) : false;

          return renderItem(
            item,
            { selected, disabled },
            {
              key,
              role: navigableChildRole,
              onMouseDown: !disabled ? itemMouseInteractions : undefined,
              'data-item-key': JSON.stringify(key),
              'aria-selected': selected,
              'aria-disabled': disabled,
            },
            index
          );
        })}
      </CompositeProvider>
    </Box>
  );
}

const polymorphicComposite = createPolymorphicComponent<'div', CompositeProps<any>>(
  forwardRef<HTMLDivElement, CompositeProps<any>>(Composite)
);

export { polymorphicComposite as Composite };
