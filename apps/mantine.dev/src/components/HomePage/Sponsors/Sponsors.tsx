import { Container, Image, Text } from '@mantine/core';
import data from '../../../.docgen/sponsors.json';
import classes from './Sponsors.module.css';

export function Sponsors() {
  const items = data.map((item) => (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Mantine is sponsored by ${item.name} 💋`}
      className={classes.sponsor}
    >
      <Image src={item.image} className={classes.image} />
      <span className={classes.name}>{item.name}</span>
    </a>
  ));

  return (
    <div className={classes.root}>
      <Container size={1100} className={classes.inner}>
        <Text className={classes.title}>Sponsored by</Text>
        <div className={classes.sponsors}>
          {items}
          <a
            href="https://opencollective.com/mantinedev"
            target="_blank"
            rel="noreferrer"
            aria-label="Sponsor Mantine 💋"
            className={classes.sponsor}
          >
            <span className={classes.name}>You? ❤️</span>
            <div className={classes.description}>
              Sponsor Mantine to get featured here and support the project.
            </div>
          </a>
        </div>
      </Container>
    </div>
  );
}
