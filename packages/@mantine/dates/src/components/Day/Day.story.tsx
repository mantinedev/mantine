import { Day } from './Day';

export default { title: 'Day' };

function dateToSting(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const date = new Date(2024, 5, 2);
const dateString = dateToSting(date);

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Day date={dateString} />
      <Day date={dateString} weekend />
      <Day date={dateString} outside />
      <Day date={dateString} selected />
      <Day date={dateString} selected weekend />
      <Day date={dateString} selected outside />
      <Day date={dateString} disabled />
      <Day date={dateString} renderDay={(date) => new Date(date).getFullYear()} />
    </div>
  );
}

export function Static() {
  return (
    <div style={{ padding: 40 }}>
      <Day date={dateString} static />
      <Day date={dateString} static weekend />
      <Day date={dateString} static outside />
      <Day date={dateString} static selected />
      <Day date={dateString} static disabled />
      <Day date={dateString} static firstInRange inRange selected />
      <Day date={dateString} static inRange />
      <Day date={dateString} static inRange />
      <Day date={dateString} static inRange />
      <Day date={dateString} static lastInRange inRange selected />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <Day date={dateString} firstInRange inRange selected />
      <Day date={dateString} inRange />
      <Day date={dateString} inRange />
      <Day date={dateString} inRange />
      <Day date={dateString} lastInRange inRange selected />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <Day date={dateString} selected size={size} key={size} />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
