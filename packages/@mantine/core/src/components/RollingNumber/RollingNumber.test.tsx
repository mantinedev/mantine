import { render, screen, tests } from '@mantine-tests/core';
import { RollingNumber, RollingNumberProps, RollingNumberStylesNames } from './RollingNumber';

const defaultProps: RollingNumberProps = {
  value: 123,
  prefix: '$',
};

describe('@mantine/core/RollingNumber', () => {
  tests.axe([
    <RollingNumber key="1" value={1234} prefix="$" thousandSeparator />,
    <RollingNumber key="2" value={42} withLiveRegion />,
  ]);

  tests.itSupportsSystemProps<RollingNumberProps, RollingNumberStylesNames>({
    component: RollingNumber,
    props: defaultProps,
    varsResolver: true,
    children: false,
    displayName: '@mantine/core/RollingNumber',
    stylesApiSelectors: ['root', 'inner', 'copyValue', 'digit', 'digitColumn', 'char'],
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
    expect(charTexts).toContain('$ ');
  });

  it('renders prefix and suffix with surrogate pairs and combining sequences as whole strings', () => {
    const { container } = render(<RollingNumber value={5} prefix="💰 " suffix=" 👍🏽" />);
    const chars = container.querySelectorAll('.mantine-RollingNumber-char');
    expect(Array.from(chars).map((el) => el.textContent)).toEqual(['💰 ', ' 👍🏽']);
  });

  it('renders root as an inline span element', () => {
    const { container } = render(<RollingNumber value={5} />);
    expect(container.querySelector('.mantine-RollingNumber-root')?.tagName).toBe('SPAN');
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

  it('positions digit columns with top offset instead of transform', () => {
    const { container } = render(<RollingNumber value={35} />);
    const columns = container.querySelectorAll<HTMLElement>('.mantine-RollingNumber-digitColumn');
    expect(columns[0].style.top).toBe('-3em');
    expect(columns[1].style.top).toBe('-5em');
    expect(columns[0].style.transform).toBe('');
    expect(columns[1].style.transform).toBe('');
  });

  function getRoll(container: HTMLElement, columnIndexFromEnd = 0) {
    const columns = container.querySelectorAll<HTMLElement>('.mantine-RollingNumber-digitColumn');
    const column = columns[columns.length - 1 - columnIndexFromEnd];
    return {
      from: column.style.getPropertyValue('--rn-roll-from'),
      to: column.style.getPropertyValue('--rn-roll-to'),
      direction: column.getAttribute('data-direction'),
    };
  }

  it('renders a 20-cell wraparound strip in each column', () => {
    const { container } = render(<RollingNumber value={5} />);
    const column = container.querySelector('.mantine-RollingNumber-digitColumn');
    const cells = Array.from(column!.children).map((c) => c.textContent);
    expect(cells).toEqual([...'01234567890123456789']);
  });

  it('uses the wraparound cell when a digit rolls forward through 9 → 0', () => {
    const { container, rerender } = render(<RollingNumber value={9} />);
    rerender(<RollingNumber value={10} />);
    expect(getRoll(container)).toMatchObject({ from: 'translateY(-9em)', to: 'translateY(-10em)' });
    const columns = container.querySelectorAll<HTMLElement>('.mantine-RollingNumber-digitColumn');
    expect(columns[columns.length - 1].style.getPropertyValue('top')).toBe('0em');
  });

  it('does not use the wraparound cell on a normal forward step', () => {
    const { container, rerender } = render(<RollingNumber value={3} />);
    rerender(<RollingNumber value={5} />);
    expect(getRoll(container)).toMatchObject({ from: 'translateY(2em)', to: 'translateY(0em)' });
    const onesColumn = container.querySelector<HTMLElement>('.mantine-RollingNumber-digitColumn');
    expect(onesColumn!.style.getPropertyValue('top')).toBe('-5em');
  });

  it('rolls a digit one step down when the value decreases through 0 (10 → 9)', () => {
    const { container, rerender } = render(<RollingNumber value={10} />);
    rerender(<RollingNumber value={9} />);
    const onesColumn = container.querySelectorAll<HTMLElement>(
      '.mantine-RollingNumber-digitColumn'
    )[1];
    expect(getRoll(container)).toEqual({
      from: 'translateY(-1em)',
      to: 'translateY(0em)',
      direction: 'down',
    });
    expect(onesColumn.style.getPropertyValue('top')).toBe('-9em');
  });

  it('rolls every changed column up when the value increases (15 → 23)', () => {
    const { container, rerender } = render(<RollingNumber value={15} />);
    rerender(<RollingNumber value={23} />);
    expect(getRoll(container, 0)).toEqual({
      from: 'translateY(-2em)',
      to: 'translateY(-10em)',
      direction: 'up',
    });
    expect(getRoll(container, 1)).toEqual({
      from: 'translateY(1em)',
      to: 'translateY(0em)',
      direction: 'up',
    });
  });

  it('rolls every changed column down when the value decreases (23 → 15)', () => {
    const { container, rerender } = render(<RollingNumber value={23} />);
    rerender(<RollingNumber value={15} />);
    expect(getRoll(container, 0)).toEqual({
      from: 'translateY(-8em)',
      to: 'translateY(0em)',
      direction: 'down',
    });
    expect(getRoll(container, 1)).toEqual({
      from: 'translateY(-1em)',
      to: 'translateY(0em)',
      direction: 'down',
    });
  });

  it('rolls digits down when the magnitude of a negative value decreases (-5 → -3)', () => {
    const { container, rerender } = render(<RollingNumber value={-5} />);
    rerender(<RollingNumber value={-3} />);
    expect(getRoll(container)).toEqual({
      from: 'translateY(-2em)',
      to: 'translateY(0em)',
      direction: 'down',
    });
  });

  it('does not set data-direction on columns whose digit does not change', () => {
    const { container, rerender } = render(<RollingNumber value={15} />);
    rerender(<RollingNumber value={18} />);
    expect(getRoll(container, 1)).toEqual({
      from: 'translateY(0em)',
      to: 'translateY(0em)',
      direction: null,
    });
  });

  it('does not set data-direction on any column on the first render', () => {
    const { container } = render(<RollingNumber value={1234} />);
    const columns = container.querySelectorAll('.mantine-RollingNumber-digitColumn');
    expect(Array.from(columns).map((column) => column.getAttribute('data-direction'))).toEqual([
      null,
      null,
      null,
      null,
    ]);
  });

  it('keeps the running roll of a column whose digit does not change in the next update', () => {
    const { container, rerender } = render(<RollingNumber value={9} />);
    rerender(<RollingNumber value={10} />);
    const rolling = getRoll(container);
    expect(rolling).toEqual({ from: 'translateY(-9em)', to: 'translateY(-10em)', direction: 'up' });
    rerender(<RollingNumber value={20} />);
    expect(getRoll(container)).toEqual(rolling);
    expect(getRoll(container, 1).direction).toBe('up');
  });

  it('starts a new roll when a kept column digit changes again', () => {
    const { container, rerender } = render(<RollingNumber value={9} />);
    rerender(<RollingNumber value={10} />);
    rerender(<RollingNumber value={20} />);
    rerender(<RollingNumber value={21} />);
    expect(getRoll(container)).toEqual({
      from: 'translateY(1em)',
      to: 'translateY(0em)',
      direction: 'up',
    });
  });

  it('renders digits and copy value inside an LTR-isolated inner element', () => {
    const { container } = render(<RollingNumber value={5} prefix="$" />);
    const inner = container.querySelector('.mantine-RollingNumber-inner');
    expect(inner?.parentElement).toHaveClass('mantine-RollingNumber-root');
    expect(inner?.querySelector('.mantine-RollingNumber-copyValue')).toBeInTheDocument();
    expect(inner?.querySelectorAll('.mantine-RollingNumber-digit')).toHaveLength(1);
  });

  it('keeps the running transition when the component re-renders with the same value', () => {
    const { container, rerender } = render(<RollingNumber value={10} />);
    rerender(<RollingNumber value={18} />);
    const before = getRoll(container);
    rerender(<RollingNumber value={18} />);
    rerender(<RollingNumber value={18} />);
    expect(getRoll(container)).toEqual(before);
    expect(before).toEqual({ from: 'translateY(8em)', to: 'translateY(0em)', direction: 'up' });
  });

  it('renders NaN values without re-render loops', () => {
    const { container, rerender } = render(<RollingNumber value={NaN} />);
    rerender(<RollingNumber value={NaN} />);
    expect(container.querySelector('.mantine-RollingNumber-copyValue')).toHaveTextContent('0');
  });

  it('starts the next transition from the last value', () => {
    const { container, rerender } = render(<RollingNumber value={10} />);
    rerender(<RollingNumber value={18} />);
    rerender(<RollingNumber value={18} />);
    rerender(<RollingNumber value={19} />);
    expect(getRoll(container)).toEqual({
      from: 'translateY(1em)',
      to: 'translateY(0em)',
      direction: 'up',
    });
  });

  it('handles negative values', () => {
    const { container } = render(<RollingNumber value={-42} />);
    const chars = container.querySelectorAll('.mantine-RollingNumber-char');
    const charTexts = Array.from(chars).map((el) => el.textContent);
    expect(charTexts).toContain('-');
  });

  it('marks leading digit as empty on the first render after shrinking (1000 → 999)', () => {
    const { container, rerender } = render(<RollingNumber value={999} />);
    rerender(<RollingNumber value={1000} />);
    rerender(<RollingNumber value={999} />);
    const digits = container.querySelectorAll('.mantine-RollingNumber-digit');
    expect(digits).toHaveLength(4);
    expect(digits[0]).toHaveAttribute('data-empty');
  });

  it('renders the formatted value in a single selectable node for copying', () => {
    const { container } = render(
      <RollingNumber value={1234.56} thousandSeparator prefix="$ " suffix=" USD" />
    );
    expect(container.querySelector('.mantine-RollingNumber-copyValue')?.textContent).toBe(
      '$ 1,234.56 USD'
    );
  });

  it('keeps the copy value in sync with the current value', () => {
    const { container, rerender } = render(<RollingNumber value={1000} thousandSeparator />);
    rerender(<RollingNumber value={999} thousandSeparator />);
    expect(container.querySelector('.mantine-RollingNumber-copyValue')?.textContent).toBe('999');
  });

  it('renders a copy value that matches the accessible label exactly', () => {
    const { container } = render(
      <RollingNumber
        value={1234.5}
        thousandSeparator="  "
        prefix="  $  "
        suffix="  USD  "
        decimalScale={2}
        fixedDecimalScale
      />
    );
    const root = container.querySelector('.mantine-RollingNumber-root');
    expect(container.querySelector('.mantine-RollingNumber-copyValue')?.textContent).toBe(
      root?.getAttribute('aria-label')
    );
  });

  it('hides the copy value from assistive technology without live region', () => {
    const { container } = render(<RollingNumber value={42} />);
    expect(container.querySelector('.mantine-RollingNumber-copyValue')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });

  it('hides animated digits and chars from assistive technology', () => {
    const { container } = render(<RollingNumber value={42} prefix="$ " />);
    const animated = container.querySelectorAll(
      '.mantine-RollingNumber-digit, .mantine-RollingNumber-char'
    );
    expect(animated.length).toBeGreaterThan(0);
    animated.forEach((el) => expect(el).toHaveAttribute('aria-hidden', 'true'));
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

  it('exposes the formatted value as text content of the live region', () => {
    const { container, rerender } = render(<RollingNumber value={10} suffix="%" withLiveRegion />);
    const status = screen.getByRole('status');
    expect(status).not.toHaveAttribute('aria-label');
    const copyValue = container.querySelector('.mantine-RollingNumber-copyValue');
    expect(copyValue).not.toHaveAttribute('aria-hidden');
    expect(copyValue).toHaveTextContent('10%');
    rerender(<RollingNumber value={25} suffix="%" withLiveRegion />);
    expect(copyValue).toHaveTextContent('25%');
  });

  it('exposes the value to assistive technology exactly once in the live region', () => {
    render(<RollingNumber value={1234} thousandSeparator withLiveRegion />);
    const status = screen.getByRole('status');
    const exposedText = [status, ...Array.from(status.querySelectorAll('*'))]
      .filter((el) => !el.closest('[aria-hidden="true"]'))
      .flatMap((el) => Array.from(el.childNodes))
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent)
      .join('');
    expect(exposedText).toBe('1,234');
  });

  it('marks animated elements with data-reduce-motion', () => {
    const { container } = render(<RollingNumber value={12} prefix="$" />);
    container
      .querySelectorAll(
        '.mantine-RollingNumber-digit, .mantine-RollingNumber-digitColumn, .mantine-RollingNumber-char'
      )
      .forEach((element) => expect(element).toHaveAttribute('data-reduce-motion'));
  });
});
