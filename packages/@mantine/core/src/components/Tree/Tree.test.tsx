import { useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render, screen, tests } from '@mantine-tests/core';
import { flattenTreeData } from './flatten-tree-data/flatten-tree-data';
import { FlatTreeNode } from './FlatTreeNode';
import { mergeAsyncChildren } from './merge-async-children/merge-async-children';
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

    it('reads the key, not the physical code, of keyboard events', () => {
      render(<Tree data={complexTreeData} expandOnClick checkOnSpace />);
      const nodes = screen.getAllByRole('treeitem');

      nodes[0].focus();
      fireEvent.keyDown(nodes[0], { key: 'ArrowDown', code: 'Numpad2' });
      expect(document.activeElement).toBe(nodes[1]);

      fireEvent.keyDown(nodes[1], { key: 'ArrowUp' });
      expect(document.activeElement).toBe(nodes[0]);

      fireEvent.keyDown(nodes[0], { key: 'Enter', code: 'NumpadEnter' });
      expect(nodes[0]).toHaveAttribute('aria-expanded', 'true');

      fireEvent.keyDown(nodes[0], { key: ' ' });
      expect(nodes[0]).toHaveAttribute('aria-checked', 'true');
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

    it('selects only visible nodes with Shift + click', async () => {
      render(<RangeTree />);

      await userEvent.click(screen.getByText('Node 1'));
      fireEvent.click(screen.getByText('Node 3'), { shiftKey: true });

      expect(getSelected()).toEqual(['node-1', 'node-2', 'node-3']);
    });

    it('includes expanded children in the Shift + click range', async () => {
      render(<RangeTree storeInput={{ initialExpandedState: { 'node-1': true } }} />);

      await userEvent.click(screen.getByText('Node 1.2'));
      fireEvent.click(screen.getByText('Node 1'), { shiftKey: true });

      expect(getSelected()).toEqual(['node-1', 'node-1-1', 'node-1-2']);
    });

    it('selects a single node with Shift + click in single selection mode', async () => {
      render(<RangeTree storeInput={{ multiple: false }} />);

      await userEvent.click(screen.getByText('Node 2'));
      fireEvent.click(screen.getByText('Node 3'), { shiftKey: true });

      expect(getSelected()).toEqual(['node-3']);
      expect(screen.getByRole('tree')).toHaveAttribute('aria-multiselectable', 'false');
    });

    it('extends selection with Shift + ArrowDown from the anchor node', async () => {
      render(<RangeTree />);

      await userEvent.click(screen.getByText('Node 1'));
      await userEvent.keyboard('{Shift>}{ArrowDown}{ArrowDown}{/Shift}');

      expect(getSelected()).toEqual(['node-1', 'node-2', 'node-3']);
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

  describe('scrollTo', () => {
    const scrollIntoView = jest.fn();
    let originalScrollIntoView: typeof HTMLElement.prototype.scrollIntoView;

    beforeEach(() => {
      originalScrollIntoView = HTMLElement.prototype.scrollIntoView;
      HTMLElement.prototype.scrollIntoView = scrollIntoView;
      scrollIntoView.mockClear();
    });

    afterEach(() => {
      HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
      jest.useRealTimers();
    });

    const deepData: TreeNodeData[] = [
      {
        label: 'Level 1',
        value: 'l1',
        children: [
          {
            label: 'Level 2',
            value: 'l2',
            children: [
              {
                label: 'Level 3',
                value: 'l3',
                children: [{ label: 'Level 4', value: 'l4' }],
              },
            ],
          },
        ],
      },
      { label: 'Other', value: 'other' },
    ];

    function ScrollTree({
      storeRef,
      data = deepData,
      input,
      keepMounted,
    }: {
      storeRef: { current: TreeStore | null };
      data?: TreeNodeData[];
      input?: UseTreeInput;
      keepMounted?: boolean;
    }) {
      const store = useTree(input);
      storeRef.current = store;
      return <Tree data={data} store={store} keepMounted={keepMounted} />;
    }

    function getLabel(value: string) {
      return document.querySelector(`[role="treeitem"][data-value="${value}"] > [data-value]`);
    }

    it('expands collapsed ancestors and scrolls the node label into view', () => {
      const storeRef: { current: TreeStore | null } = { current: null };
      render(<ScrollTree storeRef={storeRef} />);
      expect(screen.queryByText('Level 4')).not.toBeInTheDocument();

      act(() => storeRef.current!.scrollTo('l4', { block: 'center', behavior: 'smooth' }));

      expect(storeRef.current!.getExpandedState()).toMatchObject({
        l1: true,
        l2: true,
        l3: true,
        l4: false,
      });
      expect(screen.getByText('Level 4')).toBeInTheDocument();
      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(getLabel('l4'));
      expect(scrollIntoView).toHaveBeenCalledWith({ block: 'center', behavior: 'smooth' });
    });

    it('scrolls immediately when the node is already visible', () => {
      const storeRef: { current: TreeStore | null } = { current: null };
      render(<ScrollTree storeRef={storeRef} />);

      act(() => storeRef.current!.scrollTo('other'));

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(getLabel('other'));
      expect(scrollIntoView).toHaveBeenCalledWith({ block: 'nearest', behavior: 'auto' });
    });

    it('does nothing with autoExpand: false when the node is not rendered', () => {
      const storeRef: { current: TreeStore | null } = { current: null };
      render(<ScrollTree storeRef={storeRef} />);

      act(() => storeRef.current!.scrollTo('l4', { autoExpand: false }));

      expect(storeRef.current!.getExpandedState().l1).toBe(false);
      expect(scrollIntoView).not.toHaveBeenCalled();

      act(() => storeRef.current!.expandParents('l4'));
      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    it('scrolls with autoExpand: false when the node is already rendered', () => {
      const storeRef: { current: TreeStore | null } = { current: null };
      render(<ScrollTree storeRef={storeRef} input={{ initialExpandedState: { l1: true } }} />);

      act(() => storeRef.current!.scrollTo('l2', { autoExpand: false }));

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(getLabel('l2'));
    });

    it('does not scroll to a node hidden by keepMounted', () => {
      const storeRef: { current: TreeStore | null } = { current: null };
      render(<ScrollTree storeRef={storeRef} keepMounted />);

      act(() => storeRef.current!.scrollTo('l2', { autoExpand: false }));
      expect(scrollIntoView).not.toHaveBeenCalled();

      act(() => storeRef.current!.scrollTo('l2'));
      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(getLabel('l2'));
    });

    it('reveals a node collapsed earlier in the same batch', () => {
      const storeRef: { current: TreeStore | null } = { current: null };
      render(<ScrollTree storeRef={storeRef} input={{ initialExpandedState: { l1: true } }} />);

      act(() => {
        storeRef.current!.collapseAllNodes();
        storeRef.current!.scrollTo('l2');
      });

      expect(storeRef.current!.getExpandedState().l1).toBe(true);
      expect(screen.getByText('Level 2')).toBeInTheDocument();
      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(getLabel('l2'));
    });

    it('waits for the render when ancestors were expanded earlier in the same batch', () => {
      const storeRef: { current: TreeStore | null } = { current: null };
      render(<ScrollTree storeRef={storeRef} />);

      act(() => {
        storeRef.current!.expand('l1');
        storeRef.current!.scrollTo('l2', { autoExpand: false });
      });

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(getLabel('l2'));
    });

    it('keeps the request until deferred controlled expansion is applied', () => {
      jest.useFakeTimers();
      const storeRef: { current: TreeStore | null } = { current: null };

      function DeferredTree() {
        const [expandedState, setExpandedState] = useState<Record<string, boolean>>({});
        return (
          <ScrollTree
            storeRef={storeRef}
            input={{
              expandedState,
              onExpandedStateChange: (next) => setTimeout(() => setExpandedState(next), 100),
            }}
          />
        );
      }

      render(<DeferredTree />);

      act(() => {
        storeRef.current!.select('other');
        storeRef.current!.scrollTo('l4');
      });
      expect(scrollIntoView).not.toHaveBeenCalled();

      act(() => {
        jest.advanceTimersByTime(100);
      });

      expect(screen.getByText('Level 4')).toBeInTheDocument();
      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(getLabel('l4'));
    });

    it('does nothing for unknown values', () => {
      const storeRef: { current: TreeStore | null } = { current: null };
      render(<ScrollTree storeRef={storeRef} />);

      act(() => storeRef.current!.scrollTo('unknown'));

      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    it('scrolls with controlled expanded state', () => {
      const storeRef: { current: TreeStore | null } = { current: null };

      function ControlledTree() {
        const [expandedState, setExpandedState] = useState<Record<string, boolean>>({});
        return (
          <ScrollTree
            storeRef={storeRef}
            input={{ expandedState, onExpandedStateChange: setExpandedState }}
          />
        );
      }

      render(<ControlledTree />);
      act(() => storeRef.current!.scrollTo('l4'));

      expect(screen.getByText('Level 4')).toBeInTheDocument();
      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(getLabel('l4'));
    });

    it('waits for async children loaded right before the call', async () => {
      const storeRef: { current: TreeStore | null } = { current: null };

      function AsyncScrollTree() {
        const [data, setData] = useState<TreeNodeData[]>([
          { label: 'Folder', value: 'folder', hasChildren: true },
        ]);
        const store = useTree({
          onLoadChildren: async (value) => {
            setData((current) =>
              mergeAsyncChildren(current, value, [{ label: 'File', value: 'folder/file' }])
            );
          },
        });
        storeRef.current = store;
        return <Tree data={data} store={store} />;
      }

      render(<AsyncScrollTree />);

      await act(async () => {
        await storeRef.current!.loadNode('folder');
        storeRef.current!.scrollTo('folder/file');
      });

      expect(storeRef.current!.getExpandedState().folder).toBe(true);
      expect(screen.getByText('File')).toBeInTheDocument();
      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(getLabel('folder/file'));
    });

    it('drops a request for a node that is still missing after the next data update', () => {
      const storeRef: { current: TreeStore | null } = { current: null };
      const { rerender } = render(<ScrollTree storeRef={storeRef} data={deepData} />);

      act(() => storeRef.current!.scrollTo('late'));
      rerender(<ScrollTree storeRef={storeRef} data={[...deepData]} />);
      rerender(
        <ScrollTree storeRef={storeRef} data={[...deepData, { label: 'Late', value: 'late' }]} />
      );

      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    it('scrolls the treeitem when renderNode does not spread elementProps', () => {
      const storeRef: { current: TreeStore | null } = { current: null };

      function CustomTree() {
        const store = useTree();
        storeRef.current = store;
        return (
          <Tree
            data={deepData}
            store={store}
            renderNode={({ node }) => <span>{node.label}</span>}
          />
        );
      }

      render(<CustomTree />);
      act(() => storeRef.current!.scrollTo('l3'));

      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(
        document.querySelector('[role="treeitem"][data-value="l3"]')
      );
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

  describe('Expanded state', () => {
    it('sets aria-expanded on nodes with children', async () => {
      render(<Tree data={complexTreeData} expandOnClick />);
      const node = screen.getAllByRole('treeitem')[0];

      expect(node).toHaveAttribute('aria-expanded', 'false');

      await userEvent.click(screen.getByText('Node 1'));
      expect(node).toHaveAttribute('aria-expanded', 'true');

      await userEvent.click(screen.getByText('Node 1'));
      expect(node).toHaveAttribute('aria-expanded', 'false');
    });

    it('does not set aria-expanded on leaf nodes', () => {
      render(<Tree data={complexTreeData} />);
      const leaf = screen.getAllByRole('treeitem').find((node) => node.dataset.value === 'node-3');

      expect(leaf).not.toHaveAttribute('aria-expanded');
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

  describe('Leaf nodes', () => {
    function LeafTree({
      storeInput,
      ...props
    }: Partial<TreeProps> & { storeInput?: UseTreeInput }) {
      const store = useTree(storeInput);
      return (
        <div>
          <Tree data={complexTreeData} store={store} {...props} />
          <div data-testid="expanded">{JSON.stringify(store.expandedState)}</div>
        </div>
      );
    }

    it('does not expand leaf nodes on click, ArrowRight, Space and Enter', async () => {
      const onNodeExpand = jest.fn();
      const onNodeCollapse = jest.fn();
      render(<LeafTree storeInput={{ onNodeExpand, onNodeCollapse }} />);

      await userEvent.click(screen.getByText('Node 3'));
      await userEvent.keyboard('{ArrowRight} {Enter}');

      expect(onNodeExpand).not.toHaveBeenCalled();
      expect(onNodeCollapse).not.toHaveBeenCalled();
      expect(JSON.parse(screen.getByTestId('expanded').textContent!)['node-3']).toBe(false);
      expect(document.activeElement).toHaveAttribute('data-value', 'node-3');
    });

    it('does not expand leaf FlatTreeNode on Space', async () => {
      const onNodeExpand = jest.fn();
      function FlatLeaf() {
        const store = useTree({ onNodeExpand });
        return (
          <div role="tree" data-tree-root>
            {flattenTreeData(complexTreeData, store.expandedState).map((item) => (
              <FlatTreeNode key={item.node.value} {...item} store={store} />
            ))}
          </div>
        );
      }

      render(<FlatLeaf />);
      screen.getAllByRole('treeitem')[2].focus();
      await userEvent.keyboard(' {ArrowRight}');

      expect(onNodeExpand).not.toHaveBeenCalled();
    });
  });

  describe('Interactive elements inside nodes', () => {
    const renderWithInput: TreeProps['renderNode'] = ({ node, elementProps }) => (
      <div {...elementProps}>
        <input aria-label={String(node.label)} />
      </div>
    );

    it('does not handle Space and arrow keys pressed on an input inside Tree node', async () => {
      render(<Tree data={complexTreeData} renderNode={renderWithInput} />);
      const input = screen.getByRole('textbox', { name: 'Node 1' });

      input.focus();
      await userEvent.keyboard(' a{ArrowLeft}{ArrowRight}{ArrowDown}');

      expect(input).toHaveFocus();
      expect(input).toHaveValue(' a');
      expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-expanded', 'false');
    });

    it('does not handle Space pressed on a button inside FlatTreeNode', async () => {
      const onClick = jest.fn();
      function FlatWithButton() {
        const store = useTree();
        return (
          <div role="tree" data-tree-root>
            {flattenTreeData(complexTreeData, store.expandedState).map((item) => (
              <FlatTreeNode
                key={item.node.value}
                {...item}
                store={store}
                renderNode={({ node, elementProps }) => (
                  <div {...elementProps}>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        onClick();
                      }}
                    >
                      {`Action ${node.value}`}
                    </button>
                  </div>
                )}
              />
            ))}
          </div>
        );
      }

      render(<FlatWithButton />);
      screen.getByRole('button', { name: 'Action node-1' }).focus();
      await userEvent.keyboard(' ');

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Roving tab index', () => {
    const getTabStops = () =>
      screen
        .getAllByRole('treeitem')
        .filter((node) => node.getAttribute('tabindex') === '0')
        .map((node) => node.dataset.value);

    it('makes the last focused node the only tab stop', async () => {
      render(
        <>
          <button type="button">before</button>
          <Tree data={complexTreeData} />
          <button type="button">after</button>
        </>
      );

      expect(getTabStops()).toEqual(['node-1']);

      screen.getAllByRole('treeitem')[0].focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(getTabStops()).toEqual(['node-2']);

      await userEvent.tab();
      expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();

      await userEvent.tab({ shift: true });
      expect(document.activeElement).toHaveAttribute('data-value', 'node-2');

      await userEvent.tab({ shift: true });
      expect(screen.getByRole('button', { name: 'before' })).toHaveFocus();
    });

    it('uses the selected node as the tab stop before any node is focused', () => {
      function SelectedTree() {
        const store = useTree({ initialSelectedState: ['node-3'] });
        return <Tree data={complexTreeData} store={store} />;
      }

      render(<SelectedTree />);
      expect(getTabStops()).toEqual(['node-3']);
    });

    it('falls back to the first visible node when the focused node is hidden', async () => {
      function CollapsibleTree() {
        const store = useTree({ initialExpandedState: { 'node-1': true } });
        return (
          <>
            <Tree data={complexTreeData} store={store} />
            <button type="button" onClick={() => store.collapse('node-1')}>
              collapse
            </button>
          </>
        );
      }

      render(<CollapsibleTree />);
      screen.getAllByRole('treeitem')[1].focus();
      expect(getTabStops()).toEqual(['node-1-1']);

      await userEvent.click(screen.getByRole('button', { name: 'collapse' }));
      expect(getTabStops()).toEqual(['node-1']);
    });
  });

  describe('FlatTreeNode virtualization', () => {
    const expandedState = { 'node-1': true, 'node-2': true, 'node-2-2': true };

    function VirtualizedTree({
      rendered,
      onScrollToIndex,
    }: {
      rendered: string[];
      onScrollToIndex?: (index: number) => void;
    }) {
      const store = useTree({ initialExpandedState: expandedState });
      const flatData = flattenTreeData(complexTreeData, store.expandedState);
      return (
        <>
          <div role="tree" data-tree-root>
            {flatData
              .filter((item) => rendered.includes(item.node.value))
              .map((item) => (
                <FlatTreeNode
                  key={item.node.value}
                  {...item}
                  store={store}
                  flatData={flatData}
                  onScrollToIndex={onScrollToIndex}
                />
              ))}
          </div>
          <button type="button">after</button>
        </>
      );
    }

    it('sets aria-level, aria-setsize and aria-posinset from flatData', () => {
      render(
        <VirtualizedTree rendered={['node-1', 'node-1-2', 'node-2', 'node-2-2-1', 'node-3']} />
      );
      const attrs = screen
        .getAllByRole('treeitem')
        .map((node) => [
          node.dataset.value,
          node.getAttribute('aria-level'),
          node.getAttribute('aria-setsize'),
          node.getAttribute('aria-posinset'),
        ]);

      expect(attrs).toEqual([
        ['node-1', '1', '3', '1'],
        ['node-1-2', '2', '2', '2'],
        ['node-2', '1', '3', '2'],
        ['node-2-2-1', '3', '2', '1'],
        ['node-3', '1', '3', '3'],
      ]);
    });

    it('scrolls to rows that are not rendered on Home, End, ArrowDown and ArrowLeft', async () => {
      const onScrollToIndex = jest.fn();
      render(
        <VirtualizedTree
          rendered={['node-1-2', 'node-2', 'node-2-1']}
          onScrollToIndex={onScrollToIndex}
        />
      );

      screen.getAllByRole('treeitem')[1].focus();
      await userEvent.keyboard('{End}');
      expect(onScrollToIndex).toHaveBeenLastCalledWith(8);

      await userEvent.keyboard('{Home}');
      expect(onScrollToIndex).toHaveBeenLastCalledWith(0);

      screen.getAllByRole('treeitem')[2].focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(onScrollToIndex).toHaveBeenLastCalledWith(5);

      screen.getAllByRole('treeitem')[0].focus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(onScrollToIndex).toHaveBeenLastCalledWith(0);
      expect(document.activeElement).toHaveAttribute('data-value', 'node-1-2');
    });

    it('focuses the target row once it is rendered after scrolling', async () => {
      function ScrollingTree() {
        const [rendered, setRendered] = useState(['node-1', 'node-1-1']);
        return (
          <VirtualizedTree
            rendered={rendered}
            onScrollToIndex={() => setRendered(['node-2-2-2', 'node-3'])}
          />
        );
      }

      render(<ScrollingTree />);
      screen.getAllByRole('treeitem')[0].focus();
      await userEvent.keyboard('{End}');

      expect(document.activeElement).toHaveAttribute('data-value', 'node-3');
      expect(document.activeElement).toHaveAttribute('tabindex', '0');
    });

    it('does not move focus to the target row when focus left the tree before it rendered', async () => {
      function ScrollingTree() {
        const [rendered, setRendered] = useState(['node-1', 'node-1-1']);
        return (
          <>
            <VirtualizedTree rendered={rendered} onScrollToIndex={() => {}} />
            <button type="button" onClick={() => setRendered(['node-2-2-2', 'node-3'])}>
              scroll
            </button>
          </>
        );
      }

      render(<ScrollingTree />);
      screen.getAllByRole('treeitem')[0].focus();
      await userEvent.keyboard('{End}');
      await userEvent.click(screen.getByRole('button', { name: 'scroll' }));

      expect(screen.getByRole('button', { name: 'scroll' })).toHaveFocus();
    });

    it('keeps a tab stop when the focused row is no longer rendered', async () => {
      function ScrollingTree() {
        const [rendered, setRendered] = useState(['node-1', 'node-1-1', 'node-1-2']);
        return (
          <>
            <VirtualizedTree rendered={rendered} />
            <button type="button" onClick={() => setRendered(['node-2-1', 'node-2-2'])}>
              scroll
            </button>
          </>
        );
      }

      render(<ScrollingTree />);
      screen.getAllByRole('treeitem')[1].focus();
      await userEvent.click(screen.getByRole('button', { name: 'scroll' }));
      await act(async () => {});

      const tabStops = screen
        .getAllByRole('treeitem')
        .filter((node) => node.getAttribute('tabindex') === '0')
        .map((node) => node.dataset.value);
      expect(tabStops).toEqual(['node-2-1']);
    });
  });

  describe('Checkable trees', () => {
    function CheckableTree({ checkStrictly }: { checkStrictly?: boolean }) {
      const store = useTree({
        initialExpandedState: { 'node-1': true },
        initialCheckedState: ['node-1-1'],
        checkStrictly,
      });
      return <Tree data={complexTreeData} store={store} checkOnSpace />;
    }

    const getChecked = () =>
      Object.fromEntries(
        screen
          .getAllByRole('treeitem')
          .map((node) => [node.dataset.value, node.getAttribute('aria-checked')])
      );

    it('sets aria-checked on tree items when checkOnSpace is set', async () => {
      render(<CheckableTree />);

      expect(getChecked()).toEqual({
        'node-1': 'mixed',
        'node-1-1': 'true',
        'node-1-2': 'false',
        'node-2': 'false',
        'node-3': 'false',
      });

      screen.getAllByRole('treeitem')[2].focus();
      await userEvent.keyboard(' ');
      expect(getChecked()['node-1']).toBe('true');
    });

    it('does not set aria-checked without checkOnSpace', () => {
      render(<Tree data={complexTreeData} />);
      expect(screen.getAllByRole('treeitem')[0]).not.toHaveAttribute('aria-checked');
    });

    it('checks FlatTreeNode on Space and sets aria-checked', async () => {
      function FlatCheckable() {
        const store = useTree({ checkStrictly: true });
        return (
          <div role="tree" data-tree-root>
            {flattenTreeData(complexTreeData, store.expandedState).map((item) => (
              <FlatTreeNode key={item.node.value} {...item} store={store} checkOnSpace />
            ))}
          </div>
        );
      }

      render(<FlatCheckable />);
      const node = screen.getAllByRole('treeitem')[2];
      expect(node).toHaveAttribute('aria-checked', 'false');

      node.focus();
      await userEvent.keyboard(' ');
      expect(screen.getAllByRole('treeitem')[2]).toHaveAttribute('aria-checked', 'true');
    });
  });

  it('renders the loading indicator item with role="none"', async () => {
    const onLoadChildren = jest.fn(() => new Promise<void>(() => {}));
    const loadingData: TreeNodeData[] = [{ label: 'Folder', value: 'folder', hasChildren: true }];
    function LoadingTree() {
      const store = useTree({ onLoadChildren });
      return <Tree data={loadingData} store={store} />;
    }

    render(<LoadingTree />);
    await userEvent.click(screen.getByText('Folder'));

    const group = screen.getByRole('group');
    expect(group.querySelector('li')).toHaveAttribute('role', 'none');
  });
});
