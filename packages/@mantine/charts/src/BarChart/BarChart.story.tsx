import type { Meta } from '@storybook/react';
import { ReferenceArea } from 'recharts';
import { getThemeColor, MantineProvider, useMantineTheme } from '@mantine/core';
import { BarChart } from './BarChart';

const meta = {
  title: 'BarChart',
  component: BarChart,
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
} satisfies Meta<typeof BarChart>;

export default meta;

const simpleData = [
  { product: 'Laptop', sales: 1203 },
  { product: 'Smartphone', sales: 872 },
  { product: 'Tablet', sales: 547 },
  { product: 'Headphones', sales: 918 },
  { product: 'Printer', sales: 871 },
  { product: 'Camera', sales: 110 },
];

const data = [
  { month: 'January', Smartphones: 120, Laptops: 150, Tablets: 180 },
  { month: 'February', Smartphones: 80, Laptops: 100, Tablets: 120 },
  { month: 'March', Smartphones: 50, Laptops: 60, Tablets: 75 },
  { month: 'April', Smartphones: 30, Laptops: 40, Tablets: 50 },
  { month: 'May', Smartphones: 20, Laptops: 25, Tablets: 30 },
  { month: 'June', Smartphones: 40, Laptops: 45, Tablets: 50 },
];

const waterfallData = [
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue.3' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'green' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'green' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'green' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'green' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue.3', standalone: true },
];

/**
 * IMPORTANT NOTES ON USING REFERENCE AREAS:
 *
 * For ReferenceArea to display properly, follow these critical requirements:
 *
 * REQUIRED:
 * 1. ALWAYS include yAxisId="left" (this is the most important property)
 * 2. ALWAYS include both y1 and y2 values
 * 3. Set fillOpacity to at least 0.3 to ensure visibility
 * 4. Adding a stroke with strokeWidth improves visibility
 *
 * HORIZONTAL ORIENTATION:
 * - Use categorical values (strings) for x1/x2: <ReferenceArea x1="February" x2="May" ... />
 * - Use numeric values for y1/y2: <ReferenceArea y1={0} y2={150} ... />
 * - Example: <ReferenceArea x1="February" x2="May" y1={0} y2={150} yAxisId="left" />
 *
 * VERTICAL ORIENTATION:
 * - Use categorical values (strings) for y1/y2: <ReferenceArea y1="February" y2="May" ... />
 * - Use numeric values for x1/x2: <ReferenceArea x1={0} x2={150} ... />
 * - Example: <ReferenceArea y1="February" y2="May" x1={0} x2={150} yAxisId="left" />
 */

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={simpleData}
        dataKey="product"
        series={[{ name: 'sales', color: 'indigo' }]}
        withLegend
        getBarColor={(value) => (value > 700 ? 'teal.8' : 'red.8')}
      />
    </div>
  );
}

export function MultipleBars() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={data}
        dataKey="month"
        fillOpacity={0.6}
        series={[
          { name: 'Smartphones', color: 'indigo.6' },
          { name: 'Laptops', color: 'blue.6' },
          { name: 'Tablets', color: 'teal.6' },
        ]}
        withLegend
      />
    </div>
  );
}

export function Stacked() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={data}
        dataKey="month"
        type="stacked"
        fillOpacity={0.6}
        series={[
          { name: 'Smartphones', color: 'indigo.6' },
          { name: 'Laptops', color: 'blue.6' },
          { name: 'Tablets', color: 'teal.6' },
        ]}
        withLegend
      />
    </div>
  );
}

export function Waterfall() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={waterfallData}
        dataKey="item"
        type="waterfall"
        fillOpacity={0.6}
        withLegend
        series={[{ name: 'Effective tax rate in %', color: 'blue' }]}
      />
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={data}
        dataKey="month"
        type="stacked"
        // fillOpacity={0.6}
        orientation="vertical"
        series={[
          { name: 'Smartphones', color: 'indigo.6' },
          { name: 'Laptops', color: 'blue.6' },
          // { name: 'Tablets', color: 'teal.6' },
        ]}
        withLegend
        withBarValueLabel
      />
    </div>
  );
}

export function Percent() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={data}
        dataKey="month"
        type="percent"
        fillOpacity={0.6}
        series={[
          { name: 'Smartphones', color: 'indigo.6' },
          { name: 'Laptops', color: 'blue.6' },
          { name: 'Tablets', color: 'teal.6' },
        ]}
        withLegend
      />
    </div>
  );
}

export function ReferenceLines() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={simpleData}
        dataKey="product"
        series={[{ name: 'sales', color: 'indigo.6' }]}
        referenceLines={[{ y: 500, color: 'red.5', label: 'Reference line' }]}
        withLegend
      />
    </div>
  );
}

export function VerticalOrientationValueFormatter() {
  return (
    <BarChart
      h={300}
      p="xl"
      data={data}
      dataKey="month"
      type="stacked"
      orientation="vertical"
      valueFormatter={(value) => `${value * 2}%`}
      yAxisProps={{ width: 80 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

/**
 * REFERENCE AREA EXAMPLES
 * Below are the three key examples demonstrating ReferenceArea usage.
 */

export function SimpleReferenceArea() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={simpleData}
        dataKey="product"
        orientation="horizontal"
        series={[{ name: 'sales', color: 'blue.6' }]}
      >
        <ReferenceArea
          x1="Laptop"
          x2="Tablet"
          y1={0}
          y2={1050}
          yAxisId="left"
          fillOpacity={0.3}
          strokeOpacity={0.9}
          fill="rgb(136, 132, 216)"
          stroke="rgb(136, 132, 216)"
          strokeWidth={1}
          label={{
            value: 'Key Products',
            position: 'insideTopRight',
            fontSize: 12,
          }}
        />
      </BarChart>
    </div>
  );
}

export function ReferenceAreaVertical() {
  const theme = useMantineTheme();
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={data}
        dataKey="month"
        orientation="vertical"
        series={[
          { name: 'Smartphones', color: 'indigo.6' },
          { name: 'Laptops', color: 'blue.6' },
        ]}
        withLegend
      >
        <ReferenceArea
          y1="February"
          y2="May"
          x1={0}
          x2={150}
          yAxisId="left"
          fill={getThemeColor('violet.5', theme)}
          fillOpacity={0.2}
          stroke={getThemeColor('violet.5', theme)}
          label={{
            value: 'Focus Period (Feb-May)',
            position: 'insideBottomRight',
            fontSize: 12,
            fill: getThemeColor('violet.9', theme),
          }}
        />
      </BarChart>
    </div>
  );
}

export function DebugXYCoordinates() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={data}
        dataKey="month"
        orientation="horizontal"
        series={[{ name: 'Smartphones', color: 'blue.6' }]}
      >
        {/* First approach: String values for x axis */}
        <ReferenceArea
          x1="January"
          x2="March"
          y1={0}
          y2={90}
          yAxisId="left"
          fill="rgba(255, 0, 0, 0.4)"
          stroke="red"
          strokeWidth={1}
          label={{
            value: 'Test 1',
            position: 'insideTopRight',
            fontSize: 12,
          }}
        />

        {/* Second approach: Numeric indices */}
        <ReferenceArea
          x1="April"
          x2="June"
          y1={0}
          y2={200}
          yAxisId="left"
          fill="rgba(0, 0, 255, 0.4)"
          stroke="blue"
          strokeWidth={1}
          label={{
            value: 'Test 2',
            position: 'insideBottomRight',
            fontSize: 12,
          }}
        />
      </BarChart>
    </div>
  );
}
