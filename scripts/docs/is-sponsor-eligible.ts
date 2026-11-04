import dayjs from 'dayjs';

interface SponsorMember {
  role: string;
  tier: string | null;
  lastTransactionAmount: number;
  lastTransactionAt: string | null;
}

export function isSponsorEligible(item: SponsorMember, cutoff: dayjs.Dayjs) {
  return (
    item.role === 'BACKER' &&
    item.lastTransactionAmount >= 200 &&
    !!item.lastTransactionAt &&
    dayjs(item.lastTransactionAt).isAfter(cutoff)
  );
}
