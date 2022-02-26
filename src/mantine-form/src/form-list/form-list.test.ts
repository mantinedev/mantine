import { createFormList, isFormList } from './form-list';

describe('@mantine/form form-list', () => {
  it('creates new list from given list without noticeable modifications', () => {
    expect(createFormList([{ apple: 1 }, { banana: 'fruit' }])).toStrictEqual([
      { apple: 1 },
      { banana: 'fruit' },
    ]);
  });

  it('detects list created by createFormList function with isFormList function', () => {
    const list = createFormList([{ apple: 1 }, { banana: 'fruit' }]);
    expect(isFormList(list)).toBe(true);
  });

  it('detects lists created without createFormList function with isFormList function', () => {
    expect(isFormList([{ apple: 1 }, { banana: 'fruit' }])).toBe(false);
  });

  it('handles all possible types correctly', () => {
    expect(isFormList(null)).toBe(false);
    expect(isFormList(undefined)).toBe(false);
    expect(isFormList('' as any)).toBe(false);
    expect(isFormList('test' as any)).toBe(false);
    expect(isFormList(20 as any)).toBe(false);
    expect(isFormList({} as any)).toBe(false);
    expect(isFormList(NaN as any)).toBe(false);
    expect(isFormList(String as any)).toBe(false);
    expect(isFormList(false as any)).toBe(false);
    expect(isFormList((() => {}) as any)).toBe(false);
  });
});
