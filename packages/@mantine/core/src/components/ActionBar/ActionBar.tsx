import { useEffect, useEffectEvent } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  getDefaultZIndex,
  MantineRadius,
  MantineShadow,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Affix, AffixBaseProps } from '../Affix';
import { Paper, PaperBaseProps } from '../Paper';
import { Transition, TransitionOverride } from '../Transition';
import { ActionBarProvider } from './ActionBar.context';
import {
  ActionBarCloseButton,
  ActionBarCloseButtonStylesNames,
} from './ActionBarCloseButton/ActionBarCloseButton';
import { ActionBarDivider, ActionBarDividerStylesNames } from './ActionBarDivider/ActionBarDivider';
import classes from './ActionBar.module.css';

export type ActionBarStylesNames =
  | 'root'
  | ActionBarDividerStylesNames
  | ActionBarCloseButtonStylesNames;

export interface ActionBarProps
  extends
    BoxProps,
    AffixBaseProps,
    PaperBaseProps,
    StylesApiProps<ActionBarFactory>,
    ElementProps<'div'> {
  /** Controls visibility */
  opened: boolean;

  /** Called when close button is clicked or Escape is pressed */
  onClose?: () => void;

  /** Props passed down to the `Transition` component, `{ transition: 'pop', duration: 200 }` by default */
  transitionProps?: TransitionOverride;

  /** Key of `theme.shadows` or any valid CSS `box-shadow` value */
  shadow?: MantineShadow;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` */
  radius?: MantineRadius;

  /** Determines whether the action bar should be closed when `Escape` key is pressed, `false` by default */
  closeOnEscape?: boolean;

  /** `aria-label` of the actions group, `'Actions'` by default */
  'aria-label'?: string;

  /** If set, the component uses `display: none` to hide the root element instead of removing the DOM node, `false` by default */
  keepMounted?: boolean;

  children: React.ReactNode;
}

export type ActionBarFactory = Factory<{
  props: ActionBarProps;
  ref: HTMLDivElement;
  stylesNames: ActionBarStylesNames;
  staticComponents: {
    Divider: typeof ActionBarDivider;
    CloseButton: typeof ActionBarCloseButton;
  };
}>;

const defaultProps = {
  withBorder: true,
  py: 'xs',
  px: 'sm',
  position: { bottom: 30, left: 0, right: 0 },
  transitionProps: { transition: 'pop', duration: 200 },
  closeOnEscape: false,
  withinPortal: true,
  'aria-label': 'Actions',
  zIndex: getDefaultZIndex('modal'),
} satisfies Partial<ActionBarProps>;

export const ActionBar = factory<ActionBarFactory>((_props) => {
  const props = useProps('ActionBar', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    zIndex,
    position,
    keepMounted,
    opened,
    transitionProps,
    withinPortal,
    children,
    onClose,
    portalProps,
    closeOnEscape,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<ActionBarFactory>({
    name: 'ActionBar',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const handleEscape = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === 'Escape' && !event.isComposing) {
      onClose?.();
    }
  });

  useEffect(() => {
    if (!closeOnEscape || !opened) {
      return undefined;
    }

    window.addEventListener('keydown', handleEscape, { passive: true });
    return () => window.removeEventListener('keydown', handleEscape);
  }, [closeOnEscape, opened]);

  return (
    <Affix
      zIndex={zIndex}
      position={position}
      withinPortal={withinPortal}
      portalProps={portalProps}
      unstyled={unstyled}
      // The default position is anchored to both edges, so the bar is a full width fixed
      // element. Without this it shifts by the scrollbar width whenever a Modal or Drawer
      // locks scrolling – which is exactly the flow ActionBar exists for (select rows, run a
      // bulk action, confirm it in a modal).
      className={RemoveScroll.classNames.fullWidth}
    >
      {/* `keepMountedMode` is pinned to `display-none`: the documented contract is that the
          bar stays in the DOM and is merely hidden, and `Transition`'s default `activity`
          mode tears down the effects of everything inside it instead. */}
      <Transition
        keepMounted={keepMounted}
        keepMountedMode="display-none"
        mounted={opened}
        {...transitionProps}
      >
        {(transitionStyles) => (
          <ActionBarProvider value={{ onClose, getStyles, unstyled }}>
            <Paper
              unstyled={unstyled}
              {...getStyles('root', { style: transitionStyles })}
              role="group"
              {...others}
            >
              {children}
            </Paper>
          </ActionBarProvider>
        )}
      </Transition>
    </Affix>
  );
});

ActionBar.classes = classes;
ActionBar.displayName = '@mantine/core/ActionBar';
ActionBar.Divider = ActionBarDivider;
ActionBar.CloseButton = ActionBarCloseButton;
