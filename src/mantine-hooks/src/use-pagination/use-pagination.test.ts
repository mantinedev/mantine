import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from './use-pagination';

describe('@mantine/hooks/use-pagination', () => {
  it('goToPage set activePage properly', () => {
    const { result } = renderHook(() =>
      usePagination({
        total: 10,
      })
    );

    act(() => result.current.goToPage(5));
    expect(result.current.activePage).toBe(5);

    act(() => result.current.goToPage(15));
    expect(result.current.activePage).toBe(10);

    act(() => result.current.goToPage(-1));
    expect(result.current.activePage).toBe(1);
  });

  describe('@mantine/hooks/use-pagination default options', () => {
    const pagesAmount = 10;
    let hook;

    beforeEach(() => {
      hook = renderHook(() =>
        usePagination({
          total: pagesAmount,
        })
      );
    });

    it('returns correct initial state', () => {
      const { result } = hook;

      expect(result.current.paginationRange).toStrictEqual([1, 2, 3, 4, 5, 'dots', 10]);
      expect(result.current.activePage).toBe(1);
    });

    it('paginationRange length does not change between page changes', () => {
      // 2siblings + 2boundaries + 2dots + activePage
      const expectedLength = 7;

      const { result } = hook;

      [...new Array(pagesAmount).fill(null)].forEach(() => {
        expect(result.current.paginationRange.length).toBe(expectedLength);

        act(() => result.current.goNextPage());
      });
    });
  });

  describe('@mantine/hooks/use-pagination custom options', () => {
    const pagesAmount = 20;
    const onChangeCallback = jest.fn();
    const initialPage = 7;
    let hook;

    beforeEach(() => {
      hook = renderHook(() =>
        usePagination({
          total: pagesAmount,
          onChange: onChangeCallback,
          siblings: 2,
          boundary: 2,
          initialPage,
        })
      );
    });

    it('returns correct initial state', () => {
      const { result } = hook;

      expect(result.current.paginationRange).toStrictEqual([
        1,
        2,
        'dots',
        5,
        6,
        7,
        8,
        9,
        'dots',
        19,
        20,
      ]);
      expect(result.current.activePage).toBe(initialPage);
    });

    it('onChange fires correctly with activePage', () => {
      const { result } = hook;

      act(() => result.current.goNextPage());

      expect(onChangeCallback).toBeCalledTimes(1);
      expect(onChangeCallback).toBeCalledWith(initialPage + 1);
    });

    it('paginationRange length does not change between page changes', () => {
      // 4siblings + 4boundaries + 2dots + activePage
      const expectedLength = 11;

      const { result } = hook;

      [...new Array(pagesAmount).fill(null)].forEach(() => {
        expect(result.current.paginationRange.length).toBe(expectedLength);

        act(() => result.current.goNextPage());
      });
    });
  });
});
