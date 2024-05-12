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
import { useCheckboxGroupContext } from '../CheckboxGroup.context';
import { CheckboxCardProvider } from './CheckboxCard.context';
import classes from './CheckboxCard.module.css';

export type CheckboxCardStylesNames = 'card';
export type CheckboxCardCssVariables = {
  card: '--card-radius';
};

export interface CheckboxCardProps
  extends BoxProps,
    StylesApiProps<CheckboxCardFactory>,
    ElementProps<'button', 'onChange'> {
  /** Checked state */
  checked?: boolean;

  /** Determines whether the card should have border, `true` by default */
  withBorder?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
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

const defaultProps: Partial<CheckboxCardProps> = {
  withBorder: true,
};

const varsResolver = createVarsResolver<CheckboxCardFactory>((_, { radius }) => ({
  card: {
    '--card-radius': getRadius(radius),
  },
}));

export const CheckboxCard = factory<CheckboxCardFactory>((_props, ref) => {
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
    vars,
    varsResolver,
    rootSelector: 'card',
  });

  const ctx = useCheckboxGroupContext();
  const _checked =
    typeof checked === 'boolean' ? checked : ctx?.value.includes(value || '') || false;

  return (
    <CheckboxCardProvider value={{ checked: _checked }}>
      <UnstyledButton
        ref={ref}
        mod={[{ 'with-border': withBorder, checked: _checked }, mod]}
        {...getStyles('card')}
        {...others}
        role="checkbox"
        aria-checked={_checked}
        onClick={(event) => {
          onClick?.(event);
          ctx?.onChange(value || '');
        }}
      />
    </CheckboxCardProvider>
  );
});

CheckboxCard.displayName = '@mantine/core/CheckboxCard';
CheckboxCard.classes = classes;
