import { use, useEffect, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { announceMenuMessage } from '../menu-announcer';
import { useMenuContext } from '../Menu.context';
import { SubMenuContext } from '../MenuSub/MenuSub.context';
import classes from '../Menu.module.css';

export type MenuEmptyStylesNames = 'empty';

export interface MenuEmptyProps
  extends BoxProps, CompoundStylesApiProps<MenuEmptyFactory>, ElementProps<'div'> {}

export type MenuEmptyFactory = Factory<{
  props: MenuEmptyProps;
  ref: HTMLDivElement;
  stylesNames: MenuEmptyStylesNames;
  compound: true;
}>;

export const MenuEmpty = factory<MenuEmptyFactory>((props) => {
  const { classNames, className, style, styles, vars, ref, ...others } = useProps(
    'MenuEmpty',
    null,
    props
  );

  const ctx = useMenuContext();
  const subCtx = use(SubMenuContext);
  const opened = subCtx ? subCtx.opened : ctx.opened;
  const rootRef = useRef<HTMLDivElement>(null);
  const announced = useRef<{ text: string; cancel: () => void } | null>(null);

  useEffect(() => {
    const text = opened ? (rootRef.current?.textContent?.trim() ?? '') : '';
    if (text === (announced.current?.text ?? '')) {
      return;
    }

    announced.current?.cancel();
    announced.current = text ? { text, cancel: announceMenuMessage(text) } : null;
  });

  useEffect(
    () => () => {
      announced.current?.cancel();
      announced.current = null;
    },
    []
  );

  return (
    <Box
      role="menuitem"
      aria-disabled="true"
      {...ctx.getStyles('empty', { className, classNames, styles, style })}
      {...others}
      ref={useMergedRef(ref, rootRef)}
      data-menu-empty
    />
  );
});

MenuEmpty.classes = classes;
MenuEmpty.displayName = '@mantine/core/MenuEmpty';
