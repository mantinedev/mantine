import { Avatar, Button, Title } from '@mantine/core';
import { type Donor, formatExact } from './data';
import classes from './Community.module.css';
import sections from './Sections.module.css';

interface DonorsProps {
  donors: Donor[];
  shown: number;
  onShowMore: () => void;
}

export function Donors({ donors, shown, onShowMore }: DonorsProps) {
  return (
    <div>
      <div className={sections.head}>
        <Title order={2}>Recent donations</Title>
      </div>
      <ul className={classes.donors}>
        {donors.slice(0, shown).map((donor) => (
          <li key={donor.id} className={classes.donor}>
            <Avatar className={classes.donorAvatar}>{donor.initials}</Avatar>
            <b className={classes.donorName}>{donor.name}</b>
            <span className={classes.amount}>{formatExact(donor.amount)}</span>
            {donor.message && <span className={classes.message}>{donor.message}</span>}
            <span className={classes.when} data-with-message={donor.message ? true : undefined}>
              {donor.when}
            </span>
          </li>
        ))}
      </ul>
      {shown < donors.length && (
        <Button variant="default" className={classes.more} onClick={onShowMore}>
          Show more donations
        </Button>
      )}
    </div>
  );
}
