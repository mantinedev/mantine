import 'dayjs/locale/ru';
import {
  getInlineTimeAxisEventStyle,
  getResourceSlotLabel,
  scrollCellIntoInlineView,
  scrollCellToInlineStart,
} from './resources-view-utils';

function rect(left: number, width: number) {
  return { left, right: left + width, width, top: 0, bottom: 10, height: 10 } as DOMRect;
}

function createViewport(dir: 'ltr' | 'rtl', scrollLeft = 0) {
  const viewport = document.createElement('div');
  viewport.style.direction = dir;
  viewport.getBoundingClientRect = () => rect(0, 500);
  viewport.scrollLeft = scrollLeft;
  let currentScrollLeft = scrollLeft;
  Object.defineProperty(viewport, 'scrollLeft', {
    get: () => currentScrollLeft,
    set: (value: number) => {
      currentScrollLeft = value;
    },
  });
  viewport.scrollTo = ((options: ScrollToOptions) => {
    currentScrollLeft = options.left!;
  }) as any;
  document.body.appendChild(viewport);
  return viewport;
}

function createCell(left: number, width = 50) {
  const cell = document.createElement('button');
  cell.getBoundingClientRect = () => rect(left, width);
  return cell;
}

afterEach(() => {
  document.body.replaceChildren();
});

describe('@mantine/schedule/resources-view-utils', () => {
  it('returns logical inline insets so events follow the text direction', () => {
    expect(getInlineTimeAxisEventStyle({ start: 10, span: 20, minSize: 4 })).toStrictEqual({
      insetInlineStart: '10%',
      insetInlineEnd: '70%',
      minWidth: '4px',
    });
  });

  it('formats the slot label with a localized date and short times', () => {
    const base = {
      prefix: 'Resource time slot',
      resourceLabel: 'Room A',
      startTime: '08:00:00',
      endTime: '09:00:00',
    };

    expect(getResourceSlotLabel({ ...base, date: '2025-01-13 00:00:00', locale: 'en' })).toBe(
      'Resource time slot Room A January 13, 2025 08:00 - 09:00'
    );
    expect(getResourceSlotLabel({ ...base, date: '2025-01-13', locale: 'ru' })).toBe(
      'Resource time slot Room A январь 13, 2025 08:00 - 09:00'
    );
    expect(
      getResourceSlotLabel({ ...base, prefix: undefined, date: '2025-01-13', locale: 'en' })
    ).toBe('Room A January 13, 2025 08:00 - 09:00');
  });

  it('scrolls a cell hidden under the sticky label into view (LTR)', () => {
    const viewport = createViewport('ltr', 300);
    scrollCellIntoInlineView({ viewport, cell: createCell(100), stickyInlineSize: 120 });
    expect(viewport.scrollLeft).toBe(280);
  });

  it('scrolls a cell past the trailing edge into view (LTR)', () => {
    const viewport = createViewport('ltr', 0);
    scrollCellIntoInlineView({ viewport, cell: createCell(480), stickyInlineSize: 120 });
    expect(viewport.scrollLeft).toBe(30);
  });

  it('does not scroll a fully visible cell', () => {
    const viewport = createViewport('ltr', 40);
    scrollCellIntoInlineView({ viewport, cell: createCell(200), stickyInlineSize: 120 });
    expect(viewport.scrollLeft).toBe(40);
  });

  it('scrolls a cell hidden under the sticky label into view (RTL)', () => {
    const viewport = createViewport('rtl', -300);
    scrollCellIntoInlineView({ viewport, cell: createCell(360), stickyInlineSize: 120 });
    expect(viewport.scrollLeft).toBe(-270);
  });

  it('scrolls a cell past the trailing edge into view (RTL)', () => {
    const viewport = createViewport('rtl', 0);
    scrollCellIntoInlineView({ viewport, cell: createCell(-30), stickyInlineSize: 120 });
    expect(viewport.scrollLeft).toBe(-30);
  });

  it('aligns a cell with the inline start of the visible area in both directions', () => {
    const ltr = createViewport('ltr', 0);
    scrollCellToInlineStart({ viewport: ltr, cell: createCell(400), stickyInlineSize: 120 });
    expect(ltr.scrollLeft).toBe(280);

    const rtl = createViewport('rtl', 0);
    scrollCellToInlineStart({ viewport: rtl, cell: createCell(50), stickyInlineSize: 120 });
    expect(rtl.scrollLeft).toBe(-280);
  });

  it('ignores missing viewport or cell', () => {
    const viewport = createViewport('ltr', 10);
    scrollCellIntoInlineView({ viewport, cell: null, stickyInlineSize: 120 });
    scrollCellToInlineStart({ viewport: null, cell: createCell(0), stickyInlineSize: 120 });
    expect(viewport.scrollLeft).toBe(10);
  });
});
