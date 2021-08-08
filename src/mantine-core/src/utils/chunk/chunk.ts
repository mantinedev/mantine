export function chunk<T>(chunks: number, array: T[]): T[][] {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunks);

    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
}
