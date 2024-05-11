import {
  BoxProps,
  createOptionalContext,
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
import classes from './CheckboxCard.module.css';

export interface CheckboxCardContextValue {
  checked: boolean;
}

export const [CheckboxCardProvider, useCheckboxCardContext] =
  createOptionalContext<CheckboxCardContextValue>();

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
}

export type CheckboxCardFactory = Factory<{
  props: CheckboxCardProps;
  ref: HTMLButtonElement;
  stylesNames: CheckboxCardStylesNames;
  vars: CheckboxCardCssVariables;
}>;

const defaultProps: Partial<CheckboxCardProps> = {};

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

  return (
    <CheckboxCardProvider value={{ checked: checked || false }}>
      <UnstyledButton
        ref={ref}
        mod={[{ 'with-border': withBorder, checked }, mod]}
        {...getStyles('card')}
        {...others}
        role="checkbox"
        aria-checked={checked}
      />
    </CheckboxCardProvider>
  );
});

CheckboxCard.displayName = '@mantine/core/CheckboxCard';
CheckboxCard.classes = classes;
