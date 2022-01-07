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
