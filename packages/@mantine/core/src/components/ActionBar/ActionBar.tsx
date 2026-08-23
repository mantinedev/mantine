import { useWindowEvent } from '@mantine/hooks';
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
import classes from './ActionBar.module.css';
import {
  ActionBarCloseButton,
  ActionBarCloseButtonStylesNames,
} from './ActionBarCloseButton/ActionBarCloseButton';
import { ActionBarDivider, ActionBarDividerStylesNames } from './ActionBarDivider/ActionBarDivider';

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

  useWindowEvent(
    'keydown',
    (event) => {
      if (event.key === 'Escape' && closeOnEscape && !event.isComposing && opened) {
        onClose?.();
      }
    },
    { passive: true }
  );

  return (
    <Affix
      zIndex={zIndex}
      position={position}
      withinPortal={withinPortal}
      portalProps={portalProps}
      unstyled={unstyled}
    >
      <Transition keepMounted={keepMounted} mounted={opened} {...transitionProps}>
        {(transitionStyles) => (
          <ActionBarProvider value={{ onClose, getStyles }}>
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
