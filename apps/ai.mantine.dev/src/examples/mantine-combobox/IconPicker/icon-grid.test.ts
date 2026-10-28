import type { IconEntry } from './icon-data';
import { buildIconGrid, moveInGrid } from './icon-grid';

const entries = (count: number, prefix = 'Icon') =>
  Array.from({ length: count }, (_, index) => ({ name: `${prefix}${index}` }) as IconEntry);

// 3 columns: rows [0 1 2] [3 4 5] [6 7 8] [9 10]
const grid = buildIconGrid(entries(11), [], 3);

describe('moving the highlight', () => {
  it('moves by one cell to the left and right across rows', () => {
    expect(moveInGrid(grid, 2, 'right', 2)).toBe(3);
    expect(moveInGrid(grid, 3, 'left', 2)).toBe(2);
  });

  it('keeps the column when moving up and down', () => {
    expect(moveInGrid(grid, 1, 'down', 2)).toBe(4);
    expect(moveInGrid(grid, 4, 'up', 2)).toBe(1);
  });

  it('stops at the last cell of a shorter last row', () => {
    expect(moveInGrid(grid, 8, 'down', 2)).toBe(10);
  });

  it('moves by a page of rows', () => {
    expect(moveInGrid(grid, 1, 'pageDown', 2)).toBe(7);
    expect(moveInGrid(grid, 7, 'pageUp', 2)).toBe(1);
  });

  it('stays in the first and last rows at the edges', () => {
    expect(moveInGrid(grid, 1, 'up', 2)).toBe(1);
    expect(moveInGrid(grid, 9, 'pageDown', 2)).toBe(9);
  });

  it('jumps to the first and last cells', () => {
    expect(moveInGrid(grid, 5, 'first', 2)).toBe(0);
    expect(moveInGrid(grid, 5, 'last', 2)).toBe(10);
  });

  it('moves between the recent row and the results', () => {
    const withRecent = buildIconGrid(entries(6), entries(2, 'Recent'), 3);
    // recent [0 1], results [2 3 4] [5 6 7]
    expect(moveInGrid(withRecent, 1, 'down', 2)).toBe(3);
    expect(moveInGrid(withRecent, 4, 'up', 2)).toBe(1);
  });
});
