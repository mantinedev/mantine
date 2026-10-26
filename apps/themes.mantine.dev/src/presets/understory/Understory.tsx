'use client';

import { useCallback, useRef, useState } from 'react';
import { Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { Chat } from './Chat';
import { type Plant, type PlantKey, PLANTS, type Season } from './data';
import { currentVersion, getPlant, type PlanState, type Swaps, type View } from './model';
import { PlanCard } from './PlanCard';
import { PlantList } from './PlantList';
import { ShoppingList } from './ShoppingList';
import { cssVariablesResolver, theme } from './theme';
import { TopBar } from './TopBar';
import classes from './Understory.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';

export type Pane = 'chat' | 'plan';

function capitalize(value: string) {
  return value.replace(/^./, (char) => char.toUpperCase());
}

function Planner() {
  const [season, setSeason] = useState<Season>('summer');
  const [versions, setVersions] = useState([1, 2]);
  const [view, setView] = useState<View>(2);
  const [pets, setPets] = useState(false);
  const [swaps, setSwaps] = useState<Swaps>({});
  const [highlighted, setHighlighted] = useState<PlantKey | null>(null);
  const [pane, setPane] = useState<Pane>('plan');
  const [toast, setToast] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const timeout = useRef<number>(undefined);

  const state: PlanState = { season, versions, view, pets, swaps };

  const showToast = useCallback((message: string) => {
    setToast(message);
    setToastVisible(true);
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setToastVisible(false), 2400);
  }, []);

  const compare = () => {
    setView('compare');
    setPane('plan');
  };

  const addVersion = () => {
    if (versions.includes(3)) {
      return false;
    }
    setVersions([...versions, 3]);
    setView(3);
    showToast('Plan v3 is ready');
    return true;
  };

  const swap = (key: PlantKey, index: number) => {
    const [name, description] = PLANTS[key].swaps[index];
    const old = getPlant(key, swaps).name;
    const parts = description.split(',');
    const replacement: Partial<Plant> = {
      name,
      latin: parts[0],
      toxic: false,
      photo: undefined,
      note: `Swapped in for ${old}. ${capitalize(parts.slice(1).join(',').trim())}.`,
    };
    setSwaps({ ...swaps, [key]: replacement });
    showToast(`Swapped ${old} for ${name}`);
  };

  return (
    <div className={classes.root}>
      <TopBar
        pane={pane}
        onPaneChange={setPane}
        onShare={() => showToast(`Link to plan v${currentVersion(state)} copied`)}
      />

      <div className={classes.body} data-pane={pane}>
        <Chat
          className={classes.chat}
          pets={pets}
          onPetsChange={setPets}
          onCompare={compare}
          onAddVersion={addVersion}
          onToast={showToast}
        />

        <section className={classes.canvas} aria-label="Plan">
          <PlanCard
            state={state}
            highlighted={highlighted}
            onHighlight={setHighlighted}
            onViewChange={setView}
            onSeasonChange={setSeason}
          />

          <div className={classes.grid}>
            <PlantList
              state={state}
              highlighted={highlighted}
              onHighlight={setHighlighted}
              onSwap={swap}
            />
            <ShoppingList state={state} onToast={showToast} />
          </div>

          <p className={classes.credits}>
            Plant photos from Wikimedia Commons: hosta by Shadowmeld Photography (CC BY-SA 4.0);
            brunnera by Didier Descouens (CC BY-SA 4.0); hellebore by Dominicus Johannes Bergsma (CC
            BY-SA 4.0); Japanese anemone by Böhringer Friedrich (CC BY-SA 2.5); wood fern by Derek
            Ramsey (CC BY-SA 2.5); foxglove by IES Manuel García Barros (CC BY-SA 2.0); hydrangea by
            Ірина Бучнєва (CC0); cyclamen by hamon jp (CC BY-SA 3.0). Understory is a fictional
            product.
          </p>
        </section>
      </div>

      <Transition mounted={toastVisible} transition="pop" duration={140} keepMounted={false}>
        {(styles) => (
          <div className={classes.toastWrap} style={styles}>
            <div className={classes.toast} role="status">
              {toast}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export function Understory() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Planner />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}
