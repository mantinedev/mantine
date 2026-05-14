import { render, tests } from '@mantine-tests/core';
import { RollingNumber, RollingNumberProps, RollingNumberStylesNames } from './RollingNumber';

const defaultProps: RollingNumberProps = {
  value: 123,
  prefix: '$',
};

describe('@mantine/core/RollingNumber', () => {
  tests.itSupportsSystemProps<RollingNumberProps, RollingNumberStylesNames>({
    component: RollingNumber,
    props: defaultProps,
    varsResolver: true,
    children: false,
    displayName: '@mantine/core/RollingNumber',
    stylesApiSelectors: ['root', 'digit', 'digitColumn', 'char'],
  });

  it('renders digits for the given value', () => {
    const { container } = render(<RollingNumber value={42} />);
    const digits = container.querySelectorAll('.mantine-RollingNumber-digit');
    expect(digits).toHaveLength(2);
  });

  it('renders prefix', () => {
    const { container } = render(<RollingNumber value={5} prefix="$ " />);
    const chars = container.querySelectorAll('.mantine-RollingNumber-char');
    const charTexts = Array.from(chars).map((el) => el.textContent);
    expect(charTexts).toContain('$');
    expect(charTexts).toContain(' ');
  });

  it('renders suffix', () => {
    const { container } = render(<RollingNumber value={5} suffix="%" />);
    const chars = container.querySelectorAll('.mantine-RollingNumber-char');
    const charTexts = Array.from(chars).map((el) => el.textContent);
    expect(charTexts).toContain('%');
  });

  it('renders thousand separators', () => {
    const { container } = render(<RollingNumber value={1000} thousandSeparator />);
    const chars = container.querySelectorAll('.mantine-RollingNumber-char');
    const charTexts = Array.from(chars).map((el) => el.textContent);
    expect(charTexts).toContain(',');
  });

  it('renders custom thousand separator', () => {
    const { container } = render(<RollingNumber value={1000} thousandSeparator=" " />);
    const chars = container.querySelectorAll('.mantine-RollingNumber-char');
    const charTexts = Array.from(chars).map((el) => el.textContent);
    expect(charTexts).toContain(' ');
  });

  it('renders decimal places with decimalScale', () => {
    const { container } = render(<RollingNumber value={1.5} decimalScale={2} fixedDecimalScale />);
    const digits = container.querySelectorAll('.mantine-RollingNumber-digit');
    expect(digits).toHaveLength(3);
  });

  it('renders custom decimal separator', () => {
    const { container } = render(
      <RollingNumber value={1.5} decimalSeparator="," decimalScale={1} fixedDecimalScale />
    );
    const chars = container.querySelectorAll('.mantine-RollingNumber-char');
    const charTexts = Array.from(chars).map((el) => el.textContent);
    expect(charTexts).toContain(',');
  });

  it('sets data-tabular-numbers attribute by default', () => {
    const { container } = render(<RollingNumber value={1} />);
    expect(container.querySelector('.mantine-RollingNumber-root')).toHaveAttribute(
      'data-tabular-numbers'
    );
  });

  it('does not set data-tabular-numbers when tabularNumbers is false', () => {
    const { container } = render(<RollingNumber value={1} tabularNumbers={false} />);
    expect(container.querySelector('.mantine-RollingNumber-root')).not.toHaveAttribute(
      'data-tabular-numbers'
    );
  });

  it('sets role="img" on root element by default', () => {
    const { container } = render(<RollingNumber value={42} />);
    expect(container.querySelector('.mantine-RollingNumber-root')).toHaveAttribute('role', 'img');
  });

  it('sets role="status" on root element when withLiveRegion is true', () => {
    const { container } = render(<RollingNumber value={42} withLiveRegion />);
    expect(container.querySelector('.mantine-RollingNumber-root')).toHaveAttribute(
      'role',
      'status'
    );
  });

  it('sets aria-label with formatted value', () => {
    const { container } = render(<RollingNumber value={42} prefix="$ " />);
    expect(container.querySelector('.mantine-RollingNumber-root')).toHaveAttribute(
      'aria-label',
      '$ 42'
    );
  });

  it('supports animationDuration CSS variable', () => {
    const { container } = render(<RollingNumber value={1} animationDuration={1000} />);
    expect(container.querySelector('.mantine-RollingNumber-root')).toHaveStyle({
      '--rn-duration': '1000ms',
    });
  });

  it('supports timingFunction CSS variable', () => {
    const { container } = render(<RollingNumber value={1} timingFunction="linear" />);
    expect(container.querySelector('.mantine-RollingNumber-root')).toHaveStyle({
      '--rn-timing-function': 'linear',
    });
  });

  it('renders digit columns with correct transform', () => {
    const { container } = render(<RollingNumber value={35} />);
    const columns = container.querySelectorAll('.mantine-RollingNumber-digitColumn');
    expect(columns[0]).toHaveStyle({ transform: 'translateY(-3em)' });
    expect(columns[1]).toHaveStyle({ transform: 'translateY(-5em)' });
  });

  it('renders a 12-cell wraparound strip in each column', () => {
    const { container } = render(<RollingNumber value={5} />);
    const column = container.querySelector('.mantine-RollingNumber-digitColumn');
    expect(column!.children).toHaveLength(12);
    const cells = Array.from(column!.children).map((c) => c.textContent);
    expect(cells).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1']);
  });

  it('uses the wraparound cell when a digit rolls forward through 9 → 0', () => {
    const { container, rerender } = render(<RollingNumber value={9} />);
    rerender(<RollingNumber value={9} />);
    rerender(<RollingNumber value={10} />);
    const columns = container.querySelectorAll('.mantine-RollingNumber-digitColumn');
    const onesColumn = columns[columns.length - 1] as HTMLElement;
    expect(onesColumn.style.getPropertyValue('--rn-roll-from')).toBe('translateY(-9em)');
    expect(onesColumn.style.getPropertyValue('--rn-roll-to')).toBe('translateY(-10em)');
    expect(onesColumn.style.transform).toBe('translateY(0em)');
  });

  it('does not use the wraparound cell on a normal forward step', () => {
    const { container, rerender } = render(<RollingNumber value={3} />);
    rerender(<RollingNumber value={3} />);
    rerender(<RollingNumber value={5} />);
    const onesColumn = container.querySelector('.mantine-RollingNumber-digitColumn') as HTMLElement;
    expect(onesColumn.style.getPropertyValue('--rn-roll-from')).toBe('translateY(-3em)');
    expect(onesColumn.style.getPropertyValue('--rn-roll-to')).toBe('translateY(-5em)');
    expect(onesColumn.style.transform).toBe('translateY(-5em)');
  });

  it('does not wrap when value direction is down', () => {
    const { container, rerender } = render(<RollingNumber value={10} />);
    rerender(<RollingNumber value={10} />);
    rerender(<RollingNumber value={9} />);
    const columns = container.querySelectorAll('.mantine-RollingNumber-digitColumn');
    const onesColumn = columns[columns.length - 1] as HTMLElement;
    expect(onesColumn.style.getPropertyValue('--rn-roll-to')).toBe('translateY(-9em)');
    expect(onesColumn.style.transform).toBe('translateY(-9em)');
  });

  it('handles negative values', () => {
    const { container } = render(<RollingNumber value={-42} />);
    const chars = container.querySelectorAll('.mantine-RollingNumber-char');
    const charTexts = Array.from(chars).map((el) => el.textContent);
    expect(charTexts).toContain('-');
  });

  it('right-aligns integer digits for stable transitions', () => {
    const { container } = render(<RollingNumber value={99} />);
    const digitsBefore = container.querySelectorAll('.mantine-RollingNumber-digit');
    expect(digitsBefore).toHaveLength(2);
    expect(Array.from(digitsBefore).every((d) => !d.hasAttribute('data-empty'))).toBe(true);
  });

  it('marks leading digit as empty on the first render after shrinking (1000 → 999)', () => {
    const { container, rerender } = render(<RollingNumber value={999} />);
    rerender(<RollingNumber value={1000} />);
    rerender(<RollingNumber value={999} />);
    const digits = container.querySelectorAll('.mantine-RollingNumber-digit');
    expect(digits).toHaveLength(4);
    expect(digits[0]).toHaveAttribute('data-empty');
  });

  it('includes aria-label with thousand separators', () => {
    const { container } = render(
      <RollingNumber value={1000000} thousandSeparator prefix="$ " suffix=" USD" />
    );
    expect(container.querySelector('.mantine-RollingNumber-root')).toHaveAttribute(
      'aria-label',
      '$ 1,000,000 USD'
    );
  });
});
