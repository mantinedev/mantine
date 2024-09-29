import { AngleSlider } from './AngleSlider';

export default { title: 'AngleSlider' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <AngleSlider
        size={200}
        marks={[
          { value: 0, label: '0°' },
          // { value: 45, label: '45°' },
          { value: 90, label: '90°' },
          // { value: 135, label: '135°' },
          { value: 180, label: '180°' },
          // { value: 225, label: '225°' },
          // { value: 270, label: '270°' },
          { value: 315, label: '315°' },
        ]}
        restrictToMarks
      />
    </div>
  );
}
