import { buildFileTree, getFileTreeParents } from './build-file-tree';

describe('@mantine/code-highlight/build-file-tree', () => {
  it('places root files after folders and keeps input order inside each group', () => {
    const tree = buildFileTree([
      { fileName: 'Form.tsx' },
      { fileName: 'steps/Personal.tsx' },
      { fileName: 'types.ts' },
      { fileName: 'steps/Address.tsx' },
      { fileName: 'Form.test.tsx' },
    ]);

    expect(tree).toStrictEqual([
      {
        value: 'steps',
        label: 'steps',
        children: [
          { value: 'steps/Personal.tsx', label: 'Personal.tsx' },
          { value: 'steps/Address.tsx', label: 'Address.tsx' },
        ],
      },
      { value: 'Form.tsx', label: 'Form.tsx' },
      { value: 'types.ts', label: 'types.ts' },
      { value: 'Form.test.tsx', label: 'Form.test.tsx' },
    ]);
  });

  it('nests folders of any depth', () => {
    const tree = buildFileTree([{ fileName: 'src/components/Button/Button.tsx' }]);

    expect(tree).toStrictEqual([
      {
        value: 'src',
        label: 'src',
        children: [
          {
            value: 'src/components',
            label: 'components',
            children: [
              {
                value: 'src/components/Button',
                label: 'Button',
                children: [{ value: 'src/components/Button/Button.tsx', label: 'Button.tsx' }],
              },
            ],
          },
        ],
      },
    ]);
  });

  it('ignores duplicate and empty file names and keeps the original name as value', () => {
    const tree = buildFileTree([
      { fileName: 'a.ts' },
      { fileName: 'a.ts' },
      { fileName: '' },
      { fileName: 'b//c.ts' },
    ]);

    expect(tree).toStrictEqual([
      { value: 'b', label: 'b', children: [{ value: 'b//c.ts', label: 'c.ts' }] },
      { value: 'a.ts', label: 'a.ts' },
    ]);
  });

  it('lists parents of a file', () => {
    expect(getFileTreeParents('a/b/c.ts')).toStrictEqual(['a', 'a/b']);
    expect(getFileTreeParents('c.ts')).toStrictEqual([]);
  });
});
