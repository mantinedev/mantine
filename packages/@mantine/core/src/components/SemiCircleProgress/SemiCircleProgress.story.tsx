import { SemiCircleProgress } from './SemiCircleProgress';

export default { title: 'SemiCircleProgress' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <SemiCircleProgress value={40} label="40%" labelPosition="bottom" />
    </div>
  );
}

export function ZeroValue() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
      <SemiCircleProgress
        value={0}
        label="0 up ltr"
        orientation="up"
        fillDirection="left-to-right"
      />
      <SemiCircleProgress
        value={0}
        label="0 up rtl"
        orientation="up"
        fillDirection="right-to-left"
      />
      <SemiCircleProgress
        value={0}
        label="0 down ltr"
        orientation="down"
        fillDirection="left-to-right"
      />
      <SemiCircleProgress
        value={0}
        label="0 down rtl"
        orientation="down"
        fillDirection="right-to-left"
      />
    </div>
  );
}
