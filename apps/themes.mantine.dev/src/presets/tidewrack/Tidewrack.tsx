'use client';

import { useEffect, useRef, useState } from 'react';
import { localStorageColorSchemeManager, MantineProvider, Text, Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { ClashBanner } from './ClashBanner';
import { Controls } from './Controls';
import {
  alternativeFor,
  clashesWith,
  DAY_NAMES,
  formatMinutes,
  INITIAL_STARRED,
  NOW,
  SET_BY_ID,
  type DayId,
  type FestivalSet,
  type GenreId,
  type StageId,
  type View,
} from './data';
import { Masthead } from './Masthead';
import { MyTimetable } from './MyTimetable';
import { SiteMap } from './SiteMap';
import { cssVariablesResolver, theme } from './theme';
import { Timetable } from './Timetable';
import classes from './Tidewrack.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Chivo:wght@400;500;700&display=swap';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'tidewrack-color-scheme' });

function Festival() {
  const [day, setDay] = useState<DayId>('sat');
  const [view, setView] = useState<View>('all');
  const [genres, setGenres] = useState<GenreId[]>([]);
  const [query, setQuery] = useState('');
  const [live, setLive] = useState(false);
  const [starred, setStarred] = useState(() => new Set(INITIAL_STARRED));
  const [openSet, setOpenSet] = useState<string | null>(null);
  const [mapStage, setMapStage] = useState<StageId>('t');
  const [hoverStage, setHoverStage] = useState<StageId | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<number>(undefined);
  const nowLineRef = useRef<HTMLDivElement>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToast(null), 2400);
  };

  useEffect(() => () => window.clearTimeout(toastTimeout.current), []);

  useEffect(() => {
    if (live && nowLineRef.current) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      nowLineRef.current.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
    }
  }, [live]);

  const changeDay = (value: DayId) => {
    setDay(value);
    setOpenSet(null);
    if (live && value !== NOW.day) {
      setLive(false);
    }
  };

  const changeView = (value: View) => {
    setView(value);
    setOpenSet(null);
  };

  const changeLive = (value: boolean) => {
    setLive(value);
    if (value) {
      setDay(NOW.day);
      setView('all');
    }
  };

  const toggleStar = (id: string) => {
    const set = SET_BY_ID[id];
    const next = new Set(starred);
    if (next.has(id)) {
      next.delete(id);
      showToast(`${set.name} removed from your timetable`);
    } else {
      next.add(id);
      showToast(
        clashesWith(next, set)
          ? `${set.name} added, and it clashes with another set`
          : `${set.name} added to ${DAY_NAMES[set.day]}`
      );
    }
    setStarred(next);
  };

  const swap = (from: FestivalSet, to: FestivalSet) => {
    const next = new Set(starred);
    next.delete(from.id);
    next.add(to.id);
    setStarred(next);
    showToast(`${to.name} moved to ${DAY_NAMES[to.day]} ${formatMinutes(to.start)}`);
  };

  const openSetById = (id: string) => {
    const set = SET_BY_ID[id];
    setDay(set.day);
    setView('all');
    setOpenSet(id);
  };

  const liveNames = live
    ? Object.values(SET_BY_ID)
        .filter((set) => set.day === NOW.day && set.start <= NOW.minute && NOW.minute < set.end)
        .map((set) => set.name)
    : null;

  return (
    <div className={classes.root}>
      <Masthead
        liveNames={liveNames}
        starredCount={starred.size}
        onMyTimetable={() => changeView('mine')}
        onTickets={() => showToast('Weekend tickets from £145, day tickets from £68')}
      />

      <Controls
        day={day}
        starred={starred}
        view={view}
        genres={genres}
        query={query}
        live={live}
        onDayChange={changeDay}
        onViewChange={changeView}
        onGenresChange={setGenres}
        onQueryChange={setQuery}
        onLiveChange={changeLive}
      />

      <ClashBanner
        day={day}
        starred={starred}
        getAlternative={(set) => alternativeFor(starred, set)}
        onSwap={swap}
      />

      {view === 'all' ? (
        <Timetable
          day={day}
          starred={starred}
          genres={genres}
          query={query}
          live={live}
          openSet={openSet}
          highlightedStage={hoverStage}
          nowLineRef={nowLineRef}
          onOpenSetChange={setOpenSet}
          onOpenSetById={openSetById}
          onToggleStar={toggleStar}
          onHighlightStage={setHoverStage}
        />
      ) : (
        <MyTimetable
          day={day}
          starred={starred}
          onToggleStar={toggleStar}
          onShowAll={() => changeView('all')}
        />
      )}

      <SiteMap
        stage={mapStage}
        highlightedStage={hoverStage ?? mapStage}
        onStageChange={setMapStage}
        onHighlightStage={setHoverStage}
      />

      <footer className={classes.footer}>
        <Text size="sm" fz={12.5}>
          <b>Tidewrack</b> is a fictional festival. Acts, times and the site are made up for this
          mockup.
        </Text>
        <Text size="sm" fz={12.5}>
          Photos from Wikimedia Commons: open-air stage by Gortyna (CC BY-SA 4.0); stage lights by
          Tadeáš Bednarz (CC BY-SA 4.0); fire performance by Artem Kavalerov (CC0); Cheswick dunes
          by Richard West (CC BY-SA 2.0); dune sunset by M.Fitzsimmons (CC BY-SA 3.0).
        </Text>
      </footer>

      <div className={classes.toastAnchor}>
        <Transition mounted={toast !== null} transition="pop" duration={120}>
          {(styles) => (
            <div className={classes.toast} style={styles} role="status">
              {toast}
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}

export function Tidewrack() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
        defaultColorScheme="dark"
        colorSchemeManager={colorSchemeManager}
      >
        <PresetFrame>
          <Festival />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}
