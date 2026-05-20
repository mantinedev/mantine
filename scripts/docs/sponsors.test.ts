import dayjs from 'dayjs';

interface OpenCollectiveMember {
  name: string;
  role: string;
  tier: string;
  lastTransactionAt: string | null;
}

function isRecentSponsor(
  item: OpenCollectiveMember,
  thirtyOneDaysAgo: dayjs.Dayjs,
  onInvalid: (msg: string) => void
): boolean {
  const isActiveSponsor = item.role === 'BACKER' && item.tier === 'sponsor';
  if (!item.lastTransactionAt) {
    return false;
  }
  const lastTransaction = dayjs(item.lastTransactionAt);
  if (!lastTransaction.isValid()) {
    onInvalid(
      `Skipping sponsor "${item.name}" — OpenCollective returned unparseable lastTransactionAt: ${item.lastTransactionAt}`
    );
    return false;
  }
  const hasRecentTransaction = lastTransaction.isAfter(thirtyOneDaysAgo);
  return isActiveSponsor && hasRecentTransaction;
}

describe('scripts/docs/sponsors filter', () => {
  const thirtyOneDaysAgo = dayjs().subtract(31, 'day');

  it('keeps active sponsors whose last transaction is within the 31-day window', () => {
    const onInvalid = jest.fn();
    expect(
      isRecentSponsor(
        {
          name: 'Acme',
          role: 'BACKER',
          tier: 'sponsor',
          lastTransactionAt: dayjs().subtract(5, 'day').toISOString(),
        },
        thirtyOneDaysAgo,
        onInvalid
      )
    ).toBe(true);
    expect(onInvalid).not.toHaveBeenCalled();
  });

  it('drops sponsors whose last transaction is older than 31 days', () => {
    const onInvalid = jest.fn();
    expect(
      isRecentSponsor(
        {
          name: 'Stale',
          role: 'BACKER',
          tier: 'sponsor',
          lastTransactionAt: dayjs().subtract(60, 'day').toISOString(),
        },
        thirtyOneDaysAgo,
        onInvalid
      )
    ).toBe(false);
    expect(onInvalid).not.toHaveBeenCalled();
  });

  it('drops sponsors whose lastTransactionAt is missing without warning', () => {
    const onInvalid = jest.fn();
    expect(
      isRecentSponsor(
        { name: 'NoTx', role: 'BACKER', tier: 'sponsor', lastTransactionAt: null },
        thirtyOneDaysAgo,
        onInvalid
      )
    ).toBe(false);
    expect(onInvalid).not.toHaveBeenCalled();
  });

  it('drops sponsors whose lastTransactionAt is unparseable and warns with the offending value', () => {
    const onInvalid = jest.fn();
    expect(
      isRecentSponsor(
        {
          name: 'Bad Date Co',
          role: 'BACKER',
          tier: 'sponsor',
          lastTransactionAt: 'not-a-real-iso-string',
        },
        thirtyOneDaysAgo,
        onInvalid
      )
    ).toBe(false);
    expect(onInvalid).toHaveBeenCalledTimes(1);
    expect(onInvalid).toHaveBeenCalledWith(expect.stringContaining('Bad Date Co'));
    expect(onInvalid).toHaveBeenCalledWith(expect.stringContaining('not-a-real-iso-string'));
  });
});
