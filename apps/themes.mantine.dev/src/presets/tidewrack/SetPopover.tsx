import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { Button, CloseButton, Popover, Text, Title } from '@mantine/core';
import {
  actName,
  BLURBS,
  DAY_NAMES,
  formatMinutes,
  GENRE_NAMES,
  SETS,
  STAGE_BY_ID,
  type FestivalSet,
} from './data';
import classes from './Timetable.module.css';

interface SetPopoverProps {
  set: FestivalSet;
  opened: boolean;
  starred: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onToggleStar: () => void;
  onOpenSet: (id: string) => void;
}

export function SetPopover({
  set,
  opened,
  starred,
  children,
  onClose,
  onToggleStar,
  onOpenSet,
}: SetPopoverProps) {
  const others = SETS.filter((other) => actName(other) === actName(set) && other.id !== set.id);
  const similar = [
    ...new Set(
      SETS.filter((other) => other.genre === set.genre && other.name !== set.name).map(
        (other) => other.name
      )
    ),
  ].slice(0, 3);

  const findSimilar = (name: string) => {
    const target =
      SETS.find((other) => other.name === name && other.day === set.day) ??
      SETS.find((other) => other.name === name);
    if (target) {
      onOpenSet(target.id);
    }
  };

  return (
    <Popover
      opened={opened}
      onDismiss={onClose}
      position="right-start"
      offset={8}
      width={300}
      trapFocus
      returnFocus
    >
      <Popover.Target>{children}</Popover.Target>
      <Popover.Dropdown className={classes.pop} aria-labelledby={`${set.id}-title`}>
        <CloseButton className={classes.popClose} aria-label="Close" onClick={onClose} />
        <Title order={3} id={`${set.id}-title`} className={classes.popTitle}>
          {set.name}
        </Title>
        <dl className={classes.meta}>
          <dt>When</dt>
          <dd>
            {DAY_NAMES[set.day]}, {formatMinutes(set.start)}–{formatMinutes(set.end)}
          </dd>
          <dt>Stage</dt>
          <dd>{STAGE_BY_ID[set.stage].name}</dd>
          <dt>Genre</dt>
          <dd>{GENRE_NAMES[set.genre]}</dd>
        </dl>
        <Text size="sm" fz={14} mt={10}>
          {BLURBS[set.name]}
        </Text>

        {others.length > 0 && (
          <>
            <Text className={classes.popLabel}>Also plays</Text>
            <div className={classes.popButtons}>
              {others.map((other) => (
                <Button
                  key={other.id}
                  variant="default"
                  size="xs"
                  onClick={() => onOpenSet(other.id)}
                >
                  {DAY_NAMES[other.day].slice(0, 3)} {formatMinutes(other.start)},{' '}
                  {STAGE_BY_ID[other.stage].name.split(' ')[0]}
                </Button>
              ))}
            </div>
          </>
        )}

        <Text className={classes.popLabel}>If you like this</Text>
        <div className={classes.popButtons}>
          {similar.map((name) => (
            <Button key={name} variant="default" size="xs" onClick={() => findSimilar(name)}>
              {name}
            </Button>
          ))}
        </div>

        <Button
          fullWidth
          mt={14}
          data-autofocus
          variant={starred ? 'default' : 'filled'}
          color={starred ? undefined : 'peach'}
          leftSection={starred ? <IconStar size={18} stroke={1.9} /> : <IconStarFilled size={18} />}
          onClick={onToggleStar}
        >
          {starred ? 'Remove from my timetable' : 'Add to my timetable'}
        </Button>
      </Popover.Dropdown>
    </Popover>
  );
}
