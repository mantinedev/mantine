import { Day } from './Day';

export default { title: 'Day' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Day date={new Date()} />
      <Day date={new Date()} weekend />
      <Day date={new Date()} outside />
      <Day date={new Date()} selected />
      <Day date={new Date()} selected weekend />
      <Day date={new Date()} selected outside />
      <Day date={new Date()} disabled />
      <Day date={new Date()} renderDay={(date) => date.getFullYear()} />
    </div>
  );
}

export function Static() {
  return (
    <div style={{ padding: 40 }}>
      <Day date={new Date()} static />
      <Day date={new Date()} static weekend />
      <Day date={new Date()} static outside />
      <Day date={new Date()} static selected />
      <Day date={new Date()} static disabled />
      <Day date={new Date()} static firstInRange inRange selected />
      <Day date={new Date()} static inRange />
      <Day date={new Date()} static inRange />
      <Day date={new Date()} static inRange />
      <Day date={new Date()} static lastInRange inRange selected />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <Day date={new Date()} firstInRange inRange selected />
      <Day date={new Date()} inRange />
      <Day date={new Date()} inRange />
      <Day date={new Date()} inRange />
      <Day date={new Date()} lastInRange inRange selected />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <Day date={new Date()} selected size={size} key={size} />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
