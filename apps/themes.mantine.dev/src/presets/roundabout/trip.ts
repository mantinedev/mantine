import {
  type Availability,
  DATES_COUNT,
  DATES_START,
  EXPENSES,
  PEOPLE,
  type PersonId,
  TODAY,
} from './data';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function getDay(index: number) {
  return new Date(DATES_START.getFullYear(), DATES_START.getMonth(), DATES_START.getDate() + index);
}

export function formatDay(date: Date) {
  return `${WEEKDAYS[date.getDay()]} ${date.getDate()}`;
}

export function isWeekend(date: Date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

export interface BestRun {
  start: number;
  length: number;
  need: number;
}

export function getCounts(availability: Availability) {
  return Array.from({ length: DATES_COUNT }, (_, index) =>
    PEOPLE.reduce((count, person) => count + availability[person.id][index], 0)
  );
}

export function getBestRun(counts: number[]): BestRun | null {
  let best: BestRun | null = null;
  for (let need = PEOPLE.length; need >= 1 && !best; need -= 1) {
    let start = -1;
    for (let index = 0; index <= DATES_COUNT; index += 1) {
      const ok = index < DATES_COUNT && counts[index] >= need;
      if (ok && start < 0) {
        start = index;
      }
      if (!ok && start >= 0) {
        if (!best || index - start > best.length) {
          best = { start, length: index - start, need };
        }
        start = -1;
      }
    }
  }
  return best;
}

export function getRunLabel(run: BestRun) {
  const from = getDay(run.start);
  const to = getDay(run.start + run.length - 1);
  return `${formatDay(from)}${run.length > 1 ? ` to ${formatDay(to)}` : ''} March`;
}

export function getRunRange(run: BestRun) {
  return `${formatDay(getDay(run.start))} to ${formatDay(getDay(run.start + run.length - 1))} March`;
}

export function getDaysToGo(run: BestRun) {
  return Math.round((getDay(run.start).getTime() - TODAY.getTime()) / 86400000);
}

export function getRunHint(run: BestRun) {
  const who = run.need === PEOPLE.length ? 'Everyone is free' : `${run.need} of 6 free`;
  return `${who}, ${run.length} ${run.length === 1 ? 'day' : 'days'}`;
}

export interface Debt {
  from: PersonId;
  to: PersonId;
  amount: number;
}

export interface Settlement {
  from: PersonId;
  to: PersonId;
  amount: number;
}

export function getTotalSpent() {
  return EXPENSES.reduce((sum, expense) => sum + expense.amount, 0);
}

export function getDebts(settlements: Settlement[]): Debt[] {
  const share = getTotalSpent() / PEOPLE.length;
  const balance = Object.fromEntries(PEOPLE.map((person) => [person.id, -share])) as Record<
    PersonId,
    number
  >;
  EXPENSES.forEach((expense) => {
    balance[expense.by] += expense.amount;
  });
  settlements.forEach((settlement) => {
    balance[settlement.from] += settlement.amount;
    balance[settlement.to] -= settlement.amount;
  });

  const debtors = PEOPLE.filter((person) => balance[person.id] < -0.5).map((person) => ({
    id: person.id,
    value: -balance[person.id],
  }));
  const creditors = PEOPLE.filter((person) => balance[person.id] > 0.5).map((person) => ({
    id: person.id,
    value: balance[person.id],
  }));

  const debts: Debt[] = [];
  debtors.forEach((debtor) => {
    creditors.forEach((creditor) => {
      if (debtor.value < 0.5 || creditor.value < 0.5) {
        return;
      }
      const amount = Math.min(debtor.value, creditor.value);
      debts.push({ from: debtor.id, to: creditor.id, amount: Math.round(amount) });
      debtor.value -= amount;
      creditor.value -= amount;
    });
  });
  return debts;
}

export function formatAmount(value: number) {
  return value.toLocaleString('en-US');
}
