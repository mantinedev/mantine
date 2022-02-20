import React from 'react';
import * as _icons from '../icons';

export interface CarouselControlProps extends React.ComponentPropsWithoutRef<'button'> {
  buttonType: 'indicator' | 'prev' | 'next';
  onClick?: () => void;
}

const icons = {
  indicator: _icons.IndicatorIcon,
  next: _icons.NextIcon,
  prev: _icons.PrevIcon,
};

export function DefaultItem({ buttonType, onClick, ...others }: CarouselControlProps) {
  const Item = icons[buttonType];

  return (
    <button type="button" onClick={onClick} {...others}>
      <Item />
    </button>
  );
}

DefaultItem.displayName = '@mantine/core/Carousel/DefaultItem';
