import React from 'react';
import { itSupportsSystemProps } from '@mantine/tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
  variant: '',
};

describe('@mantine/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@mantine/core/SliderRoot',
    refType: HTMLDivElement,
  });
});
