import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from './use-pagination';

describe('@mantine/hooks/use-pagination', () => {
  it('setPage set active properly', () => {
    const { result } = renderHook(() =>
      usePagination({
        total: 10,
      })
    );

    act(() => result.current.setPage(5));
    expect(result.current.active).toBe(5);

    act(() => result.current.setPage(15));
    expect(result.current.active).toBe(10);

    act(() => result.current.setPage(-1));
    expect(result.current.active).toBe(1);
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

      expect(result.current.range).toStrictEqual([1, 2, 3, 4, 5, 'dots', 10]);
      expect(result.current.active).toBe(1);
    });

    it('range length does not change between page changes', () => {
      // 2siblings + 2boundaries + 2dots + active
      const expectedLength = 7;

      const { result } = hook;

      [...new Array(pagesAmount).fill(null)].forEach(() => {
        expect(result.current.range.length).toBe(expectedLength);

        act(() => result.current.next());
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
          boundaries: 2,
          initialPage,
        })
      );
    });

    it('returns correct initial state', () => {
      const { result } = hook;

      expect(result.current.range).toStrictEqual([1, 2, 'dots', 5, 6, 7, 8, 9, 'dots', 19, 20]);
      expect(result.current.active).toBe(initialPage);
    });

    it('onChange fires correctly with active', () => {
      const { result } = hook;

      act(() => result.current.next());

      expect(onChangeCallback).toBeCalledTimes(1);
      expect(onChangeCallback).toBeCalledWith(initialPage + 1);
    });

    it('range length does not change between page changes', () => {
      // 4siblings + 4boundaries + 2dots + active
      const expectedLength = 11;

      const { result } = hook;

      [...new Array(pagesAmount).fill(null)].forEach(() => {
        expect(result.current.range.length).toBe(expectedLength);

        act(() => result.current.next());
      });
    });
  });
});
