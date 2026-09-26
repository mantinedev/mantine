import cx from 'clsx';
import { RemoveScroll } from 'react-remove-scroll';
import { useWindowEvent } from '@mantine/hooks';
import {
  BoxProps,
  DataAttributes,
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
import { Affix, AffixBaseProps, AffixPosition, AffixProps } from '../Affix';
import { Paper, PaperBaseProps } from '../Paper';
import { Transition, TransitionOverride } from '../Transition';
import { VisuallyHidden } from '../VisuallyHidden';
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
    Omit<AffixBaseProps, 'withSafeArea'>,
    PaperBaseProps,
    StylesApiProps<ActionBarFactory>,
    ElementProps<'div'> {
  /** Controls visibility @category state */
  opened: boolean;

  /** Called when close button is clicked or Escape is pressed @category state */
  onClose?: () => void;

  /** Action bar position on screen @default { bottom: 30, left: 0, right: 0 } @category appearance */
  position?: AffixPosition;

  /** Props passed down to the `Affix` component */
  affixProps?: AffixProps & DataAttributes;

  /** Props passed down to the `Transition` component @default { transition: 'pop', duration: 200 } @category appearance */
  transitionProps?: TransitionOverride;

  /** Key of `theme.shadows` or any valid CSS `box-shadow` value @category appearance */
  shadow?: MantineShadow;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** Determines whether the action bar should be closed when `Escape` key is pressed @default false @category behavior */
  closeOnEscape?: boolean;

  /** `aria-label` of the actions group, describes what the actions apply to @category accessibility */
  'aria-label'?: string;

  /** Content announced by screen readers when the action bar opens or when the content changes while it is opened, for example `'3 rows selected'` @category accessibility */
  announcement?: React.ReactNode;

  /** If set, the action bar is kept in the DOM when closed. React `Activity` is used to preserve its state while it is hidden @default false */
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
    announcement,
    affixProps,
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
      if (!closeOnEscape || !opened || event.key !== 'Escape' || event.isComposing) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (
        target?.getAttribute?.('data-mantine-stop-propagation') === 'true' ||
        target?.closest?.('[aria-modal="true"]')
      ) {
        return;
      }

      onClose?.();
    },
    { capture: true }
  );

  return (
    <Affix
      {...affixProps}
      zIndex={zIndex}
      position={position}
      withinPortal={withinPortal}
      portalProps={portalProps}
      unstyled={unstyled}
      className={cx(RemoveScroll.classNames.fullWidth, affixProps?.className)}
    >
      {announcement !== undefined && (
        <VisuallyHidden role="status" aria-live="polite">
          {opened ? announcement : null}
        </VisuallyHidden>
      )}
      <Transition keepMounted={keepMounted} mounted={opened} {...transitionProps}>
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
