import { type PlantInstance, type PlantKey, WILDLIFE_VERSIONS } from './data';
import {
  currentVersion,
  getLook,
  getPlant,
  instancesIn,
  type PlanState,
  plantKeysIn,
  previousVersion,
} from './model';
import classes from './Plan.module.css';

const ADDED_COLOR = '#6f8f12';

const STONE_CURVE = [
  [155, 395],
  [300, 340],
  [505, 214],
];

const STONES = Array.from({ length: 7 }, (_, index) => {
  const t = index / 7;
  const [p0, p1, p2] = STONE_CURVE;
  return {
    x: (1 - t) * (1 - t) * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0],
    y: (1 - t) * (1 - t) * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1],
  };
});

type PlantMode = 'normal' | 'added' | 'removed';

interface PlantShapeProps {
  instance: PlantInstance;
  mode: PlantMode;
  number: number;
  state: PlanState;
  highlighted: boolean;
  onHighlight: (key: PlantKey | null) => void;
}

function PlantShape({ instance, mode, number, state, highlighted, onHighlight }: PlantShapeProps) {
  const plant = getPlant(instance.plant, state.swaps);
  const look = getLook(plant, state.season);
  const r = plant.spread / 2;
  const { x, y } = instance;

  const flowers = [];
  if (mode !== 'removed' && !look.dormant && look.flowering) {
    const count = Math.max(5, Math.round(r / 6));
    for (let index = 0; index < count; index += 1) {
      const angle = (index / count) * Math.PI * 2;
      flowers.push(
        <circle
          key={index}
          cx={(x + Math.cos(angle) * r * 0.62).toFixed(1)}
          cy={(y + Math.sin(angle) * r * 0.62).toFixed(1)}
          r={Math.max(3, r / 7).toFixed(1)}
          fill={look.flower!}
          stroke="rgba(17,26,19,0.3)"
          strokeWidth={0.8}
        />
      );
    }
  }

  return (
    <g
      className={classes.plant}
      data-highlighted={highlighted || undefined}
      tabIndex={0}
      aria-label={plant.name}
      data-plant={instance.plant}
      onFocus={() => onHighlight(instance.plant)}
      onBlur={() => onHighlight(null)}
    >
      {mode === 'removed' ? (
        <circle
          cx={x}
          cy={y}
          r={r}
          fill="none"
          stroke="var(--us-warn)"
          strokeWidth={2.5}
          strokeDasharray="5 5"
        />
      ) : look.dormant ? (
        <>
          <circle
            cx={x}
            cy={y}
            r={r}
            fill="none"
            stroke={plant.leaf}
            strokeWidth={2}
            strokeDasharray="3 4"
            opacity={0.8}
          />
          {look.bare &&
            Array.from({ length: 5 }, (_, index) => {
              const angle = index * 1.26;
              return (
                <path
                  key={index}
                  d={`M${x} ${y} l${(Math.cos(angle) * r * 0.7).toFixed(1)} ${(Math.sin(angle) * r * 0.7).toFixed(1)}`}
                  stroke="var(--us-fence)"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              );
            })}
        </>
      ) : (
        <>
          <circle
            cx={x}
            cy={y}
            r={r}
            fill={look.leaf}
            fillOpacity={0.82}
            stroke="rgba(17,26,19,0.35)"
            strokeWidth={1.2}
          />
          {flowers}
        </>
      )}

      {mode === 'added' && (
        <circle cx={x} cy={y} r={r + 4} fill="none" stroke={ADDED_COLOR} strokeWidth={3.5} />
      )}

      {mode !== 'removed' && state.pets && plant.toxic && (
        <g transform={`translate(${(x + r * 0.7).toFixed(1)} ${(y - r * 0.7).toFixed(1)})`}>
          <circle r={8} fill="var(--us-warn)" />
          <text y={4} textAnchor="middle" className={classes.toxic}>
            !
          </text>
        </g>
      )}

      {mode !== 'removed' && r >= 14 && (
        <g className={classes.badge}>
          <circle cx={x} cy={y} r={9.5} fill="#fff" stroke="rgba(17,26,19,0.4)" />
          <text x={x} y={y + 4} textAnchor="middle">
            {number}
          </text>
        </g>
      )}
    </g>
  );
}

interface PlanSvgProps {
  state: PlanState;
  highlighted: PlantKey | null;
  onHighlight: (key: PlantKey | null) => void;
}

