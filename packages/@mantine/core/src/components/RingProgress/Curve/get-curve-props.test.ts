import { getCurveProps } from './get-curve-props';

describe('@mantine/core/RingProgress/get-curve-props', () => {
  it('returns correct props data', () => {
    expect(
      getCurveProps({
        sum: 70,
        size: 350,
        thickness: 12,
        value: 56,
        offset: 20,
        root: false,
      })
    ).toStrictEqual({
      cx: 175,
      cy: 175,
      r: 145.5,
      strokeDasharray: '511.9539388289927, 402.2495233656371',
      strokeDashoffset: 20,
      strokeWidth: 12,
      transform: undefined,
    });

    expect(
      getCurveProps({
        sum: 70,
        size: 350,
        thickness: 12,
        value: 56,
        offset: 20,
        root: true,
      })
    ).toStrictEqual({
      cx: 175,
      cy: 175,
      r: 145.5,
      strokeDasharray: '274.26103865838894, 639.9424235362409',
      strokeDashoffset: 0,
      strokeWidth: 12,
      transform: 'scale(1, -1) translate(0, -350)',
    });
  });
});
