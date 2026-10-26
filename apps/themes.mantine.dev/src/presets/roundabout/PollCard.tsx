import { Avatar, Card, Checkbox, Text, Title, UnstyledButton } from '@mantine/core';
import { getPerson, type PollOption } from './data';
import classes from './Chat.module.css';

interface PollCardProps {
  poll: PollOption[];
  myVote: string | null;
  onVote: (id: string) => void;
}

export function PollCard({ poll, myVote, onVote }: PollCardProps) {
  const total = poll.reduce((sum, option) => sum + option.voters.length, 0);

  return (
    <Card className={classes.card} padding={0} data-card>
      <div className={classes.cardPad} style={{ paddingBottom: 12 }}>
        <Title order={4}>Which cabin?</Title>
        <Text size="sm" mt={2}>
          Pick one. Closes Sunday evening.
        </Text>
        {poll.map((option) => {
          const percent = total ? Math.round((option.voters.length / total) * 100) : 0;
          const selected = myVote === option.id;
          return (
            <UnstyledButton
              key={option.id}
              className={classes.pollOption}
              aria-pressed={selected}
              onClick={() => onVote(option.id)}
            >
              <span className={classes.pollFill} style={{ width: `${percent}%` }} />
              <Checkbox.Indicator
                checked={selected}
                radius="xl"
                size={20}
                className={classes.pollRadio}
              />
              <span className={classes.pollLabel}>{option.label}</span>
              <span className={classes.pollVotes}>
                <Avatar.Group spacing={7}>
                  {option.voters.map((id) => {
                    const person = getPerson(id);
                    return (
                      <Avatar key={id} size="xs" color={person.tone} title={person.name}>
                        {person.short}
                      </Avatar>
                    );
                  })}
                </Avatar.Group>
                {option.voters.length}
              </span>
            </UnstyledButton>
          );
        })}
      </div>
      <div className={classes.cardFoot}>
        <span>
          {total} {total === 1 ? 'vote' : 'votes'}, {myVote ? 'you voted' : 'you haven’t voted'}
        </span>
        <span>You can change your vote</span>
      </div>
    </Card>
  );
}
