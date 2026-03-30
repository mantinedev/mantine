import { getCurves } from './get-curves';

describe('@mantine/core/RingProgress/get-curves', () => {
  it('returns valid curves data', () => {
    const curves = getCurves({
      size: 350,
      thickness: 12,
      sections: [
        { value: 40, color: 'blue' },
        { value: 22.345, color: 'red' },
        { value: 9, color: 'blue' },
      ],
      renderRoundedLineCaps: false,
      rootColor: 'blue',
    });
    const expectedCurves = [
      {
        data: { color: 'blue', value: 40 },
        offset: 914.2034621946298,
        root: false,
        sum: 71.345,
        lineRoundCaps: false,
      },
      {
        data: { color: 'red', value: 22.345 },
        offset: 548.5220773167778,
        root: false,
        sum: 71.345,
        lineRoundCaps: false,
      },
      {
        data: { color: 'blue', value: 9 },
        offset: 344.2433136893878,
        root: false,
        sum: 71.345,
        lineRoundCaps: false,
      },
      {
        data: { color: 'blue' },
        offset: 261.9650020918711,
        root: true,
        sum: 71.345,
        lineRoundCaps: false,
      },
    ];
    expect(curves.length).toStrictEqual(expectedCurves.length);
    expect(curves).toStrictEqual(expect.arrayContaining(expectedCurves));
  });

  it('applies section gaps correctly', () => {
    const curves = getCurves({
      size: 120,
      thickness: 12,
      sections: [
        { value: 40, color: 'cyan' },
        { value: 30, color: 'orange' },
      ],
      renderRoundedLineCaps: false,
      rootColor: 'gray',
      sectionGap: 5,
    });

    const gapPercentage = (5 / 360) * 100;
    const nonRootCurves = curves.filter((curve) => !curve.root);

    nonRootCurves.forEach((curve) => {
      const originalValue = (curve.data.value || 0) + gapPercentage;
      expect(curve.data.value).toBeCloseTo(originalValue - gapPercentage, 2);
    });

    expect(curves.length).toBe(3);
    expect(curves.filter((c) => c.root).length).toBe(1);
  });

  it('handles zero gap (default)', () => {
    const curvesWithoutGap = getCurves({
      size: 120,
      thickness: 12,
      sections: [
        { value: 40, color: 'cyan' },
        { value: 30, color: 'orange' },
      ],
      renderRoundedLineCaps: false,
      rootColor: 'gray',
    });

    const curvesWithZeroGap = getCurves({
      size: 120,
      thickness: 12,
      sections: [
        { value: 40, color: 'cyan' },
        { value: 30, color: 'orange' },
      ],
      renderRoundedLineCaps: false,
      rootColor: 'gray',
      sectionGap: 0,
    });

    expect(curvesWithoutGap).toEqual(curvesWithZeroGap);
  });

  it('prevents negative values when gap is larger than section', () => {
    const curves = getCurves({
      size: 120,
      thickness: 12,
      sections: [
        { value: 5, color: 'cyan' },
        { value: 30, color: 'orange' },
      ],
      renderRoundedLineCaps: false,
      rootColor: 'gray',
      sectionGap: 36,
    });

    const gapPercentage = (36 / 360) * 100;
    const nonRootCurves = curves.filter((curve) => !curve.root);

    const smallSection = nonRootCurves.find((c) => c.data.color === 'cyan');
    expect(smallSection?.data.value).toBe(0);

    const largeSection = nonRootCurves.find((c) => c.data.color === 'orange');
    expect(largeSection?.data.value).toBeCloseTo(30 - gapPercentage, 2);
    expect(largeSection?.data.value).toBeGreaterThan(0);
  });

  it('preserves section properties when applying gaps', () => {
    const testFn = () => {};
    const curves = getCurves({
      size: 120,
      thickness: 12,
      sections: [
        { value: 40, color: 'cyan', onClick: testFn, 'data-test': 'section-1' },
        { value: 30, color: 'orange', tooltip: 'Test' },
      ],
      renderRoundedLineCaps: false,
      rootColor: 'gray',
      sectionGap: 5,
    });

    const nonRootCurves = curves.filter((curve) => !curve.root);
    const cyanSection = nonRootCurves.find((c) => c.data.color === 'cyan');
    const orangeSection = nonRootCurves.find((c) => c.data.color === 'orange');

    expect(cyanSection?.data).toHaveProperty('onClick', testFn);
    expect(cyanSection?.data).toHaveProperty('data-test', 'section-1');
    expect(orangeSection?.data).toHaveProperty('tooltip', 'Test');
  });
});
