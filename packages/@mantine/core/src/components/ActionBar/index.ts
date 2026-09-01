export { ActionBar } from './ActionBar';
export { ActionBarDivider } from './ActionBarDivider/ActionBarDivider';
export { ActionBarCloseButton } from './ActionBarCloseButton/ActionBarCloseButton';

export type { ActionBarProps, ActionBarStylesNames, ActionBarFactory } from './ActionBar';
export type {
  ActionBarDividerProps,
  ActionBarDividerFactory,
} from './ActionBarDivider/ActionBarDivider';
export type {
  ActionBarCloseButtonProps,
  ActionBarCloseButtonFactory,
} from './ActionBarCloseButton/ActionBarCloseButton';

export namespace ActionBar {
  export type Props = import('./ActionBar').ActionBarProps;
  export type StylesNames = import('./ActionBar').ActionBarStylesNames;
  export type Factory = import('./ActionBar').ActionBarFactory;

  export namespace Divider {
    export type Props = import('./ActionBarDivider/ActionBarDivider').ActionBarDividerProps;
  }

  export namespace CloseButton {
    export type Props =
      import('./ActionBarCloseButton/ActionBarCloseButton').ActionBarCloseButtonProps;
  }
}
