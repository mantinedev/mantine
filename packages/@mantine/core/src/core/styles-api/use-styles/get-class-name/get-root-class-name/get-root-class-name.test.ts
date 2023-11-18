import { getRootClassName } from './get-root-class-name';

describe('@mantine/core/get-root-class-name', () => {
  it('returns given className if selector is rootSelector', () => {
    expect(getRootClassName({ rootSelector: 'root', selector: 'root', className: 'test' })).toBe(
      'test'
    );
  });

  it('returns undefined if selector is not rootSelector', () => {
    expect(
      getRootClassName({ rootSelector: 'root', selector: 'not-root', className: 'test' })
    ).toBe(undefined);
  });

  it('returns undefined if className is undefined', () => {
    expect(getRootClassName({ rootSelector: 'root', selector: 'root', className: undefined })).toBe(
      undefined
    );
  });
});
