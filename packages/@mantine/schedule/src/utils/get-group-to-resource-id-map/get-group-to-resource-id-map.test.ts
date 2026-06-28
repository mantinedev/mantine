import { ScheduleResourceData } from '../../types';
import { getGroupToResourceIdMap } from './get-group-to-resource-id-map';

describe('@mantine/schedule/get-group-to-resource-id-map', () => {
  it('maps stringified resource ids back to their original id values', () => {
    const resources: ScheduleResourceData[] = [
      { id: 1, label: 'Room A' },
      { id: 'b', label: 'Room B' },
    ];
    const map = getGroupToResourceIdMap(resources);
    expect(map.get('1')).toBe(1);
    expect(map.get('b')).toBe('b');
  });

  it('returns an empty map when there are no resources', () => {
    expect(getGroupToResourceIdMap([]).size).toBe(0);
  });
});
