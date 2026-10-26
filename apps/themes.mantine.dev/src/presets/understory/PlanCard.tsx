import { Card, SegmentedControl, Text, Title } from '@mantine/core';
import { type PlantKey, type Season, SEASONS } from './data';
import {
  currentVersion,
  getLook,
  getPlant,
  type PlanState,
  plantKeysIn,
  previousVersion,
  type View,
} from './model';
import { PlanSvg } from './PlanSvg';
import classes from './Plan.module.css';

interface PlanCardProps {
  state: PlanState;
  highlighted: PlantKey | null;
  onHighlight: (key: PlantKey | null) => void;
  onViewChange: (view: View) => void;
  onSeasonChange: (season: Season) => void;
}

export function PlanCard({
  state,
  highlighted,
  onHighlight,
  onViewChange,
  onSeasonChange,
}: PlanCardProps) {
  const version = currentVersion(state);
  const compare = state.view === 'compare';
  const blooming = plantKeysIn(version).filter(
    (key) => getLook(getPlant(key, state.swaps), state.season).flowering
  );

  return (
    <Card>
      <div className={classes.head}>
        <div>
          <Title order={1}>
            {compare
              ? `Plan v${version} compared with v${previousVersion(state)}`
              : `Planting plan v${version}`}
          </Title>
          <Text size="sm" mt={2}>
            6 × 4 m, north-facing, heavy clay. Circles show each plant’s spread when mature.
          </Text>
        </div>
        <SegmentedControl
          aria-label="Version"
          value={String(state.view)}
          onChange={(value) => onViewChange(value === 'compare' ? 'compare' : Number(value))}
          data={[
            ...state.versions.map((item) => ({ value: String(item), label: `v${item}` })),
            { value: 'compare', label: 'Compare' },
          ]}
        />
      </div>

      <div className={classes.head} data-seasons>
        <SegmentedControl
          aria-label="Season"
          value={state.season}
          onChange={(value) => onSeasonChange(value as Season)}
          data={SEASONS.map((season) => ({
            value: season.value,
            label: (
              <>
                <span className={classes.seasonDot} style={{ background: season.color }} />
                {season.label}
              </>
            ),
          }))}
        />
      </div>

      <div className={classes.wrap}>
        <PlanSvg state={state} highlighted={highlighted} onHighlight={onHighlight} />
      </div>

      <div className={classes.seasonLine}>
        <b>In flower in {state.season}:</b>
        {blooming.length ? (
          blooming.map((key) => {
            const plant = getPlant(key, state.swaps);
            return (
              <span key={key} className={classes.bloom}>
                <i style={{ background: plant.flower! }} />
                {plant.name}
              </span>
            );
          })
        ) : (
          <span>Nothing, it’s all leaves and structure this season.</span>
        )}
      </div>

      {compare && (
        <div className={classes.legend}>
          <span>
            <i data-kind="added" />
            New in this version
          </span>
          <span>
            <i data-kind="removed" />
            Removed, shown dashed
          </span>
        </div>
      )}
    </Card>
  );
}
