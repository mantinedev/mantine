import type { SelectItem } from '../types';

interface GroupData {
  data: SelectItem[];
}

export function groupSortData({ data }: GroupData) {
  const sortedData = [];
  const ungroupedData = [];
  const groupedData = data.reduce((acc, item, index) => {
    if (item.group) {
      if (acc[item.group]) acc[item.group].push(index);
      else acc[item.group] = [index];
    } else {
      ungroupedData.push(index);
    }
    return acc;
  }, {});

  Object.keys(groupedData).forEach((groupName) => {
    sortedData.push(...groupedData[groupName].map((index) => data[index]));
  });
  sortedData.push(...ungroupedData.map((itemIndex) => data[itemIndex]));

  return sortedData;
}
