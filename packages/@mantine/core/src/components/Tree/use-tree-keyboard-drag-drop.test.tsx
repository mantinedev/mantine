import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@mantine-tests/core';
import { moveTreeNode, TreeDragDropPayload } from './move-tree-node/move-tree-node';
import { Tree, TreeNodeData, TreeProps } from './Tree';
import { useTree } from './use-tree';

const initialData: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      { label: 'index.ts', value: 'src/index.ts' },
      { label: 'utils.ts', value: 'src/utils.ts' },
    ],
  },
  { label: 'lib', value: 'lib', children: [{ label: 'lib.js', value: 'lib/lib.js' }] },
  { label: 'README.md', value: 'readme' },
];

function getOrder(data: TreeNodeData[], prefix = ''): string[] {
  return data.flatMap((node) => [
    `${prefix}${node.value}`,
    ...getOrder(node.children || [], `${prefix}  `),
  ]);
}

function Demo({
  onDragDrop,
  ...others
}: Partial<TreeProps> & { onDragDrop?: (payload: TreeDragDropPayload) => void }) {
  const [data, setData] = useState(initialData);
  const tree = useTree({ initialExpandedState: { src: true } });

  return (
    <>
      <Tree
        data={data}
        store={tree}
        onDragDrop={(payload) => {
          onDragDrop?.(payload);
          setData((current) => moveTreeNode(current, payload));
        }}
        {...others}
      />
      <pre data-testid="order">{getOrder(data).join('\n')}</pre>
      <button type="button">outside</button>
    </>
  );
}

function getItem(value: string) {
  return screen.getAllByRole('treeitem').find((item) => item.getAttribute('data-value') === value)!;
}

function getLiveRegion() {
  return document.querySelector('[aria-live="assertive"]')!;
}

