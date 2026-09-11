import { TableOfContents, TableOfContentsProps } from './TableOfContents';

export default { title: 'TableOfContents' };

const headings = [
  { depth: 1, value: 'Getting started' },
  { depth: 2, value: 'Installation' },
  { depth: 2, value: 'Usage' },
  { depth: 2, value: 'Theming' },
  { depth: 3, value: 'Colors' },
  { depth: 3, value: 'Typography' },
  { depth: 3, value: 'Spacing' },
  { depth: 2, value: 'Components' },
  { depth: 3, value: 'Button' },
  { depth: 3, value: 'Input' },
  { depth: 2, value: 'FAQ' },
];

function Headings() {
  return (
    <div id="toc-story-headings" style={{ position: 'absolute', left: -9999, top: 0 }}>
      {headings.map((heading, index) => {
        const Tag = `h${heading.depth}` as 'h1';
        return (
          <Tag key={index} id={`toc-story-heading-${index}`}>
            {heading.value}
          </Tag>
        );
      })}
    </div>
  );
}

function Toc(props: Partial<TableOfContentsProps>) {
  return (
    <TableOfContents
      scrollSpyOptions={{ selector: '#toc-story-headings :is(h1, h2, h3)' }}
      {...props}
    />
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 350 }}>
      <Headings />
      <Toc initialData={headings} />
    </div>
  );
}

export function Variants() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
      <Headings />
      <div style={{ width: 240 }}>
        <Toc />
      </div>
      <div style={{ width: 240 }}>
        <Toc color="red" />
      </div>
      <div style={{ width: 240 }}>
        <Toc withGuideline={false} />
      </div>
      <div style={{ width: 240 }}>
        <Toc variant="filled" />
      </div>
      <div style={{ width: 240 }}>
        <Toc variant="light" />
      </div>
      <div style={{ width: 240 }}>
        <Toc variant="none" />
      </div>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
      <Headings />
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, index) => (
        <div key={size} style={{ width: 200 + index * 30 }}>
          <Toc size={size} />
        </div>
      ))}
    </div>
  );
}
