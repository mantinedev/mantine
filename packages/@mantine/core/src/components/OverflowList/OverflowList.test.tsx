import { render, screen, tests } from '@mantine-tests/core';
import { OverflowList, OverflowListProps, OverflowListStylesNames } from './OverflowList';

const defaultProps: OverflowListProps<any> = {
  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  renderItem: (item) => <div>{item}</div>,
  renderOverflow: (items) => <div>+{items.length}</div>,
};

const ROOT_CLASS = 'ol-test-root';
const CONTAINER_WIDTH = 100;
const ROW_HEIGHT = 20;
const OVERFLOW_WIDTH = 20;
const ITEM_WIDTHS: Record<string, number> = { A: 10, B: 10, C: 10, D: 10, LONG: 95 };

function makeRect(left: number, top: number, width: number, height: number): DOMRect {
  return {
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    x: left,
    y: top,
    toJSON: () => ({}),
  } as DOMRect;
}

function widthOf(el: HTMLElement): number {
  const text = (el.textContent ?? '').trim();
  if (text in ITEM_WIDTHS) {
    return ITEM_WIDTHS[text];
  }
  if (/^\+\d+$/.test(text)) {
    return OVERFLOW_WIDTH;
  }
  return 0;
}

function isMockedRoot(el: HTMLElement | null): boolean {
  return (
    !!el &&
    typeof el.getAttribute === 'function' &&
    !!el.getAttribute('class')?.includes(ROOT_CLASS)
  );
}

function simulatedRect(el: HTMLElement): DOMRect {
  if (isMockedRoot(el)) {
    return makeRect(0, 0, CONTAINER_WIDTH, ROW_HEIGHT);
  }

  const parent = el.parentElement;
  if (!isMockedRoot(parent)) {
    return makeRect(0, 0, widthOf(el), ROW_HEIGHT);
  }

  const children = Array.from(parent!.children) as HTMLElement[];
  let x = 0;
  let row = 0;
  let result = makeRect(0, 0, 0, 0);

  for (const child of children) {
    const w = widthOf(child);
    if (x > 0 && x + w > CONTAINER_WIDTH) {
      row += 1;
      x = 0;
    }
    if (child === el) {
      result = makeRect(x, row * ROW_HEIGHT, w, ROW_HEIGHT);
    }
    x += w;
  }

  return result;
}

