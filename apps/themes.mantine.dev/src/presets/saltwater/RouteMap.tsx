import { ISLAND_SHAPES, isPortUsed, LEGS, PLACES_BY_ID, PORTS, STOPS } from './data';
import classes from './RouteMap.module.css';

interface RouteMapProps {
  selected: string[];
  onToggle: (id: string) => void;
}

const COAST =
  'M520 0 L500 0 C470 40 492 70 480 110 C470 150 500 170 488 210 C478 250 506 300 492 340 C482 380 498 420 488 470 C482 520 500 560 494 600 L520 600 Z';

export function RouteMap({ selected, onToggle }: RouteMapProps) {
  const isOn = (id: string) =>
    selected.includes(id) || (PORTS.some((port) => port.id === id) && isPortUsed(id, selected));

  return (
    <div className={classes.card}>
      <svg
        className={classes.map}
        viewBox="0 0 520 600"
        role="group"
        aria-label="Map of ferry routes and islands. Select an island to add it to your trip."
      >
        <defs>
          <pattern id="saltwater-waves" width="28" height="14" patternUnits="userSpaceOnUse">
            <path
              d="M0 7c4-4 7-4 10.5 0S17.5 11 21 7s5-3 7-1"
              fill="none"
              stroke="rgba(140,214,220,0.09)"
              strokeWidth="1.3"
            />
          </pattern>
        </defs>
        <rect width="520" height="600" fill="url(#saltwater-waves)" />
        <path d={COAST} className={classes.land} />
        {ISLAND_SHAPES.map(([cx, cy, rx, ry, rotation]) => (
          <ellipse
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            transform={`rotate(${rotation} ${cx} ${cy})`}
            className={classes.land}
          />
        ))}

        {LEGS.map((leg) => {
          const a = PLACES_BY_ID[leg.from];
          const b = PLACES_BY_ID[leg.to];
          const on = isOn(leg.from) && isOn(leg.to);
          const bend = leg.kind === 'sea' ? 0.08 : 0;
          const [mx, my] = leg.control ?? [
            (a.x + b.x) / 2 + (b.y - a.y) * bend,
            (a.y + b.y) / 2 - (b.x - a.x) * bend,
          ];
          return (
            <path
              key={`${leg.from}-${leg.to}`}
              d={`M${a.x} ${a.y} Q${mx} ${my} ${b.x} ${b.y}`}
              className={classes.leg}
              data-on={on || undefined}
              strokeDasharray={leg.kind === 'road' ? '1 9' : undefined}
            />
          );
        })}

        {PORTS.map((port) => (
          <g key={port.id}>
            <rect
              x={port.x - 7}
              y={port.y - 7}
              width="14"
              height="14"
              rx="3"
              className={classes.port}
            />
            <text x={port.x} y={port.y + 26} textAnchor="middle" className={classes.portLabel}>
              {port.name}
            </text>
          </g>
        ))}

        {STOPS.map((stop) => {
          const on = selected.includes(stop.id);
          return (
            <g
              key={stop.id}
              className={classes.stop}
              tabIndex={0}
              role="button"
              aria-pressed={on}
              aria-label={`${stop.name}${on ? ', on your trip' : ', add to trip'}`}
              data-on={on || undefined}
              onClick={() => onToggle(stop.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onToggle(stop.id);
                }
              }}
            >
              <circle cx={stop.x} cy={stop.y} r="18" fill="transparent" />
              <circle cx={stop.x} cy={stop.y} r={on ? 9 : 7} className={classes.ring} />
              <text
                x={stop.x + stop.lx}
                y={stop.y + stop.ly}
                textAnchor={stop.anchor}
                className={classes.name}
              >
                {stop.name}
              </text>
              <text
                x={stop.x + stop.lx}
                y={stop.y + stop.ly + 14}
                textAnchor={stop.anchor}
                className={classes.gd}
              >
                {stop.gd}
              </text>
            </g>
          );
        })}
      </svg>
      <div className={classes.legend}>
        <span>
          <i className={classes.legendOn} />
          On your trip
        </span>
        <span>
          <i className={classes.legendIdle} />
          Other sailings
        </span>
        <span>
          <i className={classes.legendRoad} />
          Causeway or bus
        </span>
      </div>
    </div>
  );
}
