import 'dayjs/locale/ru';
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itSupportsGetControlRef,
  itSupportsYearsListProps,
  itSupportsOnControlKeydown,
  itSupportsOnControlClick,
  itSupportsOnControlMouseEnter,
} from '../../tests';
import { YearsList, YearsListProps } from './YearsList';

const defaultProps: YearsListProps = {
  decade: new Date(2022, 3, 11),
};

describe('@mantine/dates/YearsList', () => {
  itSupportsGetControlRef(YearsList, 10, defaultProps);
  itSupportsYearsListProps(YearsList, defaultProps);
  itSupportsOnControlKeydown(YearsList, defaultProps);
  itSupportsOnControlClick(YearsList, defaultProps);
  itSupportsOnControlMouseEnter(YearsList, defaultProps);

  it('has correct default __staticSelector', () => {
    render(<YearsList {...defaultProps} />);
    expect(screen.getByRole('table')).toHaveClass('mantine-YearsList-yearsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('mantine-YearsList-pickerControl');
  });

  it('supports custom __staticSelector', () => {
    render(<YearsList {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByRole('table')).toHaveClass('mantine-Calendar-yearsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('mantine-Calendar-pickerControl');
  });

  it('supports styles api (styles)', () => {
    render(
      <YearsList
        {...defaultProps}
        styles={{
          yearsList: { borderColor: '#331156' },
          pickerControl: { borderColor: '#123123' },
        }}
      />
    );

    expect(screen.getByRole('table')).toHaveStyle({ borderColor: '#331156' });
    expect(screen.getAllByRole('button')[0]).toHaveStyle({ borderColor: '#123123' });
  });

  it('supports styles api (classNames)', () => {
    render(
      <YearsList
        {...defaultProps}
        classNames={{ yearsList: 'test-years-list', pickerControl: 'test-control' }}
      />
    );
    expect(screen.getByRole('table')).toHaveClass('test-years-list');
    expect(screen.getAllByRole('button')[0]).toHaveClass('test-control');
  });
});
