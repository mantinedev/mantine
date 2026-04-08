import { hashStyleProps } from './hash-styles';

describe('hashStyleProps', () => {
  it('returns deterministic hash for same input', () => {
    const a = hashStyleProps({ color: 'red' }, undefined);
    const b = hashStyleProps({ color: 'red' }, undefined);
    expect(a).toBe(b);
  });

  it('returns different hash for different styles', () => {
    const a = hashStyleProps({ color: 'red' }, undefined);
    const b = hashStyleProps({ color: 'blue' }, undefined);
    expect(a).not.toBe(b);
  });

  it('returns different hash for different media', () => {
    const a = hashStyleProps({ color: 'red' }, [{ query: '(min-width:500px)', styles: { color: 'blue' } }]);
    const b = hashStyleProps({ color: 'red' }, [{ query: '(min-width:800px)', styles: { color: 'blue' } }]);
    expect(a).not.toBe(b);
  });

  it('includes media in hash', () => {
    const a = hashStyleProps({ color: 'red' }, undefined);
    const b = hashStyleProps({ color: 'red' }, [{ query: '(min-width:500px)', styles: { color: 'blue' } }]);
    expect(a).not.toBe(b);
  });

  it('returns string starting with __mdi__-', () => {
    const result = hashStyleProps({ color: 'red' }, undefined);
    expect(result).toMatch(/^__mdi__-/);
  });

  it('handles undefined styles', () => {
    const result = hashStyleProps(undefined, [{ query: '(min-width:500px)', styles: { color: 'blue' } }]);
    expect(result).toMatch(/^__mdi__-/);
  });
});
