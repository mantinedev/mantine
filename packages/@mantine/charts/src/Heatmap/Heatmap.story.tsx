import { Heatmap } from './Heatmap';

export default { title: 'Heatmap' };

function shiftDate(date: Date, numDays: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + numDays);
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomValues(count: number, date = new Date()) {
  return Array.from({ length: count }, (_, i) => i).reduce((acc, index) => {
    acc[shiftDate(date, -index).toISOString().split('T')[0]] =
      Math.random() > 0.45 ? null : randomNumber(1, 4);
    return acc;
  }, {} as any);
}

const convertedRandomValues = generateRandomValues(365);

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Heatmap
        data={convertedRandomValues}
        rectSize={10}
        gap={1}
        withWeekdayLabels
        withMonthLabels
      />
    </div>
  );
}
