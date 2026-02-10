import userEvent from '@testing-library/user-event';
import { render, screen, tests } from '@mantine-tests/core';
import { Tree, TreeProps, TreeStylesNames } from './Tree';
import { useTree } from './use-tree';

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

    it('handles Space to expand/collapse when expandOnSpace is true', async () => {
      const TestComponent = () => {
        const tree = useTree();
        return <Tree data={complexTreeData} tree={tree} expandOnSpace />;
      };

      render(<TestComponent />);
      const nodes = screen.getAllByRole('treeitem');

      expect(screen.queryByText('Node 1.1')).not.toBeInTheDocument();

      nodes[0].focus();
      await userEvent.keyboard(' ');

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
        const tree = useTree();
        return <Tree data={complexTreeData} tree={tree} selectOnClick />;
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
        const tree = useTree();
        return (
          <div>
            <Tree data={complexTreeData} tree={tree} checkOnSpace />
            <div data-testid="checked">{JSON.stringify(tree.checkedState)}</div>
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
        const tree = useTree();
        return (
          <div>
            <div data-testid="outside">Outside</div>
            <Tree data={complexTreeData} tree={tree} selectOnClick clearSelectionOnOutsideClick />
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
          tree: expect.any(Object),
          elementProps: expect.any(Object),
        })
      );
    });
  });
});
