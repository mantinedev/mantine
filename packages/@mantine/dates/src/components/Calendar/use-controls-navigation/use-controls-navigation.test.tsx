import { act, renderHook } from '@testing-library/react';
import { useControlsNavigation } from './use-controls-navigation';

function createGrid(rows: number, cells: number) {
  const grid: HTMLButtonElement[][] = [];
  for (let row = 0; row < rows; row += 1) {
    grid.push([]);
    for (let cell = 0; cell < cells; cell += 1) {
      const button = document.createElement('button');
      document.body.appendChild(button);
      grid[row].push(button);
    }
  }
  return grid;
}

const keyEvent = (key: string) => ({ key, preventDefault: jest.fn() }) as any;

describe('@mantine/dates/use-controls-navigation', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('fills controls refs lazily and moves focus between registered controls', () => {
    const onNext = jest.fn();
    const onPrevious = jest.fn();
    const { result } = renderHook(() =>
      useControlsNavigation({
        level: 'year',
        yearBody: 'months',
        date: '2022-04-11',
        numberOfColumns: 1,
        firstDayOfWeek: 1,
        consistentWeeks: false,
        minDate: undefined,
        maxDate: undefined,
        previousDisabled: false,
        nextDisabled: false,
        onPrevious,
        onNext,
      })
    );

    const grid = createGrid(2, 3);
    grid.forEach((row, rowIndex) =>
      row.forEach((node, cellIndex) => result.current.getControlRef(0, rowIndex, cellIndex, node))
    );

    act(() => {
      result.current.onControlKeyDown(0, keyEvent('ArrowRight'), {
        rowIndex: 0,
        cellIndex: 0,
        date: '2022-01-01',
      });
    });
    expect(grid[0][1]).toHaveFocus();

    act(() => {
      result.current.onControlKeyDown(0, keyEvent('ArrowDown'), {
        rowIndex: 0,
        cellIndex: 1,
        date: '2022-02-01',
      });
    });
    expect(grid[1][1]).toHaveFocus();

    act(() => {
      result.current.onControlKeyDown(0, keyEvent('ArrowLeft'), {
        rowIndex: 0,
        cellIndex: 0,
        date: '2022-01-01',
      });
    });
    expect(onPrevious).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.onControlKeyDown(0, keyEvent('ArrowRight'), {
        rowIndex: 1,
        cellIndex: 2,
        date: '2022-06-01',
      });
    });
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it('does not cross the edge when the direction is disabled', () => {
    const onPrevious = jest.fn();
    const { result } = renderHook(() =>
      useControlsNavigation({
        level: 'decade',
        yearBody: 'months',
        date: '2022-04-11',
        numberOfColumns: 1,
        firstDayOfWeek: 1,
        consistentWeeks: false,
        minDate: '2020-01-01',
        maxDate: undefined,
        previousDisabled: true,
        nextDisabled: false,
        onPrevious,
        onNext: () => {},
      })
    );

    const grid = createGrid(1, 3);
    grid[0].forEach((node, cellIndex) => result.current.getControlRef(0, 0, cellIndex, node));

    act(() => {
      result.current.onControlKeyDown(0, keyEvent('ArrowLeft'), {
        rowIndex: 0,
        cellIndex: 0,
        date: '2020-01-01',
      });
    });
    expect(onPrevious).not.toHaveBeenCalled();
  });
});
