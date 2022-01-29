import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@mantine/tests';
import { Space, SpaceProps } from './Space';

const defaultProps: SpaceProps = {};

describe('@mantine/core/Space', () => {
  itSupportsSystemProps({
    component: Space as any,
    props: defaultProps,
    displayName: '@mantine/core/Space',
    refType: HTMLDivElement,
  });

  it('sets width based on w prop', () => {
    const { container } = render(<Space w={22} />);
    expect(container.firstChild).toHaveStyle({
      width: '22px',
      minWidth: '22px',
      height: 0,
      minHeight: 0,
    });
  });

  it('sets height based on h prop', () => {
    const { container } = render(<Space h={45} />);
    expect(container.firstChild).toHaveStyle({
      height: '45px',
      minHeight: '45px',
      width: 0,
      minWidth: 0,
    });
  });
});
