import type { TreeNodeData } from '../Tree';
import { mergeAsyncChildren } from './merge-async-children';

const data: TreeNodeData[] = [
  {
    label: 'Documents',
    value: 'documents',
    hasChildren: true,
  },
  {
    label: 'Images',
    value: 'images',
    children: [
      { label: 'photo.jpg', value: 'images/photo.jpg' },
      { label: 'Screenshots', value: 'images/screenshots', hasChildren: true },
    ],
  },
  { label: 'readme.md', value: 'readme.md' },
];

describe('mergeAsyncChildren', () => {
  it('merges children into a top-level node and clears hasChildren', () => {
    const children: TreeNodeData[] = [
      { label: 'report.pdf', value: 'documents/report.pdf' },
      { label: 'notes.txt', value: 'documents/notes.txt' },
    ];

    const result = mergeAsyncChildren(data, 'documents', children);

    expect(result[0].children).toEqual(children);
    expect(result[0].hasChildren).toBeUndefined();
    expect(result[1]).toBe(data[1]);
    expect(result[2]).toBe(data[2]);
  });

  it('merges children into a nested node and clears hasChildren', () => {
    const children: TreeNodeData[] = [
      { label: 'screen1.png', value: 'images/screenshots/screen1.png' },
    ];

    const result = mergeAsyncChildren(data, 'images/screenshots', children);

    const screenshotsNode = result[1].children![1];
    expect(screenshotsNode.children).toEqual(children);
    expect(screenshotsNode.hasChildren).toBeUndefined();
    expect(result[0]).toBe(data[0]);
    expect(result[2]).toBe(data[2]);
  });

  it('returns data unchanged if parent value is not found', () => {
    const children: TreeNodeData[] = [{ label: 'file.txt', value: 'file.txt' }];

    const result = mergeAsyncChildren(data, 'nonexistent', children);

    expect(result[0]).toBe(data[0]);
    expect(result[1]).toBe(data[1]);
    expect(result[2]).toBe(data[2]);
  });

  it('handles empty children array and clears hasChildren', () => {
    const result = mergeAsyncChildren(data, 'documents', []);

    expect(result[0].children).toEqual([]);
    expect(result[0].hasChildren).toBeUndefined();
  });

  it('replaces existing children', () => {
    const newChildren: TreeNodeData[] = [{ label: 'new-photo.jpg', value: 'images/new-photo.jpg' }];

    const result = mergeAsyncChildren(data, 'images', newChildren);

    expect(result[1].children).toEqual(newChildren);
  });
});
