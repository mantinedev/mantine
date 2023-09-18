import { getSelectorClassName } from './get-selector-class-name';

const testClasses = {
  test: '__test',
};

describe('@mantine/core/get-selector-class-name', () => {
  it('returns className for given selector', () => {
    expect(getSelectorClassName({ selector: 'test', classes: testClasses, unstyled: false })).toBe(
      '__test'
    );
  });

  it('returns undefined if unstyled is true', () => {
    expect(getSelectorClassName({ selector: 'test', classes: testClasses, unstyled: true })).toBe(
      undefined
    );
  });

  it('returns undefined if selector is not in classes', () => {
    expect(
      getSelectorClassName({ selector: 'not-test', classes: testClasses, unstyled: false })
    ).toBe(undefined);
  });
});
