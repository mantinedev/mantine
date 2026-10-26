'use client';

import { useCallback, useRef, useState } from 'react';
import { MantineProvider, Overlay, Transition } from '@mantine/core';
import { useElementSize, useMergedRef } from '@mantine/hooks';
import { PresetFrame } from '@/components/PresetFrame';
import { Chat, type ChatHandle } from './Chat';
import { AVAILABILITY, type Availability, POLL, type PollOption } from './data';
import { GroupsSidebar } from './GroupsSidebar';
import { cssVariablesResolver, theme } from './theme';
import { getDebts, type Settlement } from './trip';
import { TripPanel } from './TripPanel';
import classes from './Roundabout.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Gabarito:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap';

const NARROW_WIDTH = 1040;

function withMyVote(myVote: string | null): PollOption[] {
  return POLL.map((option) => ({
    ...option,
    voters: option.id === myVote ? [...option.voters, 'sam'] : option.voters,
  }));
}

function TripChat() {
  const { ref: sizeRef, width } = useElementSize();
  const rootRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(sizeRef, rootRef);
  const chatRef = useRef<ChatHandle>(null);

  const [panelClosed, setPanelClosed] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [groupsOpen, setGroupsOpen] = useState(false);
  const [availability, setAvailability] = useState<Availability>(AVAILABILITY);
  const [myVote, setMyVote] = useState<string | null>(null);
  const [settlements, setSettlements] = useState<Settlement[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<number>(undefined);

  const narrow = width > 0 && width <= NARROW_WIDTH;
  const isNarrow = () => (rootRef.current?.clientWidth ?? 0) <= NARROW_WIDTH;
  const panelPressed = narrow ? panelOpen : !panelClosed;
  const poll = withMyVote(myVote);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const setPanel = (open: boolean) => {
    if (isNarrow()) {
      setPanelOpen(open);
    } else {
      setPanelClosed(!open);
    }
  };

  const closeOverlays = () => {
    setGroupsOpen(false);
    setPanelOpen(false);
  };

  const settle = () => {
    const mine = getDebts(settlements).find((debt) => debt.from === 'sam' && debt.to === 'ingrid');
    if (!mine) {
      showToast('Nothing left to settle with Ingrid');
      return null;
    }
    setSettlements((current) => [...current, mine]);
    showToast('Marked as paid to Ingrid');
    return mine.amount;
  };

  const handleAttach = (kind: string) => {
    if (kind === 'poll') {
      chatRef.current?.jumpTo('poll');
      showToast('There’s already a poll open, vote on it here');
    }
    if (kind === 'dates') {
      chatRef.current?.jumpTo('dates');
      showToast('Mark your days in the grid');
    }
    if (kind === 'expense') {
      setPanel(true);
      showToast('Expenses are listed in the trip panel');
    }
  };

  return (
    <div
      ref={mergedRef}
      className={classes.root}
      data-panel-closed={panelClosed || undefined}
      data-panel-open={(narrow && panelOpen) || undefined}
      data-groups-open={groupsOpen || undefined}
    >
      <GroupsSidebar
        className={classes.groups}
        onOtherGroup={() => showToast('Only this group is filled in for the preview')}
      />

      <Chat
        ref={chatRef}
        className={classes.chat}
        availability={availability}
        onAvailabilityChange={setAvailability}
        poll={poll}
        myVote={myVote}
        onVote={(id) => setMyVote((current) => (current === id ? null : id))}
        onSettle={settle}
        onAttach={handleAttach}
        panelPressed={panelPressed}
        onTogglePanel={() => setPanel(isNarrow() ? !panelOpen : panelClosed)}
        onShowGroups={() => setGroupsOpen(true)}
      />

      <TripPanel
        className={classes.trip}
        availability={availability}
        poll={poll}
        settlements={settlements}
        onClose={() => setPanel(false)}
      />

      {(groupsOpen || (narrow && panelOpen)) && (
        <Overlay
          color="rgb(5, 12, 22)"
          backgroundOpacity={0.4}
          zIndex={25}
          onClick={closeOverlays}
        />
      )}

      <Transition mounted={toast !== null} transition="fade-up" duration={160}>
        {(styles) => (
          <div className={classes.toastAnchor}>
            <div className={classes.toast} style={styles} role="status">
              {toast}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export function Roundabout() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <TripChat />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}
