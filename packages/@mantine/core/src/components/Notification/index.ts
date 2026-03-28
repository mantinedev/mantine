import type {
  NotificationCssVariables,
  NotificationFactory,
  NotificationProps,
  NotificationStylesNames,
} from './Notification';

export { Notification } from './Notification';

export type {
  NotificationProps,
  NotificationStylesNames,
  NotificationFactory,
  NotificationCssVariables,
};

export namespace Notification {
  export type Props = NotificationProps;
  export type StylesNames = NotificationStylesNames;
  export type Factory = NotificationFactory;
  export type CssVariables = NotificationCssVariables;
}
