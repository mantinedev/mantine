import { IconStar, IconX } from '@tabler/icons-react';
import { ActionIcon, Button, Modal, Title } from '@mantine/core';
import { schedule, type Speaker } from './data';
import { SpeakerArt } from './SpeakerArt';
import { TrackTag } from './TrackTag';
import classes from './Program.module.css';

interface SpeakerModalProps {
  speaker: Speaker | null;
  opened: boolean;
  starred: boolean;
  onClose: () => void;
  onToggleStar: (slotId: string) => void;
}

function getWhen(speaker: Speaker) {
  const slot = [...schedule.thu, ...schedule.fri].find((item) => item.id === speaker.slot);
  const day = speaker.slot.startsWith('thu') ? 'Thursday 13 May' : 'Friday 14 May';
  return slot ? `${day}, ${slot.time}, ${slot.room}` : day;
}

export function SpeakerModal({
  speaker,
  opened,
  starred,
  onClose,
  onToggleStar,
}: SpeakerModalProps) {
  return (
    <Modal.Root opened={opened} onClose={onClose}>
      <Modal.Overlay />
      <Modal.Content>
        {speaker && (
          <>
            <div className={classes.modalTop}>
              <SpeakerArt speaker={speaker} className={classes.modalArt} />
              <div>
                <Modal.Title className={classes.modalName}>{speaker.name}</Modal.Title>
                <div className={classes.modalRole}>{speaker.role}</div>
              </div>
              <ActionIcon aria-label="Close" onClick={onClose} data-autofocus>
                <IconX size={20} stroke={1.9} />
              </ActionIcon>
            </div>
            <div className={classes.modalBody}>
              <TrackTag track={speaker.track} suffix=" track" />
              <Title order={3} className={classes.modalTalk}>
                {speaker.talk}
              </Title>
              <span className={classes.modalWhen}>{getWhen(speaker)}</span>
              <p>{speaker.abstract}</p>
              <p>{speaker.bio}</p>
            </div>
            <div className={classes.modalFoot}>
              <Button
                variant={starred ? 'default' : 'filled'}
                leftSection={<IconStar size={18} stroke={1.9} />}
                onClick={() => onToggleStar(speaker.slot)}
              >
                {starred ? 'In my schedule' : 'Add to my schedule'}
              </Button>
              <Button variant="default" onClick={onClose}>
                Close
              </Button>
            </div>
          </>
        )}
      </Modal.Content>
    </Modal.Root>
  );
}
