import { Label } from 'recharts';
import { render, tests } from '@mantine-tests/core';
import { BarChart, BarChartProps, BarChartStylesNames } from './BarChart';

const defaultProps: BarChartProps = {
  data: [
    { date: 'Mar 22', test: 110 },
    { date: 'Mar 23', test: 60 },
  ],
  series: [{ name: 'test', color: 'blue' }],
  dataKey: 'date',
  style: { width: 200, height: 200 },
};

describe('@mantine/charts/BarChart', () => {
  tests.itSupportsSystemProps<BarChartProps, BarChartStylesNames>({
    component: BarChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/BarChart',
    stylesApiSelectors: ['root'],
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
      <BarChart
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
