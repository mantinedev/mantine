import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Diff, DiffProps, DiffStylesNames } from './Diff';

const defaultProps: DiffProps = {
  previousValue: 'hello world',
  currentValue: 'hello there',
};

describe('@mantine/core/Diff', () => {
  tests.itSupportsSystemProps<DiffProps, DiffStylesNames>({
    component: Diff,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/code-highlight/Diff',
    stylesApiSelectors: [
      'root',
      'table',
      'row',
      'lineNumber',
      'content',
      'removedHighlight',
      'addedHighlight',
    ],
  });

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
});
