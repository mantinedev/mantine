import { useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import {
  Box,
  Button,
  Checkbox,
  ColorSwatch,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { CHANNEL_COLORS, CHANNEL_LABELS, CHANNELS } from '../channels';
import type { Channel, UnscheduledPost } from '../types';
import classes from './Sidebar.module.css';

export const DRAFT_DRAG_TYPE = 'application/x-content-draft';

interface SidebarProps {
  channels: Channel[];
  onChannelsChange: (channels: Channel[]) => void;
  drafts: UnscheduledPost[];
  onNewPost: () => void;
  onDraftClick: (draft: UnscheduledPost) => void;
  /** True while a calendar post that can go back to the drafts is dragged */
  acceptsCalendarDrop: boolean;
  onCalendarDrop: (eventId: string) => void;
}

export function Sidebar({
  channels,
  onChannelsChange,
  drafts,
  onNewPost,
  onDraftClick,
  acceptsCalendarDrop,
  onCalendarDrop,
}: SidebarProps) {
  const [over, setOver] = useState(false);

  return (
    <Stack component="aside" className={classes.root} aria-label="Content planning">
      <Button leftSection={<IconPlus size={18} />} onClick={onNewPost} fullWidth>
        New post
      </Button>

      <Checkbox.Group
        label="Channels"
        value={channels}
        onChange={(value) => onChannelsChange(value as Channel[])}
      >
        <Stack gap="xs" mt="xs">
          {CHANNELS.map((channel) => (
            <Checkbox
              key={channel.value}
              value={channel.value}
              label={channel.label}
              color={channel.color}
            />
          ))}
        </Stack>
      </Checkbox.Group>

      <Box
        component="section"
        aria-label="Unscheduled drafts"
        className={classes.drafts}
        mod={{ 'drop-target': acceptsCalendarDrop, 'drop-over': acceptsCalendarDrop && over }}
        onDragOver={(event) => {
          if (acceptsCalendarDrop) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
            setOver(true);
          }
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(event) => {
          setOver(false);
          if (!acceptsCalendarDrop) {
            return;
          }
          event.preventDefault();
          const { eventId } = JSON.parse(event.dataTransfer.getData('application/json') || '{}');
          if (eventId !== undefined) {
            onCalendarDrop(String(eventId));
          }
        }}
      >
        <Text fw={500} size="sm">
          Unscheduled drafts
        </Text>
        <Text size="xs" mb="xs">
          {acceptsCalendarDrop
            ? 'Drop here to unschedule the draft'
            : 'Drag a draft onto the calendar to schedule it'}
        </Text>

        <Stack gap="xs">
          {drafts.map((draft) => (
            <UnstyledButton
              key={draft.id}
              className={classes.draft}
              draggable
              onDragStart={(event) => {
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData(DRAFT_DRAG_TYPE, draft.id);
              }}
              onClick={() => onDraftClick(draft)}
            >
              <Text size="sm" className={classes.draftTitle}>
                {draft.title}
              </Text>
              <Group gap={6} wrap="nowrap">
                <ColorSwatch
                  color={`var(--mantine-color-${CHANNEL_COLORS[draft.channel]}-filled)`}
                  size={8}
                  withShadow={false}
                />
                <Text size="xs">{CHANNEL_LABELS[draft.channel]}</Text>
              </Group>
            </UnstyledButton>
          ))}

          {drafts.length === 0 && <Text size="sm">No unscheduled drafts</Text>}
        </Stack>
      </Box>
    </Stack>
  );
}
