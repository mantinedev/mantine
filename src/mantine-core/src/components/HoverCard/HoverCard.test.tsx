import React from 'react';
import { tests, render, screen } from '@mantine/tests';
import userEvent from '@testing-library/user-event';
import { HoverCard, HoverCardProps } from './HoverCard';
import { HoverCardDropdown } from './HoverCardDropdown/HoverCardDropdown';
import { HoverCardTarget } from './HoverCardTarget/HoverCardTarget';

function TestContainer(props: Partial<HoverCardProps>) {
  return (
    <HoverCard transitionProps={{ duration: 0 }} {...props}>
      <HoverCard.Target>
        <button type="button">test-target</button>
      </HoverCard.Target>
      <HoverCard.Dropdown>test-dropdown</HoverCard.Dropdown>
    </HoverCard>
  );
}

describe('@mantine/core/HoverCard', () => {
  tests.axe([<TestContainer initiallyOpened />, <TestContainer />]);
  tests.itRendersChildren({
    component: HoverCard,
    props: {},
  });

  it('shows card on hover', () => {
    render(<TestContainer />);
    expect(screen.queryAllByText('test-dropdown')).toHaveLength(0);

    userEvent.hover(screen.getByRole('button'));
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('correctly handles initiallyOpened prop', () => {
    render(<TestContainer initiallyOpened />);
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('exposes HoverCardTarget and HoverCardDropdown as static properties', () => {
    expect(HoverCard.Dropdown).toBe(HoverCardDropdown);
    expect(HoverCard.Target).toBe(HoverCardTarget);
  });

  it('has correct displayName', () => {
    expect(HoverCard.displayName).toEqual('@mantine/core/HoverCard');
  });
});
