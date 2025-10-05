import { OverflowList } from './OverflowList';

export default { title: 'OverflowList' };

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <OverflowList
        data={fruits}
        renderOverflow={(items) => <div>+{items.length}</div>}
        renderItem={(item, index) => (
          <span key={index} className="fruit-item">
            {item}
          </span>
        )}
        style={{ gap: '8px' }}
      />
    </div>
  );
}
