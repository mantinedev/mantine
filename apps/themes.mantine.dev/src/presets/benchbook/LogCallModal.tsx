'use client';

import { useState } from 'react';
import { IconX } from '@tabler/icons-react';
import { Button, Modal, NativeSelect, Radio, Stack, Textarea, TextInput } from '@mantine/core';
import classes from './Benchbook.module.css';

const LENGTHS = ['5 minutes', '15 minutes', '30 minutes', 'An hour or more'];

const OUTCOMES = [
  'Client is ready to go ahead',
  'Client wants changes to the quote',
  'No answer, try again later',
];

export interface CallLog {
  length: string;
  outcome: string;
  notes: string;
}

interface LogCallModalProps {
  opened: boolean;
  onClose: () => void;
  onSave: (call: CallLog) => void;
}

export function LogCallModal({ opened, onClose, onSave }: LogCallModalProps) {
  const [length, setLength] = useState(LENGTHS[1]);
  const [outcome, setOutcome] = useState(OUTCOMES[0]);
  const [notes, setNotes] = useState(
    'Hannah is happy with the walnut sample. Wants the overhang at 300 mm for two stools.'
  );

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Log a call"
      centered
      withinPortal={false}
      lockScroll={false}
      closeButtonProps={{ icon: <IconX size={20} stroke={1.75} />, size: 34 }}
      classNames={{
        overlay: classes.modalOverlay,
        inner: classes.modalInner,
        content: classes.modalContent,
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSave({ length, outcome, notes });
        }}
      >
        <Stack gap="md">
          <div className={classes.formRow}>
            <TextInput label="Date" defaultValue="27 Oct 2026, 11:30" data-autofocus />
            <NativeSelect
              label="Length"
              data={LENGTHS}
              value={length}
              onChange={(event) => setLength(event.currentTarget.value)}
            />
          </div>
          <Radio.Group label="Outcome" value={outcome} onChange={setOutcome}>
            <Stack gap="xs">
              {OUTCOMES.map((item) => (
                <Radio key={item} value={item} label={item} />
              ))}
            </Stack>
          </Radio.Group>
          <Textarea
            label="Notes"
            placeholder="What did you agree?"
            minRows={3}
            autosize
            value={notes}
            onChange={(event) => setNotes(event.currentTarget.value)}
          />
        </Stack>
        <div className={classes.modalFoot}>
          <Button variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save call</Button>
        </div>
      </form>
    </Modal>
  );
}
