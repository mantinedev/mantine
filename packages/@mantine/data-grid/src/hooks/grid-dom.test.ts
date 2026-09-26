import { getColumnScrollLeft, getRowScrollTop } from './grid-dom';

function mockRect(element: Element, rect: Partial<DOMRect>) {
  jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 0,
    width: 0,
    ...rect,
  } as DOMRect);
}

function createContainer(html: string) {
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);
  mockRect(container, { top: 100, left: 50, right: 450 });
  return container;
}

describe('@mantine/data-grid/grid-dom', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    jest.restoreAllMocks();
  });

  describe('getRowScrollTop', () => {
    it('scrolls a rendered row to the bottom edge of the sticky header', () => {
      const container = createContainer(
        '<table><thead style="position: sticky"><tr><th>A</th></tr></thead><tbody><tr data-row-id="r0"></tr><tr data-row-id="r1"></tr></tbody></table>'
      );
      container.scrollTop = 20;
      mockRect(container.querySelector('thead')!, { height: 40 });
      mockRect(container.querySelector('[data-row-id="r1"]')!, { top: 300 });
      expect(getRowScrollTop(container, 1, 'r1', 32)).toBe(20 + 200 - 40);
    });

    it('accounts for sticky pinned list items', () => {
      const container = createContainer(
        '<div data-list-view-scope><div data-list-pinned="top" style="position: sticky; top: 0px"><div data-row-id="p0"></div></div><div data-row-id="r1"></div></div>'
      );
      container.scrollTop = 10;
      mockRect(container.querySelector('[data-list-pinned="top"]')!, { height: 50 });
      mockRect(container.querySelector('[data-row-id="r1"]')!, { top: 400 });
      expect(getRowScrollTop(container, 1, 'r1', 32)).toBe(10 + 300 - 50);
      expect(getRowScrollTop(container, 0, 'p0', 32)).toBeNull();
    });

    it('uses the rendered virtual row and virtual header', () => {
      const container = createContainer(
        '<div role="grid"><div role="rowgroup" data-virtual-thead style="position: sticky"></div><div role="row" data-row-id="r5"></div></div>'
      );
      mockRect(container.querySelector('[data-virtual-thead]')!, { height: 30 });
      mockRect(container.querySelector('[data-row-id="r5"]')!, { top: 400 });
      expect(getRowScrollTop(container, 5, 'r5', 32)).toBe(300 - 30);
    });

    it('ignores rows and headers of a nested grid', () => {
      const container = createContainer(
        '<table><thead style="position: sticky"><tr><th>A</th></tr></thead><tbody><tr><td><div data-dg-scroll><table><thead style="position: sticky"><tr><th>N</th></tr></thead><tbody><tr data-row-id="r3"></tr></tbody></table></div></td></tr><tr data-row-id="r3"></tr></tbody></table>'
      );
      container.setAttribute('data-dg-scroll', '');
      const [outerHead, nestedHead] = Array.from(container.querySelectorAll('thead'));
      const [nestedRow, outerRow] = Array.from(container.querySelectorAll('[data-row-id="r3"]'));
      mockRect(outerHead, { height: 40 });
      mockRect(nestedHead, { height: 25 });
      mockRect(nestedRow, { top: 200 });
      mockRect(outerRow, { top: 500 });
      expect(getRowScrollTop(container, 3, 'r3', 32)).toBe(400 - 40);
    });

    it('does not subtract the header height when the header is not sticky', () => {
      const container = createContainer(
        '<table><thead><tr><th>A</th></tr></thead><tbody><tr data-row-id="r0"></tr><tr data-row-id="r1"></tr></tbody></table>'
      );
      container.scrollTop = 20;
      mockRect(container.querySelector('thead')!, { height: 40 });
      mockRect(container.querySelector('[data-row-id="r1"]')!, { top: 300 });
      expect(getRowScrollTop(container, 1, 'r1', 32)).toBe(20 + 200);
    });

    it('subtracts the sticky top-pinned rows below the sticky header', () => {
      const container = createContainer(
        '<table><thead style="position: sticky"><tr><th>A</th></tr></thead><tbody data-pinned="top" style="position: sticky; top: 40px"><tr data-row-id="r0"></tr></tbody><tbody><tr data-row-id="r4"></tr></tbody></table>'
      );
      container.scrollTop = 20;
      mockRect(container.querySelector('thead')!, { height: 40 });
      mockRect(container.querySelector('tbody[data-pinned="top"]')!, { height: 32 });
      mockRect(container.querySelector('[data-row-id="r4"]')!, { top: 300 });
      expect(getRowScrollTop(container, 4, 'r4', 32)).toBe(20 + 200 - 40 - 32);
    });

    it('offsets the fallback position by the non-sticky content above the rows', () => {
      const container = createContainer(
        '<table><thead><tr><th>A</th></tr></thead><tbody data-pinned="top" style="position: sticky"><tr></tr></tbody><tbody></tbody></table>'
      );
      mockRect(container.querySelector('thead')!, { height: 40 });
      mockRect(container.querySelector('tbody[data-pinned="top"]')!, { height: 32 });
      expect(getRowScrollTop(container, 10, 'r10', 32)).toBe(40 + 320);
    });

    it('does not offset the fallback position when the header is sticky', () => {
      const container = createContainer(
        '<table><thead style="position: sticky"><tr><th>A</th></tr></thead><tbody></tbody></table>'
      );
      mockRect(container.querySelector('thead')!, { height: 40 });
      expect(getRowScrollTop(container, 10, 'r10', 32)).toBe(320);
    });

    it('includes the sticky header offset in the covered area', () => {
      const container = createContainer(
        '<table><thead style="position: sticky; top: 24px"><tr><th>A</th></tr></thead><tbody data-pinned="top" style="position: sticky; top: 64px"><tr data-row-id="p"></tr></tbody><tbody><tr data-row-id="r4"></tr></tbody></table>'
      );
      container.scrollTop = 20;
      mockRect(container.querySelector('thead')!, { height: 40 });
      mockRect(container.querySelector('tbody[data-pinned="top"]')!, { height: 32 });
      mockRect(container.querySelector('[data-row-id="r4"]')!, { top: 300 });
      expect(getRowScrollTop(container, 4, 'r4', 32)).toBe(20 + 200 - (64 + 32));
    });

    it('finds the rendered row by id rather than by its rendered position', () => {
      const container = createContainer(
        '<table><tbody data-pinned="top" style="position: sticky; top: 0px"><tr data-row-index="0" data-row-id="c"></tr></tbody><tbody><tr data-row-index="1" data-row-id="a"></tr><tr data-row-index="2" data-row-id="b"></tr></tbody></table>'
      );
      mockRect(container.querySelector('tbody[data-pinned="top"]')!, { height: 32 });
      mockRect(container.querySelector('[data-row-id="a"]')!, { top: 232 });
      mockRect(container.querySelector('[data-row-id="b"]')!, { top: 264 });
      expect(getRowScrollTop(container, 1, 'b', 32)).toBe(164 - 32);
    });

    it('does not scroll to a row in a sticky pinned section', () => {
      const container = createContainer(
        '<table><tbody data-pinned="top" style="position: sticky; top: 0px"><tr data-row-id="c"></tr></tbody><tbody><tr data-row-id="a"></tr></tbody></table>'
      );
      expect(getRowScrollTop(container, 2, 'c', 32)).toBeNull();
    });

    it('falls back to the fixed row height when the row is not rendered', () => {
      const container = createContainer('<div role="grid"></div>');
      expect(getRowScrollTop(container, 10, 'r10', 32)).toBe(320);
    });
  });

  describe('getColumnScrollLeft', () => {
    it('uses the leaf header row of a table with header groups', () => {
      const container = createContainer(
        '<table><thead><tr><th colspan="2">Group</th><th>C</th></tr><tr><th>A</th><th>B</th><th>C</th></tr></thead></table>'
      );
      container.scrollLeft = 10;
      const leafCells = container.querySelectorAll('thead tr:last-child th');
      mockRect(leafCells[2], { left: 350, right: 450 });
      expect(getColumnScrollLeft(container, 2, { offset: undefined, stickyStart: 0 }, 'ltr')).toBe(
        10 + 300
      );
    });

    it('finds virtual header cells by aria-colindex', () => {
      const container = createContainer(
        '<div role="grid"><div role="rowgroup" data-virtual-thead><div role="row"><div role="columnheader" aria-colindex="1"></div><div><div role="columnheader" aria-colindex="7"></div></div></div></div></div>'
      );
      mockRect(container.querySelector('[aria-colindex="7"]')!, { left: 650, right: 750 });
      expect(getColumnScrollLeft(container, 6, { offset: undefined, stickyStart: 0 }, 'ltr')).toBe(
        600
      );
    });

    it('aligns the right edges in rtl', () => {
      const container = createContainer(
        '<table><thead><tr><th>A</th><th>B</th></tr></thead></table>'
      );
      mockRect(container.querySelectorAll('th')[1], { left: -100, right: 0 });
      expect(getColumnScrollLeft(container, 1, { offset: undefined, stickyStart: 0 }, 'rtl')).toBe(
        -450
      );
    });

    it('ignores header cells of a nested grid', () => {
      const container = createContainer(
        '<table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td><div data-dg-scroll><table><thead><tr><th>N1</th><th>N2</th></tr></thead></table></div></td></tr></tbody></table>'
      );
      container.setAttribute('data-dg-scroll', '');
      mockRect(container.querySelectorAll('th')[1], { left: 250, right: 350 });
      expect(getColumnScrollLeft(container, 1, { offset: undefined, stickyStart: 0 }, 'ltr')).toBe(
        200
      );
      expect(
        getColumnScrollLeft(container, 3, { offset: undefined, stickyStart: 0 }, 'ltr')
      ).toBeNull();
    });

    it('keeps the column clear of start-pinned sticky columns', () => {
      const container = createContainer(
        '<table><thead><tr><th>A</th><th>B</th></tr></thead></table>'
      );
      container.scrollLeft = 10;
      mockRect(container.querySelectorAll('th')[1], { left: 350, right: 450 });
      expect(
        getColumnScrollLeft(container, 1, { offset: undefined, stickyStart: 120 }, 'ltr')
      ).toBe(10 + 300 - 120);
      expect(getColumnScrollLeft(container, 5, { offset: 600, stickyStart: 120 }, 'rtl')).toBe(
        -480
      );
      expect(getColumnScrollLeft(container, 5, { offset: 60, stickyStart: 120 }, 'ltr')).toBe(0);
    });

    it('falls back to the column offset when the header cell is not rendered', () => {
      const container = createContainer(
        '<div role="grid"><div role="rowgroup" data-virtual-thead><div role="row"></div></div></div>'
      );
      expect(getColumnScrollLeft(container, 20, { offset: 1200, stickyStart: 0 }, 'ltr')).toBe(
        1200
      );
      expect(getColumnScrollLeft(container, 20, { offset: 1200, stickyStart: 0 }, 'rtl')).toBe(
        -1200
      );
      expect(
        getColumnScrollLeft(container, 20, { offset: undefined, stickyStart: 0 }, 'ltr')
      ).toBeNull();
    });
  });
});
