import { getTransitionProps } from './get-transition-props';

describe('@mantine/core/Transition/get-transition-props', () => {
  it('returns default transition props if neither transition nor default transition id defined or default transition is not full', () => {
    expect(getTransitionProps(undefined, undefined)).toStrictEqual({
      duration: 100,
      transition: 'fade',
    });

    expect(getTransitionProps(undefined, { duration: 100 })).toStrictEqual({
      duration: 100,
      transition: 'fade',
    });
  });

  it('merges transition props with default transition props', () => {
    expect(
      getTransitionProps({ duration: 200 }, { duration: 100, transition: 'pop' })
    ).toStrictEqual({
      duration: 200,
      transition: 'pop',
    });
  });
});
