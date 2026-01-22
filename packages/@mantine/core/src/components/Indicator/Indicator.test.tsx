import { render, screen, tests } from '@mantine-tests/core';
import { Indicator, IndicatorProps, IndicatorStylesNames } from './Indicator';

const defaultProps: IndicatorProps = {};

describe('@mantine/core/Indicator', () => {
  tests.itSupportsSystemProps<IndicatorProps, IndicatorStylesNames>({
    component: Indicator,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Indicator',
    stylesApiSelectors: ['root', 'indicator'],
  });

  it('renders given label', () => {
    render(<Indicator {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('does not render indicator if component is disabled', () => {
    render(<Indicator {...defaultProps} label="test-label" disabled />);
    expect(screen.queryAllByText('test-label')).toHaveLength(0);
  });

  it('applies processing data attribute', () => {
    const { container } = render(<Indicator {...defaultProps} label="test" processing />);
    expect(container.querySelector('.mantine-Indicator-indicator')).toHaveAttribute(
      'data-processing'
    );
  });

  it('applies with-border data attribute', () => {
    const { container } = render(<Indicator {...defaultProps} label="test" withBorder />);
    expect(container.querySelector('.mantine-Indicator-indicator')).toHaveAttribute(
      'data-with-border'
    );
  });

  it('applies inline data attribute', () => {
    const { container } = render(<Indicator {...defaultProps} label="test" inline />);
    expect(container.querySelector('.mantine-Indicator-root')).toHaveAttribute('data-inline');
  });

  it('formats label with maxValue prop', () => {
    render(<Indicator {...defaultProps} label={100} maxValue={99} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('does not format label when below maxValue', () => {
    render(<Indicator {...defaultProps} label={50} maxValue={99} />);
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('does not format non-numeric labels with maxValue', () => {
    render(<Indicator {...defaultProps} label="test" maxValue={99} />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('hides indicator when label is 0 and showZero is false', () => {
    render(<Indicator {...defaultProps} label={0} showZero={false} />);
    expect(screen.queryAllByText('0')).toHaveLength(0);
  });

  it('shows indicator when label is 0 and showZero is true (default)', () => {
    render(<Indicator {...defaultProps} label={0} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('hides indicator when label is "0" string and showZero is false', () => {
    render(<Indicator {...defaultProps} label="0" showZero={false} />);
    expect(screen.queryAllByText('0')).toHaveLength(0);
  });
});