describe('@mantine/core/Tree/use-tree-keyboard-drag-drop', () => {
  it('moves the focused node with Ctrl + arrow keys and Enter', async () => {
    const spy = jest.fn();
    render(<Demo onDragDrop={spy} />);

    getItem('readme').focus();
    await userEvent.keyboard('{Control>}{ArrowUp}{/Control}');
    expect(getItem('readme')).toHaveAttribute('data-dragging', 'true');
    expect(getLiveRegion()).toHaveTextContent('Picked up README.md.');
    expect(getLiveRegion()).toHaveTextContent('README.md before lib');
    expect(screen.getByText('lib')).toHaveAttribute('data-drag-over', 'before');

    await userEvent.keyboard('{ArrowRight}');
    expect(getLiveRegion()).toHaveTextContent('README.md after utils.ts');
    expect(screen.getByText('lib')).not.toHaveAttribute('data-drag-over');

    await userEvent.keyboard('{ArrowUp}');
    expect(getLiveRegion()).toHaveTextContent('README.md before utils.ts');

    await userEvent.keyboard('{ArrowDown}{ArrowLeft}{Enter}');
    expect(spy).toHaveBeenCalledWith({
      draggedNode: 'readme',
      targetNode: 'lib',
      position: 'before',
    });
    expect(screen.getByTestId('order').textContent).toBe(
      ['src', '  src/index.ts', '  src/utils.ts', 'readme', 'lib', '  lib/lib.js'].join('\n')
    );
    expect(getLiveRegion()).toHaveTextContent('Dropped README.md before lib');
    expect(document.activeElement).toBe(getItem('readme'));
    expect(getItem('readme')).not.toHaveAttribute('data-dragging');
    expect(document.querySelector('[data-drag-over]')).toBeNull();
  });

  it('supports Cmd as the modifier', async () => {
    const spy = jest.fn();
    render(<Demo onDragDrop={spy} />);

    getItem('src/utils.ts').focus();
    await userEvent.keyboard('{Meta>}{ArrowUp}{/Meta}{Enter}');
    expect(spy).toHaveBeenCalledWith({
      draggedNode: 'src/utils.ts',
      targetNode: 'src/index.ts',
      position: 'before',
    });
  });

  it('expands the target and keeps focus on the node dropped inside a collapsed node', async () => {
    render(<Demo />);

    getItem('readme').focus();
    await userEvent.keyboard('{Control>}{ArrowRight}{/Control}{Enter}');
    expect(getItem('lib')).toHaveAttribute('aria-expanded', 'true');
    expect(getItem('readme')).toHaveAttribute('data-level', '2');
    expect(document.activeElement).toBe(getItem('readme'));
  });

  it('cancels the move with Escape', async () => {
    const spy = jest.fn();
    render(<Demo onDragDrop={spy} />);

    getItem('readme').focus();
    await userEvent.keyboard('{Control>}{ArrowUp}{/Control}{ArrowUp}{Escape}');
    expect(spy).not.toHaveBeenCalled();
    expect(getLiveRegion()).toHaveTextContent(
      'Move cancelled, README.md returned to its original position'
    );
    expect(getItem('readme')).not.toHaveAttribute('data-dragging');
    expect(document.querySelector('[data-drag-over]')).toBeNull();

    await userEvent.keyboard('{ArrowUp}');
    expect(document.activeElement).toBe(getItem('lib'));
  });

  it('cancels the move when focus leaves the node', async () => {
    const spy = jest.fn();
    render(<Demo onDragDrop={spy} />);

    getItem('readme').focus();
    await userEvent.keyboard('{Control>}{ArrowUp}{/Control}');
    await userEvent.tab();
    expect(getLiveRegion()).toHaveTextContent('Move cancelled');
    expect(getItem('readme')).not.toHaveAttribute('data-dragging');
  });

  it('does not call onDragDrop when the node is dropped at its original position', async () => {
    const spy = jest.fn();
    render(<Demo onDragDrop={spy} />);

    getItem('readme').focus();
    await userEvent.keyboard('{Control>}{ArrowUp}{/Control}{ArrowDown}{Enter}');
    expect(spy).not.toHaveBeenCalled();
    expect(getLiveRegion()).toHaveTextContent('Move cancelled');
  });

  it('skips positions rejected by allowDrop', async () => {
    const spy = jest.fn();
    render(<Demo onDragDrop={spy} allowDrop={({ position }) => position !== 'before'} />);

    getItem('readme').focus();
    await userEvent.keyboard('{Control>}{ArrowUp}{/Control}');
    expect(getLiveRegion()).toHaveTextContent('README.md after utils.ts');
  });

  it('does not move descendants into the dragged node', async () => {
    const spy = jest.fn();
    render(<Demo onDragDrop={spy} />);

    getItem('src').focus();
    await userEvent.keyboard('{Control>}{ArrowDown}{/Control}');
    expect(getLiveRegion()).toHaveTextContent('src before README.md');
    await userEvent.keyboard('{ArrowRight}');
    expect(getLiveRegion()).toHaveTextContent('src inside lib');
    await userEvent.keyboard('{Enter}');
    expect(spy).toHaveBeenCalledWith({ draggedNode: 'src', targetNode: 'lib', position: 'inside' });
  });

  it('mirrors left and right arrow keys in RTL', async () => {
    render(
      <div dir="rtl" style={{ direction: 'rtl' }}>
        <Demo />
      </div>
    );

    getItem('readme').focus();
    await userEvent.keyboard('{Control>}{ArrowUp}{/Control}{ArrowLeft}');
    expect(getLiveRegion()).toHaveTextContent('README.md after utils.ts');

    await userEvent.keyboard('{ArrowRight}');
    expect(getLiveRegion()).toHaveTextContent('README.md before lib');
  });

  it('does not start a move without a modifier or when drag-and-drop is disabled', async () => {
    const { rerender } = render(<Demo />);

    getItem('readme').focus();
    await userEvent.keyboard('{ArrowUp}');
    expect(document.activeElement).toBe(getItem('lib'));
    expect(getLiveRegion()).toHaveTextContent('');

    rerender(<Tree data={initialData} />);
    getItem('readme').focus();
    await userEvent.keyboard('{Control>}{ArrowUp}{/Control}');
    expect(getItem('readme')).not.toHaveAttribute('data-dragging');
    expect(document.querySelector('[aria-live="assertive"]')).toBeNull();
  });

  it('describes the keyboard move on every node and supports custom labels', () => {
    render(
      <Demo
        labels={{
          dragDropInstructions: 'Move with Ctrl and arrows',
          dragDropStart: (node) => `Started ${node}`,
        }}
      />
    );

    expect(getItem('readme')).toHaveAccessibleDescription('Move with Ctrl and arrows');
    expect(getItem('src')).toHaveAccessibleDescription('Move with Ctrl and arrows');
  });

  it('uses custom announcement labels', async () => {
    render(<Demo labels={{ dragDropStart: (node) => `Started ${node}.` }} />);

    getItem('readme').focus();
    await userEvent.keyboard('{Control>}{ArrowUp}{/Control}');
    expect(getLiveRegion()).toHaveTextContent('Started README.md. README.md before lib');
  });
});
