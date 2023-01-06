import { sizeUnit } from './size-unit';

describe('@mantine/styles/size-unit', () => {
  it('converts numbers to px', () => {
    expect(sizeUnit(10)).toBe('10px');
    expect(sizeUnit(5.55)).toBe('5.55px');
  });

  it('does nothing to other units', () => {
    expect(sizeUnit('1rem')).toBe('1rem');
    expect(sizeUnit('10%')).toBe('10%');
  });
});
