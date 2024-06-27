import { Sparkline } from './Sparkline';

export default { title: 'Sparkline' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Sparkline
        w={200}
        h={60}
        data={[10, 20, 40, 20, 40, 10, 50]}
        color="blue.6"
        fillOpacity={0.2}
      />
    </div>
  );
}

export function TrendColors() {
  return (
    <div style={{ padding: 40 }}>
      <Sparkline
        w={200}
        h={60}
        data={[10, 20, 40, 20, 40, 10, 50, 5, 10]}
        color="blue.6"
        fillOpacity={0.2}
        trendColors={{ positive: 'teal.6', negative: 'red.6' }}
      />
    </div>
  );
}
