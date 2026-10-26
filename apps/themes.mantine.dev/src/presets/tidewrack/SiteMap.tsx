import { Paper, Table, Text, Title } from '@mantine/core';
import { IMAGES, STAGE_BY_ID, STAGES, walkMinutes, type StageId } from './data';
import classes from './SiteMap.module.css';

const SEA_PATH = 'M470 0 C452 60 478 120 458 180 C442 240 470 290 456 330 L520 330 L520 0 Z';
const DUNE_PATH =
  'M430 0 C414 60 440 120 420 180 C404 240 430 290 418 330 L456 330 C470 290 442 240 458 180 C478 120 452 60 470 0 Z';
const PATHS_D =
  'M64 286 C90 240 120 236 150 230 M150 230 C190 196 220 170 250 150 M250 150 C300 128 340 116 380 110 M250 150 C300 190 360 220 400 236 M150 230 C220 250 330 250 400 236 M90 110 C140 120 200 136 250 150';

interface SiteMapProps {
  stage: StageId;
  highlightedStage: StageId;
  onStageChange: (stage: StageId) => void;
  onHighlightStage: (stage: StageId | null) => void;
}

export function SiteMap({
  stage,
  highlightedStage,
  onStageChange,
  onHighlightStage,
}: SiteMapProps) {
  const current = STAGE_BY_ID[stage];

  const select = (id: StageId) => {
    onStageChange(id);
    onHighlightStage(id);
  };

  return (
    <section className={classes.section} aria-labelledby="tidewrack-map-title">
      <Title order={2} id="tidewrack-map-title">
        Find your way
      </Title>
      <Text className={classes.sub}>
        The four stages sit between the campsite and the dunes. Hover a stage to see its column in
        the timetable and how long it takes to walk from there.
      </Text>

      <div className={classes.grid}>
        <Paper className={classes.mapBox} onMouseLeave={() => onHighlightStage(null)}>
          <svg
            className={classes.map}
            viewBox="0 0 520 330"
            role="group"
            aria-label="Site map with four stages"
          >
            <defs>
              <pattern id="tidewrack-sea" width="26" height="12" patternUnits="userSpaceOnUse">
                <path
                  d="M0 6c4-4 7-4 10 0s6 4 10 0 4-3 6-2"
                  fill="none"
                  stroke="var(--tw-sea-line)"
                  strokeWidth="1.3"
                />
              </pattern>
              <pattern id="tidewrack-stip" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.1" fill="var(--tw-muted)" opacity=".5" />
                <circle cx="6" cy="6" r="0.9" fill="var(--tw-muted)" opacity=".4" />
              </pattern>
            </defs>
            <rect width="520" height="330" fill="var(--tw-meadow)" />
            <path d={SEA_PATH} fill="var(--tw-sea)" />
            <path d={SEA_PATH} fill="url(#tidewrack-sea)" />
            <path d={DUNE_PATH} fill="var(--tw-dune)" />
            <path d={DUNE_PATH} fill="url(#tidewrack-stip)" />
            <text
              className={classes.small}
              x="490"
              y="160"
              transform="rotate(90 490 160)"
              textAnchor="middle"
            >
              North Sea
            </text>
            <text className={classes.small} x="438" y="300" transform="rotate(-80 438 300)">
              Dunes
            </text>
            {Array.from({ length: 26 }, (_, i) => {
              const x = 24 + (i % 7) * 18;
              const y = 24 + Math.floor(i / 7) * 18;
              return (
                <path
                  key={i}
                  d={`M${x} ${y + 9} l6 -9 l6 9 z`}
                  fill="var(--mantine-color-default-border)"
                />
              );
            })}
            <text x="24" y="104" className={classes.small}>
              Campsite
            </text>
            <rect x="24" y="286" width="80" height="26" rx="4" fill="var(--tw-surface-3)" />
            <text
              x="64"
              y="303"
              textAnchor="middle"
              className={`${classes.small} ${classes.label}`}
            >
              Main gate
            </text>
            <rect x="276" y="270" width="84" height="40" rx="4" fill="var(--tw-surface-3)" />
            <text
              x="318"
              y="294"
              textAnchor="middle"
              className={`${classes.small} ${classes.label}`}
            >
              Food and bars
            </text>
            <path
              d={PATHS_D}
              fill="none"
              stroke="var(--mantine-color-default-border)"
              strokeWidth="2"
              strokeDasharray="4 5"
            />
            {STAGES.map((item, index) => (
              <g
                key={item.id}
                className={classes.marker}
                data-on={highlightedStage === item.id || undefined}
                tabIndex={0}
                role="button"
                aria-pressed={item.id === stage}
                aria-label={item.name}
                onMouseEnter={() => select(item.id)}
                onFocus={() => select(item.id)}
                onClick={() => select(item.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    select(item.id);
                  }
                }}
              >
                <circle className={classes.ring} cx={item.x} cy={item.y} r="17" />
                <text x={item.x} y={item.y + 6} textAnchor="middle" className={classes.number}>
                  {index + 1}
                </text>
                <text x={item.x} y={item.y + 34} textAnchor="middle">
                  {item.name}
                </text>
              </g>
            ))}
          </svg>
        </Paper>

        <div>
          <Paper className={classes.walks} aria-live="polite">
            <Title order={3}>From the {current.name}</Title>
            <Text size="sm" fz={13.5} mt="2xs" mb="xs">
              Walking times at an easy pace, through the crowd.
            </Text>
            <Table>
              <Table.Tbody>
                {STAGES.filter((item) => item.id !== stage).map((item) => (
                  <Table.Tr key={item.id}>
                    <Table.Td>{item.name}</Table.Td>
                    <Table.Td className={classes.minutes}>
                      {walkMinutes(stage, item.id)} min
                    </Table.Td>
                  </Table.Tr>
                ))}
                <Table.Tr>
                  <Table.Td>Main gate</Table.Td>
                  <Table.Td className={classes.minutes}>{current.gate} min</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Paper>

          <figure className={classes.sunset}>
            <img src={IMAGES.sunset} alt="Sea grass on a dune against a sunset sky" />
            <figcaption>
              <b>Sunset 21:12 on Saturday</b>
              <span>Best seen from the top of the dunes behind the Dune Stage.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
