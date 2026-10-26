'use client';

import { useState } from 'react';
import { Button } from '@mantine/core';
import classes from './Chat.module.css';

interface Reaction {
  icon: React.ReactNode;
  count: number;
  pressed: boolean;
  label: string;
}

interface ReactionsProps {
  initial: Reaction[];
}

export function Reactions({ initial }: ReactionsProps) {
  const [reactions, setReactions] = useState(initial);

  const toggle = (index: number) =>
    setReactions((current) =>
      current.map((reaction, i) =>
        i === index
          ? {
              ...reaction,
              pressed: !reaction.pressed,
              count: reaction.count + (reaction.pressed ? -1 : 1),
            }
          : reaction
      )
    );

  return (
    <div className={classes.reactions}>
      {reactions.map((reaction, index) => (
        <Button
          key={reaction.label}
          variant="default"
          size="compact-sm"
          radius="xl"
          className={classes.reaction}
          leftSection={reaction.icon}
          aria-pressed={reaction.pressed}
          aria-label={`${reaction.label}, ${reaction.count}`}
          onClick={() => toggle(index)}
        >
          {reaction.count}
        </Button>
      ))}
    </div>
  );
}
