import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AmPmInput } from './AmPmInput';

describe('@mantine/dates/TimeInputBase/AmPmInput', () => {
  it.each([['a'], ['p'], ['{arrowdown}']])('triggers onChange once for %s', (value) => {
    const spy = jest.fn();
    const { container } = render(<AmPmInput onChange={spy} size="md" />);
    userEvent.type(container.querySelector('input'), value);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
