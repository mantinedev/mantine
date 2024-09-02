import { render, screen, tests } from '@mantine-tests/core';
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
  tests.axe([<TestContainer initiallyOpened key="1" />, <TestContainer key="2" />]);
  tests.itRendersChildren({
    component: HoverCard,
    props: {},
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
