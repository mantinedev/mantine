import dayjs from 'dayjs';
import { isSponsorEligible } from './is-sponsor-eligible';

const cutoff = dayjs('2026-10-04');
const sponsor = {
  role: 'BACKER',
  tier: 'sponsor',
  lastTransactionAmount: 200,
  lastTransactionAt: '2026-11-03',
};

describe('isSponsorEligible', () => {
  it('rejects a recent sponsor-tier contribution below the minimum', () => {
    expect(isSponsorEligible({ ...sponsor, lastTransactionAmount: 1 }, cutoff)).toBe(false);
  });

  it('accepts a recent contribution at or above the minimum regardless of tier', () => {
    expect(isSponsorEligible(sponsor, cutoff)).toBe(true);
    expect(isSponsorEligible({ ...sponsor, tier: null, lastTransactionAmount: 250 }, cutoff)).toBe(
      true
    );
  });

  it('rejects non-backers, missing transactions, and old transactions', () => {
    expect(isSponsorEligible({ ...sponsor, role: 'ADMIN' }, cutoff)).toBe(false);
    expect(isSponsorEligible({ ...sponsor, lastTransactionAt: null }, cutoff)).toBe(false);
    expect(isSponsorEligible({ ...sponsor, lastTransactionAt: '2026-10-03' }, cutoff)).toBe(false);
  });
});
