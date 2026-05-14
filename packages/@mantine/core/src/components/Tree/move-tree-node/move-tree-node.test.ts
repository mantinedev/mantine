import type { TreeNodeData } from '../Tree';
import { moveTreeNode } from './move-tree-node';

const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
        ],
      },
      {
        label: 'hooks',
        value: 'src/hooks',
        children: [
          { label: 'use-state.ts', value: 'src/hooks/use-state.ts' },
          { label: 'use-effect.ts', value: 'src/hooks/use-effect.ts' },
        ],
      },
    ],
  },
  {
    label: 'docs',
    value: 'docs',
    children: [{ label: 'readme.md', value: 'docs/readme.md' }],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

describe('moveTreeNode', () => {
  it('returns the same data when dragged node equals target node', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'package.json',
      targetNode: 'package.json',
      position: 'before',
    });

    expect(result).toBe(data);
  });

  it('returns the same data when target is a descendant of dragged node', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'src',
      targetNode: 'src/components/Tree.tsx',
      position: 'before',
    });

    expect(result).toBe(data);
  });

  it('returns the same data when dragged node does not exist', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'nonexistent',
      targetNode: 'package.json',
      position: 'before',
    });

    expect(result).toBe(data);
  });

  it('moves a root-level node before another root-level node', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'tsconfig.json',
      targetNode: 'package.json',
      position: 'before',
    });

    const rootValues = result.map((n) => n.value);
    expect(rootValues).toEqual(['src', 'docs', 'tsconfig.json', 'package.json']);
  });

  it('moves a root-level node after another root-level node', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'package.json',
      targetNode: 'src',
      position: 'after',
    });

    const rootValues = result.map((n) => n.value);
    expect(rootValues).toEqual(['src', 'package.json', 'docs', 'tsconfig.json']);
  });

  it('moves a node inside another node (reparenting)', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'package.json',
      targetNode: 'src',
      position: 'inside',
    });

    const rootValues = result.map((n) => n.value);
    expect(rootValues).toEqual(['src', 'docs', 'tsconfig.json']);

    const srcNode = result.find((n) => n.value === 'src')!;
    const srcChildValues = srcNode.children!.map((n) => n.value);
    expect(srcChildValues).toContain('package.json');
  });

  it('moves a nested node to root level', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'src/components/Accordion.tsx',
      targetNode: 'package.json',
      position: 'before',
    });

    const rootValues = result.map((n) => n.value);
    expect(rootValues).toEqual([
      'src',
      'docs',
      'src/components/Accordion.tsx',
      'package.json',
      'tsconfig.json',
    ]);

    const srcNode = result.find((n) => n.value === 'src')!;
    const componentsNode = srcNode.children!.find((n) => n.value === 'src/components')!;
    expect(componentsNode.children!.map((n) => n.value)).toEqual([
      'src/components/Tree.tsx',
      'src/components/Button.tsx',
    ]);
  });

  it('moves a node between siblings (reorder)', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'src/components/Button.tsx',
      targetNode: 'src/components/Accordion.tsx',
      position: 'before',
    });

    const srcNode = result.find((n) => n.value === 'src')!;
    const componentsNode = srcNode.children!.find((n) => n.value === 'src/components')!;
    expect(componentsNode.children!.map((n) => n.value)).toEqual([
      'src/components/Button.tsx',
      'src/components/Accordion.tsx',
      'src/components/Tree.tsx',
    ]);
  });

  it('moves a subtree (node with children) inside another node', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'src/hooks',
      targetNode: 'docs',
      position: 'inside',
    });

    const srcNode = result.find((n) => n.value === 'src')!;
    expect(srcNode.children!.map((n) => n.value)).toEqual(['src/components']);

    const docsNode = result.find((n) => n.value === 'docs')!;
    const hooksChild = docsNode.children!.find((n) => n.value === 'src/hooks')!;
    expect(hooksChild.children!.map((n) => n.value)).toEqual([
      'src/hooks/use-state.ts',
      'src/hooks/use-effect.ts',
    ]);
  });

  it('moves a node inside a leaf node (creates children)', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'tsconfig.json',
      targetNode: 'package.json',
      position: 'inside',
    });

    const rootValues = result.map((n) => n.value);
    expect(rootValues).toEqual(['src', 'docs', 'package.json']);

    const pkgNode = result.find((n) => n.value === 'package.json')!;
    expect(pkgNode.children!.map((n) => n.value)).toEqual(['tsconfig.json']);
  });

  it('prevents moving a parent into its direct child', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'src/components',
      targetNode: 'src/components/Tree.tsx',
      position: 'inside',
    });

    expect(result).toBe(data);
  });

  it('prevents moving a parent into a deeply nested descendant', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'src',
      targetNode: 'src/hooks/use-state.ts',
      position: 'after',
    });

    expect(result).toBe(data);
  });

  it('returns the same data when target node does not exist', () => {
    const result = moveTreeNode(data, {
      draggedNode: 'package.json',
      targetNode: 'nonexistent-target',
      position: 'before',
    });

    expect(result).toBe(data);
  });
});
