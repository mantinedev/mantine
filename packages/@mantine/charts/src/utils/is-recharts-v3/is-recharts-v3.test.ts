describe('@mantine/charts/utils/is-recharts-v3', () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('returns false when useActiveTooltipLabel is not present (Recharts v2)', async () => {
    // Mock Recharts v2 (no useActiveTooltipLabel)
    jest.doMock('recharts', () => ({}), { virtual: true });

    // Import after mocking
    const { isRechartsV3 } = await import('./is-recharts-v3');
    expect(isRechartsV3()).toBe(false);
  });

  it('returns true when useActiveTooltipLabel is present (Recharts v3)', async () => {
    // Mock Recharts v3 (with useActiveTooltipLabel)
    jest.doMock(
      'recharts',
      () => ({
        useActiveTooltipLabel: () => 'mocked',
      }),
      { virtual: true }
    );

    // Import after mocking
    const { isRechartsV3 } = await import('./is-recharts-v3');
    expect(isRechartsV3()).toBe(true);
  });
});
