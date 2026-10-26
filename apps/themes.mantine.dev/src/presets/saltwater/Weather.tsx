import { IconArrowsExchange, IconBed, IconCloud } from '@tabler/icons-react';
import { Image, Text, Title } from '@mantine/core';
import { PHOTOS } from './data';
import classes from './Weather.module.css';

const ICON_PROPS = { size: 22, stroke: 1.8, className: classes.icon };

const PROMISES = [
  {
    icon: <IconCloud {...ICON_PROPS} />,
    text: 'Cancelled sailing days are added back to your pass automatically.',
  },
  {
    icon: <IconBed {...ICON_PROPS} />,
    text: 'Stuck overnight? We pay up to £90 towards a room on the island.',
  },
  {
    icon: <IconArrowsExchange {...ICON_PROPS} />,
    text: 'Switch to another route the same day at no cost, if one is running.',
  },
];

export function Weather() {
  return (
    <section className={classes.root} id="weather" aria-labelledby="saltwater-weather-title">
      <Image
        className={classes.image}
        src={`${PHOTOS}/ferry.jpg`}
        alt="A ferry sailing into Oban bay at dusk under heavy clouds, with islands in silhouette"
      />
      <div className={classes.copy}>
        <Title order={2} id="saltwater-weather-title" className={classes.title}>
          When the sea says no, your pass waits
        </Title>
        <Text className={classes.lead}>
          Atlantic weather cancels sailings a few times every season. If yours is called off, the
          day comes back to you.
        </Text>
        <ul className={classes.list}>
          {PROMISES.map((item) => (
            <li key={item.text}>
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
