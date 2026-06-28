import { ScheduleResourceData } from '../../types';

/** Builds a map from a stringified resource id to its original id value */
export function getGroupToResourceIdMap(
  resources: ScheduleResourceData[]
): Map<string, string | number> {
  const map = new Map<string, string | number>();
  for (const resource of resources) {
    map.set(String(resource.id), resource.id);
  }
  return map;
}
