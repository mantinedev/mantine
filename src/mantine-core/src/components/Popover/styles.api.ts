import useStyles from './Popover.styles';

export const Popover: MantineClasses<typeof useStyles> = {
  root: 'Root element',
  center: 'Center placement',
  start: 'Start placement',
  end: 'End placement',
  left: 'Left position',
  right: 'Right position',
  top: 'Top position',
  bottom: 'Bottom position',
  wrapper: 'Popover wrapper, contains body and arrow',
  popover: 'Popover itself',
  arrow: 'Popover arrow',
  body: 'Popover body, contains header and inner',
  inner: 'Popover children wrapper',
  header: 'Popover header, contains title',
  target: 'Popover control',
  close: 'Popover close button',
};
