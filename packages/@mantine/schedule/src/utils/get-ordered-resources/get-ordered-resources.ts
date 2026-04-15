import { ScheduleResourceData, ScheduleResourceGroup } from '../../types';

export interface GroupRange {
  group: ScheduleResourceGroup;
  startIndex: number;
  count: number;
}

export interface ResourceGroupInfo {
  group: ScheduleResourceGroup;
  position: 'first' | 'middle' | 'last' | 'only';
  count: number;
}

export interface OrderedResourcesResult {
  orderedResources: ScheduleResourceData[];
  groupRanges: GroupRange[];
  resourceGroupMap: (ResourceGroupInfo | null)[];
}

export function getOrderedResources(
  resources: ScheduleResourceData[],
  groups: ScheduleResourceGroup[] | undefined
): OrderedResourcesResult {
  if (!groups || groups.length === 0) {
    return { orderedResources: resources, groupRanges: [], resourceGroupMap: [] };
  }

  const resourceMap = new Map(resources.map((r) => [r.id, r]));
  const usedIds = new Set<string | number>();
  const orderedResources: ScheduleResourceData[] = [];
  const groupRanges: GroupRange[] = [];

  for (const group of groups) {
    const startIndex = orderedResources.length;
    let count = 0;

    for (const id of group.resourceIds) {
      const resource = resourceMap.get(id);
      if (resource && !usedIds.has(id)) {
        orderedResources.push(resource);
        usedIds.add(id);
        count++;
      }
    }

    if (count > 0) {
      groupRanges.push({ group, startIndex, count });
    }
  }

  for (const resource of resources) {
    if (!usedIds.has(resource.id)) {
      orderedResources.push(resource);
    }
  }

  const resourceGroupMap: (ResourceGroupInfo | null)[] = new Array(orderedResources.length).fill(
    null
  );

  for (const range of groupRanges) {
    for (let i = 0; i < range.count; i++) {
      const idx = range.startIndex + i;
      let position: ResourceGroupInfo['position'];
      if (range.count === 1) {
        position = 'only';
      } else if (i === 0) {
        position = 'first';
      } else if (i === range.count - 1) {
        position = 'last';
      } else {
        position = 'middle';
      }
      resourceGroupMap[idx] = { group: range.group, position, count: range.count };
    }
  }

  return { orderedResources, groupRanges, resourceGroupMap };
}
