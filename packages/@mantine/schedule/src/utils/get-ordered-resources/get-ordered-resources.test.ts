import { ScheduleResourceData, ScheduleResourceGroup } from '../../types';
import { getOrderedResources } from './get-ordered-resources';

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'new-york', label: 'New York' },
  { id: 'london', label: 'London' },
  { id: 'overflow', label: 'Overflow' },
];

describe('getOrderedResources', () => {
  it('returns resources in group order with ungrouped at the end', () => {
    const groups: ScheduleResourceGroup[] = [
      { label: 'Floor 1', resourceIds: ['tokyo', 'paris'] },
      { label: 'Floor 2', resourceIds: ['new-york', 'london'] },
    ];

    const result = getOrderedResources(resources, groups);
    expect(result.orderedResources.map((r) => r.id)).toEqual([
      'tokyo',
      'paris',
      'new-york',
      'london',
      'overflow',
    ]);
    expect(result.groupRanges).toEqual([
      { group: groups[0], startIndex: 0, count: 2 },
      { group: groups[1], startIndex: 2, count: 2 },
    ]);
  });

  it('returns original resources when groups is undefined', () => {
    const result = getOrderedResources(resources, undefined);
    expect(result.orderedResources).toEqual(resources);
    expect(result.groupRanges).toEqual([]);
  });

  it('returns original resources when groups is empty', () => {
    const result = getOrderedResources(resources, []);
    expect(result.orderedResources).toEqual(resources);
    expect(result.groupRanges).toEqual([]);
  });

  it('skips resource IDs that do not exist in the resources array', () => {
    const groups: ScheduleResourceGroup[] = [
      { label: 'Floor 1', resourceIds: ['tokyo', 'nonexistent'] },
    ];

    const result = getOrderedResources(resources, groups);
    expect(result.orderedResources.map((r) => r.id)).toEqual([
      'tokyo',
      'paris',
      'new-york',
      'london',
      'overflow',
    ]);
    expect(result.groupRanges).toEqual([{ group: groups[0], startIndex: 0, count: 1 }]);
  });

  it('handles all resources being ungrouped', () => {
    const groups: ScheduleResourceGroup[] = [{ label: 'Empty', resourceIds: ['nonexistent'] }];

    const result = getOrderedResources(resources, groups);
    expect(result.orderedResources).toEqual(resources);
    expect(result.groupRanges).toEqual([]);
  });
});
