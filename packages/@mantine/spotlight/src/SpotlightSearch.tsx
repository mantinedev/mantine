import { useState } from 'react';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Input,
  InputProps,
  InputStylesNames,
  useProps,
} from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import { spotlightActions } from './spotlight.store';
import classes from './Spotlight.module.css';

export type SpotlightSearchStylesNames = InputStylesNames;

export interface SpotlightSearchProps
  extends BoxProps,
    Omit<InputProps, 'classNames' | 'styles' | 'vars' | 'variant'>,
    CompoundStylesApiProps<SpotlightSearchFactory>,
    ElementProps<'input', 'size'> {}

export type SpotlightSearchFactory = Factory<{
  props: SpotlightSearchProps;
  ref: HTMLInputElement;
  stylesNames: SpotlightSearchStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightSearchProps> = {
  size: 'lg',
};

export const SpotlightSearch = factory<SpotlightSearchFactory>((props, ref) => {
  const { classNames, styles, onKeyDown, onChange, vars, value, ...others } = useProps(
    'SpotlightSearch',
    defaultProps,
    props
  );
  const ctx = useSpotlightContext();
  const inputStyles = ctx.getStyles('search');
  const [isComposing, setIsComposing] = useState(false); // IME

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);
    if (isComposing) {
      return;
    }

    if (event.nativeEvent.code === 'ArrowDown') {
      event.preventDefault();
      spotlightActions.selectNextAction(ctx.store);
    }

    if (event.nativeEvent.code === 'ArrowUp') {
      event.preventDefault();
      spotlightActions.selectPreviousAction(ctx.store);
    }

    if (event.nativeEvent.code === 'Enter' || event.nativeEvent.code === 'NumpadEnter') {
      event.preventDefault();
      spotlightActions.triggerSelectedAction(ctx.store);
    }
  };

  return (
    <Input
      ref={ref}
      classNames={[{ input: inputStyles.className }, classNames] as any}
      styles={[{ input: inputStyles.style }, styles] as any}
      {...others}
      value={value ?? ctx.query}
      onChange={(event) => {
        ctx.setQuery(event.currentTarget.value);
        onChange?.(event);
      }}
      onKeyDown={handleKeyDown}
      onCompositionStart={() => setIsComposing(true)}
      onCompositionEnd={() => setIsComposing(false)}
    />
  );
});

SpotlightSearch.classes = classes;
SpotlightSearch.displayName = '@mantine/spotlight/SpotlightSearch';
