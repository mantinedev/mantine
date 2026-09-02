import { DirectionProvider } from '@mantine/core';
import { JsonViewer, serializePath } from './JsonViewer';

export default { title: 'JsonViewer' };

const simpleData = {
  name: 'Mantine',
  version: '9.7.0',
  stable: true,
  deprecated: null,
  tags: ['react', 'ui', 'components'],
};

const nestedData = {
  user: {
    name: 'John Doe',
    age: 30,
    active: true,
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      coordinates: { lat: 39.7817, lng: -89.6501 },
    },
    contacts: [
      { type: 'email', value: 'john@example.com' },
      { type: 'phone', value: '+1-555-0123' },
    ],
  },
  settings: {
    theme: 'dark',
    notifications: { email: true, push: false, sms: null },
    language: 'en',
  },
};

const largeArray = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  value: Math.random() * 100,
}));

const dotKeyData = {
  'a.b': { x: 1 },
  a: { b: { y: 2 } },
  'key.with.dots': 'value',
};

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={simpleData} />
    </div>
  );
}

export function Nested() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={nestedData} defaultExpandDepth={3} />
    </div>
  );
}

export function WithRootName() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={simpleData} rootName="response" />
    </div>
  );
}

export function WithControls() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={nestedData} withControls defaultExpandDepth={0} />
    </div>
  );
}

export function WithTypesAndSize() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={simpleData} withTypes withSize />
    </div>
  );
}

export function WithCopy() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={simpleData} withCopy />
    </div>
  );
}

export function WithKeyQuotes() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={simpleData} withKeyQuotes />
    </div>
  );
}

export function WithoutStringQuotes() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={simpleData} withQuotes={false} />
    </div>
  );
}

export function CollapseStrings() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer
        value={{
          short: 'ok',
          long: 'This is a very long string value that should be collapsed by the component.',
        }}
        collapseStringsAfterLength={30}
      />
    </div>
  );
}

export function SortKeys() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={{ zebra: 1, alpha: 2, mango: 3, banana: 4 }} sortKeys />
    </div>
  );
}

export function LargeArrayGrouped() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={largeArray} groupArraysAfterLength={50} defaultExpandDepth={1} />
    </div>
  );
}

export function MaxDisplayLength() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={Array.from({ length: 50 }, (_, i) => i)} maxDisplayLength={10} />
    </div>
  );
}

export function DotKeysCollisionFree() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={dotKeyData} defaultExpandDepth={3} />
    </div>
  );
}

export function EmptyValues() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <h3>Empty object</h3>
      <JsonViewer value={{}} />
      <h3 style={{ marginTop: 20 }}>Empty array</h3>
      <JsonViewer value={[]} />
    </div>
  );
}

export function WithBorder() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={simpleData} withBorder />
    </div>
  );
}

export function CustomFontSize() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={simpleData} fontSize="xs" />
    </div>
  );
}

export function OnValueSelect() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer
        value={simpleData}
        onValueSelect={(path, value) => {
          console.log('Selected:', path, value);
        }}
      />
    </div>
  );
}

export function Collapsed() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={nestedData} defaultExpandDepth={0} />
    </div>
  );
}

export function FullyExpanded() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={nestedData} defaultExpandDepth={10} />
    </div>
  );
}

export function AllExpanded() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={nestedData} allExpanded />
    </div>
  );
}

export function Highlight() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer
        value={{
          name: 'Mantine',
          version: '9.7.0',
          deprecated: false,
          author: { name: 'Vitaly', url: 'https://github.com/rtivital' },
          license: 'MIT',
        }}
        highlightItems={{
          [serializePath(['version'])]: 'added',
          [serializePath(['deprecated'])]: 'removed',
          [serializePath(['author', 'url'])]: 'added',
        }}
        defaultExpandDepth={3}
      />
    </div>
  );
}

export function WithLineNumbers() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={nestedData} withLineNumbers defaultExpandDepth={2} />
    </div>
  );
}

export function LineNumbersWithCollapseStrings() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer
        value={{
          short: 'ok',
          long: 'This is a very long string value that should be collapsed by the component because it exceeds the configured character limit.',
          nested: {
            description:
              'Another long string for testing line number alignment with collapsed strings in nested objects.',
            count: 42,
          },
        }}
        withLineNumbers
        collapseStringsAfterLength={30}
        defaultExpandDepth={2}
      />
    </div>
  );
}

export function WithChevrons() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={nestedData} withChevrons defaultExpandDepth={1} />
    </div>
  );
}

export function AllFeatures() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer
        value={nestedData}
        withTypes
        withSize
        withCopy
        withBorder
        withKeyQuotes
        withControls
        withChevrons
        defaultExpandDepth={2}
        rootName="data"
      />
    </div>
  );
}

const cyclicData: any = {
  id: BigInt(1),
  name: 'cyclic',
  nested: { count: BigInt(2) },
};
cyclicData.self = cyclicData;
cyclicData.nested.parent = cyclicData;

export function CyclicAndBigInt() {
  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <JsonViewer value={cyclicData} withControls withCopy withCopyButton withTypes />
      <h3 style={{ marginTop: 20 }}>allExpanded</h3>
      <JsonViewer value={cyclicData} allExpanded withTypes />
    </div>
  );
}

export function WithinRtl() {
  return (
    <DirectionProvider initialDirection="rtl">
      <div dir="rtl" style={{ padding: 40, maxWidth: 700 }}>
        <JsonViewer
          value={nestedData}
          withLineNumbers
          withChevrons
          withCopy
          withCopyButton
          defaultExpandDepth={2}
        />
      </div>
    </DirectionProvider>
  );
}
