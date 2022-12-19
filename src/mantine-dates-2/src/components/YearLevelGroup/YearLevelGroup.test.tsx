import React from 'react';
import { render, screen } from '@testing-library/react';
import { YearLevelGroup, YearLevelGroupProps } from './YearLevelGroup';
import {
  itSupportsMonthsListProps,
  itSupportsHeaderProps,
  itSupportsOnControlClick,
  itHandlesControlsKeyboardEvents,
  itSupportsOnControlMouseEnter,
} from '../../tests';

const defaultProps: YearLevelGroupProps = {
  year: new Date(2022, 3, 11),
  levelControlAriaLabel: () => 'level-control',
  nextLabel: 'next',
  previousLabel: 'prev',
};

describe('@mantine/dates/YearLevelGroup', () => {
  itSupportsMonthsListProps(YearLevelGroup, defaultProps);
  itSupportsHeaderProps(YearLevelGroup, defaultProps);
  itSupportsOnControlClick(YearLevelGroup, defaultProps);
  itSupportsOnControlMouseEnter(YearLevelGroup, defaultProps);
  itHandlesControlsKeyboardEvents(
    YearLevelGroup,
    'year',
    '.mantine-MonthsList-monthsList',
    defaultProps
  );

  it('renders correct number of columns based on numberOfColumns prop', () => {
    const { rerender } = render(<YearLevelGroup {...defaultProps} numberOfColumns={1} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(1);

    rerender(<YearLevelGroup {...defaultProps} numberOfColumns={2} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(2);

    rerender(<YearLevelGroup {...defaultProps} numberOfColumns={3} />);
    expect(screen.getAllByLabelText('level-control')).toHaveLength(3);
  });

  it('renders correct years group based on year prop', () => {
    render(<YearLevelGroup {...defaultProps} numberOfColumns={3} />);
    expect(screen.getAllByLabelText('level-control').map((node) => node.textContent)).toStrictEqual(
      ['2022', '2023', '2024']
    );
  });

  it('supports levelControlAriaLabel as string', () => {
    render(<YearLevelGroup {...defaultProps} levelControlAriaLabel="test-label" />);
    expect(screen.getByText('2022')).toHaveAttribute('aria-label', 'test-label');
  });

  it('supports levelControlAriaLabel as function', () => {
    render(
      <YearLevelGroup
        {...defaultProps}
        levelControlAriaLabel={(date) => `${date.getMonth()}/${date.getFullYear()}`}
      />
    );
    expect(screen.getByText('2022')).toHaveAttribute('aria-label', '3/2022');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<YearLevelGroup {...defaultProps} />);
    expect(container.firstChild).toHaveClass('mantine-YearLevelGroup-yearLevelGroup');
    expect(container.querySelector('table button')).toHaveClass(
      'mantine-YearLevelGroup-pickerControl'
    );
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(<YearLevelGroup {...defaultProps} __staticSelector="Calendar" />);
    expect(container.firstChild).toHaveClass('mantine-Calendar-yearLevelGroup');
    expect(container.querySelector('table button')).toHaveClass('mantine-Calendar-pickerControl');
  });

  it('supports styles api (styles)', () => {
    const { container } = render(
      <YearLevelGroup
        {...defaultProps}
        styles={{
          yearLevelGroup: { borderColor: '#CCEE45' },
          pickerControl: { borderColor: '#443443' },
        }}
      />
    );

    expect(container.firstChild).toHaveStyle({ borderColor: '#CCEE45' });
    expect(container.querySelector('table button')).toHaveStyle({ borderColor: '#443443' });
  });

  it('supports styles api (classNames)', () => {
    const { container } = render(
      <YearLevelGroup
        {...defaultProps}
        classNames={{ yearLevelGroup: 'test-group', pickerControl: 'test-control' }}
      />
    );

    expect(container.firstChild).toHaveClass('test-group');
    expect(container.querySelector('table button')).toHaveClass('test-control');
  });
});
