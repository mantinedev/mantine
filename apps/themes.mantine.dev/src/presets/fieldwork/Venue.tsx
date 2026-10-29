import { Button, List, Text, Title } from '@mantine/core';
import classes from './Fieldwork.module.css';

function VenueMap() {
  return (
    <div className={classes.map}>
      <svg viewBox="0 0 520 380" role="img" aria-labelledby="fw-map-title">
        <title id="fw-map-title">
          Sketch map: the Tobacco Factory on North Street, a ten minute walk from Bedminster
          station, with the river to the north
        </title>
        <rect width="520" height="380" fill="var(--mantine-color-neutral-2)" />
        <path
          d="M0 52 C 120 40 220 78 330 58 S 470 30 520 44 L520 92 C 470 80 400 104 330 104 S 120 88 0 98 Z"
          fill="var(--fw-teal-soft)"
        />
        <text x="20" y="80">
          River Avon
        </text>
        <path
          d="M40 250 L 500 190"
          stroke="var(--mantine-color-border-strong)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M150 120 L 210 360"
          stroke="var(--mantine-color-border-strong)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M330 110 L 380 360"
          stroke="var(--mantine-color-border-strong)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M0 320 L 520 286"
          stroke="var(--mantine-color-bright)"
          strokeWidth="4"
          strokeDasharray="14 8"
        />
        <text x="20" y="242" transform="rotate(-7 20 242)">
          North Street
        </text>
        <text x="340" y="276" transform="rotate(-4 340 276)">
          Railway
        </text>
        <rect x="166" y="198" width="54" height="44" fill="var(--mantine-primary-color-filled)" />
        <text x="138" y="190" fontWeight="700">
          Tobacco Factory
        </text>
        <circle cx="420" cy="292" r="12" fill="var(--mantine-color-lagoon-filled)" />
        <text x="398" y="324">
          Bedminster station
        </text>
        <path
          d="M220 230 C 290 250 360 270 412 288"
          stroke="var(--mantine-primary-color-filled)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="2 7"
          strokeLinecap="round"
        />
        <text x="268" y="244" fontWeight="700" className={classes.mapAccent}>
          10 min walk
        </text>
        <rect x="96" y="246" width="18" height="18" fill="var(--mantine-color-bright)" />
        <text x="40" y="282">
          Buses 24 and 90
        </text>
      </svg>
    </div>
  );
}

export function Venue() {
  return (
    <section
      className={`${classes.block} ${classes.wrap}`}
      id="venue"
      aria-labelledby="fw-venue-title"
    >
      <div className={classes.sectionHead}>
        <div>
          <Title order={2} id="fw-venue-title" className={classes.sectionTitle}>
            Venue
          </Title>
          <Text className={classes.sectionLead}>
            A former tobacco factory in Southville, now a theatre, café and the friendliest bar in
            south Bristol.
          </Text>
        </div>
      </div>
      <div className={classes.venue}>
        <VenueMap />
        <div>
          <div className={classes.info}>
            <Title order={3} mb="xs">
              Getting there
            </Title>
            <List fz={15}>
              <List.Item>
                Ten minutes on foot from Bedminster station, twenty from Temple Meads.
              </List.Item>
              <List.Item>Buses 24 and 90 stop outside on North Street.</List.Item>
              <List.Item>
                Cycle parking for 80 bikes in the courtyard. There is no car park.
              </List.Item>
            </List>
          </div>
          <div className={classes.info}>
            <Title order={3} mb="xs">
              Access
            </Title>
            <List fz={15}>
              <List.Item>Step-free entrance and lifts to every floor.</List.Item>
              <List.Item>Live captions and BSL interpretation on the main stage.</List.Item>
              <List.Item>A quiet room on the second floor, open all day.</List.Item>
              <List.Item>Hearing loop in the theatre and at the registration desk.</List.Item>
            </List>
          </div>
          <Button
            component="a"
            href="#"
            variant="default"
            mt="lg"
            onClick={(event) => event.preventDefault()}
          >
            Read the full access guide
          </Button>
        </div>
      </div>
    </section>
  );
}
