import { act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render, screen, tests } from '@mantine-tests/core';
import { flattenTreeData } from './flatten-tree-data/flatten-tree-data';
import { FlatTreeNode } from './FlatTreeNode';
import { Tree, TreeNodeData, TreeProps, TreeStylesNames } from './Tree';
import { TreeStore, useTree, UseTreeInput } from './use-tree';

const defaultProps: TreeProps = {
  data: [
    {
      label: 'Tree Node',
      value: 'tree-node',
    },
  ],
};

const complexTreeData: TreeProps['data'] = [
  {
    label: 'Node 1',
    value: 'node-1',
    children: [
      { label: 'Node 1.1', value: 'node-1-1' },
      { label: 'Node 1.2', value: 'node-1-2' },
    ],
  },
  {
    label: 'Node 2',
    value: 'node-2',
    children: [
      { label: 'Node 2.1', value: 'node-2-1' },
      {
        label: 'Node 2.2',
        value: 'node-2-2',
        children: [
          { label: 'Node 2.2.1', value: 'node-2-2-1' },
          { label: 'Node 2.2.2', value: 'node-2-2-2' },
        ],
      },
    ],
  },
  { label: 'Node 3', value: 'node-3' },
];

describe('@mantine/core/Tree', () => {
  tests.itSupportsSystemProps<TreeProps, TreeStylesNames>({
    component: Tree,
    props: defaultProps,
    varsResolver: true,
    polymorphic: true,
    displayName: '@mantine/core/Tree',
    stylesApiSelectors: ['root', 'label', 'node'],
  });

  describe('Keyboard navigation', () => {
    it('handles ArrowDown navigation', async () => {
      render(<Tree data={complexTreeData} />);
      const nodes = screen.getAllByRole('treeitem');

      nodes[0].focus();
      await userEvent.keyboard('{ArrowDown}');

      expect(document.activeElement).toBe(nodes[1]);
    });

    it('handles ArrowUp navigation', async () => {
      render(<Tree data={complexTreeData} />);
      const nodes = screen.getAllByRole('treeitem');

      nodes[2].focus();
      await userEvent.keyboard('{ArrowUp}');

      expect(document.activeElement).toBe(nodes[1]);
    });

    it('skips collapsed kept-mounted nodes during arrow navigation', async () => {
      render(<Tree data={complexTreeData} keepMounted />);
      const nodes = screen.getAllByRole('treeitem');

      nodes[0].focus();
      await userEvent.keyboard('{ArrowDown}');

      expect(document.activeElement).toBe(nodes[1]);
      expect(document.activeElement).toHaveAttribute('data-value', 'node-2');
    });

    it('handles Space to expand/collapse when expandOnSpace is true', async () => {
      const TestComponent = () => {
        const store = useTree();
        return <Tree data={complexTreeData} store={store} expandOnSpace />;
      };

      render(<TestComponent />);
      const nodes = screen.getAllByRole('treeitem');

      expect(screen.queryByText('Node 1.1')).not.toBeInTheDocument();

      nodes[0].focus();
      await userEvent.keyboard(' ');

      expect(screen.getByText('Node 1.1')).toBeInTheDocument();
    });
  });

  describe('Expanded state attributes', () => {
    it('sets aria-expanded on parent nodes only', async () => {
      render(<Tree data={complexTreeData} />);
      const parent = screen.getAllByRole('treeitem')[0];
      const leaf = screen.getAllByRole('treeitem')[2];

      expect(parent).toHaveAttribute('aria-expanded', 'false');
      expect(leaf).not.toHaveAttribute('aria-expanded');

      await userEvent.click(screen.getByText('Node 1'));
      expect(parent).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Arrow left and right', () => {
    it('expands collapsed node, then moves focus to its first child', async () => {
      render(<Tree data={complexTreeData} />);
      const parent = screen.getAllByRole('treeitem')[0];

      parent.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(parent).toHaveAttribute('aria-expanded', 'true');
      expect(document.activeElement).toBe(parent);

      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toHaveAttribute('data-value', 'node-1-1');
    });

    it('moves focus to parent from a child and collapses expanded parent', async () => {
      render(<Tree data={complexTreeData} />);
      const parent = screen.getAllByRole('treeitem')[0];

      parent.focus();
      await userEvent.keyboard('{ArrowRight}{ArrowRight}');
      expect(document.activeElement).toHaveAttribute('data-value', 'node-1-1');

      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(parent);

      await userEvent.keyboard('{ArrowLeft}');
      expect(parent).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByText('Node 1.1')).not.toBeInTheDocument();
    });
  });

  describe('Home and End', () => {
    it('moves focus to the first and last visible nodes', async () => {
      render(<Tree data={complexTreeData} />);
      const nodes = screen.getAllByRole('treeitem');

      nodes[1].focus();
      await userEvent.keyboard('{End}');
      expect(document.activeElement).toHaveAttribute('data-value', 'node-3');

      await userEvent.keyboard('{Home}');
      expect(document.activeElement).toHaveAttribute('data-value', 'node-1');
    });

    it('includes expanded children in the last visible node', async () => {
      const data = complexTreeData.slice(0, 2);
      render(<Tree data={data} />);

      await userEvent.click(screen.getByText('Node 2'));
      screen.getAllByRole('treeitem')[0].focus();
      await userEvent.keyboard('{End}');

      expect(document.activeElement).toHaveAttribute('data-value', 'node-2-2');
    });

    it('does not handle Home and End pressed on an interactive element inside the node', async () => {
      render(
        <Tree
          data={complexTreeData}
          renderNode={({ node, elementProps }) => (
            <div {...elementProps}>
              <input aria-label={String(node.label)} />
            </div>
          )}
        />
      );

      const input = screen.getByRole('textbox', { name: 'Node 3' });
      input.focus();
      await userEvent.keyboard('{Home}');
      expect(input).toHaveFocus();

      await userEvent.keyboard('{End}');
      expect(input).toHaveFocus();
    });
  });

  describe('Enter key', () => {
    it('toggles expanded state of a parent node', async () => {
      render(<Tree data={complexTreeData} />);
      const parent = screen.getAllByRole('treeitem')[0];

      parent.focus();
      await userEvent.keyboard('{Enter}');
      expect(parent).toHaveAttribute('aria-expanded', 'true');

      await userEvent.keyboard('{Enter}');
      expect(parent).toHaveAttribute('aria-expanded', 'false');
    });

    it('selects focused node when selectOnClick is set', async () => {
      render(<Tree data={complexTreeData} selectOnClick expandOnClick={false} />);
      const leaf = screen.getAllByRole('treeitem')[2];

      leaf.focus();
      await userEvent.keyboard('{Enter}');

      expect(leaf).toHaveAttribute('aria-selected', 'true');
    });

    it('does not handle Enter pressed on an interactive element inside the node', async () => {
      render(
        <Tree
          data={complexTreeData}
          renderNode={({ node, elementProps }) => (
            <div {...elementProps}>
              <input aria-label={String(node.label)} />
            </div>
          )}
        />
      );

      screen.getByRole('textbox', { name: 'Node 1' }).focus();
      await userEvent.keyboard('{Enter}');

      expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Range selection', () => {
    function RangeTree({
      treeProps,
      storeInput,
    }: {
      treeProps?: Partial<TreeProps>;
      storeInput?: UseTreeInput;
    }) {
      const store = useTree({ multiple: true, ...storeInput });
      return (
        <div>
          <Tree
            data={complexTreeData}
            store={store}
            selectOnClick
            expandOnClick={false}
            {...treeProps}
          />
          <div data-testid="selected">{JSON.stringify(store.selectedState)}</div>
        </div>
      );
    }

    const getSelected = () => JSON.parse(screen.getByTestId('selected').textContent!);

    it('selects range including collapsed children with Shift + click', async () => {
      render(<RangeTree />);

      await userEvent.click(screen.getByText('Node 1'));
      fireEvent.click(screen.getByText('Node 3'), { shiftKey: true });

      expect(getSelected()).toEqual([
        'node-1',
        'node-1-1',
        'node-1-2',
        'node-2',
        'node-2-1',
        'node-2-2',
        'node-2-2-1',
        'node-2-2-2',
        'node-3',
      ]);
    });

    it('extends selection with Shift + ArrowDown from the anchor node', async () => {
      render(<RangeTree />);

      await userEvent.click(screen.getByText('Node 1'));
      await userEvent.keyboard('{Shift>}{ArrowDown}{ArrowDown}{/Shift}');

      expect(getSelected()).toEqual([
        'node-1',
        'node-1-1',
        'node-1-2',
        'node-2',
        'node-2-1',
        'node-2-2',
        'node-2-2-1',
        'node-2-2-2',
        'node-3',
      ]);
      expect(document.activeElement).toHaveAttribute('data-value', 'node-3');
    });

    it('does not select range with Shift + Arrow when allowRangeSelection is false', async () => {
      render(<RangeTree treeProps={{ allowRangeSelection: false }} />);

      await userEvent.click(screen.getByText('Node 1'));
      await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');

      expect(getSelected()).toEqual(['node-1']);
    });

    it('does not select range with Shift + Arrow in single selection mode', async () => {
      render(<RangeTree storeInput={{ multiple: false }} />);

      await userEvent.click(screen.getByText('Node 1'));
      await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');

      expect(getSelected()).toEqual(['node-1']);
    });

    it('keeps selection when Shift + Arrow is pressed without an anchor node', async () => {
      render(<RangeTree storeInput={{ initialSelectedState: ['node-3'] }} />);

      screen.getAllByRole('treeitem')[0].focus();
      await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');

      expect(getSelected()).toEqual(['node-3']);
    });
  });

  describe('Async children', () => {
    const asyncData: TreeNodeData[] = [
      { label: 'Folder', value: 'folder', hasChildren: true },
      { label: 'File', value: 'file' },
    ];

    function AsyncTree({
      onLoadChildren,
      storeRef,
    }: {
      onLoadChildren: (value: string) => Promise<void>;
      storeRef?: { current: TreeStore | null };
    }) {
      const store = useTree({ onLoadChildren });
      if (storeRef) {
        storeRef.current = store;
      }
      return (
        <Tree
          data={asyncData}
          store={store}
          renderNode={({ node, elementProps, loadError }) => (
            <div {...elementProps}>
              {node.label}
              {loadError && <span>{loadError.message}</span>}
            </div>
          )}
        />
      );
    }

    it('sets aria-busy on the node while its children load', async () => {
      let resolveLoad: () => void = () => {};
      const onLoadChildren = jest.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveLoad = resolve;
          })
      );

      render(<AsyncTree onLoadChildren={onLoadChildren} />);
      const folder = screen.getAllByRole('treeitem')[0];

      expect(folder).toHaveAttribute('aria-expanded', 'false');
      expect(folder).not.toHaveAttribute('aria-busy');

      await userEvent.click(screen.getByText('Folder'));

      expect(onLoadChildren).toHaveBeenCalledWith('folder');
      expect(folder).toHaveAttribute('aria-busy', 'true');

      await act(async () => resolveLoad());

      expect(folder).not.toHaveAttribute('aria-busy');
    });

    it('exposes load error and re-fetches after invalidateNode', async () => {
      const onLoadChildren = jest
        .fn<Promise<void>, [string]>()
        .mockRejectedValueOnce(new Error('Load failed'))
        .mockResolvedValueOnce(undefined);
      const storeRef: { current: TreeStore | null } = { current: null };

      render(<AsyncTree onLoadChildren={onLoadChildren} storeRef={storeRef} />);

      await userEvent.click(screen.getByText('Folder'));
      expect(await screen.findByText('Load failed')).toBeInTheDocument();

      await userEvent.click(screen.getByText('Folder'));
      act(() => storeRef.current!.invalidateNode('folder'));
      expect(screen.queryByText('Load failed')).not.toBeInTheDocument();

      await userEvent.click(screen.getByText('Folder'));
      expect(onLoadChildren).toHaveBeenCalledTimes(2);
    });
  });

  describe('FlatTreeNode', () => {
    function FlatTree({
      selectOnClick,
      renderNode,
    }: {
      selectOnClick?: boolean;
      renderNode?: TreeProps['renderNode'];
    }) {
      const store = useTree();
      const items = flattenTreeData(complexTreeData, store.expandedState);
      return (
        <div role="tree" data-tree-root>
          {items.map((item, index) => (
            <FlatTreeNode
              key={item.node.value}
              {...item}
              store={store}
              selectOnClick={selectOnClick}
              renderNode={renderNode}
              tabIndex={index === 0 ? 0 : -1}
            />
          ))}
        </div>
      );
    }

    it('supports Home and End keys', async () => {
      render(<FlatTree />);
      const nodes = screen.getAllByRole('treeitem');

      nodes[1].focus();
      await userEvent.keyboard('{End}');
      expect(document.activeElement).toHaveAttribute('data-value', 'node-3');

      await userEvent.keyboard('{Home}');
      expect(document.activeElement).toHaveAttribute('data-value', 'node-1');
    });

    it('does not handle Home and End pressed on an interactive element inside the node', async () => {
      render(
        <FlatTree
          renderNode={({ node, elementProps }) => (
            <div {...elementProps}>
              <input aria-label={String(node.label)} />
            </div>
          )}
        />
      );

      const input = screen.getByRole('textbox', { name: 'Node 3' });
      input.focus();
      await userEvent.keyboard('{Home}');
      expect(input).toHaveFocus();

      await userEvent.keyboard('{End}');
      expect(input).toHaveFocus();
    });

    it('expands parent and selects node on Enter', async () => {
      render(<FlatTree selectOnClick />);
      const parent = screen.getAllByRole('treeitem')[0];

      parent.focus();
      await userEvent.keyboard('{Enter}');

      const updated = screen.getAllByRole('treeitem')[0];
      expect(updated).toHaveAttribute('aria-expanded', 'true');
      expect(updated).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByText('Node 1.1')).toBeInTheDocument();
    });
  });

  describe('Click to expand', () => {
    it('expands node on click when expandOnClick is true', async () => {
      render(<Tree data={complexTreeData} expandOnClick />);

      expect(screen.queryByText('Node 1.1')).not.toBeInTheDocument();

      await userEvent.click(screen.getByText('Node 1'));

      expect(screen.getByText('Node 1.1')).toBeInTheDocument();
    });

    it('does not expand node on click when expandOnClick is false', async () => {
      render(<Tree data={complexTreeData} expandOnClick={false} />);

      await userEvent.click(screen.getByText('Node 1'));
      expect(screen.queryByText('Node 1.1')).not.toBeInTheDocument();
    });
  });

  describe('Selection', () => {
    it('selects node on click when selectOnClick is true', async () => {
      const TestComponent = () => {
        const store = useTree();
        return <Tree data={complexTreeData} store={store} selectOnClick />;
      };

      render(<TestComponent />);
      await userEvent.click(screen.getByText('Node 1'));

      const nodes = screen.getAllByRole('treeitem');
      expect(nodes[0]).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Checked state', () => {
    it('checks node on space when checkOnSpace is true', async () => {
      const TestComponent = () => {
        const store = useTree();
        return (
          <div>
            <Tree data={complexTreeData} store={store} checkOnSpace />
            <div data-testid="checked">{JSON.stringify(store.checkedState)}</div>
          </div>
        );
      };

      render(<TestComponent />);
      const nodes = screen.getAllByRole('treeitem');

      nodes[0].focus();
      await userEvent.keyboard(' ');

      const checkedState = JSON.parse(screen.getByTestId('checked').textContent!);
      expect(checkedState).toContain('node-1-1');
      expect(checkedState).toContain('node-1-2');
    });
  });

  describe('Outside click', () => {
    it('clears selection on outside click when clearSelectionOnOutsideClick is true', async () => {
      const TestComponent = () => {
        const store = useTree();
        return (
          <div>
            <div data-testid="outside">Outside</div>
            <Tree data={complexTreeData} store={store} selectOnClick clearSelectionOnOutsideClick />
          </div>
        );
      };

      render(<TestComponent />);
      await userEvent.click(screen.getByText('Node 1'));

      const nodes = screen.getAllByRole('treeitem');
      expect(nodes[0]).toHaveAttribute('aria-selected', 'true');

      await userEvent.click(screen.getByTestId('outside'));
      expect(nodes[0]).not.toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Custom renderNode', () => {
    it('renders custom node content using renderNode prop', () => {
      const renderNode = jest.fn(({ node }) => (
        <div data-testid={`custom-${node.value}`}>{node.label}</div>
      ));

      render(<Tree data={complexTreeData} renderNode={renderNode} />);

      expect(screen.getByTestId('custom-node-1')).toBeInTheDocument();
      expect(renderNode).toHaveBeenCalled();
    });

    it('passes correct payload to renderNode', () => {
      const renderNode = jest.fn(({ node }) => <div>{node.label}</div>);

      render(<Tree data={complexTreeData} renderNode={renderNode} />);

      expect(renderNode).toHaveBeenCalledWith(
        expect.objectContaining({
          node: expect.any(Object),
          level: expect.any(Number),
          expanded: expect.any(Boolean),
          hasChildren: expect.any(Boolean),
          selected: expect.any(Boolean),
          store: expect.any(Object),
          elementProps: expect.any(Object),
        })
      );
    });

    it('passes hasChildren based on non-empty children/hasChildren flag', () => {
      const renderNode = jest.fn(({ node }) => <div>{node.label}</div>);

      const getHasChildren = (value: string) =>
        renderNode.mock.calls.find(([payload]) => payload.node.value === value)?.[0].hasChildren;

      render(
        <Tree
          data={[
            {
              label: 'Populated',
              value: 'populated',
              children: [{ label: 'Child', value: 'child' }],
            },
            { label: 'Empty', value: 'empty', children: [] },
            { label: 'Empty explicit', value: 'empty-explicit', children: [], hasChildren: false },
            { label: 'Async', value: 'async', hasChildren: true },
            { label: 'Leaf', value: 'leaf' },
          ]}
          renderNode={renderNode}
        />
      );

      expect(getHasChildren('populated')).toBe(true);
      expect(getHasChildren('empty')).toBe(false);
      expect(getHasChildren('empty-explicit')).toBe(false);
      expect(getHasChildren('async')).toBe(true);
      expect(getHasChildren('leaf')).toBe(false);
    });
  });

  describe('Drag and drop', () => {
    it('makes node draggable by default when onDragDrop is provided', () => {
      render(
        <Tree
          data={complexTreeData}
          onDragDrop={() => {}}
          renderNode={({ node, elementProps }) => <div {...elementProps}>{node.label}</div>}
        />
      );

      const label = screen.getByText('Node 1');
      expect(label).toHaveAttribute('draggable', 'true');
    });

    it('keeps node non-draggable by default when withDragHandle is set', () => {
      render(
        <Tree
          data={complexTreeData}
          withDragHandle
          onDragDrop={() => {}}
          renderNode={({ node, elementProps, dragHandleProps }) => (
            <div {...elementProps}>
              <span data-testid={`handle-${node.value}`} {...dragHandleProps}>
                ::
              </span>
              <span>{node.label}</span>
            </div>
          )}
        />
      );

      const label = screen.getByText('Node 1').parentElement!;
      expect(label).toHaveAttribute('draggable', 'false');
    });

    it('exposes dragHandleProps in renderNode payload when withDragHandle is true', () => {
      const renderNode = jest.fn(({ node, elementProps }) => (
        <div {...elementProps}>{node.label}</div>
      ));

      render(
        <Tree data={complexTreeData} withDragHandle onDragDrop={() => {}} renderNode={renderNode} />
      );

      expect(renderNode).toHaveBeenCalledWith(
        expect.objectContaining({
          dragHandleProps: expect.objectContaining({
            onMouseDown: expect.any(Function),
          }),
        })
      );
    });

    it('passes undefined dragHandleProps when withDragHandle is not set', () => {
      const renderNode = jest.fn(({ node, elementProps }) => (
        <div {...elementProps}>{node.label}</div>
      ));

      render(<Tree data={complexTreeData} onDragDrop={() => {}} renderNode={renderNode} />);

      expect(renderNode).toHaveBeenCalledWith(
        expect.objectContaining({ dragHandleProps: undefined })
      );
    });

    it('calls allowDrop to gate drop behavior', () => {
      const allowDrop = jest.fn(() => false);
      const onDragDrop = jest.fn();
      const dataTransfer = { setData: jest.fn(), effectAllowed: '', dropEffect: '' };

      render(
        <Tree
          data={complexTreeData}
          allowDrop={allowDrop}
          onDragDrop={onDragDrop}
          renderNode={({ node, elementProps }) => <div {...elementProps}>{node.label}</div>}
        />
      );

      const source = screen.getByText('Node 1');
      const target = screen.getByText('Node 3');

      fireEvent.dragStart(source, { dataTransfer });
      fireEvent.dragOver(target, { dataTransfer, clientY: 0 });

      expect(allowDrop).toHaveBeenCalledWith(
        expect.objectContaining({
          draggedNode: 'node-1',
          targetNode: 'node-3',
        })
      );
      expect(target).not.toHaveAttribute('data-drag-over');

      fireEvent.drop(target, { dataTransfer });
      expect(onDragDrop).not.toHaveBeenCalled();
    });

    it('permits drop when allowDrop returns true', () => {
      const allowDrop = jest.fn(() => true);
      const onDragDrop = jest.fn();
      const dataTransfer = { setData: jest.fn(), effectAllowed: '', dropEffect: '' };

      render(
        <Tree
          data={complexTreeData}
          allowDrop={allowDrop}
          onDragDrop={onDragDrop}
          renderNode={({ node, elementProps }) => <div {...elementProps}>{node.label}</div>}
        />
      );

      const source = screen.getByText('Node 1');
      const target = screen.getByText('Node 3');

      fireEvent.dragStart(source, { dataTransfer });
      fireEvent.dragOver(target, { dataTransfer, clientY: 0 });
      fireEvent.drop(target, { dataTransfer });

      expect(onDragDrop).toHaveBeenCalledWith(
        expect.objectContaining({
          draggedNode: 'node-1',
          targetNode: 'node-3',
        })
      );
    });
  });
});
