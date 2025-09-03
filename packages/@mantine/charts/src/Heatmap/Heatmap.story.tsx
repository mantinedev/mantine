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
      Math.random() > 0.55 ? null : randomNumber(1, 4);
    return acc;
  }, {} as any);
}

const convertedRandomValues = generateRandomValues(365);

console.log(convertedRandomValues);

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

export function WithTooltip() {
  return (
    <div style={{ margin: 40, border: '1px solid pink', width: 'fit-content' }}>
      <Heatmap
        data={convertedRandomValues}
        rectSize={20}
        gap={3}
        withTooltip
        getTooltipLabel={({ date, value }) => `${date} – ${value || 0} contributions`}
        withWeekdayLabels
        withMonthLabels
      />
    </div>
  );
}

export function SplitMonths() {
  return (
    <div style={{ padding: 40 }}>
      <Heatmap
        data={convertedRandomValues}
        rectSize={10}
        gap={1}
        withWeekdayLabels
        withMonthLabels
        splitMonths
        withTooltip
        getTooltipLabel={({ date, value }) => `${date} – ${value || 0} contributions`}
      />
    </div>
  );
}
