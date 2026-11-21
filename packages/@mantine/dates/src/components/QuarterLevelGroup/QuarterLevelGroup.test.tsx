import userEvent from '@testing-library/user-event';
import { render, screen, tests } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import {
  QuarterLevelGroup,
  QuarterLevelGroupProps,
  QuarterLevelGroupStylesNames,
} from './QuarterLevelGroup';

const defaultProps: QuarterLevelGroupProps = {
  year: '2022-04-11',
  levelControlAriaLabel: () => 'level-control',
  nextLabel: 'next',
  previousLabel: 'prev',
};

describe('@mantine/dates/QuarterLevelGroup', () => {
  tests.itSupportsSystemProps<QuarterLevelGroupProps, QuarterLevelGroupStylesNames>({
    component: QuarterLevelGroup,
    props: defaultProps,
    displayName: '@mantine/dates/QuarterLevelGroup',
    stylesApiSelectors: [
      'levelsGroup',
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
      'quartersList',
      'quartersListCell',
      'quartersListControl',
      'quartersListRow',
    ],
    compound: true,
    providerStylesApi: false,
  });

  datesTests.itSupportsQuartersListProps({ component: QuarterLevelGroup, props: defaultProps });
  datesTests.itSupportsHeaderProps({ component: QuarterLevelGroup, props: defaultProps });
  datesTests.itSupportsOnControlClick({ component: QuarterLevelGroup, props: defaultProps });
  datesTests.itSupportsOnControlMouseEnter({ component: QuarterLevelGroup, props: defaultProps });

  describe('keyboard navigation', () => {
    it('handles arrow keyboard events correctly with numberOfColumns=1', async () => {
      const { container } = render(<QuarterLevelGroup {...defaultProps} numberOfColumns={1} />);
      const controls = container.querySelectorAll('table button');

      await userEvent.click(controls[0]);
      expect(controls[0]).toHaveFocus();

      await userEvent.type(controls[0], '{ArrowRight}', { skipClick: true });
      expect(controls[1]).toHaveFocus();

      await userEvent.type(controls[1], '{ArrowRight}', { skipClick: true });
      expect(controls[2]).toHaveFocus();

      await userEvent.type(controls[2], '{ArrowRight}', { skipClick: true });
      expect(controls[3]).toHaveFocus();

      await userEvent.type(controls[3], '{ArrowLeft}', { skipClick: true });
      expect(controls[2]).toHaveFocus();

      await userEvent.type(controls[2], '{ArrowDown}', { skipClick: true });
      expect(controls[2]).toHaveFocus();

      await userEvent.type(controls[2], '{ArrowUp}', { skipClick: true });
      expect(controls[2]).toHaveFocus();
    });

    it('handles cross-column keyboard navigation with numberOfColumns=2', async () => {
      const { container } = render(<QuarterLevelGroup {...defaultProps} numberOfColumns={2} />);
      const columns = container.querySelectorAll('.mantine-QuarterLevelGroup-quartersList');
      const firstColumnControls = columns[0].querySelectorAll('button');
      const secondColumnControls = columns[1].querySelectorAll('button');

      await userEvent.click(firstColumnControls[3]);
      expect(firstColumnControls[3]).toHaveFocus();

      await userEvent.type(firstColumnControls[3], '{ArrowRight}');
      expect(secondColumnControls[0]).toHaveFocus();

      await userEvent.type(secondColumnControls[0], '{ArrowLeft}');
      expect(firstColumnControls[3]).toHaveFocus();
    });

    it('moves to the same quarter of the next year with ArrowDown', async () => {
      const { container } = render(<QuarterLevelGroup {...defaultProps} numberOfColumns={2} />);
      const columns = container.querySelectorAll('.mantine-QuarterLevelGroup-quartersList');
      const firstColumnControls = columns[0].querySelectorAll('button');
      const secondColumnControls = columns[1].querySelectorAll('button');

      await userEvent.click(firstColumnControls[1]);
      expect(firstColumnControls[1]).toHaveFocus();

      await userEvent.type(firstColumnControls[1], '{ArrowDown}', { skipClick: true });
      expect(secondColumnControls[1]).toHaveFocus();

      await userEvent.type(secondColumnControls[1], '{ArrowUp}', { skipClick: true });
      expect(firstColumnControls[1]).toHaveFocus();
    });

    it('respects boundaries with numberOfColumns=1', async () => {
      const { container } = render(<QuarterLevelGroup {...defaultProps} numberOfColumns={1} />);
      const controls = container.querySelectorAll('table button');

      await userEvent.type(controls[0], '{ArrowLeft}');
      expect(controls[0]).toHaveFocus();

      await userEvent.type(controls[0], '{ArrowUp}');
      expect(controls[0]).toHaveFocus();

      await userEvent.type(controls[3], '{ArrowRight}');
      expect(controls[3]).toHaveFocus();

      await userEvent.type(controls[3], '{ArrowDown}');
      expect(controls[3]).toHaveFocus();
    });
  });

  it('renders correct number of columns based on numberOfColumns prop', () => {
    const { rerender } = render(<QuarterLevelGroup {...defaultProps} numberOfColumns={1} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(1);

    rerender(<QuarterLevelGroup {...defaultProps} numberOfColumns={2} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(2);

    rerender(<QuarterLevelGroup {...defaultProps} numberOfColumns={3} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(3);
  });

  it('renders consecutive years in columns', () => {
    render(<QuarterLevelGroup {...defaultProps} numberOfColumns={2} />);
    expect(screen.getAllByLabelText('level-control').map((node) => node.textContent)).toStrictEqual(
      ['2022', '2023']
    );
  });

  it('supports levelControlAriaLabel as a function of year', () => {
    render(
      <QuarterLevelGroup
        {...defaultProps}
        numberOfColumns={2}
        levelControlAriaLabel={(year) => `Year ${year}`}
      />
    );
    expect(screen.getByLabelText('Year 2022-04-11')).toBeInTheDocument();
    expect(screen.getByLabelText('Year 2023-04-11')).toBeInTheDocument();
  });

  it('supports levelControlAriaLabel as string', () => {
    render(<QuarterLevelGroup {...defaultProps} levelControlAriaLabel="test-label" />);
    expect(screen.getByText('2022')).toHaveAttribute('aria-label', 'test-label');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<QuarterLevelGroup {...defaultProps} />);
    expect(container.querySelector('table button')).toHaveClass(
      'mantine-QuarterLevelGroup-quartersListControl'
    );
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(
      <QuarterLevelGroup {...defaultProps} __staticSelector="QuarterPicker" />
    );
    expect(container.querySelector('table button')).toHaveClass(
      'mantine-QuarterPicker-quartersListControl'
    );
  });
});
