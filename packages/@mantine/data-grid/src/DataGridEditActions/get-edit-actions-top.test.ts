import { getEditActionsTop, getVisibleRowsArea } from './get-edit-actions-top';

const base = { viewportTop: 40, viewportBottom: 400, actionsHeight: 36, offset: 4 };

describe('@mantine/data-grid/getEditActionsTop', () => {
  it('places the actions below the row when they fit in the viewport', () => {
    expect(getEditActionsTop({ ...base, rowTop: 40, rowBottom: 72 })).toBe(76);
  });

  it('places the actions above the row when they do not fit below', () => {
    expect(getEditActionsTop({ ...base, rowTop: 368, rowBottom: 400 })).toBe(328);
  });

  it('does not count the area below the viewport as fitting', () => {
    expect(getEditActionsTop({ ...base, rowTop: 340, rowBottom: 372 })).toBe(300);
  });

  it('clamps the actions inside the viewport when they fit neither below nor above', () => {
    expect(getEditActionsTop({ ...base, viewportBottom: 110, rowTop: 50, rowBottom: 90 })).toBe(74);
    expect(getEditActionsTop({ ...base, viewportBottom: 60, rowTop: 40, rowBottom: 60 })).toBe(40);
  });

  it('keeps the actions at the viewport bottom edge for a row taller than the viewport', () => {
    expect(getEditActionsTop({ ...base, rowTop: 20, rowBottom: 420 })).toBe(364);
  });

  it('hides the actions when the row is scrolled out of the viewport', () => {
    expect(getEditActionsTop({ ...base, rowTop: 0, rowBottom: 40 })).toBeNull();
    expect(getEditActionsTop({ ...base, rowTop: 400, rowBottom: 432 })).toBeNull();
  });

  it('places the actions below the row when the viewport has no measurable height', () => {
    expect(
      getEditActionsTop({ ...base, viewportTop: 0, viewportBottom: 0, rowTop: 0, rowBottom: 0 })
    ).toBe(4);
  });
});

function mockRect(element: HTMLElement, top: number, bottom: number) {
  element.getBoundingClientRect = () =>
    ({ top, bottom, left: 0, right: 100, width: 100, height: bottom - top }) as DOMRect;
}

function createViewport(markup: string) {
  const root = document.createElement('div');
  root.innerHTML = `<div data-dg-scroll>${markup}</div>`;
  const viewport = root.firstElementChild as HTMLElement;
  mockRect(root, 0, 500);
  mockRect(viewport, 0, 400);
  return { root, viewport };
}

