import React from 'react';
import { render } from '@testing-library/react';
import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Badge, BadgeProps } from './Badge';

const defaultProps: BadgeProps<'div'> = {};

describe('@mantine/core/Badge', () => {
  itRendersChildren(Badge, defaultProps);
  itIsPolymorphic(Badge, defaultProps);
  itSupportsSystemProps({
    component: Badge,
    props: defaultProps,
    displayName: '@mantine/core/Badge',
    refType: HTMLDivElement,
  });

  it('renders given left and right section', () => {
    const { container } = render(
      <Badge rightSection="test-right" leftSection="test-left">
        test
      </Badge>
    );
    expect(container.querySelector('.mantine-Badge-rightSection').textContent).toBe('test-right');
    expect(container.querySelector('.mantine-Badge-leftSection').textContent).toBe('test-left');
  });
});
