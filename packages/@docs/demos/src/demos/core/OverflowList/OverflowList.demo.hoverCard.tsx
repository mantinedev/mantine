import { Badge, HoverCard, OverflowList } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { Badge, HoverCard, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        renderItem={(item) => <Badge>{item}</Badge>}
        renderOverflow={(items) => (
          <HoverCard>
            <HoverCard.Target>
              <Badge component="button" type="button">
                +{items.length} more
              </Badge>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              {items.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </HoverCard.Dropdown>
          </HoverCard>
        )}
      />
    </div>
  );
}
`;

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        renderItem={(item) => <Badge>{item}</Badge>}
        renderOverflow={(items) => (
          <HoverCard>
            <HoverCard.Target>
              <Badge component="button" type="button">
                +{items.length} more
              </Badge>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              {items.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </HoverCard.Dropdown>
          </HoverCard>
        )}
      />
    </div>
  );
}

export const hoverCard: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'OverflowListDemo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
