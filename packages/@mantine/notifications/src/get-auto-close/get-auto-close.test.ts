import { getAutoClose } from './get-auto-close';

describe('@mantine/notifications/get-auto-close', () => {
  it('prioritizes notification autoClose prop', () => {
    expect(getAutoClose(false, 10)).toBe(10);
    expect(getAutoClose(400, 10)).toBe(10);
    expect(getAutoClose(400, false)).toBe(false);
  });

  it('returns provider value if notification does not have autoClose prop', () => {
    expect(getAutoClose(false, undefined!)).toBe(false);
    expect(getAutoClose(400, undefined!)).toBe(400);
  });
});
