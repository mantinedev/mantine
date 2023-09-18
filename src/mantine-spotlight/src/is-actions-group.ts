import type { SpotlightActionData, SpotlightActionGroupData } from './Spotlight';

export function isActionsGroup(
  item: SpotlightActionData | SpotlightActionGroupData
): item is SpotlightActionGroupData {
  const _item = item as SpotlightActionGroupData;
  return _item.group !== undefined && Array.isArray(_item.actions);
}
