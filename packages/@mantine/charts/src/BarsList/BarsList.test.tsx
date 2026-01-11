import { render, tests } from '@mantine-tests/core';
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
});
