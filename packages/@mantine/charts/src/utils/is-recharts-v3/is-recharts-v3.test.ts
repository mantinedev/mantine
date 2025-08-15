describe('@mantine/charts/utils/is-recharts-v3', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('returns false when useActiveTooltipLabel is not present (Recharts v2)', async () => {
    await jest.isolateModulesAsync(async () => {
      jest.doMock('recharts', () => ({}), { virtual: true });
      const { isRechartsV3 } = await import('./is-recharts-v3');
      expect(isRechartsV3()).toBe(false);
    });
  });

  it('returns true when useActiveTooltipLabel is present (Recharts v3)', async () => {
    await jest.isolateModulesAsync(async () => {
      jest.doMock(
        'recharts',
        () => ({
          useActiveTooltipLabel: () => 'mocked',
        }),
        { virtual: true }
      );
      const { isRechartsV3 } = await import('./is-recharts-v3');
      expect(isRechartsV3()).toBe(true);
    });
  });
});
