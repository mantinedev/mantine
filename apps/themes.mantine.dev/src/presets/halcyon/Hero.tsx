import { IconArrowBackUp, IconTruck } from '@tabler/icons-react';
import { Button, ColorSwatch, Radio, Title } from '@mantine/core';
import { type Finish, finishes, PRICE } from './data';
import { LampStage } from './LampStage';
import classes from './Hero.module.css';

interface HeroProps {
  ref?: React.Ref<HTMLElement>;
  finish: Finish;
  onFinishChange: (finish: Finish) => void;
  onPreorder: () => void;
}

export function Hero({ ref, finish, onFinishChange, onPreorder }: HeroProps) {
  return (
    <section ref={ref} className={classes.hero} id="hero" aria-labelledby="hc-hero-title">
      <LampStage bodyColor={finish.color} />

      <div>
        <Title order={1} id="hc-hero-title" className={classes.title}>
          A sunrise in your bedroom, whatever the season
        </Title>
        <p className={classes.lead}>
          Halcyon brightens slowly over the thirty minutes before your alarm, from a candle-red glow
          to clear morning white. By the time it chimes, you are mostly awake already.
        </p>

        <Radio.Group
          className={classes.finish}
          classNames={{ label: classes.finishLabel }}
          label={
            <>
              Finish: <b>{finish.name}</b>
            </>
          }
          value={finish.name}
          onChange={(value) =>
            onFinishChange(finishes.find((item) => item.name === value) ?? finishes[0])
          }
        >
          <div className={classes.swatches}>
            {finishes.map((item) => (
              <Radio.Card
                key={item.name}
                value={item.name}
                className={classes.swatch}
                withBorder={false}
                aria-label={item.name}
                title={item.name}
              >
                <ColorSwatch
                  color={item.color}
                  size={30}
                  withShadow={false}
                  className={classes.swatchColor}
                />
              </Radio.Card>
            ))}
          </div>
        </Radio.Group>

        <div className={classes.priceRow}>
          <span className={classes.price}>£{PRICE}</span>
          <span className={classes.priceNote}>Includes UK delivery and a USB-C plug</span>
        </div>

        <div className={classes.ctas}>
          <Button onClick={onPreorder}>Pre-order</Button>
          <Button component="a" href="#morning" variant="default">
            See a morning
          </Button>
        </div>

        <div className={classes.ships}>
          <span>
            <IconTruck size={16} stroke={1.6} />
            Ships in March. You are charged when it ships.
          </span>
          <span>
            <IconArrowBackUp size={16} stroke={1.6} />
            Sleep on it for 60 nights, then return it free.
          </span>
        </div>
      </div>
    </section>
  );
}