export function PlanSvg({ state, highlighted, onHighlight }: PlanSvgProps) {
  const version = currentVersion(state);
  const compare = state.view === 'compare';
  const now = instancesIn(version);
  const previous = compare ? instancesIn(previousVersion(state)) : [];
  const keys = plantKeysIn(version);
  const numberFor = (key: PlantKey) => keys.indexOf(key) + 1;
  const sorted = [...now].sort(
    (a, b) => getPlant(b.plant, state.swaps).spread - getPlant(a.plant, state.swaps).spread
  );
  const hasWildlife = WILDLIFE_VERSIONS.includes(version);
  const wildlifeIsNew = compare && !WILDLIFE_VERSIONS.includes(previousVersion(state));

  return (
    <svg
      className={classes.svg}
      data-dim={highlighted ? true : undefined}
      viewBox="-54 -42 714 504"
      role="img"
      aria-label="Planting plan drawn to scale"
      onMouseOver={(event) => {
        const target = (event.target as Element).closest<SVGElement>('[data-plant]');
        onHighlight((target?.dataset.plant as PlantKey | undefined) ?? null);
      }}
      onMouseLeave={() => onHighlight(null)}
    >
      <defs>
        <linearGradient id="understory-shade-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--us-shade)" />
          <stop offset="1" stopColor="var(--us-shade)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="understory-shade-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--us-shade)" />
          <stop offset="1" stopColor="var(--us-shade)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x={0} y={0} width={600} height={400} fill="var(--us-lawn)" />
      <rect x={0} y={0} width={600} height={122} fill="var(--us-soil)" />
      <rect x={0} y={122} width={102} height={278} fill="var(--us-soil)" />
      <rect x={438} y={300} width={162} height={100} fill="var(--us-soil)" />
      <path
        d="M0 122H600M102 122V400M438 400V300H600"
        fill="none"
        stroke="var(--us-soil-edge)"
        strokeWidth={1.5}
      />
      {[100, 200, 300, 400, 500].map((x) => (
        <line key={`x${x}`} x1={x} y1={0} x2={x} y2={400} stroke="var(--us-grid)" />
      ))}
      {[100, 200, 300].map((y) => (
        <line key={`y${y}`} x1={0} y1={y} x2={600} y2={y} stroke="var(--us-grid)" />
      ))}
      {STONES.map((stone, index) => (
        <ellipse
          key={index}
          cx={stone.x.toFixed(1)}
          cy={stone.y.toFixed(1)}
          rx={17}
          ry={12}
          fill="var(--us-stone)"
          stroke="var(--us-soil-edge)"
          strokeWidth={1}
        />
      ))}

      <g>
        <rect x={462} y={176} width={92} height={38} rx={5} fill="var(--us-fence)" />
        <path d="M470 188H546M470 196H546M470 204H546" stroke="rgba(0,0,0,0.25)" />
        <text className={classes.label} x={508} y={232} textAnchor="middle">
          Bench
        </text>
        <text className={classes.note} x={508} y={247} textAnchor="middle">
          2 h of morning sun
        </text>
      </g>

      {hasWildlife && (
        <>
          <g>
            <rect x={118} y={326} width={58} height={30} rx={4} fill="#8a6a4f" />
            <circle cx={128} cy={341} r={6} fill="#b08a66" stroke="#6b4f39" />
            <circle cx={146} cy={337} r={6} fill="#b08a66" stroke="#6b4f39" />
            <circle cx={163} cy={344} r={6} fill="#b08a66" stroke="#6b4f39" />
            <text className={classes.note} x={147} y={372} textAnchor="middle">
              Log pile
            </text>
          </g>
          <g>
            <circle cx={330} cy={236} r={17} fill="#9fc6d6" stroke="#5f8ea3" strokeWidth={2} />
            <text className={classes.note} x={330} y={268} textAnchor="middle">
              Bird bath
            </text>
          </g>
          {wildlifeIsNew && (
            <>
              <rect
                x={112}
                y={320}
                width={70}
                height={42}
                rx={6}
                fill="none"
                stroke={ADDED_COLOR}
                strokeWidth={3}
              />
              <circle cx={330} cy={236} r={22} fill="none" stroke={ADDED_COLOR} strokeWidth={3} />
            </>
          )}
        </>
      )}

      <rect
        x={0}
        y={0}
        width={600}
        height={260}
        fill="url(#understory-shade-top)"
        pointerEvents="none"
      />
      <rect
        x={0}
        y={0}
        width={180}
        height={400}
        fill="url(#understory-shade-left)"
        pointerEvents="none"
      />
      <text className={classes.note} x={300} y={150} textAnchor="middle">
        Shade from the 1.8 m fences
      </text>

      {sorted.map((instance) => (
        <PlantShape
          key={instance.id}
          instance={instance}
          mode={compare && !previous.some((item) => item.id === instance.id) ? 'added' : 'normal'}
          number={numberFor(instance.plant)}
          state={state}
          highlighted={highlighted === instance.plant}
          onHighlight={onHighlight}
        />
      ))}
      {compare &&
        previous
          .filter((instance) => !now.some((item) => item.id === instance.id))
          .map((instance) => (
            <PlantShape
              key={`removed-${instance.id}`}
              instance={instance}
              mode="removed"
              number={0}
              state={state}
              highlighted={highlighted === instance.plant}
              onHighlight={onHighlight}
            />
          ))}

      <path
        d="M0 400V0H600"
        fill="none"
        stroke="var(--us-fence)"
        strokeWidth={7}
        strokeLinejoin="round"
      />
      <text className={classes.note} x={606} y={-8} textAnchor="end">
        Fence, 1.8 m
      </text>
      <rect x={0} y={402} width={600} height={18} fill="var(--us-house)" />
      <rect x={120} y={400} width={70} height={22} fill="var(--us-door)" />
      <text className={classes.label} x={155} y={440} textAnchor="middle">
        Back door
      </text>
      <text className={classes.note} x={420} y={438} textAnchor="middle">
        House
      </text>
      {[0, 1, 2, 3, 4, 5, 6].map((m) => (
        <text key={`ax${m}`} className={classes.axis} x={m * 100} y={-16} textAnchor="middle">
          {m} m
        </text>
      ))}
      {[1, 2, 3, 4].map((m) => (
        <text key={`ay${m}`} className={classes.axis} x={-12} y={m * 100 + 4} textAnchor="end">
          {m} m
        </text>
      ))}
      <g transform="translate(632 30)">
        <path d="M0 -18L7 4L0 0L-7 4Z" fill="var(--mantine-color-bright)" />
        <text className={classes.label} y={20} textAnchor="middle">
          N
        </text>
      </g>
    </svg>
  );
}
