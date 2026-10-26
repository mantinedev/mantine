import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Title, useMantineColorScheme } from '@mantine/core';
import { IMAGES } from './data';
import classes from './Masthead.module.css';

interface MastheadProps {
  liveNames: string[] | null;
  starredCount: number;
  onMyTimetable: () => void;
  onTickets: () => void;
}

export function Masthead({ liveNames, starredCount, onMyTimetable, onTickets }: MastheadProps) {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.mast}>
      <img
        className={classes.photo}
        src={IMAGES.hero}
        alt="An open-air festival stage lit up at dusk, seen from behind the crowd"
      />
      {liveNames && (
        <div className={classes.ticker}>
          <i />
          <span>Live now: {liveNames.join(', ')}</span>
        </div>
      )}
      <div className={classes.inner}>
        <div className={classes.top}>
          <span className={classes.where}>Cheswick Sands, Northumberland</span>
          <div className={classes.actions}>
            <ActionIcon
              className={classes.glass}
              aria-label="Switch color scheme"
              onClick={toggleColorScheme}
            >
              <IconSun size={18} stroke={1.9} className={classes.sun} />
              <IconMoon size={18} stroke={1.9} className={classes.moon} />
            </ActionIcon>
            <Button
              variant="default"
              className={`${classes.glass} ${classes.mine}`}
              rightSection={<Badge color="peach">{starredCount}</Badge>}
              onClick={onMyTimetable}
            >
              My timetable
            </Button>
            <Button className={classes.tickets} onClick={onTickets}>
              Tickets
            </Button>
          </div>
        </div>
        <div className={classes.bottom}>
          <Title order={1} className={classes.wordmark}>
            Tidewrack
          </Title>
          <div className={classes.dates}>
            7–9 August 2027<span>Four stages on a beach meadow, 12:00 till late</span>
          </div>
        </div>
      </div>
    </header>
  );
}
