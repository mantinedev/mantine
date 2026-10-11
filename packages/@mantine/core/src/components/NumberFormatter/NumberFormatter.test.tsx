import { createRef } from 'react';
import { render, tests } from '@mantine-tests/core';
import { NumberFormatter } from './NumberFormatter';

describe('@mantine/core/NumberFormatter', () => {
  tests.itHasExtend({ component: NumberFormatter });

  it('has correct displayName', () => {
    expect(NumberFormatter.displayName).toEqual('@mantine/core/NumberFormatter');
  });

  it('forwards ref to the rendered span', () => {
    const ref = createRef<HTMLSpanElement>();
    render(<NumberFormatter value={10} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    expect(ref.current!.textContent).toBe('10');
  });

  it('renders prefix and suffix', () => {
    const { container } = render(<NumberFormatter value={10} prefix="$ " suffix=" USD" />);
    expect(container.querySelector('span')!.textContent).toBe('$ 10 USD');
  });

  it('separates thousands only when thousandSeparator is set', () => {
    const { container, rerender } = render(<NumberFormatter value={1234567} />);
    expect(container.querySelector('span')!.textContent).toBe('1234567');
    rerender(<NumberFormatter value={1234567} thousandSeparator />);
    expect(container.querySelector('span')!.textContent).toBe('1,234,567');
    rerender(<NumberFormatter value={1234567.5} thousandSeparator="." decimalSeparator="," />);
    expect(container.querySelector('span')!.textContent).toBe('1.234.567,5');
  });

  it('supports decimalScale and fixedDecimalScale', () => {
    const { container, rerender } = render(<NumberFormatter value={1.23456} decimalScale={2} />);
    expect(container.querySelector('span')!.textContent).toBe('1.23');
    rerender(<NumberFormatter value={1.5} decimalScale={2} fixedDecimalScale />);
    expect(container.querySelector('span')!.textContent).toBe('1.50');
  });

  it('renders nothing when value is undefined', () => {
    const { container } = render(<NumberFormatter value={undefined} />);
    expect(container.querySelector('span')).toBeNull();
  });
});
