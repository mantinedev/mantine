import { createContext, use } from 'react';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../../core';
import { UnstyledButton } from '../../UnstyledButton';
import { RadioGroupContext } from '../RadioGroup/RadioGroup';
import classes from './RadioCard.module.css';

export interface RadioCardContextValue {
  checked: boolean;
}

export const RadioCardContext = createContext<RadioCardContextValue | null>(null);

export type RadioCardStylesNames = 'card';
export type RadioCardCssVariables = {
  card: '--card-radius';
};

export interface RadioCardProps
  extends BoxProps, StylesApiProps<RadioCardFactory>, ElementProps<'button', 'onChange'> {
  /** Checked state */
  checked?: boolean;

  /** Adds border to the root element */
  withBorder?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Value of the radio, used with Radio.Group */
  value?: string;

  /** Value used to associate all related radio cards, required for accessibility if used outside of `Radio.Group` */
  name?: string;
}

export type RadioCardFactory = Factory<{
  props: RadioCardProps;
  ref: HTMLButtonElement;
  stylesNames: RadioCardStylesNames;
  vars: RadioCardCssVariables;
}>;

const defaultProps = {
  withBorder: true,
} satisfies Partial<RadioCardProps>;

const varsResolver = createVarsResolver<RadioCardFactory>((_, { radius }) => ({
  card: {
    '--card-radius': getRadius(radius),
  },
}));

export const RadioCard = factory<RadioCardFactory>((_props) => {
  const props = useProps('RadioCard', defaultProps, _props);
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
    name,
    onKeyDown,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<RadioCardFactory>({
    name: 'RadioCard',
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

  const { dir } = useDirection();
  const ctx = use(RadioGroupContext);
  const _checked = typeof checked === 'boolean' ? checked : ctx?.value === value || false;
  const _name = name || ctx?.name;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    if (!_name) {
      return;
    }

    if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.nativeEvent.code)) {
      event.preventDefault();

      const siblings = Array.from(
        document.querySelectorAll<HTMLButtonElement>(`[role="radio"][name="${_name}"]`)
      );

      const currentIndex = siblings.findIndex((element) => element === event.target);
      const nextIndex = currentIndex + 1 >= siblings.length ? 0 : currentIndex + 1;
      const prevIndex = currentIndex - 1 < 0 ? siblings.length - 1 : currentIndex - 1;

      if (event.nativeEvent.code === 'ArrowDown') {
        siblings[nextIndex].focus();
        siblings[nextIndex].click();
      }

      if (event.nativeEvent.code === 'ArrowUp') {
        siblings[prevIndex].focus();
        siblings[prevIndex].click();
      }

      if (event.nativeEvent.code === 'ArrowLeft') {
        siblings[dir === 'ltr' ? prevIndex : nextIndex].focus();
        siblings[dir === 'ltr' ? prevIndex : nextIndex].click();
      }

      if (event.nativeEvent.code === 'ArrowRight') {
        siblings[dir === 'ltr' ? nextIndex : prevIndex].focus();
        siblings[dir === 'ltr' ? nextIndex : prevIndex].click();
      }
    }
  };

  return (
    <RadioCardContext value={{ checked: _checked }}>
      <UnstyledButton
        mod={[{ 'with-border': withBorder, checked: _checked }, mod]}
        {...getStyles('card')}
        {...others}
        role="radio"
        aria-checked={_checked}
        name={_name}
        onClick={(event) => {
          onClick?.(event);
          ctx?.onChange(value || '');
        }}
        onKeyDown={handleKeyDown}
      />
    </RadioCardContext>
  );
});

RadioCard.displayName = '@mantine/core/RadioCard';
RadioCard.classes = classes;