describe('@mantine/core/OverflowList', () => {
  tests.itSupportsSystemProps<OverflowListProps<any>, OverflowListStylesNames>({
    component: OverflowList,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/OverflowList',
    stylesApiSelectors: ['root'],
  });

  it('passes data-based index to renderItem when collapseFrom="start" and maxVisibleItems is set', () => {
    const renderItem = jest.fn((item: string) => <div>{item}</div>);

    render(
      <OverflowList
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        collapseFrom="start"
        maxVisibleItems={3}
        renderItem={renderItem}
        renderOverflow={(items) => <div>+{items.length}</div>}
      />
    );

    expect(renderItem.mock.calls).toContainEqual(['8', 7]);
    expect(renderItem.mock.calls).toContainEqual(['9', 8]);
    expect(renderItem.mock.calls).toContainEqual(['10', 9]);
  });

  it('passes data-based index to renderItem when collapseFrom="end" and maxVisibleItems is set', () => {
    const renderItem = jest.fn((item: string) => <div>{item}</div>);

    render(
      <OverflowList
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        collapseFrom="end"
        maxVisibleItems={3}
        renderItem={renderItem}
        renderOverflow={(items) => <div>+{items.length}</div>}
      />
    );

    expect(renderItem.mock.calls).toContainEqual(['1', 0]);
    expect(renderItem.mock.calls).toContainEqual(['2', 1]);
    expect(renderItem.mock.calls).toContainEqual(['3', 2]);
  });

  describe('recompute on data change', () => {
    let rectSpy: jest.SpyInstance;

    beforeEach(() => {
      rectSpy = jest
        .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
        .mockImplementation(function getRect(this: HTMLElement) {
          return simulatedRect(this);
        });
    });

    afterEach(() => {
      rectSpy.mockRestore();
    });

    const renderTestItem = (item: string) => <div>{item}</div>;
    const renderTestOverflow = (items: string[]) => <div>{`+${items.length}`}</div>;

    it('limits visible items with maxVisibleItems', async () => {
      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={['A', 'B', 'C', 'D']}
          maxVisibleItems={2}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+2')).toBeInTheDocument();
      expect(screen.getByText('A')).toBeInTheDocument();
      expect(screen.getByText('B')).toBeInTheDocument();
      expect(screen.queryByText('C')).not.toBeInTheDocument();
      expect(screen.queryByText('D')).not.toBeInTheDocument();
    });

    it('limits visible items with maxVisibleItems when collapseFrom="start"', async () => {
      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={['A', 'B', 'C', 'D']}
          maxVisibleItems={2}
          collapseFrom="start"
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+2')).toBeInTheDocument();
      expect(screen.queryByText('A')).not.toBeInTheDocument();
      expect(screen.queryByText('B')).not.toBeInTheDocument();
      expect(screen.getByText('C')).toBeInTheDocument();
      expect(screen.getByText('D')).toBeInTheDocument();
    });

    it('moves all items to overflow when maxVisibleItems is 0', async () => {
      const { rerender } = render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={['A', 'B', 'C', 'D']}
          maxVisibleItems={0}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+4')).toBeInTheDocument();
      expect(screen.queryByText('A')).not.toBeInTheDocument();

      rerender(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={['A', 'B', 'C', 'D']}
          maxVisibleItems={0}
          collapseFrom="start"
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+4')).toBeInTheDocument();
      expect(screen.queryByText('D')).not.toBeInTheDocument();
    });

    it('recomputes when maxVisibleItems changes', async () => {
      const { rerender } = render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={['A', 'B', 'C', 'D']}
          maxVisibleItems={1}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+3')).toBeInTheDocument();

      rerender(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={['A', 'B', 'C', 'D']}
          maxVisibleItems={3}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+1')).toBeInTheDocument();
      expect(screen.getByText('C')).toBeInTheDocument();
    });

    it('limits visible rows with maxRows', async () => {
      const { rerender } = render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          maxRows={2}
          data={['LONG', 'A', 'LONG', 'A', 'LONG']}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+3')).toBeInTheDocument();
      expect(screen.getAllByText('LONG')).toHaveLength(1);
      expect(screen.getAllByText('A')).toHaveLength(1);

      rerender(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          maxRows={1}
          data={['LONG', 'A', 'LONG', 'A', 'LONG']}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+5')).toBeInTheDocument();
      expect(screen.queryByText('LONG')).not.toBeInTheDocument();
    });

    it('recomputes the visible/overflow split when string data is reordered at the same length', async () => {
      const short = ['A', 'B', 'C', 'D', 'LONG'];
      const reordered = ['LONG', 'A', 'B', 'C', 'D'];
      const renderItem = (item: string) => <div>{item}</div>;
      const renderOverflow = (items: string[]) => <div>{`+${items.length}`}</div>;

      const { rerender } = render(
        <OverflowList
          className={ROOT_CLASS}
          maxRows={1}
          gap={0}
          data={short}
          renderItem={renderItem}
          renderOverflow={renderOverflow}
        />
      );

      expect(await screen.findByText('+1')).toBeInTheDocument();
      expect(screen.getByText('A')).toBeInTheDocument();

      rerender(
        <OverflowList
          className={ROOT_CLASS}
          maxRows={1}
          gap={0}
          data={reordered}
          renderItem={renderItem}
          renderOverflow={renderOverflow}
        />
      );

      expect(await screen.findByText('+5')).toBeInTheDocument();
      expect(screen.queryByText('A')).not.toBeInTheDocument();

      rerender(
        <OverflowList
          className={ROOT_CLASS}
          maxRows={1}
          gap={0}
          data={short}
          renderItem={renderItem}
          renderOverflow={renderOverflow}
        />
      );

      expect(await screen.findByText('+1')).toBeInTheDocument();
      expect(screen.getByText('A')).toBeInTheDocument();
    });

    it('recomputes when reordered object data changes identity via getItemKey', async () => {
      const byId = {
        A: { id: 'A', label: 'A' },
        B: { id: 'B', label: 'B' },
        C: { id: 'C', label: 'C' },
        D: { id: 'D', label: 'D' },
        LONG: { id: 'LONG', label: 'LONG' },
      };
      const short = [byId.A, byId.B, byId.C, byId.D, byId.LONG];
      const reordered = [byId.LONG, byId.A, byId.B, byId.C, byId.D];
      const getItemKey = (item: { id: string }) => item.id;
      const renderItem = (item: { label: string }) => <div>{item.label}</div>;
      const renderOverflow = (items: unknown[]) => <div>{`+${items.length}`}</div>;

      const { rerender } = render(
        <OverflowList
          className={ROOT_CLASS}
          maxRows={1}
          gap={0}
          data={short}
          getItemKey={getItemKey}
          renderItem={renderItem}
          renderOverflow={renderOverflow}
        />
      );

      expect(await screen.findByText('+1')).toBeInTheDocument();

      rerender(
        <OverflowList
          className={ROOT_CLASS}
          maxRows={1}
          gap={0}
          data={reordered}
          getItemKey={getItemKey}
          renderItem={renderItem}
          renderOverflow={renderOverflow}
        />
      );

      expect(await screen.findByText('+5')).toBeInTheDocument();

      rerender(
        <OverflowList
          className={ROOT_CLASS}
          maxRows={1}
          gap={0}
          data={short}
          getItemKey={getItemKey}
          renderItem={renderItem}
          renderOverflow={renderOverflow}
        />
      );

      expect(await screen.findByText('+1')).toBeInTheDocument();
    });
  });
});