describe('@mantine/data-grid/getVisibleRowsArea', () => {
  it('excludes the sticky header and the sticky virtual footer', () => {
    const { root, viewport } = createViewport(
      '<div data-virtual-thead></div><div role="rowgroup"></div><div data-virtual-tfoot></div>'
    );
    mockRect(viewport.querySelector('[data-virtual-thead]')!, 0, 40);
    mockRect(viewport.querySelector('[data-virtual-tfoot]')!, 360, 400);

    expect(getVisibleRowsArea(root, viewport)).toEqual({ top: 40, bottom: 360 });
  });

  it('excludes the sticky top-pinned rows below the header', () => {
    const { root, viewport } = createViewport(
      '<table><thead></thead><tbody data-pinned="top"></tbody><tbody></tbody></table>'
    );
    mockRect(viewport.querySelector('thead')!, 0, 40);
    mockRect(viewport.querySelector('tbody[data-pinned="top"]')!, 40, 104);

    expect(getVisibleRowsArea(root, viewport)).toEqual({ top: 104, bottom: 400 });
  });

  it('keeps the top-pinned rows visible for a row inside the pinned section', () => {
    const { root, viewport } = createViewport(
      '<table><thead></thead><tbody data-pinned="top"><tr data-row-id="p"></tr></tbody><tbody></tbody></table>'
    );
    mockRect(viewport.querySelector('thead')!, 0, 40);
    mockRect(viewport.querySelector('tbody[data-pinned="top"]')!, 40, 104);
    const row = viewport.querySelector<HTMLElement>('[data-row-id="p"]')!;
    const area = getVisibleRowsArea(root, viewport, row);

    expect(area).toEqual({ top: 40, bottom: 400 });
    expect(
      getEditActionsTop({
        ...base,
        viewportTop: area.top,
        viewportBottom: area.bottom,
        rowTop: 40,
        rowBottom: 72,
      })
    ).toBe(76);
  });

  it('keeps excluding the top-pinned rows for a center row', () => {
    const { root, viewport } = createViewport(
      '<table><thead></thead><tbody data-pinned="top"></tbody><tbody><tr data-row-id="c"></tr></tbody></table>'
    );
    mockRect(viewport.querySelector('thead')!, 0, 40);
    mockRect(viewport.querySelector('tbody[data-pinned="top"]')!, 40, 104);
    const row = viewport.querySelector<HTMLElement>('[data-row-id="c"]')!;

    expect(getVisibleRowsArea(root, viewport, row)).toEqual({ top: 104, bottom: 400 });
  });

  it('ignores a header scrolled above the viewport', () => {
    const { root, viewport } = createViewport('<table><thead></thead><tbody></tbody></table>');
    mockRect(viewport.querySelector('thead')!, -80, -40);

    expect(getVisibleRowsArea(root, viewport)).toEqual({ top: 0, bottom: 400 });
  });

  it('excludes the horizontal scrollbar from the visible area', () => {
    const { root, viewport } = createViewport('<table><thead></thead><tbody></tbody></table>');
    mockRect(viewport.querySelector('thead')!, 0, 40);
    Object.defineProperty(viewport, 'clientHeight', { value: 385 });

    expect(getVisibleRowsArea(root, viewport)).toEqual({ top: 40, bottom: 385 });
  });

  it('uses the full viewport bottom when there is no virtual footer', () => {
    const { root, viewport } = createViewport('<table><thead></thead><tbody></tbody></table>');
    mockRect(viewport.querySelector('thead')!, 0, 40);

    expect(getVisibleRowsArea(root, viewport)).toEqual({ top: 40, bottom: 400 });
  });

  it('ignores the footer of a nested grid', () => {
    const { root, viewport } = createViewport(
      '<div data-virtual-thead></div><div data-dg-scroll><div data-virtual-tfoot></div></div>'
    );
    mockRect(viewport.querySelector('[data-virtual-thead]')!, 0, 40);
    mockRect(viewport.querySelector('[data-virtual-tfoot]')!, 100, 140);

    expect(getVisibleRowsArea(root, viewport)).toEqual({ top: 40, bottom: 400 });
  });

  it('hides the actions of a row hidden under the sticky footer', () => {
    const { root, viewport } = createViewport(
      '<div data-virtual-thead></div><div data-virtual-tfoot></div>'
    );
    mockRect(viewport.querySelector('[data-virtual-thead]')!, 0, 40);
    mockRect(viewport.querySelector('[data-virtual-tfoot]')!, 360, 400);
    const area = getVisibleRowsArea(root, viewport);

    expect(
      getEditActionsTop({
        ...base,
        viewportTop: area.top,
        viewportBottom: area.bottom,
        rowTop: 364,
        rowBottom: 396,
      })
    ).toBeNull();
    expect(
      getEditActionsTop({
        ...base,
        viewportTop: area.top,
        viewportBottom: area.bottom,
        rowTop: 320,
        rowBottom: 352,
      })
    ).toBe(280);
  });

  it('excludes the sticky bottom-pinned rows for a center row', () => {
    const { root, viewport } = createViewport(
      '<table><thead></thead><tbody><tr data-row-id="c"></tr></tbody><tbody data-pinned="bottom"></tbody></table>'
    );
    mockRect(viewport.querySelector('thead')!, 0, 40);
    mockRect(viewport.querySelector('tbody[data-pinned="bottom"]')!, 336, 400);
    const row = viewport.querySelector<HTMLElement>('[data-row-id="c"]')!;
    const area = getVisibleRowsArea(root, viewport, row);

    expect(area).toEqual({ top: 40, bottom: 336 });
    expect(
      getEditActionsTop({
        ...base,
        viewportTop: area.top,
        viewportBottom: area.bottom,
        rowTop: 340,
        rowBottom: 372,
      })
    ).toBeNull();
    expect(
      getEditActionsTop({
        ...base,
        viewportTop: area.top,
        viewportBottom: area.bottom,
        rowTop: 296,
        rowBottom: 328,
      })
    ).toBe(256);
  });

  it('keeps the bottom-pinned rows visible for a pinned row', () => {
    const { root, viewport } = createViewport(
      '<table><thead></thead><tbody></tbody><tbody data-pinned="bottom"><tr data-row-id="p"></tr></tbody></table>'
    );
    mockRect(viewport.querySelector('thead')!, 0, 40);
    mockRect(viewport.querySelector('tbody[data-pinned="bottom"]')!, 336, 400);
    const row = viewport.querySelector<HTMLElement>('[data-row-id="p"]')!;

    expect(getVisibleRowsArea(root, viewport, row)).toEqual({ top: 40, bottom: 400 });
  });

  it('ignores the bottom-pinned rows of a nested grid', () => {
    const { root, viewport } = createViewport(
      '<table><thead></thead><tbody><tr><td><div data-dg-scroll><table><tbody data-pinned="bottom"></tbody></table></div></td></tr></tbody></table>'
    );
    mockRect(viewport.querySelector('thead')!, 0, 40);
    mockRect(viewport.querySelector('tbody[data-pinned="bottom"]')!, 100, 140);

    expect(getVisibleRowsArea(root, viewport)).toEqual({ top: 40, bottom: 400 });
  });

  it('uses the root area when there is no viewport', () => {
    const root = document.createElement('div');
    mockRect(root, 10, 300);

    expect(getVisibleRowsArea(root, null)).toEqual({ top: 10, bottom: 300 });
  });
});
