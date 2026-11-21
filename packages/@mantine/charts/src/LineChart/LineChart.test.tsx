import { act, fireEvent, waitFor } from '@testing-library/react';
import { Label } from 'recharts';
import { render, tests } from '@mantine-tests/core';
import { LineChart, LineChartProps, LineChartStylesNames } from './LineChart';

const defaultProps: LineChartProps = {
  data: [
    { date: 'Mar 22', test: 110 },
    { date: 'Mar 23', test: 60 },
  ],
  series: [{ name: 'test', color: 'blue' }],
  dataKey: 'date',
  style: { width: 200, height: 200 },
};

describe('@mantine/charts/LineChart', () => {
  tests.itSupportsSystemProps<LineChartProps, LineChartStylesNames>({
    component: LineChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/LineChart',
    stylesApiSelectors: ['root'],
  });
  describe('keyboard announcements', () => {
    beforeEach(() => {
      jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockReturnValue(new DOMRect(0, 0, 400, 300));
    });

    afterEach(() => jest.restoreAllMocks());

    it.each([true, false])(
      'announces the focused point and arrow navigation with withTooltip=%s',
      async (withTooltip) => {
        const { getByRole } = render(
          <LineChart
            {...defaultProps}
            series={[{ name: 'test', label: 'Weight' }]}
            unit="kg"
            valueFormatter={(value) => value.toFixed(1)}
            withTooltip={withTooltip}
          />
        );
        const chart = getByRole('application');
        const status = getByRole('status');
        expect(status).toBeEmptyDOMElement();
        act(() => chart.focus());
        await waitFor(() => expect(status).toHaveTextContent('Mar 22, Weight: 110.0kg'));
        fireEvent.keyDown(chart, { key: 'ArrowRight' });
        await waitFor(() => expect(status).toHaveTextContent('Mar 23, Weight: 60.0kg'));
        fireEvent.keyDown(chart, { key: 'ArrowLeft' });
        act(() => chart.blur());
        expect(status).toBeEmptyDOMElement();
      }
    );

    it('reads nested data keys and stops announcing when the pointer takes over', async () => {
      const { getByRole } = render(
        <LineChart
          {...defaultProps}
          data={defaultProps.data.map(({ date, test }) => ({ date, values: [test] }))}
          series={[{ name: 'values[0]', label: 'Weight' }]}
          withTooltip={false}
        />
      );
      const chart = getByRole('application');
      const status = getByRole('status');
      act(() => chart.focus());
      await waitFor(() => expect(status).toHaveTextContent('Mar 22, Weight: 110'));
      fireEvent.pointerMove(chart);
      expect(status).toBeEmptyDOMElement();
      fireEvent.keyDown(chart, { key: 'ArrowRight' });
      await waitFor(() => expect(status).toHaveTextContent('Mar 23, Weight: 60'));
    });

    it('omits the live region when the accessibility layer is disabled', () => {
      const { queryByRole } = render(<LineChart {...defaultProps} accessibilityLayer={false} />);
      expect(queryByRole('status')).not.toBeInTheDocument();
    });
  });
  it('renders yAxisProps.children and rightYAxisProps.children on their own axes', () => {
    const rectSpy = jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 400,
      height: 300,
      top: 0,
      left: 0,
      right: 400,
      bottom: 300,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    const { container } = render(
      <LineChart
        {...defaultProps}
        data={[
          { date: 'Mar 22', test: 110, right: 10 },
          { date: 'Mar 23', test: 60, right: 20 },
        ]}
        series={[...defaultProps.series, { name: 'right', color: 'red', yAxisId: 'right' }]}
        withRightYAxis
        yAxisProps={{ children: <Label value="left-label" /> }}
        rightYAxisProps={{ children: <Label value="right-label" /> }}
      />
    );

    rectSpy.mockRestore();

    const labels = Array.from(container.querySelectorAll('text')).map((text) => text.textContent);
    expect(labels.filter((label) => label === 'left-label')).toHaveLength(1);
    expect(labels.filter((label) => label === 'right-label')).toHaveLength(1);
  });
});
