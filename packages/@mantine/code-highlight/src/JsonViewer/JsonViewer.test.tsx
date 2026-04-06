import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { JsonViewer, JsonViewerProps, JsonViewerStylesNames } from './JsonViewer';

const longString = 'a'.repeat(50);

const defaultProps: JsonViewerProps = {
  value: {
    name: 'John',
    age: 30,
    active: true,
    address: { city: 'NYC' },
    longValue: longString,
  },
  defaultExpandDepth: 1,
  collapseStringsAfterLength: 10,
  withTypes: true,
  withSize: true,
  withCopy: true,
  highlightItems: { name: 'added' },
  withLineNumbers: true,
  withChevrons: true,
  withCopyButton: true,
};

describe('@mantine/code-highlight/JsonViewer', () => {
  tests.itSupportsSystemProps<JsonViewerProps, JsonViewerStylesNames>({
    component: JsonViewer,
    props: defaultProps,
    varsResolver: true,
    selector: '.mantine-JsonViewer-root',
    displayName: '@mantine/code-highlight/JsonViewer',
    stylesApiSelectors: [
      'root',
      'node',
      'toggle',
      'key',
      'value',
      'bracket',
      'type',
      'size',
      'ellipsis',
      'copyButton',
      'content',
      'row',
      'scrollarea',
      'lineNumbers',
      'wrapper',
      'copyAllButton',
    ],
  });

  it('renders primitive values', () => {
    render(
      <JsonViewer value={{ str: 'hello', num: 42, bool: true, nil: null }} defaultExpandDepth={1} />
    );

    expect(screen.getByText(/"hello"/)).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
    const boolElements = screen.getAllByText('true');
    expect(boolElements.length).toBeGreaterThan(0);
    const nullElements = screen.getAllByText('null');
    expect(nullElements.length).toBeGreaterThan(0);
  });

  it('renders type badges when withTypes is true', () => {
    render(<JsonViewer value={{ str: 'hello' }} defaultExpandDepth={1} withTypes />);

    expect(screen.getByText('string')).toBeInTheDocument();
    expect(screen.getByText('object')).toBeInTheDocument();
  });

  it('hides type badges when withTypes is false', () => {
    render(<JsonViewer value={{ str: 'hello' }} defaultExpandDepth={1} withTypes={false} />);

    expect(screen.queryByText('string')).not.toBeInTheDocument();
  });

  it('renders size indicators when withSize is true', () => {
    render(<JsonViewer value={{ a: 1, b: 2 }} defaultExpandDepth={0} withSize />);

    expect(screen.getByText('2 keys')).toBeInTheDocument();
  });

  it('renders array size', () => {
    render(<JsonViewer value={[1, 2, 3]} defaultExpandDepth={0} withSize />);

    expect(screen.getByText('3 items')).toBeInTheDocument();
  });

  it('hides size indicators when withSize is false', () => {
    render(
      <JsonViewer
        value={{ a: 1, b: 2 }}
        defaultExpandDepth={0}
        withSize={false}
        withTypes={false}
      />
    );

    expect(screen.queryByText('2 keys')).not.toBeInTheDocument();
  });

  it('collapses nodes by default based on defaultExpandDepth', () => {
    render(<JsonViewer value={{ nested: { deep: { val: 'hidden' } } }} defaultExpandDepth={1} />);

    expect(screen.getByText(/nested/)).toBeInTheDocument();
    expect(screen.queryByText(/"hidden"/)).not.toBeInTheDocument();
  });

  it('expands node on click', async () => {
    render(<JsonViewer value={{ nested: { val: 'revealed' } }} defaultExpandDepth={1} />);

    expect(screen.queryByText(/"revealed"/)).not.toBeInTheDocument();

    const nestedRow = screen.getByText(/nested/).closest('[data-hoverable]')!;
    await userEvent.click(nestedRow);

    expect(screen.getByText(/"revealed"/)).toBeInTheDocument();
  });

  it('renders keys without quotes by default', () => {
    render(<JsonViewer value={{ myKey: 'val' }} defaultExpandDepth={1} />);

    const keyEl = document.querySelector('[data-key]')!;
    expect(keyEl.textContent).toContain('myKey');
    expect(keyEl.textContent).not.toContain('"myKey"');
  });

  it('renders keys with quotes when withKeyQuotes is true', () => {
    render(<JsonViewer value={{ myKey: 'val' }} defaultExpandDepth={1} withKeyQuotes />);

    const keyEl = document.querySelector('[data-key]')!;
    expect(keyEl.textContent).toContain('"myKey"');
  });

  it('renders string values without quotes when withQuotes is false', () => {
    render(<JsonViewer value={{ s: 'hello' }} defaultExpandDepth={1} withQuotes={false} />);

    const valueElements = document.querySelectorAll('[data-value-type="string"]');
    const texts = Array.from(valueElements).map((el) => el.textContent);
    expect(texts.some((t) => t === 'hello')).toBe(true);
  });

  it('truncates long strings when collapseStringsAfterLength is set', () => {
    render(
      <JsonViewer
        value={{ s: 'a'.repeat(50) }}
        defaultExpandDepth={1}
        collapseStringsAfterLength={10}
      />
    );

    expect(screen.getByText(/show more/)).toBeInTheDocument();
  });

  it('expands collapsed string on click', async () => {
    render(
      <JsonViewer
        value={{ s: 'abcdefghijklmnopqrstuvwxyz' }}
        defaultExpandDepth={1}
        collapseStringsAfterLength={5}
      />
    );

    expect(screen.getByText(/show more/)).toBeInTheDocument();

    await userEvent.click(screen.getByText(/show more/));

    expect(screen.getByText(/show less/)).toBeInTheDocument();
  });

  it('sorts keys when sortKeys is true', () => {
    const { container } = render(
      <JsonViewer value={{ zebra: 1, alpha: 2, middle: 3 }} defaultExpandDepth={1} sortKeys />
    );

    const keys = container.querySelectorAll('[data-key]');
    const keyTexts = Array.from(keys).map((el) => el.textContent?.replace(/[":, ]/g, ''));
    expect(keyTexts).toEqual(['alpha', 'middle', 'zebra']);
  });

  it('renders root name when rootName is set', () => {
    render(<JsonViewer value={{ a: 1 }} rootName="data" defaultExpandDepth={1} />);

    expect(screen.getByText(/data/)).toBeInTheDocument();
  });

  it('renders copy buttons when withCopy is true', () => {
    render(<JsonViewer value={{ a: 1 }} defaultExpandDepth={1} withCopy />);

    expect(screen.getAllByLabelText('Copy').length).toBeGreaterThan(0);
  });

  it('hides copy buttons by default', () => {
    render(<JsonViewer value={{ a: 1 }} defaultExpandDepth={1} />);

    expect(screen.queryByLabelText('Copy')).not.toBeInTheDocument();
  });

  it('renders expand all / collapse all controls when withControls is true', () => {
    render(<JsonViewer value={{ a: { b: 1 } }} withControls />);

    expect(screen.getByText('Expand all')).toBeInTheDocument();
    expect(screen.getByText('Collapse all')).toBeInTheDocument();
  });

  it('expands all nodes on expand all click', async () => {
    render(
      <JsonViewer
        value={{ nested: { deep: { val: 'found' } } }}
        defaultExpandDepth={0}
        withControls
      />
    );

    expect(screen.queryByText(/"found"/)).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Expand all'));

    expect(screen.getByText(/"found"/)).toBeInTheDocument();
  });

  it('collapses all nodes on collapse all click', async () => {
    render(
      <JsonViewer value={{ nested: { val: 'hidden' } }} defaultExpandDepth={2} withControls />
    );

    expect(screen.getByText(/"hidden"/)).toBeInTheDocument();

    await userEvent.click(screen.getByText('Collapse all'));

    expect(screen.queryByText(/"hidden"/)).not.toBeInTheDocument();
  });

  it('calls onValueSelect when a primitive value row is clicked', async () => {
    const onValueSelect = jest.fn();
    render(
      <JsonViewer value={{ name: 'test' }} defaultExpandDepth={1} onValueSelect={onValueSelect} />
    );

    const valueRow = screen.getByText(/"test"/).closest('[data-hoverable]')!;
    await userEvent.click(valueRow);

    expect(onValueSelect).toHaveBeenCalledWith(['name'], 'test');
  });

  it('truncates display when maxDisplayLength is exceeded', () => {
    const largeArray = Array.from({ length: 20 }, (_, i) => i);
    render(<JsonViewer value={largeArray} defaultExpandDepth={1} maxDisplayLength={5} />);

    expect(screen.getByText(/15 more items/)).toBeInTheDocument();
  });

  it('renders array values', () => {
    render(<JsonViewer value={['one', 'two', 'three']} defaultExpandDepth={1} />);

    expect(screen.getByText(/"one"/)).toBeInTheDocument();
    expect(screen.getByText(/"two"/)).toBeInTheDocument();
    expect(screen.getByText(/"three"/)).toBeInTheDocument();
  });

  it('renders nested objects', () => {
    render(<JsonViewer value={{ parent: { child: 'deep' } }} defaultExpandDepth={2} />);

    expect(screen.getByText(/"deep"/)).toBeInTheDocument();
  });

  it('applies border when withBorder is true', () => {
    const { container } = render(<JsonViewer value={{ a: 1 }} withBorder />);

    expect(container.querySelector('[data-with-border]')).toBeInTheDocument();
  });

  it('renders empty object', () => {
    render(<JsonViewer value={{}} defaultExpandDepth={1} withSize />);
    expect(screen.getByText('0 keys')).toBeInTheDocument();
  });

  it('renders empty array', () => {
    render(<JsonViewer value={[]} defaultExpandDepth={1} withSize />);
    expect(screen.getByText('0 items')).toBeInTheDocument();
  });
});
