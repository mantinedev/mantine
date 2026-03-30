import { Badge } from '../Badge';
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
    <div style={{ padding: 40, maxWidth: 500 }}>
      <OverflowList
        data={fruits}
        maxRows={2}
        gap={4}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}
