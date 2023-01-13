import { calc } from './calc';

describe('@mantine/styles/calc', () => {
  it('returns correct calc operation for number', () => {
    expect(calc(10, '/ 2')).toBe('calc(10px / 2)');
    expect(calc(10, '+ 10%')).toBe('calc(10px + 10%)');
  });

  it('returns correct calc operation for other units', () => {
    expect(calc('2rem', '/ 2')).toBe('calc(2rem / 2)');
    expect(calc('2rem', '+ 10%')).toBe('calc(2rem + 10%)');
  });
});
