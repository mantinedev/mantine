'use client';

import { useState } from 'react';
import {
  IconArrowRight,
  IconCalendar,
  IconChartBar,
  IconCoin,
  IconMapPin,
  IconPhoto,
  IconPlus,
} from '@tabler/icons-react';
import { ActionIcon, Menu, Textarea } from '@mantine/core';
import classes from './Chat.module.css';

export type AttachKind = 'photo' | 'poll' | 'dates' | 'expense' | 'place';

const ATTACHMENTS: {
  kind: AttachKind;
  label: string;
  description: string;
  icon: typeof IconPhoto;
}[] = [
  { kind: 'photo', label: 'Photo', description: 'Share from your camera roll', icon: IconPhoto },
  { kind: 'poll', label: 'Poll', description: 'Let the group vote', icon: IconChartBar },
  { kind: 'dates', label: 'Dates', description: 'Find days that work', icon: IconCalendar },
  { kind: 'expense', label: 'Expense', description: 'Add to the trip split', icon: IconCoin },
  { kind: 'place', label: 'Place', description: 'Drop a pin on the map', icon: IconMapPin },
];

interface ComposerProps {
  onSend: (text: string) => void;
  onAttach: (kind: AttachKind) => void;
}

export function Composer({ onSend, onAttach }: ComposerProps) {
  const [value, setValue] = useState('');

  const send = () => {
    const text = value.trim();
    if (!text) {
      return;
    }
    onSend(text);
    setValue('');
  };

  return (
    <div className={classes.composer}>
      <div className={classes.composerBox}>
        <Menu position="top-start" offset={14}>
          <Menu.Target>
            <ActionIcon aria-label="Attach">
              <IconPlus size={20} stroke={1.8} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            {ATTACHMENTS.map((item) => (
              <Menu.Item
                key={item.kind}
                leftSection={<item.icon size={18} stroke={1.8} />}
                description={item.description}
                onClick={() => onAttach(item.kind)}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
        <Textarea
          className={classes.composerInput}
          variant="unstyled"
          autosize
          minRows={1}
          maxRows={5}
          placeholder="Message Lofoten, March"
          aria-label="Message"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              send();
            }
          }}
        />
        <ActionIcon
          variant="filled"
          radius="xl"
          className={classes.send}
          aria-label="Send"
          disabled={!value.trim()}
          onClick={send}
        >
          <IconArrowRight size={18} stroke={1.8} />
        </ActionIcon>
      </div>
    </div>
  );
}
