'use client';

import { useState } from 'react';
import { Button, Group, Modal, Radio, Stack, Text } from '@mantine/core';
import { type Conversation, money } from './data';

export type SoldBuyer = 'them' | 'other' | 'off';

interface SoldModalProps {
  conversation: Conversation;
  opened: boolean;
  onClose: () => void;
  onConfirm: (buyer: SoldBuyer) => void;
}

export function SoldModal({ conversation, opened, onClose, onConfirm }: SoldModalProps) {
  const [buyer, setBuyer] = useState<SoldBuyer>('them');

  const options: { value: SoldBuyer; label: string }[] = [
    {
      value: 'them',
      label: `${conversation.name}${conversation.agreed ? `, for ${money(conversation.agreed)}` : ''}`,
    },
    { value: 'other', label: 'Someone else on Second Home' },
    { value: 'off', label: 'Sold somewhere else' },
  ];

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Mark as sold"
      withCloseButton={false}
      withinPortal={false}
      lockScroll={false}
      onExitTransitionEnd={() => setBuyer('them')}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onConfirm(buyer);
        }}
      >
        <Stack gap={14}>
          <Text fz={14}>
            Who bought the {conversation.item.title.toLowerCase()}? Other people chatting about it
            will see that it’s gone.
          </Text>
          <Radio.Group
            value={buyer}
            onChange={(value) => setBuyer(value as SoldBuyer)}
            aria-label="Buyer"
          >
            <Stack gap={8}>
              {options.map((option) => (
                <Radio.Card
                  key={option.value}
                  value={option.value}
                  data-autofocus={option.value === buyer || undefined}
                >
                  <Radio.Indicator />
                  {option.label}
                </Radio.Card>
              ))}
            </Stack>
          </Radio.Group>
          <Group justify="flex-end" gap={8}>
            <Button variant="default" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Mark as sold</Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
