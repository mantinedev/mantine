import { useEffect, useRef } from 'react';
import { useCallbackRef, useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  createEventHandler,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { Loader } from '../../Loader';
import { MenuItem, MenuItemStylesNames } from '../MenuItem/MenuItem';
import classes from '../Menu.module.css';

export type MenuLoadMoreStylesNames = MenuItemStylesNames;

export interface MenuLoadMoreProps
  extends BoxProps, CompoundStylesApiProps<MenuLoadMoreFactory>, ElementProps<'button', 'color'> {
  /** Called when the item is clicked, focused with the keyboard or scrolled into view */
  onLoadMore?: () => void;

  /** If set, displays a loader in the left section, skips the item in keyboard navigation and does not call `onLoadMore` @default false */
  loading?: boolean;

  /** Item label */
  children?: React.ReactNode;

  /** Section displayed at the start of the label, replaced with a loader when `loading` is set */
  leftSection?: React.ReactNode;

  /** Section displayed at the end of the label */
  rightSection?: React.ReactNode;
}

export type MenuLoadMoreFactory = Factory<{
  props: MenuLoadMoreProps;
  ref: HTMLButtonElement;
  stylesNames: MenuLoadMoreStylesNames;
  compound: true;
}>;

export const MenuLoadMore = factory<MenuLoadMoreFactory>((props) => {
  const { onLoadMore, loading, disabled, leftSection, onClick, onFocus, ref, ...others } = useProps(
    'MenuLoadMore',
    null,
    props
  );

  const itemRef = useRef<HTMLButtonElement>(null);
  const loadMore = useCallbackRef(() => {
    if (!loading && !disabled) {
      onLoadMore?.();
    }
  });

  useEffect(() => {
    const node = itemRef.current;
    if (loading || disabled || !node || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        loadMore();
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [loading, disabled]);

  const handleClick = createEventHandler<any>(onClick, loadMore);
  const handleFocus = createEventHandler<any>(onFocus, loadMore);

  return (
    <MenuItem
      {...others}
      ref={useMergedRef(ref, itemRef)}
      closeMenuOnClick={false}
      disabled={disabled}
      data-disabled={loading || undefined}
      aria-disabled={loading || undefined}
      aria-busy={loading || undefined}
      leftSection={loading ? <Loader size={14} /> : leftSection}
      onClick={handleClick}
      onFocus={handleFocus}
      data-menu-load-more
    />
  );
});

MenuLoadMore.classes = classes;
MenuLoadMore.displayName = '@mantine/core/MenuLoadMore';
