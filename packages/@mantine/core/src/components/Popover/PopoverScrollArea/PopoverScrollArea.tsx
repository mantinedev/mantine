import { useRef } from 'react';
import cx from 'clsx';
import { useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
import { factory, Factory, useProps } from '../../../core';
import {
  ScrollArea,
  ScrollAreaAutosizeProps,
  ScrollAreaStylesNames,
} from '../../ScrollArea/ScrollArea';
import classes from '../Popover.module.css';

export interface PopoverScrollAreaProps extends Omit<ScrollAreaAutosizeProps, 'offsetScrollbars'> {
  /** If set, content is offset so that it never goes under the vertical scrollbar, even when the dropdown has smaller end padding than the scrollbar size @default true */
  offsetScrollbars?: boolean;
}

export type PopoverScrollAreaFactory = Factory<{
  props: PopoverScrollAreaProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaStylesNames;
}>;

const defaultProps = {
  scrollbarSize: 4,
  type: 'scroll',
  offsetScrollbars: true,
} satisfies Partial<PopoverScrollAreaProps>;

function getInlineEndPadding(element: HTMLElement) {
  const style = window.getComputedStyle(element);
  const value = style.direction === 'rtl' ? style.paddingLeft : style.paddingRight;
  return { padding: Number.parseFloat(value) || 0, position: style.position };
}

function getGutter(root: HTMLElement) {
  let node = root.parentElement;
  while (node) {
    const { padding, position } = getInlineEndPadding(node);
    if (padding > 0 || position === 'absolute' || position === 'fixed') {
      return padding;
    }
    node = node.parentElement;
  }
  return 0;
}

export const PopoverScrollArea = factory<PopoverScrollAreaFactory>((_props) => {
  const { className, classNames, offsetScrollbars, ref, ...others } = useProps(
    'PopoverScrollArea',
    defaultProps,
    _props
  );

  const rootRef = useRef<HTMLDivElement>(null);

  useIsomorphicEffect(() => {
    const root = rootRef.current;
    if (root) {
      root.style.setProperty('--popover-scroll-area-gutter', `${getGutter(root)}px`);
    }
  }, []);

  return (
    <ScrollArea.Autosize
      {...others}
      ref={useMergedRef(ref, rootRef)}
      className={cx(classes.scrollArea, className)}
      classNames={[{ viewport: classes.scrollAreaViewport }, classNames] as any}
      data-offset-content={offsetScrollbars || undefined}
    />
  );
});

PopoverScrollArea.displayName = '@mantine/core/PopoverScrollArea';
