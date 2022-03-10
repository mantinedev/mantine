interface GroupData {
  data: { group?: string }[];
}

export function groupOptions({ data }: GroupData) {
  const sortedData = [];
  const unGroupedData = [];
  const groupedData = data.reduce((acc, item, index) => {
    if (item.group) {
      if (acc[item.group]) acc[item.group].push(index);
      else acc[item.group] = [index];
    } else {
      unGroupedData.push(index);
    }
    return acc;
  }, {});

  Object.keys(groupedData).forEach((groupName) => {
    sortedData.push(...groupedData[groupName].map((index) => data[index]));
  });

  sortedData.push(...unGroupedData.map((itemIndex) => data[itemIndex]));

  return sortedData;
}

export function getGroupedOptions<T extends any[]>(data: T) {
  type Item = { type: 'item'; item: T[number]; index: number };
  type Label = { type: 'label'; label: string };

  const sorted = groupOptions({ data });
  const unGrouped: Item[] = [];
  const grouped: (Item | Label)[] = [];
  let groupName = null;

  sorted.forEach((item, index) => {
    if (!item.group) {
      unGrouped.push({ type: 'item', item, index });
    } else {
      if (groupName !== item.group) {
        groupName = item.group;
        grouped.push({ type: 'label', label: groupName });
      }
      grouped.push({ type: 'item', item, index });
    }
  });

  return {
    grouped,
    unGrouped,
    items: [...grouped, ...unGrouped],
    hasItems: grouped.length > 0 || unGrouped.length > 0,
  };
}
