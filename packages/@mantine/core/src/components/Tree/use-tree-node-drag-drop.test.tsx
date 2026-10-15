import { render, screen } from '@mantine-tests/core';
import { Tree, TreeNodeData } from './Tree';

const data: TreeNodeData[] = [
  { label: 'Folder', value: 'folder', children: [{ label: 'File', value: 'folder/file' }] },
  { label: 'Readme', value: 'readme' },
];

describe('@mantine/core/Tree/use-tree-node-drag-drop', () => {
  it('sets role="none" on draggable labels so the treeitem keeps its name', () => {
    render(<Tree data={data} onDragDrop={() => {}} />);
    const label = screen.getByText('Readme');
    expect(label).toHaveAttribute('draggable', 'true');
    expect(label).toHaveAttribute('role', 'none');
  });

  it('sets role="none" on labels when withDragHandle is set', () => {
    render(
      <Tree
        data={data}
        withDragHandle
        onDragDrop={() => {}}
        renderNode={({ node, elementProps }) => <div {...elementProps}>{node.label}</div>}
      />
    );
    expect(screen.getByText('Readme')).toHaveAttribute('role', 'none');
  });

  it('does not set role on labels when drag-and-drop is disabled', () => {
    render(<Tree data={data} />);
    expect(screen.getByText('Readme')).not.toHaveAttribute('role');
    expect(screen.getByText('Readme')).not.toHaveAttribute('draggable');
  });

  it('removes the drag handle from the tab order and the accessibility tree', () => {
    render(
      <Tree
        data={data}
        withDragHandle
        onDragDrop={() => {}}
        renderNode={({ node, elementProps, dragHandleProps }) => (
          <div {...elementProps}>
            <button type="button" data-testid={`handle-${node.value}`} {...dragHandleProps}>
              ::
            </button>
            <span>{node.label}</span>
          </div>
        )}
      />
    );

    const handle = screen.getByTestId('handle-readme');
    expect(handle).toHaveAttribute('tabindex', '-1');
    expect(handle).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('treeitem', { name: 'Readme' })).toBeInTheDocument();
  });
});
