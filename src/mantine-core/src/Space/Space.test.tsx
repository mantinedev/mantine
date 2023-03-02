import React from 'react';
import { render } from '@testing-library/react';
import { rem } from '@mantine/styles';
import { itSupportsSystemProps } from '@mantine/tests';
import { Space, SpaceProps } from './Space';

const defaultProps: SpaceProps = {};

describe('@mantine/core/Space', () => {
  itSupportsSystemProps({
    component: Space,
    props: defaultProps,
    displayName: '@mantine/core/Space',
    refType: HTMLDivElement,
    providerName: 'Space',
  });

  it('sets width based on w prop', () => {
    const { container } = render(<Space w={22} />);
    expect(container.firstChild).toHaveStyle({
      width: rem(22),
      minWidth: rem(22),
      height: rem(0),
      minHeight: rem(0),
    });
  });

  it('sets height based on h prop', () => {
    const { container } = render(<Space h={45} />);
    expect(container.firstChild).toHaveStyle({
      height: rem(45),
      minHeight: rem(45),
      width: rem(0),
      minWidth: rem(0),
    });
  });
});
