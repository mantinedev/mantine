import { transitions } from '../transitions';
import { getTransitionStyles } from './get-transition-styles';

const customTransition = {
  in: { opacity: 1, backgroundColor: 'red' },
  out: { opacity: 0, backgroundColor: 'blue' },
  common: { color: 'green' },
  transitionProperty: 'color, background-color',
};

describe('@mantine/core/Transition/get-transition-styles', () => {
  it('returns predefined transition with string value', () => {
    expect(
      getTransitionStyles({
        transition: 'slide-up',
        state: 'entered',
        duration: 625,
        timingFunction: 'ease',
      })
    ).toStrictEqual({
      ...transitions['slide-up'].in,
      ...transitions['slide-up'].common,
      transitionProperty: transitions['slide-up'].transitionProperty,
      transitionDuration: '625ms',
      transitionTimingFunction: 'ease',
    });

    expect(
      getTransitionStyles({
        transition: 'slide-up',
        state: 'exited',
        duration: 625,
        timingFunction: 'ease',
      })
    ).toStrictEqual({
      ...transitions['slide-up'].out,
      ...transitions['slide-up'].common,
      transitionProperty: transitions['slide-up'].transitionProperty,
      transitionDuration: '625ms',
      transitionTimingFunction: 'ease',
    });
  });

  it('accepts custom transitions', () => {
    expect(
      getTransitionStyles({
        transition: customTransition,
        state: 'entered',
        duration: 625,
        timingFunction: 'ease',
      })
    ).toStrictEqual({
      ...customTransition.in,
      ...customTransition.common,
      transitionProperty: customTransition.transitionProperty,
      transitionDuration: '625ms',
      transitionTimingFunction: 'ease',
    });

    expect(
      getTransitionStyles({
        transition: customTransition,
        state: 'exited',
        duration: 625,
        timingFunction: 'ease',
      })
    ).toStrictEqual({
      ...customTransition.out,
      ...customTransition.common,
      transitionProperty: customTransition.transitionProperty,
      transitionDuration: '625ms',
      transitionTimingFunction: 'ease',
    });
  });
});
