import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Diff, DiffProps, DiffStylesNames } from './Diff';

const defaultProps: DiffProps = {
  previousValue: 'a\nb\nhello world\nc\nd',
  currentValue: 'a\nb\nhello there\nc\nd',
  contextLines: 1,
};

function getContentCells(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(`.${Diff.classes.content}`));
}

function getRowTexts(container: HTMLElement) {
  return Array.from(container.querySelectorAll('tr')).map((row) =>
    Array.from(row.querySelectorAll('td'))
      .map((cell) => cell.textContent)
      .join('|')
  );
}

describe('@mantine/code-highlight/Diff', () => {
  tests.itSupportsSystemProps<DiffProps, DiffStylesNames>({
    component: Diff,
    props: { ...defaultProps, mode: 'split' },
    varsResolver: true,
    displayName: '@mantine/code-highlight/Diff',
    stylesApiSelectors: [
      'root',
      'table',
      'row',
      'lineNumber',
      'content',
      'addedHighlight',
      'removedHighlight',
      'expandControl',
      'splitDivider',
      'changeMarker',
    ],
  });

  tests.itSupportsStylesApi<DiffProps, DiffStylesNames>(
    {
      component: Diff,
      props: { ...defaultProps, mode: 'split' },
      selectors: ['addedLine', 'removedLine', 'unchangedLine'],
      providerName: 'Diff',
    },
    'supports line styles api'
  );

  it('renders added and removed lines', () => {
    const { container } = render(
      <Diff previousValue={'line1\nold\nline3'} currentValue={'line1\nnew\nline3'} />
    );
    const removedCells = container.querySelectorAll(`.${Diff.classes.removedLine}`);
    const addedCells = container.querySelectorAll(`.${Diff.classes.addedLine}`);
    expect(removedCells.length).toBeGreaterThan(0);
    expect(addedCells.length).toBeGreaterThan(0);
  });

  it('renders identical strings without added/removed lines', () => {
    const { container } = render(<Diff previousValue="same" currentValue="same" />);
    expect(container.querySelectorAll(`.${Diff.classes.removedLine}`)).toHaveLength(0);
    expect(container.querySelectorAll(`.${Diff.classes.addedLine}`)).toHaveLength(0);
  });

  it('renders split mode with splitDivider', () => {
    const { container } = render(<Diff previousValue="old" currentValue="new" mode="split" />);
    expect(container.querySelectorAll(`.${Diff.classes.splitDivider}`).length).toBeGreaterThan(0);
  });

  it('does not render splitDivider in unified mode', () => {
    const { container } = render(<Diff previousValue="old" currentValue="new" mode="unified" />);
    expect(container.querySelectorAll(`.${Diff.classes.splitDivider}`)).toHaveLength(0);
  });

  it('renders inline highlights with diffMethod="words"', () => {
    const { container } = render(
      <Diff previousValue="the brown fox" currentValue="the red fox" diffMethod="words" />
    );
    expect(container.querySelectorAll(`.${Diff.classes.addedHighlight}`).length).toBeGreaterThan(0);
    expect(container.querySelectorAll(`.${Diff.classes.removedHighlight}`).length).toBeGreaterThan(
      0
    );
  });

  it('does not render inline highlights with diffMethod="lines"', () => {
    const { container } = render(
      <Diff previousValue="old line" currentValue="new line" diffMethod="lines" />
    );
    expect(container.querySelectorAll(`.${Diff.classes.addedHighlight}`)).toHaveLength(0);
    expect(container.querySelectorAll(`.${Diff.classes.removedHighlight}`)).toHaveLength(0);
  });

  it('hides line numbers when withLineNumbers is false', () => {
    const { container } = render(
      <Diff previousValue="old" currentValue="new" withLineNumbers={false} />
    );
    expect(container.querySelectorAll(`.${Diff.classes.lineNumber}`)).toHaveLength(0);
  });

  it('shows line numbers by default', () => {
    const { container } = render(<Diff previousValue="old" currentValue="new" />);
    expect(container.querySelectorAll(`.${Diff.classes.lineNumber}`).length).toBeGreaterThan(0);
  });

  it('shows expand button when contextLines collapses unchanged lines', () => {
    const prev = 'line1\nline2\nline3\nline4\nline5\nline6\nline7\nchanged-old\nline9';
    const next = 'line1\nline2\nline3\nline4\nline5\nline6\nline7\nchanged-new\nline9';
    render(<Diff previousValue={prev} currentValue={next} contextLines={1} />);
    const buttons = screen.getAllByRole('button', { name: /hidden line/i });
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('expands hidden lines when expand button is clicked', async () => {
    const prev = 'line1\nline2\nline3\nline4\nline5\nchanged-old\nline7';
    const next = 'line1\nline2\nline3\nline4\nline5\nchanged-new\nline7';
    const { container } = render(
      <Diff previousValue={prev} currentValue={next} contextLines={0} />
    );
    const rowsBefore = container.querySelectorAll('tr').length;
    const buttons = screen.getAllByRole('button', { name: /hidden line/i });
    await userEvent.click(buttons[0]);
    const rowsAfter = container.querySelectorAll('tr').length;
    expect(rowsAfter).toBeGreaterThan(rowsBefore);
  });

  it('sets CSS variables for custom colors', () => {
    const { container } = render(
      <Diff previousValue="old" currentValue="new" addColor="#00ff00" removeColor="#ff0000" />
    );
    const root = container.querySelector(`.${Diff.classes.root}`) as HTMLElement;
    const styleAttr = root.getAttribute('style') || '';
    expect(styleAttr).toContain('--diff-add-color');
    expect(styleAttr).toContain('--diff-remove-color');
  });

  it('applies line selectors through the Styles API', () => {
    const { container } = render(
      <Diff
        previousValue={'a\nold'}
        currentValue={'a\nnew'}
        unstyled
        classNames={{
          addedLine: 'custom-added',
          removedLine: 'custom-removed',
          unchangedLine: 'custom-unchanged',
        }}
      />
    );
    expect(container.querySelectorAll(`.${Diff.classes.addedLine}`)).toHaveLength(0);
    expect(container.querySelectorAll(`.${Diff.classes.removedLine}`)).toHaveLength(0);
    expect(container.querySelectorAll('.custom-added')).toHaveLength(3);
    expect(container.querySelectorAll('.custom-removed')).toHaveLength(3);
    expect(container.querySelectorAll('.custom-unchanged')).toHaveLength(3);
  });

  it('adds visually hidden change markers to added and removed lines', () => {
    const { container } = render(
      <Diff previousValue={'a\nb'} currentValue={'a\nB'} withLineNumbers={false} />
    );
    const cells = getContentCells(container);
    expect(cells.map((cell) => cell.textContent)).toEqual(['a', '- b', '+ B']);
    expect(cells[0].querySelector(`.${Diff.classes.changeMarker}`)).toBeNull();
    expect(cells[1].querySelector(`.${Diff.classes.changeMarker}`)).toHaveTextContent('-');
    expect(cells[2].querySelector(`.${Diff.classes.changeMarker}`)).toHaveTextContent('+');
  });

  it('renders change blocks in git order in unified mode', () => {
    const { container } = render(
      <Diff
        previousValue={'foo = 1\nbar = 2'}
        currentValue={'foo = 10\nbar = 20'}
        withLineNumbers={false}
      />
    );
    expect(getRowTexts(container)).toEqual(['- foo = 1', '- bar = 2', '+ foo = 10', '+ bar = 20']);
    expect(container.querySelectorAll(`.${Diff.classes.addedHighlight}`).length).toBeGreaterThan(0);
  });

  it('pairs removed and added lines positionally in split mode', () => {
    const { container } = render(
      <Diff
        previousValue={'line 1\nold a\nold b\nold c\nline 5'}
        currentValue={'line 1\nnew x\nline 5'}
        mode="split"
      />
    );
    expect(getRowTexts(container)).toEqual([
      '1|line 1||1|line 1',
      '2|- old a||2|+ new x',
      '3|- old b|||',
      '4|- old c|||',
      '5|line 5||3|line 5',
    ]);
  });

  it('pairs lines on the same row in split mode with diffMethod="lines"', () => {
    const { container } = render(
      <Diff previousValue="old" currentValue="new" mode="split" diffMethod="lines" />
    );
    expect(getRowTexts(container)).toEqual(['1|- old||1|+ new']);
    expect(container.querySelectorAll('mark')).toHaveLength(0);
  });

  it('renders inline highlights only for similar pairs', () => {
    const { container } = render(
      <Diff
        previousValue={'const foo = "hello";\nreturn ('}
        currentValue={'const foo = "hi";\n<MyComponent xyz={true} />'}
        mode="split"
      />
    );
    const rows = container.querySelectorAll('tr');
    expect(rows).toHaveLength(2);
    expect(rows[0].querySelectorAll('mark').length).toBeGreaterThan(0);
    expect(rows[1].querySelectorAll('mark')).toHaveLength(0);
  });

  it('does not render line terminators with CRLF input', () => {
    const { container } = render(
      <Diff previousValue={'a\r\nfoo bar\r\n'} currentValue={'a\r\nfoo baz'} />
    );
    getContentCells(container).forEach((cell) => expect(cell.textContent).not.toMatch(/[\r\n]/));
    const marks = Array.from(container.querySelectorAll('mark'));
    expect(marks.length).toBeGreaterThan(0);
    marks.forEach((mark) => expect(mark.textContent).not.toMatch(/\r/));
  });

  it('keeps a line box on the empty side of a whitespace-only change in unified mode', () => {
    const { container } = render(
      <Diff previousValue={'a\n  \nb'} currentValue={'a\n\nb'} withLineNumbers={false} />
    );
    expect(getRowTexts(container)).toEqual(['a', '-   ', '+ \n', 'b']);
  });

  it('keeps a line box on the empty side of a whitespace-only change in split mode', () => {
    const { container } = render(
      <Diff previousValue={'before\n\nafter'} currentValue={'before\n \nafter'} mode="split" />
    );
    expect(getRowTexts(container)).toEqual([
      '1|before||1|before',
      '2|- \n||2|+  ',
      '3|after||3|after',
    ]);
  });

  it('uses singular label for one hidden line', () => {
    render(<Diff previousValue={'a\nb\nc'} currentValue={'a\nb\nC'} contextLines={1} />);
    expect(screen.getByRole('button', { name: 'Show 1 hidden line' })).toBeInTheDocument();
  });

  it('collapses sections on the first render after values change', async () => {
    const prev = 'l1\nl2\nl3\nl4\nold\nl6';
    const next = 'l1\nl2\nl3\nl4\nnew\nl6';
    const expandLabel = jest.fn((count: number) => `Show ${count}`);
    const { container, rerender } = render(
      <Diff previousValue={prev} currentValue={next} contextLines={1} expandLabel={expandLabel} />
    );
    await userEvent.click(screen.getByRole('button', { name: 'Show 3' }));
    expect(screen.queryAllByRole('button')).toHaveLength(0);

    expandLabel.mockClear();
    rerender(
      <>
        <Diff
          previousValue={`${prev}\nextra`}
          currentValue={`${next}\nextra`}
          contextLines={1}
          expandLabel={expandLabel}
        />
      </>
    );
    expect(expandLabel.mock.calls[0]).toEqual([3]);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(container.querySelectorAll('tr')).toHaveLength(6);
  });

  it('moves focus to the first revealed row after expanding', async () => {
    const prev = 'l1\nl2\nl3\nold\nl5\nl6\nl7';
    const next = 'l1\nl2\nl3\nnew\nl5\nl6\nl7';
    const { container } = render(
      <Diff previousValue={prev} currentValue={next} contextLines={0} />
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);

    await userEvent.click(buttons[0]);
    const table = container.querySelector('table')!;
    expect(table.contains(document.activeElement)).toBe(true);
    expect(document.activeElement!.tagName).toBe('TR');
    expect(document.activeElement).toHaveTextContent('l1');

    await userEvent.click(screen.getByRole('button'));
    expect(document.activeElement).toHaveTextContent('l5');
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(container.querySelectorAll('tr')).toHaveLength(8);
  });
});
