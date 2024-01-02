import React from 'react';
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

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={simpleData}
        dataKey="product"
        series={[{ name: 'sales', color: 'indigo.6' }]}
        withLegend
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

export function Vertical() {
  return (
    <div style={{ padding: 40 }}>
      <BarChart
        h={300}
        data={data}
        dataKey="month"
        type="stacked"
        fillOpacity={0.6}
        orientation="vertical"
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
