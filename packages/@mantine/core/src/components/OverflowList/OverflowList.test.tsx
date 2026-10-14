import { act, createRef, useState } from 'react';
import { render, screen, tests } from '@mantine-tests/core';
import { OverflowList, OverflowListProps, OverflowListStylesNames } from './OverflowList';

const defaultProps: OverflowListProps<any> = {
  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  renderItem: (item) => <div>{item}</div>,
  renderOverflow: (items) => <div>+{items.length}</div>,
};

const ROOT_CLASS = 'ol-test-root';
const DEFAULT_CONTAINER_WIDTH = 100;
let containerWidth = DEFAULT_CONTAINER_WIDTH;
let rootSizesToContent = false;
const OVERFLOW_WIDTH = 20;
const ITEM_WIDTHS: Record<string, number> = { A: 10, B: 10, C: 10, D: 10, E: 10, LONG: 95 };

function makeRect(width: number): DOMRect {
  return {
    left: 0,
    top: 0,
    width,
    height: 0,
    right: width,
    bottom: 0,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  } as DOMRect;
}

function widthOf(el: HTMLElement): number {
  const text = (el.textContent ?? '').trim();
  if (text in ITEM_WIDTHS) {
    return ITEM_WIDTHS[text];
  }
  const sized = /^w(\d+)/.exec(text);
  if (sized) {
    return Number(sized[1]);
  }
  if (/^\+\d+$/.test(text)) {
    return text.length > 2 ? OVERFLOW_WIDTH + 10 : OVERFLOW_WIDTH;
  }
  return 0;
}

function isMockedRoot(el: HTMLElement | null): el is HTMLElement {
  return !!el?.getAttribute?.('class')?.includes(ROOT_CLASS);
}

function getRootWidth(root: HTMLElement): number {
  if (!rootSizesToContent) {
    return containerWidth;
  }

  const contentWidth = (Array.from(root.children) as HTMLElement[]).reduce(
    (acc, child) => acc + widthOf(child),
    0
  );
  return Math.min(containerWidth, contentWidth);
}

