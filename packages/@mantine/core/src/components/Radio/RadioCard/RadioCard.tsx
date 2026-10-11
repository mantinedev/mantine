import { createContext, use, useEffect, useRef, useState } from 'react';
import { useMergedRef } from '@mantine/hooks';
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

  /** Adds border to the root element @default true */
  withBorder?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Value of the radio, used with Radio.Group */
  value?: string;

  /** Value used to associate all related radio cards, required for accessibility if used outside of `Radio.Group` */
  name?: string;

  /** Sets `disabled` attribute, prevents interactions. Inherited from `Radio.Group` when not set */
  disabled?: boolean;
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
    disabled,
    ref,
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
  const cardRef = useRef<HTMLButtonElement>(null);
  const mergedRef = useMergedRef(ref, cardRef);
  const _checked = typeof checked === 'boolean' ? checked : ctx?.value === value || false;
  const _name = name || ctx?.name;
  const _disabled = disabled ?? ctx?.disabled ?? false;
  const [isFallbackTabStop, setIsFallbackTabStop] = useState(false);

  const getEnabledSiblings = () =>
    Array.from(
      document.querySelectorAll<HTMLButtonElement>(`[role="radio"][name="${_name}"]`)
    ).filter((element) => !element.disabled);

  useEffect(() => {
    if (!_name || !cardRef.current) {
      return;
    }

    const siblings = getEnabledSiblings();
    const hasCheckedSibling = siblings.some(
      (element) => element.getAttribute('aria-checked') === 'true'
    );
    setIsFallbackTabStop(!hasCheckedSibling && siblings[0] === cardRef.current);
  });

  const getTabIndex = () => {
    if (!_name) {
      return undefined;
    }

    if (_disabled) {
      return -1;
    }

    return _checked || isFallbackTabStop ? 0 : -1;
  };

  const selectSibling = (element: HTMLButtonElement | undefined) => {
    if (element) {
      element.focus();
      element.click();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    if (!_name) {
      return;
    }

    const code = event.nativeEvent.code;

    if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(code)) {
      event.preventDefault();

      const siblings = getEnabledSiblings();
      const currentIndex = siblings.findIndex((element) => element === event.target);
      const nextIndex = currentIndex + 1 >= siblings.length ? 0 : currentIndex + 1;
      const prevIndex = currentIndex - 1 < 0 ? siblings.length - 1 : currentIndex - 1;

      if (code === 'ArrowDown') {
        selectSibling(siblings[nextIndex]);
      }

      if (code === 'ArrowUp') {
        selectSibling(siblings[prevIndex]);
      }

      if (code === 'ArrowLeft') {
        selectSibling(siblings[dir === 'ltr' ? prevIndex : nextIndex]);
      }

      if (code === 'ArrowRight') {
        selectSibling(siblings[dir === 'ltr' ? nextIndex : prevIndex]);
      }

      if (code === 'Home') {
        selectSibling(siblings[0]);
      }

      if (code === 'End') {
        selectSibling(siblings[siblings.length - 1]);
      }
    }
  };

  return (
    <RadioCardContext value={{ checked: _checked }}>
      {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus -- UnstyledButton renders a native <button> which is focusable */}
      <UnstyledButton
        mod={[{ 'with-border': withBorder, checked: _checked, disabled: _disabled }, mod]}
        {...getStyles('card')}
        tabIndex={getTabIndex()}
        {...others}
        ref={mergedRef}
        role="radio"
        aria-checked={_checked}
        disabled={_disabled}
        name={_name}
        onClick={(event) => {
          onClick?.(event);
          !_disabled && ctx?.onChange(value || '');
        }}
        onKeyDown={handleKeyDown}
      />
    </RadioCardContext>
  );
});

RadioCard.displayName = '@mantine/core/RadioCard';
RadioCard.classes = classes;
RadioCard.varsResolver = varsResolver;
