import { CandlestickChart } from './CandlestickChart';

export default { title: 'CandlestickChart' };

const data = [
  { date: 'Mar 01', open: 200, high: 240, low: 190, close: 230 },
  { date: 'Mar 02', open: 230, high: 250, low: 220, close: 225 },
  { date: 'Mar 03', open: 225, high: 235, low: 200, close: 205 },
  { date: 'Mar 04', open: 205, high: 260, low: 205, close: 255 },
  { date: 'Mar 05', open: 255, high: 270, low: 245, close: 248 },
  { date: 'Mar 06', open: 248, high: 252, low: 215, close: 220 },
  { date: 'Mar 07', open: 220, high: 280, low: 218, close: 275 },
  { date: 'Mar 08', open: 275, high: 290, low: 265, close: 285 },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CandlestickChart h={300} data={data} dataKey="date" />
    </div>
  );
}

export function CustomColors() {
  return (
    <div style={{ padding: 40 }}>
      <CandlestickChart h={300} data={data} dataKey="date" upColor="blue.6" downColor="orange.6" />
    </div>
  );
}

export function MaxCandleWidth() {
  return (
    <div style={{ padding: 40 }}>
      <CandlestickChart h={300} data={data} dataKey="date" maxCandleWidth={16} />
    </div>
  );
}

export function ReferenceLines() {
  return (
    <div style={{ padding: 40 }}>
      <CandlestickChart
        h={300}
        data={data}
        dataKey="date"
        referenceLines={[{ y: 250, label: 'Resistance', color: 'red.6' }]}
      />
    </div>
  );
}

export function AxisLabels() {
  return (
    <div style={{ padding: 40 }}>
      <CandlestickChart
        h={300}
        data={data}
        dataKey="date"
        xAxisLabel="Date"
        yAxisLabel="Price"
        unit="$"
      />
    </div>
  );
}
