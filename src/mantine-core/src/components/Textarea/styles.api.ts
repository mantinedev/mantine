import { TextareaStylesNames } from './Textarea';
import { Input } from '../Input/styles.api';
import { InputWrapper } from '../InputWrapper/styles.api';

export const Textarea: Record<TextareaStylesNames, string> = {
  ...Input,
  ...InputWrapper,
};
