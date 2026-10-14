import { render as renderPlain } from '@testing-library/react';
import { HeadlessMantineProvider } from '@mantine/core';
import { render, screen, tests } from '@mantine-tests/core';
import { BarsList, BarsListProps, BarsListStylesNames } from './BarsList';

const defaultProps: BarsListProps = {
  data: [
    { name: 'Google', value: 1200000 },
    { name: 'Direct', value: 100000 },
    { name: 'Bing', value: 200000 },
  ],
  barsLabel: 'Source',
  valueLabel: 'Count',
};

describe('@mantine/charts/BarsList', () => {
  tests.itSupportsSystemProps<BarsListProps, BarsListStylesNames>({
    component: BarsList,
    props: defaultProps,
    varsResolver: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/BarsList',
    stylesApiSelectors: ['root', 'bar', 'barLabel', 'barValue', 'labelsRow'],
  });

  it('renders correct number of bars', () => {
    const { container } = render(<BarsList {...defaultProps} />);
    const bars = container.querySelectorAll('.mantine-BarsList-bar');
    expect(bars).toHaveLength(3);
  });

  it('formats values with valueFormatter', () => {
    const { container } = render(
      <BarsList {...defaultProps} valueFormatter={(value) => `$${value.toLocaleString()}`} />
    );
    const values = container.querySelectorAll('.mantine-BarsList-barValue');
    expect(values[0]).toHaveTextContent('$1,200,000');
  });

  it('renders labels when barsLabel and valueLabel are provided', () => {
    const { container } = render(
      <BarsList {...defaultProps} barsLabel="Source" valueLabel="Count" />
    );
    const labelsRow = container.querySelector('.mantine-BarsList-labelsRow');
    expect(labelsRow).toBeInTheDocument();
    expect(labelsRow).toHaveTextContent('Source');
    expect(labelsRow).toHaveTextContent('Count');
  });

  it('does not render labels row when no labels are provided', () => {
    const { container } = render(
      <BarsList data={defaultProps.data} barsLabel={undefined} valueLabel={undefined} />
    );
    const labelsRow = container.querySelector('.mantine-BarsList-labelsRow');
    expect(labelsRow).not.toBeInTheDocument();
  });

  it('uses custom bar renderer when renderBar is provided', () => {
    const { container } = render(
      <BarsList
        {...defaultProps}
        renderBar={(data) => <div className="custom-bar">{data.name}</div>}
      />
    );
    const customBars = container.querySelectorAll('.custom-bar');
    expect(customBars).toHaveLength(3);
    expect(customBars[0]).toHaveTextContent('Google');
  });

  it('applies custom bar props from getBarProps', () => {
    const { container } = render(
      <BarsList
        {...defaultProps}
        getBarProps={(data) => ({
          'data-value': data.value,
          className: 'custom-class',
        })}
      />
    );
    const barLabels = container.querySelectorAll('.mantine-BarsList-barLabel');
    expect(barLabels[0]).toHaveAttribute('data-value', '1200000');
    expect(barLabels[0]).toHaveClass('custom-class');
  });

  it('sets bar size relative to the largest value', () => {
    const { container } = render(<BarsList {...defaultProps} />);
    const bars = container.querySelectorAll<HTMLElement>('.mantine-BarsList-bar');
    expect(bars[0].style.getPropertyValue('--bars-list-bar-size')).toBe('100%');
    expect(bars[2].style.getPropertyValue('--bars-list-bar-size')).toBe(
      `${(200000 / 1200000) * 100}%`
    );
  });

  it('displays negative and non-finite values as empty bars without affecting other bars', () => {
    const { container } = render(
      <BarsList
        data={[
          { name: 'A', value: 50 },
          { name: 'B', value: -100 },
          { name: 'C', value: NaN },
          { name: 'D', value: 25 },
        ]}
      />
    );
    const sizes = Array.from(container.querySelectorAll<HTMLElement>('.mantine-BarsList-bar')).map(
      (bar) => bar.style.getPropertyValue('--bars-list-bar-size')
    );
    expect(sizes).toStrictEqual(['100%', '0%', '0%', '50%']);
  });

  it('exposes table semantics with name and value cells in each row', () => {
    render(
      <BarsList {...defaultProps} valueFormatter={(value) => value.toLocaleString('en-US')} />
    );
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('columnheader').map((node) => node.textContent)).toStrictEqual([
      'Source',
      'Count',
    ]);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(4);
    const cells = rows[1].querySelectorAll('[role="cell"]');
    expect(cells).toHaveLength(2);
    expect(screen.getByRole('cell', { name: 'Google' })).toBe(cells[0]);
    expect(screen.getByRole('cell', { name: '1,200,000' })).toBe(cells[1]);
  });

  it('renders name outside of the bar hidden from assistive technologies', () => {
    const { container } = render(<BarsList data={[{ name: 'Google', value: 0 }]} />);
    const hidden = container.querySelector('.mantine-BarsList-bar [aria-hidden]');
    expect(hidden).toHaveAttribute('data-name', 'Google');
    expect(hidden).toBeEmptyDOMElement();
    expect(screen.getByRole('cell', { name: 'Google' })).toHaveTextContent(/^Google$/);
  });

  it('uses contrast text color for theme colors with shade in light variant', () => {
    const { container } = render(
      <BarsList
        autoContrast
        data={[
          { name: 'Dark', value: 10, color: 'blue.9' },
          { name: 'Light', value: 10, color: 'yellow.4' },
        ]}
      />
    );
    const labels = container.querySelectorAll<HTMLElement>('.mantine-BarsList-barLabel');
    expect(labels[0].style.color).toBe('var(--mantine-color-white)');
    expect(labels[0].style.getPropertyValue('--bars-list-bar-color')).toBe(
      'var(--mantine-color-blue-9)'
    );
    expect(labels[1].style.color).toBe('var(--mantine-color-black)');
  });

  it('uses filled text color for theme colors with shade in light variant', () => {
    const { container } = render(<BarsList data={[{ name: 'Red', value: 10, color: 'red.6' }]} />);
    const label = container.querySelector<HTMLElement>('.mantine-BarsList-barLabel')!;
    expect(label.style.color).toBe('var(--mantine-color-white)');
  });

  it('uses regular text color for CSS colors in light variant', () => {
    const { container } = render(
      <BarsList data={[{ name: 'Custom', value: 10, color: '#ffd43b' }]} />
    );
    const label = container.querySelector<HTMLElement>('.mantine-BarsList-barLabel')!;
    expect(label.style.color).toBe('var(--mantine-color-text)');
  });

  it('keeps explicit text color over autoContrast', () => {
    const { container } = render(
      <BarsList
        autoContrast
        barTextColor="red.5"
        data={[{ name: 'A', value: 10, color: 'yellow.4' }]}
      />
    );
    const label = container.querySelector<HTMLElement>('.mantine-BarsList-barLabel')!;
    expect(label.style.color).toBe('var(--mantine-color-red-5)');
  });

  it('keeps computed background when getBarProps returns undefined style values', () => {
    const { container } = render(
      <BarsList
        data={[{ name: 'A', value: 10, color: 'red.6' }]}
        getBarProps={() => ({ style: { backgroundColor: undefined, fontWeight: 700 } })}
      />
    );
    const label = container.querySelector<HTMLElement>('.mantine-BarsList-barLabel')!;
    expect(label.style.getPropertyValue('--bars-list-bar-color')).toBe(
      'var(--mantine-color-red-6)'
    );
    expect(label.style.fontWeight).toBe('700');
  });

  it('applies getBarProps background to the bar fill instead of the whole track', () => {
    const { container } = render(
      <BarsList
        data={[{ name: 'A', value: 10 }]}
        getBarProps={() => ({ style: { backgroundColor: 'red', fontSize: 11 } })}
      />
    );
    const label = container.querySelector<HTMLElement>('.mantine-BarsList-barLabel')!;
    expect(label.style.backgroundColor).toBe('');
    expect(label.style.getPropertyValue('--bars-list-bar-color')).toBe('red');
    expect(label.style.fontSize).toBe('11px');
  });

  it('renders both name layers inside barLabel so barLabel styles apply to them', () => {
    const { container } = render(<BarsList data={[{ name: 'Google', value: 10 }]} />);
    const label = container.querySelector('.mantine-BarsList-barLabel')!;
    expect(label.querySelectorAll('div')).toHaveLength(3);
    expect(label.querySelector('[aria-hidden]')).toHaveAttribute('data-name', 'Google');
  });

  it('keeps bar length with unstyled prop', () => {
    const { container } = render(
      <BarsList
        unstyled
        data={[
          { name: 'A', value: 100 },
          { name: 'B', value: 25 },
        ]}
      />
    );
    const labels = container.querySelectorAll<HTMLElement>('[role="cell"]:first-child');
    expect(labels[0].style.width).toBe('100%');
    expect(labels[1].style.width).toBe('25%');
    expect(labels[1]).toHaveTextContent(/^B$/);
  });

  it('keeps bar length, color and a single name in headless mode', () => {
    const { container } = renderPlain(
      <HeadlessMantineProvider>
        <BarsList
          data={[
            { name: 'Alpha', value: 100 },
            { name: 'Beta', value: 10 },
            { name: 'Gamma', value: 0 },
          ]}
          getBarProps={(item) =>
            item.name === 'Beta' ? { style: { backgroundColor: 'red' } } : {}
          }
        />
      </HeadlessMantineProvider>
    );
    const labels = container.querySelectorAll<HTMLElement>(
      '[role="row"] > [role="cell"]:first-child'
    );
    expect(labels[0].style.width).toBe('100%');
    expect(labels[0].style.backgroundColor).not.toBe('');
    expect(labels[1].style.width).toBe('10%');
    expect(labels[1].style.backgroundColor).toBe('red');
    expect(labels[1].style.getPropertyValue('--bars-list-bar-color')).toBe('');
    expect(labels[1]).toHaveTextContent(/^Beta$/);
    expect(labels[1].children).toHaveLength(0);
    expect(labels[2].style.width).toBe('0%');
  });

  it('renders rows returned by renderBar inside a wrapper element', () => {
    render(
      <BarsList
        data={[{ name: 'A', value: 10 }]}
        renderBar={(_, defaultBar) => <div data-testid="wrapper">{defaultBar}</div>}
      />
    );
    expect(screen.getByTestId('wrapper').firstElementChild).toHaveAttribute('role', 'row');
    expect(screen.getByRole('cell', { name: 'A' })).toBeInTheDocument();
  });

  it('sets light variant by default', () => {
    const { container } = render(<BarsList {...defaultProps} />);
    expect(container.querySelector('.mantine-BarsList-root')).toHaveAttribute(
      'data-variant',
      'light'
    );
  });
});
