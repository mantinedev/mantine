import useStyles from './Radio/Radio.styles';

export const Radio: Record<Exclude<keyof ReturnType<typeof useStyles>, 'labelDisabled'>, string> = {
  root: 'Root element',
  label: 'Label element',
  radio: 'Radio input',
};
