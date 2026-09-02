import { safePolygon } from '@floating-ui/react';
import { render } from '@mantine-tests/core';
import { HoverCard } from './HoverCard';

jest.mock('@floating-ui/react', () => {
  const actual = jest.requireActual('@floating-ui/react');
  return {
    ...actual,
    safePolygon: jest.fn(actual.safePolygon),
  };
});

function renderHoverCard(interactive?: boolean) {
  return render(
    <HoverCard interactive={interactive}>
      <HoverCard.Target>
        <button type="button">test-target</button>
      </HoverCard.Target>
      <HoverCard.Dropdown>test-dropdown</HoverCard.Dropdown>
    </HoverCard>
  );
}

describe('@mantine/core/HoverCard/interactive', () => {
  beforeEach(() => {
    jest.mocked(safePolygon).mockClear();
  });

  it('does not use safePolygon by default', () => {
    renderHoverCard();
    expect(safePolygon).not.toHaveBeenCalled();
  });

  it('uses safePolygon when interactive is set', () => {
    renderHoverCard(true);
    expect(safePolygon).toHaveBeenCalled();
  });
});