function getWidth(el: HTMLElement): number {
  return isMockedRoot(el) ? getRootWidth(el) : widthOf(el);
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

  describe('measurement', () => {
    let rectSpy: jest.SpyInstance;

    beforeEach(() => {
      containerWidth = DEFAULT_CONTAINER_WIDTH;
      rootSizesToContent = false;
      rectSpy = jest
        .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
        .mockImplementation(function getRect(this: HTMLElement) {
          return makeRect(getWidth(this));
        });
    });

    afterEach(() => {
      rectSpy.mockRestore();
      jest.restoreAllMocks();
      delete (HTMLElement.prototype as any).computedStyleMap;
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

    it('fits items of mixed widths with a two-digit overflow indicator', async () => {
      const data = [
        ...Array.from({ length: 6 }, (_, i) => `w30-${i}`),
        ...Array.from({ length: 10 }, (_, i) => `w10-${i}`),
      ];
      const { container } = render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={data}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+14')).toBeInTheDocument();
      expect(container.querySelector(`.${ROOT_CLASS}`)!.children).toHaveLength(3);
    });

    it.each(['end', 'start'] as const)(
      'uses the root content box width when collapseFrom="%s"',
      async (collapseFrom) => {
        render(
          <OverflowList
            className={ROOT_CLASS}
            gap={0}
            style={{ padding: 10 }}
            collapseFrom={collapseFrom}
            data={['w30-a', 'w30-b', 'w30-c']}
            renderItem={renderTestItem}
            renderOverflow={renderTestOverflow}
          />
        );

        expect(await screen.findByText('+1')).toBeInTheDocument();
        expect(screen.getAllByText(/^w30/)).toHaveLength(2);
      }
    );

    it.each(['end', 'start'] as const)(
      'moves an item wider than the root to overflow when collapseFrom="%s"',
      async (collapseFrom) => {
        render(
          <OverflowList
            className={ROOT_CLASS}
            gap={0}
            collapseFrom={collapseFrom}
            data={['w424']}
            renderItem={renderTestItem}
            renderOverflow={renderTestOverflow}
          />
        );

        expect(await screen.findByText('+1')).toBeInTheDocument();
        expect(screen.queryByText('w424')).not.toBeInTheDocument();
      }
    );

    it('does not count an item wider than the root as fitting on its own row', async () => {
      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          maxRows={3}
          data={['w10-a', 'w10-b', 'w150', 'w10-c']}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+2')).toBeInTheDocument();
      expect(screen.queryByText('w150')).not.toBeInTheDocument();
    });

    it('lets the overflow indicator start a new row when maxRows > 1', async () => {
      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          maxRows={2}
          maxVisibleItems={4}
          data={Array.from({ length: 6 }, (_, i) => `w25-${i}`)}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+2')).toBeInTheDocument();
      expect(screen.getAllByText(/^w25/)).toHaveLength(4);
    });

    it('supports renderOverflow that returns a string', async () => {
      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          maxVisibleItems={1}
          data={['A', 'B', 'C', 'D']}
          renderItem={renderTestItem}
          renderOverflow={(items) => `+${items.length}`}
        />
      );

      expect(await screen.findByText('+3')).toBeInTheDocument();
      expect(screen.getByText('A')).toBeInTheDocument();
    });

    it('measures the overflow indicator when renderOverflow returns a fragment', async () => {
      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={['w30-a', 'w30-b', 'w30-c', 'w30-d']}
          renderItem={renderTestItem}
          renderOverflow={(items) => <>{`+${items.length}`}</>}
        />
      );

      expect(await screen.findByText('+2')).toBeInTheDocument();
      expect(screen.getAllByText(/^w30/)).toHaveLength(2);
    });

    it('keeps the consumer ref of the overflow indicator without React warnings', async () => {
      const ref = createRef<HTMLDivElement>();
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          maxVisibleItems={1}
          data={['A', 'B', 'C']}
          renderItem={renderTestItem}
          renderOverflow={(items) => <div ref={ref}>{`+${items.length}`}</div>}
        />
      );

      expect(await screen.findByText('+2')).toBeInTheDocument();
      expect(ref.current).toBe(screen.getByText('+2'));
      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });

    it('includes horizontal margins of items and the overflow indicator in the fit', async () => {
      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={['w30-a', 'w30-b', 'w30-c']}
          renderItem={(item) => <div style={{ marginRight: 10 }}>{item}</div>}
          renderOverflow={(items) => <div style={{ marginLeft: 5 }}>{`+${items.length}`}</div>}
        />
      );

      expect(await screen.findByText('+2')).toBeInTheDocument();
      expect(screen.getAllByText(/^w30/)).toHaveLength(1);
    });

    const mockUsedAutoMargin = (isAuto: (element: Element) => boolean) => {
      const originalGetComputedStyle = window.getComputedStyle;
      return jest.spyOn(window, 'getComputedStyle').mockImplementation((element, pseudo) => {
        const style = originalGetComputedStyle(element, pseudo);
        if (!isAuto(element)) {
          return style;
        }
        const used = `${containerWidth - widthOf(element as HTMLElement)}px`;
        return new Proxy(style, {
          get: (target, property) =>
            property === 'marginLeft' ? used : Reflect.get(target, property, target),
        });
      });
    };

    it('ignores the used value of an inline auto margin on the overflow indicator', async () => {
      mockUsedAutoMargin((element) => (element as HTMLElement).style?.marginLeft === 'auto');

      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={Array.from({ length: 5 }, (_, i) => `w30-${i}`)}
          renderItem={renderTestItem}
          renderOverflow={(items) => <div style={{ marginLeft: 'auto' }}>{`+${items.length}`}</div>}
        />
      );

      expect(await screen.findByText('+3')).toBeInTheDocument();
      expect(screen.getAllByText(/^w30/)).toHaveLength(2);
    });

    it('ignores the used value of an auto margin reported by computedStyleMap', async () => {
      const isAuto = (element: Element) => element.hasAttribute('data-auto-margin');
      mockUsedAutoMargin(isAuto);
      (HTMLElement.prototype as any).computedStyleMap = function computedStyleMap(
        this: HTMLElement
      ) {
        return {
          get: (property: string) =>
            property === 'margin-left' && isAuto(this) ? { toString: () => 'auto' } : undefined,
        };
      };

      render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={Array.from({ length: 5 }, (_, i) => `w30-${i}`)}
          renderItem={renderTestItem}
          renderOverflow={(items) => <div data-auto-margin>{`+${items.length}`}</div>}
        />
      );

      expect(await screen.findByText('+3')).toBeInTheDocument();
      expect(screen.getAllByText(/^w30/)).toHaveLength(2);
    });

    it('measures items without flex-grow stretching', async () => {
      rectSpy.mockImplementation(function getRect(this: HTMLElement) {
        const root = this.parentElement;
        const stretched =
          this.style.flexGrow === '1' && isMockedRoot(root) && !root.hasAttribute('data-measuring');
        return makeRect(getWidth(this) + (stretched ? 15 : 0));
      });

      const { container } = render(
        <OverflowList
          className={ROOT_CLASS}
          gap={0}
          data={Array.from({ length: 4 }, (_, i) => `w30-${i}`)}
          renderItem={(item) => <div style={{ flexGrow: 1 }}>{item}</div>}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(await screen.findByText('+2')).toBeInTheDocument();
      expect(screen.getAllByText(/^w30/)).toHaveLength(2);
      expect(container.querySelector(`.${ROOT_CLASS}`)).not.toHaveAttribute('data-measuring');
    });

    it('does not pass gap to the DOM', () => {
      const { container } = render(
        <OverflowList
          className={ROOT_CLASS}
          gap="md"
          data={['A']}
          renderItem={renderTestItem}
          renderOverflow={renderTestOverflow}
        />
      );

      expect(container.querySelector(`.${ROOT_CLASS}`)).not.toHaveAttribute('gap');
    });

    describe('resize observer', () => {
      const OriginalResizeObserver = window.ResizeObserver;
      let observers: { callback: ResizeObserverCallback; observed: Set<Element> }[] = [];
      let initialNotification = false;

      beforeEach(() => {
        observers = [];
        initialNotification = false;
        window.ResizeObserver = class {
          private observer: { callback: ResizeObserverCallback; observed: Set<Element> };
          constructor(callback: ResizeObserverCallback) {
            this.observer = { callback, observed: new Set() };
            observers.push(this.observer);
          }
          observe(element: Element) {
            this.observer.observed.add(element);
            if (initialNotification) {
              setTimeout(() => {
                if (this.observer.observed.has(element)) {
                  this.observer.callback([{ target: element }] as any, this as any);
                }
              }, 0);
            }
          }
          unobserve(element: Element) {
            this.observer.observed.delete(element);
          }
          disconnect() {
            this.observer.observed.clear();
          }
        } as any;
      });

      afterEach(() => {
        window.ResizeObserver = OriginalResizeObserver;
      });

      const notify = async (targets: Element[]) => {
        await act(async () => {
          observers.forEach((observer) => {
            const entries = targets
              .filter((target) => observer.observed.has(target))
              .map((target) => {
                const rect = target.getBoundingClientRect();
                return {
                  target,
                  contentRect: rect,
                  borderBoxSize: [{ inlineSize: rect.width, blockSize: rect.height }],
                  contentBoxSize: [{ inlineSize: rect.width, blockSize: rect.height }],
                };
              });
            if (entries.length > 0) {
              observer.callback(entries as any, {} as any);
            }
          });
          await new Promise((resolve) => setTimeout(resolve, 50));
        });
      };

      it('settles when the root width follows its content', async () => {
        rootSizesToContent = true;
        initialNotification = true;
        const data = Array.from({ length: 10 }, (_, i) => `w30-${i}`);
        const renderItem = jest.fn(renderTestItem);

        render(
          <OverflowList
            className={ROOT_CLASS}
            gap={0}
            data={data}
            renderItem={renderItem}
            renderOverflow={renderTestOverflow}
          />
        );

        expect(await screen.findByText('+8')).toBeInTheDocument();

        for (let tick = 0; tick < 20; tick += 1) {
          await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 20));
          });
        }

        const hiddenItemRenders = renderItem.mock.calls.filter(([item]) => item === 'w30-9');
        expect(observers).toHaveLength(1);
        expect(hiddenItemRenders).toHaveLength(1);
        expect(screen.getAllByText(/^w30/)).toHaveLength(2);
      });

      it('recomputes the split when the overflow indicator gets wider', async () => {
        const { rerender } = render(
          <OverflowList
            className={ROOT_CLASS}
            gap={0}
            data={['w30-a', 'w30-b', 'w30-c', 'w30-d']}
            renderItem={renderTestItem}
            renderOverflow={renderTestOverflow}
          />
        );

        expect(await screen.findByText('+2')).toBeInTheDocument();

        const renderWideOverflow = (items: string[]) => <span>{`w50-${items.length}`}</span>;
        rerender(
          <OverflowList
            className={ROOT_CLASS}
            gap={0}
            data={['w30-a', 'w30-b', 'w30-c', 'w30-d']}
            renderItem={renderTestItem}
            renderOverflow={renderWideOverflow}
          />
        );

        await notify([screen.getByText('w50-2')]);

        expect(await screen.findByText('w50-3')).toBeInTheDocument();
        expect(screen.getAllByText(/^w30/)).toHaveLength(1);
      });

      it('recomputes the split when gap changes', async () => {
        const data = ['w30-a', 'w30-b', 'w30-c', 'w30-d'];
        const { rerender } = render(
          <OverflowList
            className={ROOT_CLASS}
            gap={0}
            style={{ columnGap: 0 }}
            data={data}
            renderItem={renderTestItem}
            renderOverflow={renderTestOverflow}
          />
        );

        expect(await screen.findByText('+2')).toBeInTheDocument();

        rerender(
          <OverflowList
            className={ROOT_CLASS}
            gap={20}
            style={{ columnGap: 20 }}
            data={data}
            renderItem={renderTestItem}
            renderOverflow={renderTestOverflow}
          />
        );

        expect(await screen.findByText('+3')).toBeInTheDocument();
        expect(screen.getAllByText(/^w30/)).toHaveLength(1);
      });

      it('keeps the overflow indicator mounted when a resize does not change the split', async () => {
        const { container } = render(
          <OverflowList
            className={ROOT_CLASS}
            gap={0}
            data={['w30-a', 'w30-b', 'w30-c', 'w30-d']}
            renderItem={renderTestItem}
            renderOverflow={(items) => <button type="button">{`+${items.length}`}</button>}
          />
        );

        const indicator = await screen.findByText('+2');
        indicator.focus();
        expect(document.activeElement).toBe(indicator);

        containerWidth = 95;
        await notify([container.querySelector(`.${ROOT_CLASS}`)!]);

        expect(screen.getByText('+2')).toBe(indicator);
        expect(document.activeElement).toBe(indicator);
      });

      it('shows more items when the overflow indicator gets narrower after a resize', async () => {
        containerWidth = 40;
        const { container } = render(
          <OverflowList
            className={ROOT_CLASS}
            gap={0}
            collapseFrom="start"
            data={Array.from({ length: 12 }, (_, i) => `w10-${i}`)}
            renderItem={renderTestItem}
            renderOverflow={renderTestOverflow}
          />
        );

        expect(await screen.findByText('+11')).toBeInTheDocument();

        containerWidth = 100;
        await notify([container.querySelector(`.${ROOT_CLASS}`)!]);

        expect(await screen.findByText('+4')).toBeInTheDocument();
        expect(screen.getAllByText(/^w10/)).toHaveLength(8);
      });

      it.each(['end', 'start'] as const)(
        'ignores out-of-flow siblings rendered next to the overflow indicator and items, collapseFrom="%s"',
        async (collapseFrom) => {
          function Indicator({ count }: { count: number }) {
            const [opened, setOpened] = useState(false);
            return (
              <>
                <button type="button" onClick={() => setOpened(true)}>{`+${count}`}</button>
                {opened && <div style={{ position: 'absolute' }}>dropdown</div>}
                <div style={{ display: 'none' }}>hidden</div>
              </>
            );
          }

          const { container } = render(
            <OverflowList
              className={ROOT_CLASS}
              gap={0}
              collapseFrom={collapseFrom}
              data={Array.from({ length: 10 }, (_, i) => `w30-${i}`)}
              renderItem={(item) => (
                <>
                  <div>{item}</div>
                  <div style={{ position: 'fixed' }}>tooltip</div>
                </>
              )}
              renderOverflow={(items) => <Indicator count={items.length} />}
            />
          );

          const indicator = await screen.findByText('+8');
          expect(screen.getAllByText(/^w30/)).toHaveLength(2);

          await act(async () => {
            indicator.click();
          });
          expect(screen.getByText('dropdown')).toBeInTheDocument();

          await notify([container.querySelector(`.${ROOT_CLASS}`)!]);

          expect(screen.getByText('+8')).toBe(indicator);
          expect(screen.getAllByText(/^w30/)).toHaveLength(2);
        }
      );

      it('recomputes the split when rendered items change size without the root resizing', async () => {
        const { container } = render(
          <OverflowList
            className={ROOT_CLASS}
            gap={0}
            data={['A', 'B', 'C', 'D', 'w60', 'E']}
            renderItem={renderTestItem}
            renderOverflow={renderTestOverflow}
          />
        );

        expect(await screen.findByText('+2')).toBeInTheDocument();

        ITEM_WIDTHS.A = 5;
        ITEM_WIDTHS.B = 5;
        try {
          await notify(Array.from(container.querySelector(`.${ROOT_CLASS}`)!.children));
          expect(await screen.findByText('E')).toBeInTheDocument();
          expect(screen.queryByText(/^\+\d+$/)).not.toBeInTheDocument();
        } finally {
          ITEM_WIDTHS.A = 10;
          ITEM_WIDTHS.B = 10;
        }
      });
    });
  });
});
