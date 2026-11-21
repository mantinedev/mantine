import { act, fireEvent, waitFor } from '@testing-library/react';
import { render, tests } from '@mantine-tests/core';
import { FunnelChart, FunnelChartProps, FunnelChartStylesNames } from './FunnelChart';

const data = [
  { name: 'Visits', value: 5000, color: 'indigo.6' },
  { name: 'Cart', value: 2000, color: 'yellow.6' },
  { name: 'Checkout', value: 1000, color: 'teal.6' },
  { name: 'Purchase', value: 500, color: 'pink.6' },
];

const defaultProps: FunnelChartProps = {
  data,
};

describe('@mantine/charts/FunnelChart', () => {
  tests.itSupportsSystemProps<FunnelChartProps, FunnelChartStylesNames>({
    component: FunnelChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/FunnelChart',
    stylesApiSelectors: ['root'],
  });

  it('announces the active segment even when the tooltip displays all segments', async () => {
    const rect = jest
      .spyOn(Element.prototype, 'getBoundingClientRect')
      .mockReturnValue(new DOMRect(0, 0, 400, 300));
    try {
      const { getByRole } = render(
        <FunnelChart {...defaultProps} withTooltip tooltipDataSource="all" />
      );
      const chart = getByRole('application');
      act(() => chart.focus());
      await waitFor(() => expect(getByRole('status')).toHaveTextContent('Visits, value: 5000'));
      fireEvent.keyDown(chart, { key: 'ArrowRight' });
      await waitFor(() => expect(getByRole('status')).toHaveTextContent('Cart, value: 2000'));
    } finally {
      rect.mockRestore();
    }
  });
});
