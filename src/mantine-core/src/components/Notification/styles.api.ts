import useStyles from './Notification.styles';

export const Notification: MantineClasses<typeof useStyles> = {
  root: 'Root element',
  withIcon: 'Notification loading or icon modifier',
  body: 'Notification body wrapper, contains title and description',
  loader: 'Notification loader, controlled by loading prop',
  icon: 'Notification icon on the left, controlled by icon prop',
  title: 'Notification title, controlled by title prop',
  description: 'Notification description, controlled by children',
};
