import { BarsList } from './BarsList';

export default { title: 'BarsList' };

const data = [
  { name: 'Google', value: 1200000 },
  { name: 'Direct', value: 100000 },
  { name: 'Bing', value: 200000 },
  { name: 'Yahoo', value: 20000 },
  { name: 'ChatGPT', value: 1345000 },
  { name: 'Github', value: 100000 },
  { name: 'Yandex', value: 100000 },
];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList data={data} />
    </div>
  );
}

export function WithValueFormatter() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList data={data} valueFormatter={(value) => value.toLocaleString()} />
    </div>
  );
}

export function WithLabels() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
      />
    </div>
  );
}

export function WithCustomColors() {
  const coloredData = [
    { name: 'Google', value: 1200000, color: 'blue.6' },
    { name: 'Direct', value: 100000, color: 'green.6' },
    { name: 'Bing', value: 200000, color: 'yellow.6' },
    { name: 'Yahoo', value: 20000, color: 'red.6' },
    { name: 'ChatGPT', value: 1345000, color: 'teal.6' },
    { name: 'Github', value: 100000, color: 'gray.8' },
    { name: 'Yandex', value: 100000, color: 'orange.6' },
  ];

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={coloredData}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
      />
    </div>
  );
}

export function WithGetBarProps() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
        getBarProps={(barData) => ({
          style: {
            backgroundColor: barData.value > 500000 ? '#10a37f' : undefined,
            fontWeight: barData.value > 500000 ? 700 : undefined,
          },
        })}
      />
    </div>
  );
}

export function WithRenderBar() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        renderBar={(barData) => {
          const maxValue = Math.max(...data.map((item) => item.value));
          const percentage = (barData.value / maxValue) * 100;

          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: '100px',
                  height: '32px',
                  padding: '0 12px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'white',
                  background: `linear-gradient(90deg, #228be6 0%, #339af0 ${percentage}%)`,
                  borderRadius: '4px',
                  width: `${percentage}%`,
                }}
              >
                {barData.name}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>
                {barData.value.toLocaleString()}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export function SmallDataset() {
  const smallData = [
    { name: 'Success', value: 450 },
    { name: 'Error', value: 50 },
    { name: 'Warning', value: 120 },
  ];

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList data={smallData} barsLabel="Status" valueLabel="Count" />
    </div>
  );
}

export function WithThemeColors() {
  const themedData = [
    { name: 'Primary', value: 1200000, color: 'blue' },
    { name: 'Secondary', value: 800000, color: 'violet.7' },
    { name: 'Success', value: 600000, color: 'green.5' },
    { name: 'Warning', value: 400000, color: 'yellow.5' },
    { name: 'Error', value: 200000, color: 'red.5' },
  ];

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={themedData}
        barsLabel="Category"
        valueLabel="Amount"
        valueFormatter={(value) => value.toLocaleString()}
      />
    </div>
  );
}

export function OnlyBarsLabel() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueFormatter={(value) => value.toLocaleString()}
      />
    </div>
  );
}

export function OnlyValueLabel() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
      />
    </div>
  );
}

export function WithBarGap() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
        barGap="xl"
      />
    </div>
  );
}

export function WithMinBarSize() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
        minBarSize={200}
      />
    </div>
  );
}

export function WithAutoContrast() {
  const contrastData = [
    { name: 'Yellow', value: 1200000, color: 'yellow.4' },
    { name: 'Cyan', value: 800000, color: 'cyan.2' },
    { name: 'Lime', value: 600000, color: 'lime.3' },
    { name: 'Dark Blue', value: 400000, color: 'blue.9' },
    { name: 'Dark Red', value: 200000, color: 'red.9' },
  ];

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={contrastData}
        barsLabel="Category"
        valueLabel="Amount"
        valueFormatter={(value) => value.toLocaleString()}
        autoContrast
      />
    </div>
  );
}

export function WithBarHeight() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
        barHeight={48}
      />
    </div>
  );
}

export function EmptyDataWithLabels() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={[]}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
      />
    </div>
  );
}

export function ZeroValues() {
  const zeroData = [
    { name: 'Google', value: 0 },
    { name: 'Direct', value: 0 },
    { name: 'Bing', value: 0 },
    { name: 'Yahoo', value: 0 },
  ];

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={zeroData}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
      />
    </div>
  );
}

export function MixedZeroAndValues() {
  const mixedData = [
    { name: 'Google', value: 1200000, color: 'blue.6' },
    { name: 'Direct', value: 0, color: 'green.6' },
    { name: 'Bing', value: 200000, color: 'yellow.6' },
    { name: 'Yahoo', value: 0, color: 'red.6' },
    { name: 'ChatGPT', value: 1345000, color: 'teal.6' },
  ];

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={mixedData}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
      />
    </div>
  );
}

export function WithBarColor() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
        barColor="teal.6"
      />
    </div>
  );
}

export function WithBarTextColor() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
        barColor="yellow.4"
        barTextColor="dark.9"
      />
    </div>
  );
}

export function WithStylesAPI() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <BarsList
        data={data}
        barsLabel="Traffic Source"
        valueLabel="Visits"
        valueFormatter={(value) => value.toLocaleString()}
        classNames={{
          barLabel: 'custom-bar-label',
          barValue: 'custom-bar-value',
        }}
        styles={{
          barLabel: { borderRadius: '20px' },
          barValue: { color: 'blue' },
        }}
      />
    </div>
  );
}
