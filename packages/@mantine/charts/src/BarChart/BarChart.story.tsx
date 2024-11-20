import { BarChart } from './BarChart';

export default { title: 'BarChart' };

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
