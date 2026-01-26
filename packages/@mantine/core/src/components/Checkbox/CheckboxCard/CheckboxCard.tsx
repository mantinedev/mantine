import { createContext, use } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { UnstyledButton } from '../../UnstyledButton';
import { CheckboxGroupContext } from '../CheckboxGroup/CheckboxGroup';
import classes from './CheckboxCard.module.css';

export interface CheckboxCardContextValue {
  checked: boolean;
}

export const CheckboxCardContext = createContext<CheckboxCardContextValue | null>(null);

export type CheckboxCardStylesNames = 'card';
export type CheckboxCardCssVariables = {
  card: '--card-radius';
};

export interface CheckboxCardProps
  extends BoxProps, StylesApiProps<CheckboxCardFactory>, ElementProps<'button', 'onChange'> {
  /** Controlled component value */
  checked?: boolean;

  /** Uncontrolled component default value */
  defaultChecked?: boolean;

  /** Called when value changes */
  onChange?: (checked: boolean) => void;

  /** Adds border to the root element */
  withBorder?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Value of the checkbox, used with `Checkbox.Group` */
  value?: string;
}

export type CheckboxCardFactory = Factory<{
  props: CheckboxCardProps;
  ref: HTMLButtonElement;
  stylesNames: CheckboxCardStylesNames;
  vars: CheckboxCardCssVariables;
}>;

const defaultProps = {
  withBorder: true,
} satisfies Partial<CheckboxCardProps>;

const varsResolver = createVarsResolver<CheckboxCardFactory>((_, { radius }) => ({
  card: {
    '--card-radius': getRadius(radius),
  },
}));

export const CheckboxCard = factory<CheckboxCardFactory>((_props) => {
  const props = useProps('CheckboxCard', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    checked,
    mod,
    withBorder,
    value,
    onClick,
    defaultChecked,
    onChange,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<CheckboxCardFactory>({
    name: 'CheckboxCard',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
    rootSelector: 'card',
  });

  const ctx = use(CheckboxGroupContext);
  const _checked =
    typeof checked === 'boolean' ? checked : ctx ? ctx.value.includes(value || '') : undefined;

  const [_value, setValue] = useUncontrolled({
    value: _checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  return (
    <CheckboxCardContext value={{ checked: _value }}>
      <UnstyledButton
        mod={[{ 'with-border': withBorder, checked: _value }, mod]}
        {...getStyles('card')}
        {...others}
        role="checkbox"
        aria-checked={_value}
        onClick={(event) => {
          onClick?.(event);
          ctx?.onChange(value || '');
          setValue(!_value);
        }}
      />
    </CheckboxCardContext>
  );
});

CheckboxCard.displayName = '@mantine/core/CheckboxCard';
CheckboxCard.classes = classes;
