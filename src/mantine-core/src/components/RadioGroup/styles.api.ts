import { InputWrapperStylesNames } from '../InputWrapper/InputWrapper';
import { InputWrapper } from '../InputWrapper/styles.api';
import useStyles from './Radio/Radio.styles';

export const Radio: Record<Exclude<keyof ReturnType<typeof useStyles>, 'labelDisabled'>, string> = {
  root: 'Root element',
  label: 'Label element',
  radio: 'Radio input',
};

export const RadioGroup: Record<InputWrapperStylesNames, string> = InputWrapper;
