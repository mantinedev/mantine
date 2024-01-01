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
