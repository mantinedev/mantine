import { noop } from '../noop/noop';
import { closeOnEscape } from './close-on-escape';

const mockEvent: any = { key: 'Escape', code: 'Escape' };

describe('@mantine/core/close-on-escape', () => {
  it('calls given callback function', () => {
    const spy = jest.fn();
    closeOnEscape(spy)(mockEvent);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not call callback if options.active is false', () => {
    const spy = jest.fn();
    closeOnEscape(spy, { active: false })(mockEvent);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('does not call callback if button that is pressed is not escape', () => {
    const spy = jest.fn();
    closeOnEscape(spy, { active: false })({ key: 'ArrowRight', code: 'ArrowRight' } as any);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('does not throw if callback is not a function', () => {
    expect(() => closeOnEscape(undefined, { active: false })(mockEvent)).not.toThrow();
    expect(() => closeOnEscape(null!, { active: false })(mockEvent)).not.toThrow();
  });

  it('calls given trigger when callback triggers', () => {
    const spy = jest.fn();
    closeOnEscape(noop, { active: true, onTrigger: spy })(mockEvent);
    expect(spy).toHaveBeenCalledTimes(1);

    closeOnEscape(noop, { active: false, onTrigger: spy })(mockEvent);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
