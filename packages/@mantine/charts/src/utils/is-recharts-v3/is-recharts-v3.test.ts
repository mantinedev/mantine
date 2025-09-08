describe('@mantine/charts/utils/is-recharts-v3', () => {
  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    jest.dontMock('recharts');
  });

  it('returns false when useActiveTooltipLabel is not present (Recharts v2)', async () => {
    let result: boolean | undefined;

    await jest.isolateModulesAsync(async () => {
      jest.doMock('recharts', () => ({}), { virtual: true });
      const { isRechartsV3 } = await import('./is-recharts-v3');
      result = isRechartsV3();
    });

    expect(result).toBe(false);
  });

  it('returns true when useActiveTooltipLabel is present (Recharts v3)', async () => {
    let result: boolean | undefined;

    await jest.isolateModulesAsync(async () => {
      jest.doMock(
        'recharts',
        () => ({
          useActiveTooltipLabel: () => 'mocked',
        }),
        { virtual: true }
      );
      const { isRechartsV3 } = await import('./is-recharts-v3');
      result = isRechartsV3();
    });

    expect(result).toBe(true);
  });
});
