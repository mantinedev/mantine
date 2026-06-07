import { useState } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Group } from '../Group';
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

const short = ['A', 'B', 'C', 'D', 'E', 'VeryLongItemNameThatTakesSpace'];
const reordered = ['VeryLongItemNameThatTakesSpace', 'A', 'B', 'C', 'D', 'E'];

export function ReorderRecompute() {
  const [data, setData] = useState(short);

  return (
    <div style={{ padding: 40 }}>
      <Group mb="md">
        <Button
          data-testid="reorder"
          onClick={() => setData((d) => (d === short ? reordered : short))}
        >
          Toggle order (same length)
        </Button>
      </Group>

      <div data-testid="container" style={{ width: 320, border: '2px solid red', padding: 4 }}>
        <OverflowList
          data={data}
          maxRows={1}
          gap={4}
          renderOverflow={(items) => (
            <Badge color="orange" data-testid="overflow">
              +{items.length} more
            </Badge>
          )}
          renderItem={(item, index) => (
            <Badge key={index} data-testid="item">
              {item}
            </Badge>
          )}
        />
      </div>
    </div>
  );
}
