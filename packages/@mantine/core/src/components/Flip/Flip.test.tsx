import { render, tests } from '@mantine-tests/core';
import React from 'react';
import { Flip, FlipProps, FlipStylesNames } from './Flip';

const defaultProps: FlipProps = {};

describe('@mantine/core/Flip', () => {
  tests.itSupportsSystemProps<FlipProps, FlipStylesNames>({
    component: Flip,
    props: defaultProps,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Flip',
    stylesApiSelectors: ['root'],
  });

  it('supports perspective prop', () => {
    const { container } = render(<Flip perspective="500px" />);
    expect(container.querySelector('.mantine-Flip-root')).toHaveStyle({ perspective: '500px' });
  });
});
