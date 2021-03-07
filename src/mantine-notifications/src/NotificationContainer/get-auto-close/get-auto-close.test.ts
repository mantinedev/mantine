import getAutoClose from './get-auto-close';

describe('@mantine/notifications/get-auto-close', () => {
  it('prioritizes notification autoClose prop', () => {
    expect(getAutoClose(false, { id: 'test', message: 'test', autoClose: 10 })).toBe(10);
    expect(getAutoClose(400, { id: 'test', message: 'test', autoClose: 10 })).toBe(10);
    expect(getAutoClose(400, { id: 'test', message: 'test', autoClose: false })).toBe(false);
  });

  it('returns provider value if notification does not have autoClose prop', () => {
    expect(getAutoClose(false, { id: 'test', message: 'test' })).toBe(false);
    expect(getAutoClose(400, { id: 'test', message: 'test' })).toBe(400);
  });
});
